import { useState, useEffect } from "react";
import { Coins, TrendingUp, DollarSign, BarChart3, Gem, Shield, ArrowUpRight, Plus } from "lucide-react";
import { contextData } from "@/context/AuthContext";
import GoldInvestmentCard from "@/components/dashboard/GoldInvestmentCard";
import WithdrawalForm from "@/components/dashboard/WithdrawalForm";
import { goldInvestmentPlans, getCurrentGoldPrice, calculateGoldOunces } from "@/data/investmentPlans";
import { DashboardStats } from "@/types/investment";

interface User {
	id: string;
	username: string;
	email: string;
	balance: number;
	deposit: number;
	interest: number;
	totalInvested?: number;
	goldOunces?: number;
	activeInvestments?: number;
}

const Dashboard = () => {
	const [goldPrice, setGoldPrice] = useState(0);
	const [showInvestmentPlans, setShowInvestmentPlans] = useState(false);
	const [showWithdrawalForm, setShowWithdrawalForm] = useState(false);

	const { user } = contextData() as { user: User };

	useEffect(() => {
		setGoldPrice(getCurrentGoldPrice());
	}, []);

	const handleSelectPlan = (planId: string) => {
		console.log('Selected plan:', planId);
		// TODO: Navigate to investment form or open modal
	};

	const handleNewInvestment = () => {
		setShowInvestmentPlans(true);
	};

	const handleWithdrawal = () => {
		setShowWithdrawalForm(true);
	};

	const handleWithdrawalSuccess = () => {
		// Refresh user data or show success message
		console.log('Withdrawal submitted successfully');
	};

	// Mock dashboard stats - in real app, fetch from API
	const dashboardStats: DashboardStats = {
		totalInvested: user.deposit || 0,
		totalEarnings: user.interest || 0,
		dailyEarnings: (user.interest || 0) * 0.035, // Mock daily earnings
		activeInvestments: user.activeInvestments || 2,
		goldOunces: user.goldOunces || calculateGoldOunces(user.deposit || 0, 25),
		portfolioValue: (user.deposit || 0) + (user.interest || 0)
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
	const portfolioGrowth = dashboardStats.totalEarnings > 0 ? 
		((dashboardStats.totalEarnings / dashboardStats.totalInvested) * 100).toFixed(2) : '0.00';
	const goldValue = dashboardStats.goldOunces * goldPrice;

	if (showInvestmentPlans) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 p-4 md:p-8">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="mb-12">
						<button
							onClick={() => setShowInvestmentPlans(false)}
							className="mb-6 flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
						>
							← Back to Dashboard
						</button>
						<h1 className="text-3xl md:text-5xl font-bold tracking-wide text-gray-900 dark:text-gray-100 mb-4">
							Gold Investment{" "}
							<span className="bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
								Plans
							</span>
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400 font-normal tracking-wide max-w-2xl">
							Choose from our premium gold-backed investment plans designed to maximize your returns while preserving capital.
						</p>
					</div>

					{/* Investment Plans Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
						{goldInvestmentPlans.map((plan, index) => (
							<GoldInvestmentCard
								key={plan.id}
								plan={plan}
								onSelect={handleSelectPlan}
								isPopular={index === 1} // Gold Standard is most popular
							/>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50/50 via-white to-yellow-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 p-4 md:p-8">
			<div className="max-w-7xl mx-auto space-y-8">
				{/* Header */}
				<div className="mb-10">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl md:text-4xl font-bold tracking-wide text-gray-900 dark:text-gray-100 mb-3">
								Welcome back,{" "}
								<span className="bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
									{user.username}
								</span>
							</h1>
							<p className="text-sm text-gray-500 dark:text-gray-400 font-normal tracking-wide">{dateString}</p>
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
									{formatCurrency(dashboardStats.portfolioValue)}
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
									{formatCurrency(dashboardStats.totalInvested)}
								</p>
								<p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium">
									Total Invested
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
									{dashboardStats.activeInvestments} active plans
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
									{formatCurrency(dashboardStats.totalEarnings)}
								</p>
								<p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium">
									Total Earnings
								</p>
								<p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">
									+{formatCurrency(dashboardStats.dailyEarnings)}/day
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
									{dashboardStats.goldOunces.toFixed(3)} oz
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
									<p className="text-gray-600 dark:text-gray-400">Real-time gold price and your investment insights</p>
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
											{formatCurrency(goldPrice)}
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
			</div>

			{/* Withdrawal Form Modal */}
			<WithdrawalForm
				isOpen={showWithdrawalForm}
				onClose={() => setShowWithdrawalForm(false)}
				userBalance={dashboardStats.portfolioValue}
				onSuccess={handleWithdrawalSuccess}
			/>
		</div>
	);
};

export default Dashboard;
