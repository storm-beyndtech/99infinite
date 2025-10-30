import { useAuth } from "@/contexts/AuthContext";
import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react";

export const formatCurrency = (amount: number): string => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(amount);
};

export default function Wallet() {
	const { user } = useAuth();

	const today = new Date();
	const dateString = today.toLocaleDateString(undefined, {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	// Calculate total balance (deposit + interest)
  const totalBalance = (user.deposit || 0) + (user.interest || 0);
  
  console.log(user)

	return (
		<div className="max-w-7xl mx-auto space-y-8">
			{/* Header */}
			<div className="mb-10">
				<div className="flex items-center justify-between flex-wrap gap-4">
					<div>
						<h1 className="text-2xl md:text-4xl font-bold tracking-wide text-gray-900 dark:text-gray-100 mb-3">
							Wallet Analysis
						</h1>
						<p className="text-sm text-gray-500 dark:text-gray-400 font-normal tracking-wide">{dateString}</p>
					</div>
				</div>
			</div>

			{/* Balance Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				{/* Total Balance */}
				<div className="cursor-pointer bg-gray-300/10 dark:bg-gray-500/5 dark:hover:bg-gray-100/5 hover:bg-gray-500/10 backdrop-blur-lg border border-blue-500/40 dark:border-blue-400/20 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 dark:hover:shadow-emerald-400/5 transition-all duration-300 group">
					<div className="flex items-center justify-between mb-4">
						<div className="w-11 h-11 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-2xl flex items-center justify-center shadow-inner">
							<span className="text-blue-600 dark:text-blue-400 font-medium text-lg">$</span>
						</div>
						<div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
					</div>
					<div>
						<p className="text-3xl font-normal text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
							{formatCurrency(totalBalance)}
						</p>
						<p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-400 font-medium">
							Total Balance
						</p>
					</div>
				</div>

				{/* Deposit Balance */}
				<div className="cursor-pointer bg-gray-300/10 dark:bg-gray-500/5 dark:hover:bg-gray-100/5 hover:bg-gray-500/10 backdrop-blur-lg border border-emerald-500/40 dark:border-emerald-400/20 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 dark:hover:shadow-emerald-400/5 transition-all duration-300 group">
					<div className="flex items-center justify-between mb-4">
						<div className="w-11 h-11 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/30 rounded-2xl flex items-center justify-center shadow-inner">
							<PiggyBank className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
						</div>
						<div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
					</div>
					<div>
						<p className="text-3xl font-normal text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
							{formatCurrency(user.deposit || 0)}
						</p>
						<p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-400 font-medium">
							Deposit Balance
						</p>
					</div>
				</div>

				{/* Interest Balance */}
				<div className="cursor-pointer bg-gray-300/10 dark:bg-gray-500/5 dark:hover:bg-gray-100/5 hover:bg-gray-500/10 backdrop-blur-lg border border-purple-500/40 dark:border-purple-400/20 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 dark:hover:shadow-emerald-400/5 transition-all duration-300 group">
					<div className="flex items-center justify-between mb-4">
						<div className="w-11 h-11 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 rounded-2xl flex items-center justify-center shadow-inner">
							<TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
						</div>
						<div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
					</div>
					<div>
						<p className="text-3xl font-normal text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
							{formatCurrency(user.interest || 0)}
						</p>
						<p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-400 font-medium">
							Total Earning
						</p>
					</div>
				</div>

				{/* Withdrawal Balance */}
				<div className="cursor-pointer bg-gray-300/10 dark:bg-gray-500/5 dark:hover:bg-gray-100/5 hover:bg-gray-500/10 backdrop-blur-lg border border-purple-500/40 dark:border-purple-400/20 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 dark:hover:shadow-emerald-400/5 transition-all duration-300 group">
					<div className="flex items-center justify-between mb-4">
						<div className="w-11 h-11 bg-gradient-to-br from-purple-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/30 rounded-2xl flex items-center justify-center shadow-inner">
							<TrendingDown className="w-5 h-5 text-orange-600 dark:text-orange-400" />
						</div>
						<div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
					</div>
					<div>
						<p className="text-3xl font-normal text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
							{formatCurrency(user.interest || 0)}
						</p>
						<p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-400 font-medium">
							Total Withdrawn
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
