import { BarChart3, TrendingUp, DollarSign, Target, ArrowUpRight, Truck, Package } from "lucide-react";
import teambanner from "../assets/teambanner.png";
import report from "../assets/Professional-Discussion.png";

const AtlasFinancialReport = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
			{/* Hero Section */}
			<section className="relative pt-12 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl overflow-hidden shadow-2xl">
						{/* Glassmorphism overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>

						<div
							className="relative text-white py-20 bg-cover bg-center"
							style={{
								backgroundImage: `url(${teambanner})`,
							}}
						>
							<div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12">
								<div className="flex items-center space-x-4 mb-6">
									<div>
										<h1 className="text-4xl sm:text-5xl font-medium text-white">Atlas Energy</h1>
										<p className="text-lg text-white/80 mt-2">Q3 2025 Financial Performance</p>
									</div>
								</div>
								<p className="text-lg sm:text-xl text-white/90 mt-6 max-w-4xl font-light leading-relaxed">
									Comprehensive financial performance report for the third quarter of 2025, highlighting
									strong operational results with net income of $86.4 million and continued growth across all
									business segments.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Metrics Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<div className="flex items-center justify-center space-x-3 mb-6">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
								<TrendingUp className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-3xl lg:text-4xl font-light text-slate-900 dark:text-white">
								Financial Highlights
							</h2>
						</div>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
							Net income for the third quarter of 2025 was $86.4 million, and Adjusted EBITDA for the third
							quarter of 2025 was $97.1 million.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								value: "$86.4M",
								label: "Net Income Q3 2025",
								change: "Strong Performance",
								changeType: "positive",
								icon: DollarSign,
							},
							{
								value: "$97.1M",
								label: "Adjusted EBITDA Q3",
								change: "Operational Excellence",
								changeType: "positive",
								icon: TrendingUp,
							},
							{
								value: "$170.6M",
								label: "Total Sales Q3 2025",
								change: "+5.6% from Q2 2025",
								changeType: "positive",
								icon: Target,
							},
							{
								value: "$838.4M",
								label: "Total Liquidity",
								change: "As of August 31, 2025",
								changeType: "positive",
								icon: BarChart3,
							},
						].map((metric, index) => {
							const Icon = metric.icon;
							return (
								<div
									key={index}
									className="relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
								>
									{/* Glassmorphism overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-2xl"></div>

									<div className="relative z-10">
										<div className="flex items-center justify-between mb-4">
											<div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-xl flex items-center justify-center shadow-inner">
												<Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
											</div>
											<ArrowUpRight className="w-4 h-4 text-emerald-500" />
										</div>
										<div>
											<h3 className="text-3xl font-light text-slate-900 dark:text-white mb-2">
												{metric.value}
											</h3>
											<p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
												{metric.label}
											</p>
											<p className="text-xs text-emerald-600 dark:text-emerald-400">{metric.change}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Sales Overview Section */}
			<section className="py-16 bg-white/50 dark:bg-slate-900/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sales Overview</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Third quarter 2025 sales performance across product and service segments
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
						{/* Image Card */}
						<div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
							<img
								src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80"
								alt="Business Growth"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							<div className="absolute bottom-6 left-6 right-6 text-white">
								<h3 className="text-2xl font-bold mb-2">Growth Across All Segments</h3>
								<p className="text-white/90">Q3 2025 demonstrated strong sales performance</p>
							</div>
						</div>

						{/* Total Sales Card */}
						<div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 shadow-xl text-white">
							<h3 className="text-2xl font-semibold mb-6">Total Sales Growth</h3>
							<p className="text-white/90 mb-6 leading-relaxed">
								In the third quarter of 2025, Atlas Energy saw total sales increase by $9.6 million, or 5.6%,
								compared to the second quarter, reaching $170.6 million.
							</p>
							<div className="space-y-3">
								<div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
									<span className="text-white/80">Q3 2025 Total Sales</span>
									<span className="text-2xl font-bold">$170.6M</span>
								</div>
								<div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
									<span className="text-white/80">Growth from Q2</span>
									<span className="text-2xl font-bold text-green-300">+$9.6M</span>
								</div>
								<div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
									<span className="text-white/80">Percentage Increase</span>
									<span className="text-2xl font-bold text-green-300">+5.6%</span>
								</div>
							</div>
						</div>
					</div>

					{/* Product and Service Sales */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Product Sales */}
						<div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
							<div className="flex items-center space-x-3 mb-6">
								<div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
									<Package className="w-6 h-6 text-green-600 dark:text-green-400" />
								</div>
								<h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Product Sales</h3>
							</div>
							<p className="text-gray-600 dark:text-gray-400 mb-6">
								Product sales rose by $10.4 million, or 9.3%, to $120.8 million, driven by a consistent
								increase in sales prices.
							</p>
							<div className="space-y-4">
								<div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-700 dark:text-gray-300">Q3 2025 Product Sales</span>
										<span className="text-xl font-bold text-gray-900 dark:text-white">$120.8M</span>
									</div>
								</div>
								<div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-700 dark:text-gray-300">Growth Rate</span>
										<span className="text-xl font-bold text-green-600 dark:text-green-400">+9.3%</span>
									</div>
								</div>
								<div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-700 dark:text-gray-300">Increase from Q2</span>
										<span className="text-xl font-bold text-green-600 dark:text-green-400">+$10.4M</span>
									</div>
								</div>
							</div>
						</div>

						{/* Service Sales */}
						<div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
							<div className="flex items-center space-x-3 mb-6">
								<div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
									<Truck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
								</div>
								<h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Service Sales</h3>
							</div>
							<p className="text-gray-600 dark:text-gray-400 mb-6">
								Service sales increased by $4.3 million, or 13.1%, compared to the second quarter of 2025,
								resulting from an increase in active jobs, facilitated by a larger fleet of trucks.
							</p>
							<div className="space-y-4">
								<div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-700 dark:text-gray-300">Service Sales Growth</span>
										<span className="text-xl font-bold text-purple-600 dark:text-purple-400">+13.1%</span>
									</div>
								</div>
								<div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-700 dark:text-gray-300">Increase Amount</span>
										<span className="text-xl font-bold text-purple-600 dark:text-purple-400">+$4.3M</span>
									</div>
								</div>
								<div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
									<p className="text-sm text-gray-700 dark:text-gray-300">
										Growth driven by expanded fleet and customer adoption of single and multi-trailer
										logistics offerings
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Market Dynamics Note */}
					<div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded-lg p-6">
						<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Market Dynamics</h4>
						<p className="text-gray-700 dark:text-gray-300 mb-3">
							Despite our optimistic outlook, the sequential price decline was attributed to higher-priced,
							shorter-duration contracts rolling off and being replaced by new contracts at lower rates, along
							with quarterly pricing resets on certain contracts.
						</p>
						<p className="text-gray-700 dark:text-gray-300">
							Service growth was partially offset by shorter haul distances, as customer activity was
							concentrated closer to our mines during the quarter.
						</p>
					</div>
				</div>
			</section>

			{/* Cost Analysis Section */}
			<section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cost Analysis</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
							Detailed breakdown of operational costs and expenses for Q3 2025
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Cost of Sales */}
						<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
							<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Cost of Sales</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-6">
								In the third quarter of 2025, the cost of sales (excluding depreciation, depletion, and
								accretion expense) increased by $7.3 million, or 7.3%, compared to the second quarter of 2025,
								totaling $77.8 million.
							</p>
							<div className="space-y-4 mb-6">
								<div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-700 dark:text-gray-300">Q3 2025 Cost of Sales</span>
										<span className="text-2xl font-bold text-gray-900 dark:text-white">$77.8M</span>
									</div>
								</div>
								<div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-700 dark:text-gray-300">Increase from Q2</span>
										<span className="text-xl font-semibold text-red-600 dark:text-red-400">+$7.3M</span>
									</div>
								</div>
								<div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-700 dark:text-gray-300">Percentage Increase</span>
										<span className="text-xl font-semibold text-red-600 dark:text-red-400">+7.3%</span>
									</div>
								</div>
							</div>
							<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
								<p className="text-sm text-gray-700 dark:text-gray-300">
									<span className="font-semibold">Primary Driver:</span> This increase was primarily driven by
									higher trucking and last-mile logistics costs, resulting from the expansion of our fleet.
								</p>
							</div>
						</div>

						{/* SG&A Expenses */}
						<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
							<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">SG&A Expenses</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-6">
								Selling, general, and administrative expenses (SG&A) for the third quarter of 2025 rose by
								$3.1 million, or 17.4%, compared to the second quarter of 2025, amounting to $14.3 million.
							</p>
							<div className="space-y-4 mb-6">
								<div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-700 dark:text-gray-300">Q3 2025 SG&A</span>
										<span className="text-2xl font-bold text-gray-900 dark:text-white">$14.3M</span>
									</div>
								</div>
								<div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-700 dark:text-gray-300">Increase from Q2</span>
										<span className="text-xl font-semibold text-orange-600 dark:text-orange-400">+$3.1M</span>
									</div>
								</div>
								<div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-700 dark:text-gray-300">Percentage Increase</span>
										<span className="text-xl font-semibold text-orange-600 dark:text-orange-400">+17.4%</span>
									</div>
								</div>
							</div>
							<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
								<p className="text-sm text-gray-700 dark:text-gray-300">
									<span className="font-semibold">Primary Driver:</span> This increase was largely due to $3.7
									million in non-recurring transaction costs related to the Up-C Simplification and the
									refinancing of the 2024 Term Loan Credit Facility.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Liquidity Section */}
			<section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Image */}
						<div className="relative rounded-2xl overflow-hidden shadow-2xl">
							<img src={report} alt="Financial Strength" className="w-full object-cover" />
						</div>

						{/* Content */}
						<div className="text-white">
							<h2 className="text-5xl leading-normal font-semibold mb-6">
								Liquidity and Capital Expenditures
							</h2>
							<p className="text-xl mb-8 text-blue-100 leading-relaxed">
								As of August 31, 2025, the Company's total liquidity was $838.4 million, consisting of $664.5
								million in cash and cash equivalents.
							</p>

							<div className="space-y-4">
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
									<div className="text-blue-200 text-sm font-semibold mb-2">TOTAL LIQUIDITY</div>
									<div className="text-5xl font-bold mb-2">$838.4M</div>
									<div className="text-blue-200">Strong financial position as of August 31, 2025</div>
								</div>

								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
									<div className="text-blue-200 text-sm font-semibold mb-2">CASH & CASH EQUIVALENTS</div>
									<div className="text-5xl font-bold mb-2">$664.5M</div>
									<div className="text-blue-200">Immediate available capital for operations and growth</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Financial Summary */}
			<section className="py-16 bg-white dark:bg-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Financial Summary</h2>
						<p className="text-lg text-gray-600 dark:text-gray-400">Q3 2025 Performance Overview</p>
					</div>

					<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-2xl font-bold mb-6">Net Income</h3>
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
									<div className="text-blue-200 text-sm mb-2">Third Quarter 2025</div>
									<div className="text-4xl font-bold">$86.4M</div>
								</div>
								<p className="text-gray-300">
									Strong net income performance demonstrating operational efficiency and effective cost
									management.
								</p>
							</div>

							<div>
								<h3 className="text-2xl font-bold mb-6">Adjusted EBITDA</h3>
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
									<div className="text-green-200 text-sm mb-2">Last Quarter 2024</div>
									<div className="text-4xl font-bold">$97.1M</div>
								</div>
								<p className="text-gray-300">
									Robust Adjusted EBITDA highlighting the company's strong operational performance and cash
									generation capability.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AtlasFinancialReport;
