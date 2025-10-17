import React from "react";
import teambanner from "../assets/teambanner.png";

const AnnualReport: React.FC = () => {
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<section className="">
				<div className="bg-cyan-950 max-w-[1260px] w-[92%] sm:w-[98%] mx-auto rounded-xl overflow-hidden relative">
					<div
						className="text-white py-16 bg-cover bg-center"
						style={{
							backgroundImage: `url(${teambanner})`,
						}}
					>
						<div className="max-w-7xl mx-auto px-5 sm:px-10">
							<h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-left">Annual Report</h1>
							<p className="text-base sm:text-lg text-white/60 mt-4 max-w-[800px] text-left">
								Comprehensive financial performance and strategic insights from 99Infinite's operations across
								mining, agriculture, gold refining, and global investment sectors.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Executive Summary Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Executive Summary</h2>
						<p className="text-base lg:text-lg text-gray-600 max-w-3xl lg:mx-auto">
							99Infinite delivered strong financial performance in 2023, demonstrating resilience across our
							diversified portfolio while maintaining our commitment to sustainable growth and community
							investment.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-left lg:text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">$157.6M</div>
							<p className="text-gray-600">Total Sales Q3 2023</p>
							<p className="text-sm text-green-600 mt-1">� 2.6% from Q2</p>
						</div>
						<div className="text-left lg:text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">$84.3M</div>
							<p className="text-gray-600">Net Income Q3 2023</p>
							<p className="text-sm text-blue-600 mt-1">Strong Performance</p>
						</div>
						<div className="text-left lg:text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-purple-600 mb-2">$56.1M</div>
							<p className="text-gray-600">Adjusted EBITDA Q3</p>
							<p className="text-sm text-gray-600 mt-1">Operational Excellence</p>
						</div>
						<div className="text-left lg:text-center bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-orange-600 mb-2">$438.4M</div>
							<p className="text-gray-600">Total Liquidity</p>
							<p className="text-sm text-blue-600 mt-1">Strong Position</p>
						</div>
					</div>
				</div>
			</section>

			{/* Financial Performance Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Performance Q3 2023</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Detailed breakdown of our third quarter 2023 financial results, demonstrating consistent growth
							and operational efficiency across all business segments.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Revenue Analysis</h3>
							<div className="space-y-6">
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">Total Sales Growth</h4>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q3 2023 Total Sales</span>
										<span className="font-semibold text-gray-900">$157.6M</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q2 2023 Comparison</span>
										<span className="font-semibold text-green-600">+$4.2M (+2.6%)</span>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Sustained growth driven by increased product sales and expanded service offerings across
										our diversified portfolio.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">Product Sales Performance</h4>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q3 2023 Product Sales</span>
										<span className="font-semibold text-gray-900">$114.8M</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Quarter-over-Quarter</span>
										<span className="font-semibold text-green-600">+$10.4M (+8.3%)</span>
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
										Significant growth in service sales due to increased active jobs, expanded fleet
										deployment, and continued customer adoption of logistics offerings.
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
										<span className="text-gray-600">Q3 2023 Cost of Sales</span>
										<span className="font-semibold text-gray-900">$67.8M</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Quarter-over-Quarter</span>
										<span className="font-semibold text-orange-600">+$4.3M (+6.7%)</span>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Increase primarily driven by higher trucking and last mile logistics costs resulting from
										expanded fleet size and operational scaling.
									</p>
								</div>
								<div className="bg-white rounded-lg p-6 shadow-md">
									<h4 className="font-semibold text-gray-900 mb-4">SG&A Expenses</h4>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Q3 2023 SG&A</span>
										<span className="font-semibold text-gray-900">$14.3M</span>
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-gray-600">Quarter-over-Quarter</span>
										<span className="font-semibold text-orange-600">+$2.1M (+17.4%)</span>
									</div>
									<p className="text-sm text-gray-600 mt-4">
										Increase driven primarily by $3.3M in non-recurring transaction costs related to the Up-C
										Simplification and refinancing activities.
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
								<h4 className="font-semibold text-gray-900 mb-4">Total Liquidity as of December 30, 2023</h4>
								<div className="text-4xl font-bold text-blue-600 mb-4">$438.4M</div>
								<div className="space-y-3">
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Cash & Cash Equivalents</span>
										<span className="font-semibold text-gray-900">$264.5M</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Infrastructure Assets</span>
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
			<section className="py-16 bg-indigo-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
					<h2 className="text-3xl font-bold text-white mb-6">Access Complete Annual Report</h2>
					<p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
						Download our comprehensive annual report for detailed financial statements, governance
						information, and strategic outlook for continued growth.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Download Full Report (PDF)
						</button>
						<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors">
							Contact Investor Relations
						</button>
					</div>
					<div className="mt-8 text-indigo-200">
						<p className="text-sm mt-2">Report covers fiscal year ending December 31, 2023</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AnnualReport;
