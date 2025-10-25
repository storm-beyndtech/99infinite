import React from "react";
import teambanner from "../../assets/teambanner.png";
import oil1 from "../../assets/oil-1.png";
import oil2 from "../../assets/oil-2.png";

const OilAndGas: React.FC = () => {
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
							<h1 className="text-6xl font-bold">Oil & Gas</h1>
							<p className="text-lg text-white/60 mt-4 max-w-[800px]">
								Optimize upstream operations from exploration to production with strategic investments in oil
								and gas projects across global markets and emerging energy transition opportunities.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Market Overview Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Australia's Energy Leadership</h2>
							<p className="text-lg text-gray-600 mb-6">
								Australia has a long history of oil and gas production. The ongoing development of its
								substantial reserves strengthens the country's position as a leading global player in the
								sector.
							</p>
							<p className="text-lg text-gray-600 mb-6">
								Oil and gas exports are major contributors to the Australian economy, earning A$23.2 billion
								(approximately $14.46 billion) in taxes and royalties for 2024-2025.
							</p>
							<div className="grid grid-cols-2 gap-6 mt-8">
								<div className=" bg-blue-50 rounded-lg p-4">
									<div className="text-3xl font-bold text-blue-600 mb-2">38%</div>
									<p className="text-gray-600">Oil's Share of Primary Energy</p>
								</div>
								<div className=" bg-blue-50 rounded-lg p-4">
									<div className="text-3xl font-bold text-blue-600 mb-2">24%</div>
									<p className="text-gray-600">Gas's Share of Energy Mix</p>
								</div>
							</div>
						</div>
						<div>
							<img
								src={oil1}
								alt="Oil and Gas Infrastructure"
								className="rounded-lg shadow-lg w-full h-96 object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* LNG Leadership Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<img src={oil2} alt="LNG Export Operations" className="rounded-lg shadow-lg w-full" />
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure & Export Excellence</h2>
							<p className="text-lg text-gray-600 mb-6">
								Australia's LNG infrastructure represents world-class capabilities in liquefaction technology
								and export facilities, supporting the country's position as a global energy leader.
							</p>
							<div className="bg-gray-100 rounded-lg p-8">
								<h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Statistics 2024-2025</h3>
								<div className="space-y-4">
									<div className="flex justify-between items-center border-b border-gray-200 pb-2">
										<span className="text-gray-600">Taxes & Royalties</span>
										<span className="font-semibold text-gray-900">A$23.2B</span>
									</div>
									<div className="flex justify-between items-center border-b border-gray-200 pb-2">
										<span className="text-gray-600">Gas Production</span>
										<span className="font-semibold text-gray-900">2,460 PJ</span>
									</div>
									<div className="flex justify-between items-center border-b border-gray-200 pb-2">
										<span className="text-gray-600">LNG Export Share</span>
										<span className="font-semibold text-gray-900">50%</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Global LNG Rank</span>
										<span className="font-semibold text-gray-900">#3 Exporter</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* LNG Export Growth Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">LNG Export Leadership</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							By the end of the decade, Australia is expected to have ten operational LNG projects with a
							combined nameplate capacity of 86 million tonnes per annum, positioning Australia to become the
							world's largest exporter of LNG.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">10</div>
							<p className="text-gray-600">Operational LNG Projects</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">86M</div>
							<p className="text-gray-600">Tonnes Nameplate Capacity</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">#1</div>
							<p className="text-gray-600">Future LNG Exporter</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">10%</div>
							<p className="text-gray-600">Current Global LNG Share</p>
						</div>
					</div>
					<div className="bg-blue-600 rounded-lg p-8 text-white">
						<h3 className="text-2xl font-semibold mb-4">Export Growth Projection</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div>
								<div className="text-3xl font-bold mb-2">23.2M</div>
								<p className="text-blue-100">Tonnes in 2022</p>
							</div>
							<div>
								<div className="text-3xl font-bold mb-2">80M</div>
								<p className="text-blue-100">Tonnes in 2024-2025</p>
							</div>
							<div>
								<div className="text-3xl font-bold mb-2">$45B</div>
								<p className="text-blue-100">Projected Export Earnings</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Resource Base Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Substantial Resource Base</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Australia possesses substantial conventional and unconventional gas resources, positioning the
							country for long-term energy security and export growth.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Conventional Gas Resources</h3>
							<div className="space-y-6">
								<div className="bg-gray-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Proved & Probable Reserves</h4>
									<div className="text-2xl font-bold text-blue-600 mb-2">126,000 PJ</div>
									<p className="text-gray-600">Including 83,000 PJ conventional gas</p>
								</div>
								<div className="bg-gray-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Major Basin Locations</h4>
									<ul className="space-y-2 text-gray-600">
										<li>" Carnarvon Basin (Western Australia)</li>
										<li>" Browse Basin (Western Australia)</li>
										<li>" Bonaparte Basin (Northern Territory)</li>
										<li>" Southern Margin Basins</li>
									</ul>
								</div>
								<div className="bg-gray-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Resource Distribution</h4>
									<p className="text-gray-600">
										92% of conventional gas resources located in offshore Western Australia and Northern
										Territory basins
									</p>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Unconventional Resources</h3>
							<div className="space-y-6">
								<div className="bg-green-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Coal Seam Gas (CSG)</h4>
									<div className="text-2xl font-bold text-green-600 mb-2">45,553 PJ</div>
									<p className="text-gray-600">Economic demonstrated resources</p>
								</div>
								<div className="bg-green-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Shale Gas Potential</h4>
									<p className="text-gray-600 mb-4">
										Estimated shale gas resources almost double that of conventional gas
									</p>
									<ul className="space-y-1 text-gray-600">
										<li>" South Australia basins</li>
										<li>" Western Australia basins</li>
										<li>" Northern Territory basins</li>
									</ul>
								</div>
								<div className="bg-green-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Oil Shale Resources</h4>
									<div className="text-2xl font-bold text-green-600 mb-2">131,659 PJ</div>
									<p className="text-gray-600">Identified shale oil resources</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Competitive Advantages Section */}
			<section className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Competitive Advantages</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Australia's competitive position is bolstered by a strong economy, abundant resources,
							supportive government policies, mature trade links with key markets, and the participation of
							major oil and gas companies at all stages of the supply chain.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Strong Economy</h3>
							<p className="text-gray-600">
								Stable economic environment with robust financial markets and investment frameworks
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Location</h3>
							<p className="text-gray-600">
								Geographic proximity to Asian markets with growing energy demand
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Climate</h3>
							<p className="text-gray-600">
								Supportive government policies and mature trade relationships with key markets
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure</h3>
							<p className="text-gray-600">
								World-class infrastructure and technology for exploration, production, and export
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
							<p className="text-gray-600">
								Major oil and gas companies participating at all stages of the supply chain
							</p>
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
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
							<p className="text-gray-600">
								Cutting-edge technology and continuous innovation in exploration and production
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Market Demand Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Global Demand & Export Trends</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Growing global demand for energy, driven mainly by China and India, has resulted in strong
							increase in gas demand, particularly for LNG due to its suitability for long-distance
							transportation.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Current Export Markets</h3>
							<div className="space-y-4">
								<div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
									<div className="flex items-center">
										<div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
										<span className="font-medium text-gray-900">Japan</span>
									</div>
									<span className="text-2xl font-bold text-blue-600">80%</span>
								</div>
								<div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
									<div className="flex items-center">
										<div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
										<span className="font-medium text-gray-900">China</span>
									</div>
									<span className="text-2xl font-bold text-blue-600">16%</span>
								</div>
								<div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
									<div className="flex items-center">
										<div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
										<span className="font-medium text-gray-900">Other Markets</span>
									</div>
									<span className="text-2xl font-bold text-blue-600">4%</span>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">2030 Market Projections</h3>
							<div className="space-y-4">
								<div className="bg-blue-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Japan LNG Supply</h4>
									<div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
									<p className="text-gray-600">Of Japan's LNG supply from Australia</p>
								</div>
								<div className="bg-blue-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">China LNG Supply</h4>
									<div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
									<p className="text-gray-600">Of China's LNG supply from Australia</p>
								</div>
								<div className="bg-blue-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">South Korea LNG Supply</h4>
									<div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
									<p className="text-gray-600">Of South Korea's LNG supply from Australia</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* LNG Infrastructure Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">LNG Infrastructure Development</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Australia's LNG infrastructure represents world-class capabilities in liquefaction technology
							and export facilities, supporting the country's position as a global energy leader.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">7</div>
							<p className="text-gray-600">Completed Liquefaction Plants</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">6</div>
							<p className="text-gray-600">Under Construction/Recent</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">62.3M</div>
							<p className="text-gray-600">Total Capacity (Tonnes)</p>
						</div>
					</div>
					<div className="bg-green-600 rounded-lg p-8 text-white">
						<h3 className="text-2xl font-semibold mb-4">Queensland Curtis LNG Project (QCLNG)</h3>
						<p className="text-green-100 mb-4">
							The QCLNG commenced production from its first LNG train in late 2014, marking the world's first
							LNG exports from Coal Seam Gas (CSG) and from Australia's east coast.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div>
								<div className="text-2xl font-bold mb-2">First</div>
								<p className="text-green-100">CSG to LNG Globally</p>
							</div>
							<div>
								<div className="text-2xl font-bold mb-2">2014</div>
								<p className="text-green-100">Production Commenced</p>
							</div>
							<div>
								<div className="text-2xl font-bold mb-2">East Coast</div>
								<p className="text-green-100">Australia's First LNG</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Investment Opportunities Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Investment Opportunities with 99Infinite
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Partner with 99Infinite to capitalize on Australia's expanding oil and gas sector through
							strategic investments and upstream optimization solutions.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Upstream Operations</h3>
							<p className="text-gray-600 mb-4">
								Exploration and production optimization across conventional and unconventional resources
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" Offshore gas field development</li>
								<li>" Onshore shale gas exploration</li>
								<li>" CSG project investments</li>
								<li>" Technology integration</li>
							</ul>
						</div>
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">LNG Infrastructure</h3>
							<p className="text-gray-600 mb-4">
								Strategic investments in liquefaction facilities and export infrastructure
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" Liquefaction plant development</li>
								<li>" Pipeline infrastructure</li>
								<li>" Port facility optimization</li>
								<li>" Storage and logistics</li>
							</ul>
						</div>
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Market Development</h3>
							<p className="text-gray-600 mb-4">
								Access to Asian energy markets through strategic partnerships and trade relationships
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" Asian market entry strategies</li>
								<li>" Long-term supply agreements</li>
								<li>" Joint venture opportunities</li>
								<li>" Risk management solutions</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-16 bg-blue-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
					<h2 className="text-3xl font-bold text-white mb-6">
						Ready to Invest in Australia's Energy Future?
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
						Connect with our oil and gas specialists to explore investment opportunities in one of the world's
						most dynamic energy markets.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Contact Energy Team
						</button>
						<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
							Download Energy Report
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OilAndGas;
