import React, { useState, useEffect } from "react";
import { useRegistration } from "../../../contexts/RegistrationContext";
import { ChevronLeft, ChevronRight, Plus, Minus, ShoppingCart, TrendingUp } from "lucide-react";
import type { InvestmentProduct, InvestmentProductType } from "../../../types/auth.types";

const Step3Investment: React.FC = () => {
	const { state, updatePortfolio, nextStep, prevStep, setStepValidity } = useRegistration();
	const [selectedProducts, setSelectedProducts] = useState<InvestmentProduct[]>(
		state.portfolio.products || [],
	);
	const [tempSum, setTempSum] = useState(0);

	// Product configurations
	const productConfigs = {
		gold_bar: {
			name: "Gold Bar",
			weights: ["1g", "2.5g", "5g", "10g", "20g", "50g", "100g"],
			basePrice: 65, // per gram
			color: "from-yellow-400 to-yellow-600",
			icon: "🥇",
		},
		gold_coin: {
			name: "Gold Coin",
			weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
			basePrice: 2050, // per oz
			color: "from-amber-400 to-amber-600",
			icon: "🪙",
		},
		silver_bar: {
			name: "Silver Bar",
			weights: ["1oz", "5oz", "10oz", "100oz", "1000oz"],
			basePrice: 25, // per oz
			color: "from-gray-300 to-gray-500",
			icon: "⚪",
		},
		silver_coin: {
			name: "Silver Coin",
			weights: ["1/2 oz", "1 oz", "5 oz"],
			basePrice: 27, // per oz
			color: "from-slate-300 to-slate-500",
			icon: "🥈",
		},
		platinum: {
			name: "Platinum",
			weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
			basePrice: 980, // per oz
			color: "from-blue-400 to-blue-600",
			icon: "💎",
		},
		palladium: {
			name: "Palladium",
			weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
			basePrice: 2000, // per oz
			color: "from-purple-400 to-purple-600",
			icon: "✨",
		},
	};

	const deliveryOptions = [
		{ value: "immediate", label: "Immediate Delivery", extra: "+€50" },
		{ value: "1_month", label: "1 Month", extra: "+€25" },
		{ value: "3_months", label: "3 Months", extra: "Standard" },
		{ value: "6_months", label: "6 Months", extra: "-€25" },
	];

	// Calculate total sum
	useEffect(() => {
		const total = selectedProducts.reduce((sum, product) => sum + product.totalSum, 0);
		setTempSum(total);

		// Update portfolio state
		updatePortfolio({
			products: selectedProducts,
			tempSum: total,
			finalSum: total,
		});

		// Validate step (minimum one product)
		setStepValidity("step3", selectedProducts.length > 0 && total >= 100);
	}, [selectedProducts, updatePortfolio, setStepValidity]);

	const addProduct = (productType: InvestmentProductType) => {
		const config = productConfigs[productType];
		const newProduct: InvestmentProduct = {
			product: productType,
			weight: config.weights[0],
			price: config.basePrice,
			quantity: 1,
			deliveryPeriod: "3_months",
			amount: config.basePrice,
			totalSum: config.basePrice,
		};

		setSelectedProducts([...selectedProducts, newProduct]);
	};

	const updateProduct = (index: number, field: keyof InvestmentProduct, value: any) => {
		const updated = [...selectedProducts];
		updated[index] = { ...updated[index], [field]: value };

		// Recalculate total sum for this product
		const product = updated[index];
		const config = productConfigs[product.product];
		let baseAmount = config.basePrice * product.quantity;

		// Add delivery costs
		switch (product.deliveryPeriod) {
			case "immediate":
				baseAmount += 50;
				break;
			case "1_month":
				baseAmount += 25;
				break;
			case "6_months":
				baseAmount -= 25;
				break;
		}

		updated[index].amount = baseAmount;
		updated[index].totalSum = baseAmount;

		setSelectedProducts(updated);
	};

	const removeProduct = (index: number) => {
		const updated = selectedProducts.filter((_, i) => i !== index);
		setSelectedProducts(updated);
	};

	const handleContinue = () => {
		if (selectedProducts.length > 0 && tempSum >= 100) {
			nextStep();
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center p-4">
			<div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
				{/* Header */}
				<div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-bold">Investment Selection</h1>
							<p className="text-yellow-100">Step 3 of 5 - Choose Your Products</p>
						</div>
						<div className="flex items-center space-x-2">
							<ShoppingCart className="w-8 h-8" />
						</div>
					</div>

					{/* Progress Bar */}
					<div className="mt-4">
						<div className="w-full bg-yellow-500 rounded-full h-2">
							<div
								className="bg-white h-2 rounded-full transition-all duration-300"
								style={{ width: "60%" }}
							></div>
						</div>
					</div>
				</div>

				<div className="p-8">
					<div className="grid lg:grid-cols-3 gap-8">
						{/* Product Selection */}
						<div className="lg:col-span-2">
							<h2 className="text-xl font-bold text-gray-900 mb-6">Available Products</h2>

							<div className="grid md:grid-cols-2 gap-4 mb-8">
								{Object.entries(productConfigs).map(([type, config]) => (
									<div
										key={type}
										className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow duration-200"
									>
										<div
											className={`w-full h-32 bg-gradient-to-br ${config.color} rounded-lg flex items-center justify-center text-4xl mb-4`}
										>
											{config.icon}
										</div>
										<h3 className="font-bold text-gray-900 mb-2">{config.name}</h3>
										<p className="text-sm text-gray-600 mb-3">From €{config.basePrice}</p>
										<button
											onClick={() => addProduct(type as InvestmentProductType)}
											className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
										>
											<Plus className="w-4 h-4 inline mr-2" />
											Add to Portfolio
										</button>
									</div>
								))}
							</div>

							{/* Selected Products */}
							{selectedProducts.length > 0 && (
								<div>
									<h3 className="text-lg font-bold text-gray-900 mb-4">Your Selection</h3>
									<div className="space-y-4">
										{selectedProducts.map((product, index) => {
											const config = productConfigs[product.product];
											return (
												<div key={index} className="border border-gray-200 rounded-xl p-4">
													<div className="flex items-center justify-between mb-4">
														<h4 className="font-bold text-gray-900">{config.name}</h4>
														<button
															onClick={() => removeProduct(index)}
															className="text-red-600 hover:text-red-800 p-1"
														>
															<Minus className="w-4 h-4" />
														</button>
													</div>

													<div className="grid md:grid-cols-4 gap-4">
														{/* Weight */}
														<div>
															<label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
															<select
																value={product.weight}
																onChange={(e) => updateProduct(index, "weight", e.target.value)}
																className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
															>
																{config.weights.map((weight) => (
																	<option key={weight} value={weight}>
																		{weight}
																	</option>
																))}
															</select>
														</div>

														{/* Quantity */}
														<div>
															<label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
															<input
																type="number"
																min="1"
																value={product.quantity}
																onChange={(e) =>
																	updateProduct(index, "quantity", parseInt(e.target.value) || 1)
																}
																className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
															/>
														</div>

														{/* Delivery */}
														<div>
															<label className="block text-sm font-medium text-gray-700 mb-1">Delivery</label>
															<select
																value={product.deliveryPeriod}
																onChange={(e) => updateProduct(index, "deliveryPeriod", e.target.value)}
																className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
															>
																{deliveryOptions.map((option) => (
																	<option key={option.value} value={option.value}>
																		{option.label} {option.extra}
																	</option>
																))}
															</select>
														</div>

														{/* Total */}
														<div>
															<label className="block text-sm font-medium text-gray-700 mb-1">Total</label>
															<div className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg font-bold text-gray-900">
																€{product.totalSum.toFixed(2)}
															</div>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							)}
						</div>

						{/* Summary Sidebar */}
						<div className="bg-gray-50 rounded-xl p-6">
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								<TrendingUp className="w-5 h-5 inline mr-2" />
								Investment Summary
							</h3>

							<div className="space-y-4">
								<div className="flex justify-between">
									<span className="text-gray-600">Products Selected:</span>
									<span className="font-medium">{selectedProducts.length}</span>
								</div>

								<div className="flex justify-between">
									<span className="text-gray-600">Subtotal:</span>
									<span className="font-medium">€{tempSum.toFixed(2)}</span>
								</div>

								<div className="flex justify-between">
									<span className="text-gray-600">Processing Fee:</span>
									<span className="font-medium">€0.00</span>
								</div>

								<hr className="border-gray-300" />

								<div className="flex justify-between text-lg font-bold">
									<span>Total Investment:</span>
									<span className="text-blue-600">€{tempSum.toFixed(2)}</span>
								</div>

								{tempSum < 100 && (
									<div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 mt-4">
										<p className="text-yellow-800 text-sm">
											<strong>Minimum Investment:</strong> €100.00
											<br />
											You need €{(100 - tempSum).toFixed(2)} more to proceed.
										</p>
									</div>
								)}

								{selectedProducts.length === 0 && (
									<div className="bg-blue-100 border border-blue-400 rounded-lg p-3 mt-4">
										<p className="text-blue-800 text-sm">
											Select at least one product to continue with your investment.
										</p>
									</div>
								)}

								<div className="mt-6 pt-4 border-t border-gray-300">
									<h4 className="font-medium text-gray-900 mb-2">Premium Benefits</h4>
									<ul className="text-sm text-gray-600 space-y-1">
										<li>✓ Secure vault storage</li>
										<li>✓ Insurance coverage</li>
										<li>✓ Market price protection</li>
										<li>✓ 24/7 customer support</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation Buttons */}
					<div className="flex justify-between mt-8">
						<button
							onClick={prevStep}
							className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
						>
							<ChevronLeft className="w-5 h-5 mr-2" />
							Back
						</button>

						<button
							onClick={handleContinue}
							disabled={selectedProducts.length === 0 || tempSum < 100}
							className="inline-flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors duration-200"
						>
							Continue to Review
							<ChevronRight className="w-5 h-5 ml-2" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step3Investment;
