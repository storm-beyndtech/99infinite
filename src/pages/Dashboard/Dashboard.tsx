import { useState, useEffect } from "react";
import { Coins, TrendingUp, DollarSign, BarChart3, Gem, Shield, ArrowUpRight, Plus, Activity, Clock, ExternalLink } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import WithdrawalForm from "../../components/dashboard/WithdrawalForm";
import { 
  productConfigs, 
  getCurrentGoldPrice, 
  getCurrentSilverPrice,
  getCurrentPlatinumPrice,
  getCurrentPalladiumPrice,
  calculatePortfolioValue, 
  calculateMetalOunces,
} from "../../data/investmentPlans";
import type { InvestmentProduct } from "../../types/auth.types";

const Dashboard = () => {
	const [metalPrices, setMetalPrices] = useState({
		gold: 0,
		silver: 0,
		platinum: 0,
		palladium: 0
	});
	const [showAddProduct, setShowAddProduct] = useState(false);
	const [showWithdrawalForm, setShowWithdrawalForm] = useState(false);
	const [userPortfolio] = useState<InvestmentProduct[]>([]);
	const [recentTransactions, setRecentTransactions] = useState<any[]>([]);
	const [transactionsLoading, setTransactionsLoading] = useState(true);

	// User is guaranteed to exist by DashboardLayoutWrapper
	const { user } = useAuth();
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	useEffect(() => {
		// Load current metal prices
		setMetalPrices({
			gold: getCurrentGoldPrice(),
			silver: getCurrentSilverPrice(),
			platinum: getCurrentPlatinumPrice(),
			palladium: getCurrentPalladiumPrice()
		});
		
		// Only fetch transactions if user exists and has valid ID
		if (user && user._id && user._id !== "undefined") {
			fetchRecentTransactions();
		} else {
			// Set loading to false if no user to prevent infinite loading
			setTransactionsLoading(false);
			setRecentTransactions([]);
		}
	}, [user?._id]); // Keep dependency but add better checks

	// Calculate portfolio metrics from current holdings
	const portfolioValue = calculatePortfolioValue(userPortfolio);
	const metalOunces = calculateMetalOunces(userPortfolio);
	const totalInvested = userPortfolio.reduce((total, product) => total + product.amount, 0);
	const totalEarnings = portfolioValue - totalInvested; // Current value minus invested amount
	const dailyEarnings = totalEarnings * 0.001; // Assume 0.1% daily growth
	const activeProducts = userPortfolio.length;

	const fetchRecentTransactions = async () => {
		try {
			setTransactionsLoading(true);
			
			if (!user || !user._id || user._id === "undefined") {
				setRecentTransactions([]);
				setTransactionsLoading(false);
				return;
			}

			const res = await fetch(`${url}/transactions/user/${user._id}?limit=5`);
			
			// If fetch fails (network error, server down, etc.), handle gracefully
			if (!res.ok) {
				console.warn(`Failed to fetch transactions: ${res.status} ${res.statusText}`);
				setRecentTransactions([]);
				setTransactionsLoading(false);
				return;
			}

			const data = await res.json();
			const transactions = Array.isArray(data.transactions) ? data.transactions : data || [];
			setRecentTransactions(transactions.slice(0, 5));
			
		} catch (error) {
			console.error("Error fetching transactions:", error);
			setRecentTransactions([]);
		} finally {
			setTransactionsLoading(false);
		}
	};


	const handleNewInvestment = () => {
		setShowAddProduct(true);
	};

	const handleWithdrawal = () => {
		setShowWithdrawalForm(true);
	};

	const handleWithdrawalSuccess = () => {
		// Refresh user data or show success message
		console.log("Withdrawal submitted successfully");
	};


	const today = new Date();
	const dateString = today.toLocaleDateString(undefined, {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const formatCurrency = (amount: number): string => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 2,
		}).format(amount);
	};

	// Calculate portfolio metrics
	const portfolioGrowth =
		totalEarnings > 0
			? ((totalEarnings / totalInvested) * 100).toFixed(2)
			: "0.00";
	const goldValue = metalOunces.gold * metalPrices.gold;

	if (showAddProduct) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 p-4 md:p-8">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="mb-12">
						<button
							onClick={() => setShowAddProduct(false)}
							className="mb-6 flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
						>
							← Back to Dashboard
						</button>
						<h1 className="text-3xl md:text-5xl font-bold tracking-wide text-gray-900 dark:text-gray-100 mb-4">
							Precious Metals{" "}
							<span className="bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
								Products
							</span>
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400 font-normal tracking-wide max-w-2xl">
							Choose from our premium precious metals collection - gold bars, coins, silver, platinum, and palladium.
						</p>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
						{Object.entries(productConfigs).map(([key, product]) => (
							<div key={key} className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
								<div className="text-center">
									<div className="text-6xl mb-4">{product.icon}</div>
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
									<p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>
									<div className={`text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-6`}>
										${product.basePrice}+
									</div>
									<button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300">
										Select Product
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="max-w-7xl mx-auto space-y-8">
				{/* Header */}
				<div className="mb-10">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl md:text-4xl font-bold tracking-wide text-gray-900 dark:text-gray-100 mb-3">
								Welcome back,{" "}
								<span className="bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
									{user.personalInfo?.firstName || user.firstName || "User"}
								</span>
							</h1>
							<p className="text-sm text-gray-500 dark:text-gray-400 font-normal tracking-wide">
								{dateString}
							</p>
						</div>
						<button
							onClick={handleNewInvestment}
							className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-amber-500/25"
						>
							<Plus className="w-5 h-5" />
							New Investment
						</button>
					</div>
				</div>

				{/* Portfolio Overview Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{/* Portfolio Value */}
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						<div className="relative z-10">
							<div className="flex items-center justify-between mb-4">
								<div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-950/50 dark:to-yellow-900/30 rounded-2xl flex items-center justify-center shadow-inner">
									<DollarSign className="w-6 h-6 text-amber-600 dark:text-amber-400" />
								</div>
								<ArrowUpRight className="w-5 h-5 text-emerald-500" />
							</div>
							<div>
								<p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
									{formatCurrency(portfolioValue)}
								</p>
								<p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium">
									Portfolio Value
								</p>
								<p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">
									+{portfolioGrowth}% growth
								</p>
							</div>
						</div>
					</div>

					{/* Total Invested */}
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						<div className="relative z-10">
							<div className="flex items-center justify-between mb-4">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/50 dark:to-cyan-900/30 rounded-2xl flex items-center justify-center shadow-inner">
									<BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
								</div>
								<div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
							</div>
							<div>
								<p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
									{formatCurrency(totalInvested)}
								</p>
								<p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium">
									Total Invested
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
									{activeProducts} active products
								</p>
							</div>
						</div>
					</div>

					{/* Total Earnings */}
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						<div className="relative z-10">
							<div className="flex items-center justify-between mb-4">
								<div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-950/50 dark:to-green-900/30 rounded-2xl flex items-center justify-center shadow-inner">
									<TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
								</div>
								<div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
							</div>
							<div>
								<p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
									{formatCurrency(totalEarnings)}
								</p>
								<p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium">
									Total Earnings
								</p>
								<p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">
									+{formatCurrency(dailyEarnings)}/day
								</p>
							</div>
						</div>
					</div>

					{/* Gold Holdings */}
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						<div className="relative z-10">
							<div className="flex items-center justify-between mb-4">
								<div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-950/50 dark:to-amber-900/30 rounded-2xl flex items-center justify-center shadow-inner">
									<Coins className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
								</div>
								<Gem className="w-5 h-5 text-amber-500" />
							</div>
							<div>
								<p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
									{metalOunces.gold.toFixed(3)} oz
								</p>
								<p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium">
									Gold Holdings
								</p>
								<p className="text-sm text-amber-600 dark:text-amber-400 font-medium mt-1">
									{formatCurrency(goldValue)} value
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Gold Market & Quick Actions */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Gold Market Tracker */}
					<div className="lg:col-span-2 bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						<div className="relative z-10">
							<div className="flex items-center justify-between mb-8">
								<div>
									<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
										Gold Market{" "}
										<span className="bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
											Tracker
										</span>
									</h2>
									<p className="text-gray-600 dark:text-gray-400">
										Real-time gold price and your investment insights
									</p>
								</div>
								<div className="flex items-center gap-3">
									<Shield className="w-6 h-6 text-amber-500" />
									<span className="text-sm font-medium text-amber-600 dark:text-amber-400">Gold Backed</span>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Current Gold Price */}
								<div className="bg-gradient-to-br from-amber-100/50 to-yellow-100/50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-2xl p-6">
									<div className="flex items-center justify-between mb-4">
										<Coins className="w-8 h-8 text-amber-600 dark:text-amber-400" />
										<span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full font-medium">
											+1.2%
										</span>
									</div>
									<div>
										<p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
											{formatCurrency(metalPrices.gold)}
										</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">per ounce</p>
									</div>
								</div>

								{/* Portfolio Performance */}
								<div className="bg-gradient-to-br from-emerald-100/50 to-green-100/50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-2xl p-6">
									<div className="flex items-center justify-between mb-4">
										<BarChart3 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
										<TrendingUp className="w-5 h-5 text-emerald-500" />
									</div>
									<div>
										<p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
											+{portfolioGrowth}%
										</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">portfolio growth</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Quick Actions */}
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						<div className="relative z-10">
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
							<div className="space-y-4">
								<button
									onClick={handleNewInvestment}
									className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25"
								>
									<Plus className="w-5 h-5" />
									Start Investment
								</button>
								<button
									onClick={handleWithdrawal}
									className="w-full bg-white/50 dark:bg-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/70 text-gray-900 dark:text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 border border-gray-200/50 dark:border-slate-600/50"
								>
									Withdraw Funds
								</button>
								<button className="w-full bg-white/50 dark:bg-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/70 text-gray-900 dark:text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 border border-gray-200/50 dark:border-slate-600/50">
									View Transactions
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Charts and Recent Transactions */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Performance Chart */}
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						<div className="relative z-10">
							<div className="flex items-center justify-between mb-6">
								<div>
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Portfolio Performance</h3>
									<p className="text-sm text-gray-600 dark:text-gray-400">Last 7 days growth trend</p>
								</div>
								<Activity className="w-6 h-6 text-emerald-500" />
							</div>
							<div className="h-48 flex items-center justify-center bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-2xl">
								<div className="text-center">
									<TrendingUp className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
									<p className="text-sm text-gray-600 dark:text-gray-400">Chart visualization coming soon</p>
									<p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">+{portfolioGrowth}%</p>
								</div>
							</div>
						</div>
					</div>

					{/* Activity Chart */}
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl">
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						<div className="relative z-10">
							<div className="flex items-center justify-between mb-6">
								<div>
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Investment Activity</h3>
									<p className="text-sm text-gray-600 dark:text-gray-400">Monthly investment flow</p>
								</div>
								<BarChart3 className="w-6 h-6 text-blue-500" />
							</div>
							<div className="h-48 flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl">
								<div className="text-center">
									<BarChart3 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
									<p className="text-sm text-gray-600 dark:text-gray-400">Activity chart coming soon</p>
									<p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">{activeProducts}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">Active Products</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Recent Transactions */}
				<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl">
					<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
					<div className="relative z-10">
						<div className="flex items-center justify-between mb-6">
							<div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Recent Transactions</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">Your latest transaction activity</p>
							</div>
							<button className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
								View All <ExternalLink className="w-4 h-4" />
							</button>
						</div>
						
						{transactionsLoading ? (
							<div className="flex items-center justify-center py-12">
								<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
							</div>
						) : recentTransactions.length > 0 ? (
							<div className="overflow-hidden rounded-2xl border border-gray-200/50 dark:border-slate-700/50">
								<div className="overflow-x-auto">
									<table className="w-full">
										<thead className="bg-gray-50/50 dark:bg-slate-800/50">
											<tr>
												<th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Type</th>
												<th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Amount</th>
												<th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Status</th>
												<th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Date</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200/50 dark:divide-slate-700/50">
											{recentTransactions.map((transaction, index) => (
												<tr key={transaction._id || index} className="hover:bg-gray-50/30 dark:hover:bg-slate-700/30 transition-colors">
													<td className="py-4 px-4">
														<div className="flex items-center gap-3">
															<div className={`w-8 h-8 rounded-full flex items-center justify-center ${
																transaction.type === 'deposit' ? 'bg-green-100 dark:bg-green-900/30' :
																transaction.type === 'withdrawal' ? 'bg-red-100 dark:bg-red-900/30' :
																'bg-blue-100 dark:bg-blue-900/30'
															}`}>
																{transaction.type === 'deposit' ? (
																	<ArrowUpRight className="w-4 h-4 text-green-600 dark:text-green-400" />
																) : transaction.type === 'withdrawal' ? (
																	<ArrowUpRight className="w-4 h-4 text-red-600 dark:text-red-400 rotate-180" />
																) : (
																	<Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
																)}
															</div>
															<span className="text-sm font-medium text-gray-900 dark:text-gray-100 capitalize">
																{transaction.type || 'Transaction'}
															</span>
														</div>
													</td>
													<td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">
														{formatCurrency(transaction.amount || 0)}
													</td>
													<td className="py-4 px-4">
														<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
															transaction.status === 'approved' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
															transaction.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
															'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
														}`}>
															{transaction.status || 'pending'}
														</span>
													</td>
													<td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
														<div className="flex items-center gap-1">
															<Clock className="w-3 h-3" />
															{transaction.date ? new Date(transaction.date).toLocaleDateString() : 'N/A'}
														</div>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						) : (
							<div className="text-center py-12">
								<Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
								<p className="text-sm text-gray-600 dark:text-gray-400">No recent transactions</p>
								<p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Start investing to see your transaction history</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Withdrawal Form Modal */}
			<WithdrawalForm
				isOpen={showWithdrawalForm}
				onClose={() => setShowWithdrawalForm(false)}
				userBalance={portfolioValue}
				onSuccess={handleWithdrawalSuccess}
			/>
		</>
	);
};

export default Dashboard;
