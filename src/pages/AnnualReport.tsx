import React from "react";
import { BarChart3, TrendingUp, DollarSign, Target, Download, FileText, ArrowUpRight, ArrowDownRight } from "lucide-react";
import teambanner from "../assets/teambanner.png";

const AnnualReport: React.FC = () => {
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
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${teambanner})`,
							}}
						>
							<div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12">
								<div className="flex items-center space-x-4 mb-6">
									<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
										<BarChart3 className="w-8 h-8 text-white" />
									</div>
									<div>
										<h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">
											Annual Report
										</h1>
										<p className="text-lg text-white/80 mt-2">2024 Financial Performance</p>
									</div>
								</div>
								<p className="text-lg sm:text-xl text-white/90 mt-6 max-w-4xl font-light leading-relaxed">
									Comprehensive financial performance and strategic insights from 99Infinite's operations across
									mining, agriculture, gold refining, and global investment sectors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Executive Summary Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<div className="flex items-center justify-center space-x-3 mb-6">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
								<TrendingUp className="w-6 h-6 text-white" />
							</div>
							<h2 className="text-3xl lg:text-4xl font-light text-slate-900 dark:text-white">
								Executive Summary
							</h2>
						</div>
						<p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
							99Infinite delivered exceptional financial performance in Q1 2025, with net income of $86.4 million 
							and Adjusted EBITDA of $97.1 million, demonstrating strong growth across our diversified portfolio 
							while maintaining our commitment to sustainable operations.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ value: "$170.6M", label: "Total Sales Q1 2025", change: "+5.6% from Q4 2024", changeType: "positive", icon: DollarSign },
							{ value: "$86.4M", label: "Net Income Q1 2025", change: "Exceptional Performance", changeType: "positive", icon: TrendingUp },
							{ value: "$97.1M", label: "Adjusted EBITDA Q1", change: "Operational Excellence", changeType: "positive", icon: Target },
							{ value: "$838.4M", label: "Total Liquidity", change: "Record High Position", changeType: "positive", icon: BarChart3 }
						].map((metric, index) => {
							const Icon = metric.icon;
							return (
								<div
									key={index}
									className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
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
											<p className="text-xs text-emerald-600 dark:text-emerald-400">
												{metric.change}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Financial Performance Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Performance Q1 2025</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Detailed breakdown of our first quarter 2025 financial results, demonstrating exceptional growth
							with total sales reaching $170.6 million and strong operational efficiency across all business segments.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Revenue Analysis</h3>
							<div className="space-y-6">
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">Total Sales Growth</h4>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q1 2025 Total Sales</span>
										<span className="font-semibold text-gray-900">$170.6M</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q4 2024 Comparison</span>
										<span className="font-semibold text-green-600">+$9.6M (+5.6%)</span>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Strong growth driven by increased product sales and expanded service offerings, with 
										consistent increases in sales prices across our diversified portfolio.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">Product Sales Performance</h4>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q1 2025 Product Sales</span>
										<span className="font-semibold text-gray-900">$120.8M</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Quarter-over-Quarter</span>
										<span className="font-semibold text-green-600">+$10.4M (+9.3%)</span>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Strong performance driven by an increase in sales price across mining, agriculture, and
										energy sectors.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">Service Revenue Growth</h4>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Service Sales Increase</span>
										<span className="font-semibold text-green-600">+$4.3M (+13.1%)</span>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Significant growth in service sales due to increased active jobs, expanded fleet of trucks,
										and continued customer adoption of single and multi-trailer logistics offerings.
									</p>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Cost Management</h3>
							<div className="space-y-6">
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">Cost of Sales</h4>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q1 2025 Cost of Sales</span>
										<span className="font-semibold text-gray-900">$77.8M</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Quarter-over-Quarter</span>
										<span className="font-semibold text-orange-600">+$7.3M (+7.3%)</span>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Increase primarily driven by higher trucking and last-mile logistics costs resulting from
										expansion of our fleet to support growing operations.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">SG&A Expenses</h4>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q1 2025 SG&A</span>
										<span className="font-semibold text-gray-900">$14.3M</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Quarter-over-Quarter</span>
										<span className="font-semibold text-orange-600">+$3.1M (+17.4%)</span>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Increase largely due to $3.7M in non-recurring transaction costs related to the Up-C
										Simplification and refinancing of the 2024 Term Loan Credit Facility.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">Operational Efficiency</h4>
									<div className="space-y-2">
										<div className="flex justify-between items-center">
											<span className="text-gray-600">Gross Margin</span>
											<span className="font-semibold text-green-600">Strong</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="text-gray-600">Cost Management</span>
											<span className="font-semibold text-blue-600">Disciplined</span>
										</div>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Maintained operational discipline while investing in growth initiatives and infrastructure
										expansion across business segments.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Capital Position Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Capital Position & Liquidity</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Strong financial position with substantial liquidity and strategic capital allocation supporting
							continued growth and investment opportunities.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Liquidity Position</h3>
							<div className="bg-blue-50 rounded-lg p-8 mb-6">
								<h4 className="font-semibold text-gray-900 mb-4">Total Liquidity as of April 30, 2025</h4>
								<div className="text-4xl font-bold text-blue-600 mb-4">$838.4M</div>
								<div className="space-y-3">
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Cash & Cash Equivalents</span>
										<span className="font-semibold text-gray-900">$664.5M</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Available Credit Facilities</span>
										<span className="font-semibold text-gray-900">$173.9M</span>
									</div>
								</div>
							</div>
							<p className="text-gray-600">
								Our strong liquidity position provides flexibility for strategic investments, operational
								expansion, and capitalizing on growth opportunities across our diversified business portfolio.
							</p>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Capital Allocation Strategy</h3>
							<div className="space-y-4">
								<div className="border-l-4 border-blue-600 pl-4">
									<h4 className="font-semibold text-gray-900">Growth Investments</h4>
									<p className="text-gray-600">
										Strategic capital deployment in mining technology, agricultural innovation, and energy
										infrastructure
									</p>
								</div>
								<div className="border-l-4 border-green-600 pl-4">
									<h4 className="font-semibold text-gray-900">Operational Excellence</h4>
									<p className="text-gray-600">
										Continued investment in efficiency improvements and technological advancement across all
										sectors
									</p>
								</div>
								<div className="border-l-4 border-purple-600 pl-4">
									<h4 className="font-semibold text-gray-900">Community Investment</h4>
									<p className="text-gray-600">
										Sustained commitment to community development and environmental stewardship initiatives
									</p>
								</div>
								<div className="border-l-4 border-orange-600 pl-4">
									<h4 className="font-semibold text-gray-900">Shareholder Returns</h4>
									<p className="text-gray-600">
										Balanced approach to capital returns while maintaining investment in long-term growth
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Performance Highlight Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
						{/* Glassmorphism overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-700/80 dark:from-blue-500/70 dark:to-purple-600/70"></div>
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
						
						<div className="relative z-10 text-center">
							<div className="flex items-center justify-center space-x-3 mb-8">
								<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
									<FileText className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-2xl md:text-3xl font-light text-white">Key Financial Highlights</h3>
							</div>
							<blockquote className="text-lg md:text-xl lg:text-2xl text-white/95 font-light leading-relaxed mb-8 italic max-w-4xl mx-auto">
								"Net income for the first quarter of 2025 was $86.4 million, and Adjusted EBITDA for the 
								first quarter of 2025 was $97.1 million."
							</blockquote>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
								{[
									{ value: "$170.6M", label: "Total Sales Q1 2025" },
									{ value: "$86.4M", label: "Net Income Q1 2025" },
									{ value: "$838.4M", label: "Total Liquidity" }
								].map((highlight, index) => (
									<div key={index} className="text-center">
										<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
											<div className="text-4xl font-light text-white mb-3">{highlight.value}</div>
											<p className="text-white/80 font-medium">{highlight.label}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Segment Performance Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Business Segment Performance</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Diversified portfolio performance across mining, agriculture, oil & gas, and sustainable
							development initiatives driving consistent growth.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Mining Operations</h3>
							<p className="text-gray-600 mb-4">
								Strong performance in iron ore and gold operations with $300M+ in community royalties
							</p>
							<div className="text-2xl font-bold text-gray-600 mb-1">Leading</div>
							<p className="text-sm text-gray-500">Market Position</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Agriculture</h3>
							<p className="text-gray-600 mb-4">
								Second largest beef producer with 340,000+ herd capacity across 25+ properties
							</p>
							<div className="text-2xl font-bold text-green-600 mb-1">#2</div>
							<p className="text-sm text-gray-500">Producer Ranking</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Oil & Gas</h3>
							<p className="text-gray-600 mb-4">
								Strategic investments in Australia's expanding LNG export market
							</p>
							<div className="text-2xl font-bold text-blue-600 mb-1">Growing</div>
							<p className="text-sm text-gray-500">Market Share</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
							<p className="text-gray-600 mb-4">
								Leading ESG initiatives with 43% emissions reduction target by 2030
							</p>
							<div className="text-2xl font-bold text-purple-600 mb-1">2050</div>
							<p className="text-sm text-gray-500">Net Zero Target</p>
						</div>
					</div>
				</div>
			</section>

			{/* Historical Performance Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Historical Performance & Capital Placements
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Since 1992, 99Infinite has demonstrated consistent performance with an average of $5 billion in
							capital placements annually, establishing our position as a leading investment partner.
						</p>
					</div>
					<div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg p-8 text-white mb-12">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left lg:text-center">
							<div>
								<div className="text-4xl font-bold mb-2">$5B</div>
								<p className="text-indigo-100">Annual Capital Placements</p>
								<p className="text-sm text-indigo-200 mt-1">Since 1992 Average</p>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">30+</div>
								<p className="text-indigo-100">Years of Experience</p>
								<p className="text-sm text-indigo-200 mt-1">Established Track Record</p>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">$150B+</div>
								<p className="text-indigo-100">Total Capital Placed</p>
								<p className="text-sm text-indigo-200 mt-1">Cumulative Investment</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Investment Track Record</h3>
							<div className="space-y-4">
								<div className="bg-gray-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Consistent Performance</h4>
									<p className="text-gray-600">
										Over three decades of delivering strong returns through diversified investments across
										multiple sectors and economic cycles.
									</p>
								</div>
								<div className="bg-gray-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Strategic Positioning</h4>
									<p className="text-gray-600">
										Leadership position in Australian mining, agriculture, and energy sectors with strong
										international partnerships and market access.
									</p>
								</div>
								<div className="bg-gray-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Risk Management</h4>
									<p className="text-gray-600">
										Disciplined approach to capital allocation with focus on long-term value creation and
										sustainable business practices.
									</p>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Future Outlook</h3>
							<div className="space-y-4">
								<div className="bg-blue-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h4>
									<p className="text-gray-600">
										Positioned to capitalize on increasing global demand for minerals, food security, and
										clean energy solutions.
									</p>
								</div>
								<div className="bg-green-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Technology Innovation</h4>
									<p className="text-gray-600">
										Continued investment in cutting-edge technology and digital transformation across all
										business segments.
									</p>
								</div>
								<div className="bg-purple-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Sustainability Leadership</h4>
									<p className="text-gray-600">
										Commitment to net-zero emissions by 2050 while maintaining strong financial performance
										and community investment.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Download & Contact Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
						{/* Glassmorphism overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
						
						<div className="relative z-10">
							<div className="flex items-center justify-center space-x-3 mb-8">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
									<Download className="w-6 h-6 text-white" />
								</div>
								<h2 className="text-3xl font-light text-slate-900 dark:text-white">
									Access Complete Annual Report
								</h2>
							</div>
							<p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
								Download our comprehensive annual report for detailed financial statements, governance
								information, and strategic outlook for continued growth.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
								<button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
									<Download className="w-5 h-5" />
									<span>Download Full Report (PDF)</span>
								</button>
								<button className="flex items-center justify-center space-x-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-2xl font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm">
									<FileText className="w-5 h-5" />
									<span>Contact Investor Relations</span>
								</button>
							</div>
							<div className="text-slate-500 dark:text-slate-400">
								<p className="text-sm">Report covers fiscal year ending December 31, 2024</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AnnualReport;
