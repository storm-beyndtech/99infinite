import type React from "react";
import { useState, useEffect } from "react";
import { Check, X, ShoppingCart, AlertTriangle, Trash2, Plus, Minus } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useToastUtils } from "../../services/toast";
import type { InvestmentProduct } from "../../types/auth.types";

// TypeScript interfaces
interface PendingProducts {
	products: InvestmentProduct[];
	totalAmount: number;
	timestamp: string;
	status: 'pending' | 'purchased';
}

interface Product {
	_id: string;
	type: string;
	name: string;
	category: string;
	weights: string[];
	basePrice: number;
	priceUnit: string;
	color: string;
	icon: string;
	description: string;
	isActive: boolean;
}

const InvestmentPlan: React.FC = () => {
	const [pendingProducts, setPendingProducts] = useState<PendingProducts | null>(null);
	const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
	const [selectedProducts, setSelectedProducts] = useState<InvestmentProduct[]>([]);
	const [showPurchaseModal, setShowPurchaseModal] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const { user, fetchUser } = useAuth();
	const { showSuccessToast, showErrorToast } = useToastUtils();

	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	// Fetch products from API
	const fetchProducts = async () => {
		try {
			const response = await fetch(`${url}/api/products`);
			const data = await response.json();
			if (data.success) {
				setAvailableProducts(data.data);
			}
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	// Load pending products from localStorage
	useEffect(() => {
		const loadPendingProducts = () => {
			try {
				const stored = localStorage.getItem('pendingProducts');
				if (stored) {
					const parsed = JSON.parse(stored);
					setPendingProducts(parsed);
					setSelectedProducts(parsed.products || []);
				}
			} catch (error) {
				console.error('Error loading pending products:', error);
			}
		};

		loadPendingProducts();
		fetchProducts();
		setLoading(false);
	}, []);


	// Calculate price for a product based on weight and quantity
	const calculatePrice = (product: InvestmentProduct): number => {
		const weightValue = parseFloat(product.weight.replace(/[^0-9.]/g, ''));
		return product.price * product.quantity;
	};

	// Calculate total amount for all selected products
	const calculateTotalAmount = (products: InvestmentProduct[]): number => {
		return products.reduce((total, product) => total + calculatePrice(product), 0);
	};

	// Handle purchase of pending products
	const handlePurchase = async () => {
		if (!user || !user.id) {
			showErrorToast("User session invalid. Please refresh and try again.");
			return;
		}

		if (!selectedProducts.length) {
			showErrorToast("No products selected for purchase.");
			return;
		}

		const totalAmount = calculateTotalAmount(selectedProducts);
		const userBalance = user?.balance || 0;

		if (totalAmount > userBalance) {
			showErrorToast(`Insufficient balance. Required: €${totalAmount.toLocaleString()}, Available: €${userBalance.toLocaleString()}`);
			return;
		}

		setIsSubmitting(true);

		try {
			const token = localStorage.getItem("token");
			if (!token) {
				showErrorToast("Authentication token not found. Please login again.");
				return;
			}

			// Map frontend product format to backend format
			const productsForPurchase = selectedProducts.map(product => {
				// Find the matching product from availableProducts
				const dbProduct = availableProducts.find(p => p.type === product.product);
				if (!dbProduct) {
					throw new Error(`Product ${product.product} not found in database`);
				}
				return {
					productId: dbProduct._id,
					weight: product.weight,
					quantity: product.quantity,
					unitPrice: product.price
				};
			});

			const response = await fetch(`${url}/api/products/purchase/batch`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
				body: JSON.stringify({
					userId: user.id,
					products: productsForPurchase,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				showSuccessToast(`Successfully purchased ${data.data.purchases.length} products worth €${totalAmount.toLocaleString()}!`);
				
				// Clear pending products from localStorage
				localStorage.removeItem('pendingProducts');
				setPendingProducts(null);
				setSelectedProducts([]);
				setShowPurchaseModal(false);
				
				// Refresh user data to update balance
				if (fetchUser) {
					fetchUser(user.id);
				}
			} else {
				throw new Error(data.message || "Failed to purchase products");
			}
		} catch (error: any) {
			showErrorToast(error.message || "Failed to purchase products");
		} finally {
			setIsSubmitting(false);
		}
	};

	// Add a new product to selection
	const addProduct = (productType: string) => {
		const productConfig = getProductConfig(productType);
		if (!productConfig) return;

		const newProduct: InvestmentProduct = {
			product: productType as any,
			weight: productConfig.weights[0],
			quantity: 1,
			price: productConfig.basePrice,
			totalSum: productConfig.basePrice,
			deliveryPeriod: 'immediate'
		};

		const updatedProducts = [...selectedProducts, newProduct];
		setSelectedProducts(updatedProducts);
		
		// Update localStorage
		const updatedPending = {
			products: updatedProducts,
			totalAmount: calculateTotalAmount(updatedProducts),
			timestamp: new Date().toISOString(),
			status: 'pending' as const
		};
		localStorage.setItem('pendingProducts', JSON.stringify(updatedPending));
		setPendingProducts(updatedPending);
	};

	// Remove product from selection
	const removeProduct = (index: number) => {
		const updatedProducts = selectedProducts.filter((_, i) => i !== index);
		setSelectedProducts(updatedProducts);
		
		if (updatedProducts.length === 0) {
			localStorage.removeItem('pendingProducts');
			setPendingProducts(null);
		} else {
			const updatedPending = {
				products: updatedProducts,
				totalAmount: calculateTotalAmount(updatedProducts),
				timestamp: new Date().toISOString(),
				status: 'pending' as const
			};
			localStorage.setItem('pendingProducts', JSON.stringify(updatedPending));
			setPendingProducts(updatedPending);
		}
	};

	// Update product quantity
	const updateQuantity = (index: number, newQuantity: number) => {
		if (newQuantity < 1) return;
		
		const updatedProducts = [...selectedProducts];
		updatedProducts[index].quantity = newQuantity;
		updatedProducts[index].totalSum = updatedProducts[index].price * newQuantity;
		
		setSelectedProducts(updatedProducts);
		
		const updatedPending = {
			products: updatedProducts,
			totalAmount: calculateTotalAmount(updatedProducts),
			timestamp: new Date().toISOString(),
			status: 'pending' as const
		};
		localStorage.setItem('pendingProducts', JSON.stringify(updatedPending));
		setPendingProducts(updatedPending);
	};

	// Get product configuration
	const getProductConfig = (productType: string) => {
		const configs: Record<string, any> = {
			gold_bar: {
				name: "Gold Bar",
				weights: ["1g", "2.5g", "5g", "10g", "20g", "50g", "100g"],
				basePrice: 65,
				color: "from-yellow-400 to-yellow-600",
				icon: "🥇",
			},
			gold_coin: {
				name: "Gold Coin",
				weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
				basePrice: 2050,
				color: "from-amber-400 to-amber-600",
				icon: "🪙",
			},
			silver_bar: {
				name: "Silver Bar",
				weights: ["1oz", "5oz", "10oz", "100oz", "1000oz"],
				basePrice: 25,
				color: "from-gray-300 to-gray-500",
				icon: "⚪",
			},
			silver_coin: {
				name: "Silver Coin",
				weights: ["1/2 oz", "1 oz", "5 oz"],
				basePrice: 27,
				color: "from-slate-300 to-slate-500",
				icon: "🥈",
			},
			platinum: {
				name: "Platinum",
				weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
				basePrice: 980,
				color: "from-blue-400 to-blue-600",
				icon: "💎",
			},
			palladium: {
				name: "Palladium",
				weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
				basePrice: 1200,
				color: "from-purple-400 to-purple-600",
				icon: "💜",
			}
		};
		return configs[productType];
	};

	if (loading) {
		return (
			<div className="max-w-6xl mx-auto">
				<div className="mb-12">
					<h1 className="text-2xl font-medium text-slate-900 dark:text-white mb-2">Investment Portfolio</h1>
				</div>
				<div className="flex justify-center items-center py-12">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
				</div>
			</div>
		);
	}

	const totalAmount = calculateTotalAmount(selectedProducts);
	const userBalance = user?.deposit || 0;

	return (
		<>
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="mb-12">
					<h1 className="text-2xl font-medium text-slate-900 dark:text-white mb-2">Investment Portfolio</h1>
					<p className="text-slate-600 dark:text-slate-400">Manage your precious metals investment portfolio</p>
				</div>

				{/* Pending Products Section */}
				{pendingProducts && selectedProducts.length > 0 ? (
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 shadow-xl mb-8">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-2xl"></div>
						
						<div className="relative z-10">
							<div className="flex items-center justify-between mb-6">
								<div className="flex items-center space-x-3">
									<div className="p-3 rounded-xl bg-amber-500/20 backdrop-blur-sm">
										<ShoppingCart className="w-6 h-6 text-amber-600 dark:text-amber-400" />
									</div>
									<div>
										<h2 className="text-xl font-medium text-slate-900 dark:text-white">Selected Products</h2>
										<p className="text-sm text-slate-600 dark:text-slate-400">
											{selectedProducts.length} product{selectedProducts.length !== 1 ? 's' : ''} • Total: ${totalAmount.toLocaleString()}
										</p>
									</div>
								</div>
								<button
									onClick={() => setShowPurchaseModal(true)}
									disabled={totalAmount > userBalance}
									className="px-6 py-3 bg-blue-500/80 hover:bg-blue-500 text-white rounded-lg transition-all disabled:opacity-50 backdrop-blur-sm border border-blue-400/30 hover:scale-105"
								>
									Purchase Now
								</button>
							</div>

							{/* Products List */}
							<div className="space-y-4">
								{selectedProducts.map((product, index) => {
									const config = getProductConfig(product.product);
									if (!config) return null;

									return (
										<div key={index} className="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-700/50 rounded-xl backdrop-blur-sm">
											<div className="flex items-center space-x-4">
												<div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center text-2xl`}>
													{config.icon}
												</div>
												<div>
													<h3 className="font-medium text-slate-900 dark:text-white">{config.name}</h3>
													<p className="text-sm text-slate-600 dark:text-slate-400">
														{product.weight} • {product.deliveryPeriod}
													</p>
												</div>
											</div>
											
											<div className="flex items-center space-x-4">
												<div className="flex items-center space-x-2">
													<button
														onClick={() => updateQuantity(index, product.quantity - 1)}
														className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
													>
														<Minus className="w-4 h-4" />
													</button>
													<span className="w-8 text-center font-medium">{product.quantity}</span>
													<button
														onClick={() => updateQuantity(index, product.quantity + 1)}
														className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
													>
														<Plus className="w-4 h-4" />
													</button>
												</div>
												
												<div className="text-right">
													<div className="font-medium text-slate-900 dark:text-white">
														${calculatePrice(product).toLocaleString()}
													</div>
													<div className="text-sm text-slate-600 dark:text-slate-400">
														${product.price.toLocaleString()} each
													</div>
												</div>
												
												<button
													onClick={() => removeProduct(index)}
													className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
												>
													<Trash2 className="w-4 h-4" />
												</button>
											</div>
										</div>
									);
								})}
							</div>

							{/* Balance Warning */}
							{totalAmount > userBalance && (
								<div className="mt-4 p-4 bg-red-50/50 dark:bg-red-900/20 rounded-xl border border-red-200/30 dark:border-red-700/30">
									<div className="flex items-center space-x-3">
										<AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
										<div>
											<p className="text-red-700 dark:text-red-400 font-medium">Insufficient Balance</p>
											<p className="text-sm text-red-600 dark:text-red-500">
												You need ${(totalAmount - userBalance).toLocaleString()} more to complete this purchase.
											</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				) : (
					/* No Pending Products */
					<div className="text-center py-12 bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-xl mb-8">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-2xl"></div>
						<div className="relative z-10">
							<ShoppingCart className="w-16 h-16 text-slate-400 mx-auto mb-4" />
							<h2 className="text-xl font-medium text-slate-900 dark:text-white mb-2">No Products Selected</h2>
							<p className="text-slate-600 dark:text-slate-400 mb-6">
								You don't have any pending products from registration. Add products below to start building your portfolio.
							</p>
						</div>
					</div>
				)}

				{/* Available Products for Adding */}
				<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 shadow-xl">
					<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-2xl"></div>
					
					<div className="relative z-10">
						<h2 className="text-xl font-medium text-slate-900 dark:text-white mb-6">Add More Products</h2>
						
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
							{Object.entries({
								gold_bar: "Gold Bar",
								gold_coin: "Gold Coin", 
								silver_bar: "Silver Bar",
								silver_coin: "Silver Coin",
								platinum: "Platinum",
								palladium: "Palladium"
							}).map(([key, name]) => {
								const config = getProductConfig(key);
								return (
									<button
										key={key}
										onClick={() => addProduct(key)}
										className="p-4 bg-white/50 dark:bg-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all text-center"
									>
										<div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${config?.color} flex items-center justify-center text-2xl mx-auto mb-2`}>
											{config?.icon}
										</div>
										<div className="text-sm font-medium text-slate-900 dark:text-white">{name}</div>
										<div className="text-xs text-slate-600 dark:text-slate-400">
											${config?.basePrice.toLocaleString()}+
										</div>
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			{/* Purchase Confirmation Modal */}
			{showPurchaseModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
					<div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-2xl p-8 max-w-md w-full shadow-2xl border border-white/20 dark:border-slate-700/30 relative">
						<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-slate-800/20 rounded-2xl"></div>

						<div className="relative z-10">
							<div className="flex justify-between items-center mb-6">
								<h3 className="text-2xl font-light text-slate-900 dark:text-white">Confirm Purchase</h3>
								<button
									onClick={() => setShowPurchaseModal(false)}
									className="p-2 hover:bg-white/20 dark:hover:bg-slate-700/20 rounded-xl transition-colors"
								>
									<X className="w-5 h-5 text-slate-500" />
								</button>
							</div>

							<div className="mb-6">
								<div className="flex justify-between items-center mb-2">
									<span className="text-slate-600 dark:text-slate-400">Total Amount:</span>
									<span className="text-xl font-medium text-slate-900 dark:text-white">
										${totalAmount.toLocaleString()}
									</span>
								</div>
								<div className="flex justify-between items-center mb-2">
									<span className="text-slate-600 dark:text-slate-400">Available Balance:</span>
									<span className="text-lg text-slate-900 dark:text-white">
										${userBalance.toLocaleString()}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-slate-600 dark:text-slate-400">Remaining Balance:</span>
									<span className={`text-lg font-medium ${userBalance - totalAmount >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
										${(userBalance - totalAmount).toLocaleString()}
									</span>
								</div>
							</div>

							<div className="flex gap-4">
								<button
									onClick={() => setShowPurchaseModal(false)}
									className="flex-1 py-3 px-6 border border-slate-300/50 dark:border-slate-600/50 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-white/20 dark:hover:bg-slate-700/20 transition-all backdrop-blur-sm"
								>
									Cancel
								</button>
								<button
									onClick={handlePurchase}
									disabled={isSubmitting || totalAmount > userBalance}
									className="flex-1 py-3 px-6 bg-blue-500/80 hover:bg-blue-500 text-white rounded-xl transition-all disabled:opacity-50 backdrop-blur-sm border border-blue-400/30 hover:scale-105"
								>
									{isSubmitting ? "Processing..." : "Confirm Purchase"}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default InvestmentPlan;