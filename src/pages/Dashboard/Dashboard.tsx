import { useState, useEffect } from "react";
import {
	Coins,
	TrendingUp,
	DollarSign,
	BarChart3,
	Gem,
	ArrowUpRight,
	Plus,
	Activity,
	Clock,
	ExternalLink,
	Mail,
	Users,
	Check,
	Share2,
	Copy,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import ChartTwo from "../../components/UI/ChartTwo";
import ChartThree from "../../components/UI/ChartThree";
import type { InvestmentProduct } from "../../types/auth.types";
import { Link } from "react-router-dom";
import BankingCard from "@/components/BankingCard";

const Dashboard = () => {
	const [copied, setCopied] = useState(false);
	const [metalPrices, setMetalPrices] = useState({
		gold: 2000,
		silver: 25,
		platinum: 980,
		palladium: 1200,
	});
	const [userPortfolio] = useState<InvestmentProduct[]>([]);
	const [recentTransactions, setRecentTransactions] = useState<any[]>([]);
	const [transactionsLoading, setTransactionsLoading] = useState(true);

	// User is guaranteed to exist by DashboardLayoutWrapper
	const { user } = useAuth();
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	// Calculate portfolio value from user object
	const portfolioValue = user?.deposit || 0;
	const totalInvested = portfolioValue; // For now, assume all deposits are investments
	const totalEarnings = user?.interest || 0;
	const dailyEarnings = totalEarnings * 0.01; // Assume 1% of total earnings per day
	const activeProducts = userPortfolio.length;
	const goldOunces = user?.totalGoldOunces || 0;
	const goldValue = goldOunces * (metalPrices.gold || 2000); // Estimate gold value

	const handleCopyReferralCode = async () => {
		try {
			const referralLink = `${window.location.origin}/?ref=${user.username}`;
			await navigator.clipboard.writeText(referralLink);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			console.error("Failed to copy referral code:", error);
		}
	};

	const handleShareEmail = () => {
		const subject = encodeURIComponent("Join 99Infinite - Investment Platform");
		const body = encodeURIComponent(
			`Hi! I've been using 99Infinite for my investments and thought you might be interested. Use my referral link to get started: ${window.location.origin}/?ref=${user.username}`,
		);
		window.open(`mailto:?subject=${subject}&body=${body}`);
	};

	const handleShareSocial = (platform: "facebook" | "twitter") => {
		const referralLink = `${window.location.origin}/?ref=${user.username}`;
		const message = encodeURIComponent("Join me on 99Infinite - Smart Investment Platform");

		if (platform === "facebook") {
			window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`);
		} else if (platform === "twitter") {
			window.open(`https://twitter.com/intent/tweet?text=${message}&url=${encodeURIComponent(referralLink)}`);
		}
	};

	useEffect(() => {
		// Only fetch transactions if user exists and has valid ID
		if (user && user.id && user.id !== "undefined") {
			fetchRecentTransactions();
		} else {
			// Set loading to false if no user to prevent infinite loading
			setTransactionsLoading(false);
			setRecentTransactions([]);
		}

		// Fetch metal prices
		fetchMetalPrices();
	}, [user?.id]);

	const fetchMetalPrices = async () => {
		try {
			const res = await fetch(`${url}/utils`);
			if (res.ok) {
				const data = await res.json();
				if (data.metalPrices) {
					setMetalPrices(data.metalPrices);
				}
			}
		} catch (error) {
			console.error("Error fetching metal prices:", error);
			// Keep default values if fetch fails
		}
	};

	const fetchRecentTransactions = async () => {
		try {
			setTransactionsLoading(true);

			if (!user || !user.id || user.id === "undefined") {
				setRecentTransactions([]);
				setTransactionsLoading(false);
				return;
			}

			const res = await fetch(`${url}/transactions/user/${user.id}?limit=5`);

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
	const portfolioGrowth = totalEarnings > 0 ? ((totalEarnings / totalInvested) * 100).toFixed(2) : "0.00";

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
						<Link
							to="/dashboard/investment-plans"
							className="border-2 border-violet-600 bg-purple-700/10 hover:bg-purple-600/20 dark:text-white text-gray-700 font-semibold px-6 py-3 rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-lg"
						>
							<Plus className="w-5 h-5" />
							Purchase
						</Link>
					</div>
				</div>

				{/* Portfolio Overview Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{/* Portfolio Value */}
					<div className="bg-white/40 dark:bg-gray-100/5 backdrop-blur-2xl border border-white/30 dark:border-gray-400/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
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
					<div className="bg-white/40 dark:bg-gray-100/5 backdrop-blur-2xl border border-white/30 dark:border-gray-400/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
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
					<div className="bg-white/40 dark:bg-gray-100/5 backdrop-blur-2xl border border-white/30 dark:border-gray-400/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
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
					<div className="bg-white/40 dark:bg-gray-100/5 backdrop-blur-2xl border border-white/30 dark:border-gray-400/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
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
									{goldOunces.toFixed(3)} oz
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

				{/* Charts and Recent Transactions */}
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
					{/* Performance Chart */}
					<div className="lg:col-span-3 flex">
						<ChartTwo />
					</div>

					{/* Asset Distribution Chart */}
					<div className="flex lg:col-span-2">
						<ChartThree />
					</div>
				</div>

				{/* Referral Section */}
				<div className="bg-white dark:bg-gray-300/5 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
					<div className="p-8 lg:p-10">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							{/* Left Column */}
							<div className="space-y-8">
								<div>
									<h2 className="text-3xl font-normal tracking-wide text-gray-900 dark:text-gray-100 mb-4">
										Earn with{" "}
										<span className="font-normal bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
											99Infinite
										</span>
									</h2>
									<p className="text-gray-600 dark:text-gray-400 leading-relaxed font-normal tracking-wide">
										Invite your friends to 99Infinite. When they sign up and invest, you'll earn commission on
										their investments and they get access to our premium investment platform.
									</p>
								</div>

								{/* Steps */}
								<div className="space-y-6">
									<div className="flex items-start gap-5">
										<div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
											<Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
										</div>
										<div>
											<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3 tracking-wide">
												Send Invitation
											</h3>
											<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
												Send your referral link to friends and tell them about 99Infinite's investment
												opportunities.
											</p>
										</div>
									</div>

									<div className="flex items-start gap-5">
										<div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
											<Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
										</div>
										<div>
											<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3 tracking-wide">
												Registration
											</h3>
											<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
												Let your friends register using your personal referral code to start investing.
											</p>
										</div>
									</div>

									<div className="flex items-start gap-5">
										<div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
											<Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
										</div>
										<div>
											<h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3 tracking-wide">
												Earn Commission!
											</h3>
											<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
												You earn commission when your referrals make deposits on our platform.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Right Column */}
							<div className="space-y-8">
								{/* Card */}
								<div>
									<BankingCard />
								</div>
								{/* Email Invitation */}
								<div>
									<h3 className="text-xl font-normal tracking-wide text-gray-900 dark:text-gray-100 mb-4">
										Invite your friends
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed font-normal">
										Send them an email invitation to join 99Infinite investment platform.
									</p>
									<div className="flex gap-3">
										<input
											type="email"
											placeholder="Enter email addresses..."
											className="flex-1 px-5 py-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 backdrop-blur-sm transition-all duration-200 font-normal tracking-wide"
										/>
										<button
											onClick={handleShareEmail}
											className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white rounded-2xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-blue-500/25"
										>
											<Share2 className="w-4 h-4" />
										</button>
									</div>
								</div>

								{/* Referral Link */}
								<div>
									<h3 className="text-xl font-normal tracking-wide text-gray-900 dark:text-gray-100 mb-4">
										Share the referral link
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed font-normal">
										Copy and share your referral link with friends or on social media.
									</p>

									<div className="flex gap-3 mb-6">
										<div className="flex-1 px-5 py-4 bg-gray-50/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl backdrop-blur-sm overflow-hidden">
											<code className="text-xs text-gray-700 dark:text-gray-400 font-mono tracking-wide block truncate">
												{`${window.location.origin}/?ref=${user.username}`}
											</code>
										</div>
										<button
											onClick={handleCopyReferralCode}
											className="px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 dark:from-gray-100 dark:to-gray-200 dark:hover:from-gray-200 dark:hover:to-gray-300 dark:text-gray-900 text-white rounded-2xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-gray-500/25 font-medium tracking-wide"
										>
											{copied ? (
												<>
													<Check className="w-4 h-4" />
													Copied!
												</>
											) : (
												<>
													<Copy className="w-4 h-4" />
													Copy
												</>
											)}
										</button>
									</div>

									{/* Social Share Buttons */}
									<div className="flex gap-3">
										<button
											onClick={() => handleShareSocial("facebook")}
											className="w-14 h-14 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-2xl flex items-center justify-center transition-all duration-200 group hover:shadow-md"
										>
											<svg
												className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
											</svg>
										</button>
										<button
											onClick={() => handleShareSocial("twitter")}
											className="w-14 h-14 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-2xl flex items-center justify-center transition-all duration-200 group hover:shadow-md"
										>
											<svg
												className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Recent Transactions */}
				<div className="bg-white/40 dark:bg-slate-800/20 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl">
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
												<th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
													Type
												</th>
												<th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
													Amount
												</th>
												<th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
													Status
												</th>
												<th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
													Date
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200/50 dark:divide-slate-700/50">
											{recentTransactions.map((transaction, index) => (
												<tr
													key={transaction._id || index}
													className="hover:bg-gray-50/30 dark:hover:bg-slate-700/30 transition-colors"
												>
													<td className="py-4 px-4">
														<div className="flex items-center gap-3">
															<div
																className={`w-8 h-8 rounded-full flex items-center justify-center ${
																	transaction.type === "deposit"
																		? "bg-green-100 dark:bg-green-900/30"
																		: transaction.type === "withdrawal"
																		? "bg-red-100 dark:bg-red-900/30"
																		: "bg-blue-100 dark:bg-blue-900/30"
																}`}
															>
																{transaction.type === "deposit" ? (
																	<ArrowUpRight className="w-4 h-4 text-green-600 dark:text-green-400" />
																) : transaction.type === "withdrawal" ? (
																	<ArrowUpRight className="w-4 h-4 text-red-600 dark:text-red-400 rotate-180" />
																) : (
																	<Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
																)}
															</div>
															<span className="text-sm font-medium text-gray-900 dark:text-gray-100 capitalize">
																{transaction.type || "Transaction"}
															</span>
														</div>
													</td>
													<td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">
														{formatCurrency(transaction.amount || 0)}
													</td>
													<td className="py-4 px-4">
														<span
															className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
																transaction.status === "approved"
																	? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
																	: transaction.status === "pending"
																	? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
																	: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
															}`}
														>
															{transaction.status || "pending"}
														</span>
													</td>
													<td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
														<div className="flex items-center gap-1">
															<Clock className="w-3 h-3" />
															{transaction.date ? new Date(transaction.date).toLocaleDateString() : "N/A"}
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
								<p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
									Start investing to see your transaction history
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
