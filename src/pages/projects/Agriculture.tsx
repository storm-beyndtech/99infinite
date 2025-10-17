import React from "react";
import teambanner from "../../assets/teambanner.png";

const Agriculture: React.FC = () => {
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
							<h1 className="text-6xl font-bold">Agriculture Investment</h1>
							<p className="text-lg text-white/60 mt-4 max-w-[800px]">
								99Infinite's world-class agribusiness portfolio represents the country's second largest beef
								producer with a total herd capacity of over 340,000 across 25+ properties nationwide.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio Overview Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class Agribusiness Portfolio</h2>
							<p className="text-lg text-gray-600 mb-6">
								With over 25 properties in its portfolio, 99Infinite's world-class agribusiness is the
								country's second largest producer of beef with a total herd capacity size of over 340,000.
							</p>
							<p className="text-lg text-gray-600 mb-6">
								99Infinite has a long and proud history in agriculture on both sides of the family. Our
								society is committed to investing in local rural communities, developing and implementing
								innovative, industry-leading farming practices and driving export quality and growth.
							</p>
							<div className="grid grid-cols-2 gap-6 mt-8">
								<div className=" bg-green-50 rounded-lg p-4">
									<div className="text-3xl font-bold text-green-600 mb-2">25+</div>
									<p className="text-gray-600">Properties in Portfolio</p>
								</div>
								<div className=" bg-green-50 rounded-lg p-4">
									<div className="text-3xl font-bold text-green-600 mb-2">340K+</div>
									<p className="text-gray-600">Total Herd Capacity</p>
								</div>
							</div>
						</div>
						<div className="bg-gray-100 rounded-lg p-8">
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Heritage & Legacy</h3>
							<div className="space-y-4">
								<div className="border-l-4 border-green-600 pl-4">
									<h4 className="font-semibold text-gray-900">Historic Cattle Stations</h4>
									<p className="text-gray-600">
										Prior to mining exploration, the family owned and operated iconic cattle stations
										including Ashburton Downs and Hamersley Station
									</p>
								</div>
								<div className="border-l-4 border-green-600 pl-4">
									<h4 className="font-semibold text-gray-900">Strategic Growth</h4>
									<p className="text-gray-600">
										The Group has significantly grown the agricultural portfolio with strategic investment in
										pastoral stations and agribusinesses
									</p>
								</div>
								<div className="border-l-4 border-green-600 pl-4">
									<h4 className="font-semibold text-gray-900">Market Leadership</h4>
									<p className="text-gray-600">
										Second largest beef producer in the country with nationwide operations from Western
										Australia to New South Wales
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Property Distribution Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">99Infinite Properties Across Australia</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							99Infinite currently owns more than 14 properties spread right across Australia, ranging from
							Western Australia to New South Wales. Raising and finishing some of the finest cattle in the
							industry for both domestic and overseas markets.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">#2</div>
							<p className="text-gray-600">Largest Beef Producer</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">14+</div>
							<p className="text-gray-600">Properties Nationwide</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">5</div>
							<p className="text-gray-600">States Represented</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">Global</div>
							<p className="text-gray-600">Export Markets</p>
						</div>
					</div>
					<div className="bg-emerald-800 rounded-lg p-8 text-white">
						<h3 className="text-2xl font-semibold mb-4">Technology & Innovation</h3>
						<p className="text-lg text-white/80 mb-8 max-w-[940px]">
							Focused on improving management tools, productivity, volume and cattle welfare on all
							properties, 99Infinite has introduced and is in the process of rolling out game-changing
							technology across all stations.
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							<div>
								<div className="text-xl font-bold mb-2">Digital UHF</div>
								<p className="text-green-100">Communications Systems</p>
							</div>
							<div>
								<div className="text-xl font-bold mb-2">Walk-Over</div>
								<p className="text-green-100">Weighing Technology</p>
							</div>
							<div>
								<div className="text-xl font-bold mb-2">Solar Power</div>
								<p className="text-green-100">Renewable Energy</p>
							</div>
							<div>
								<div className="text-xl font-bold mb-2">Drone Tech</div>
								<p className="text-green-100">Remote Monitoring</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Market Access Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Global Market Access & Trade Advantages</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Economically stable, resilient and diversified, Australia is a low-risk environment in which to
							do business. Investors in the agribusiness and food industries will find a transparent
							regulatory environment and close trade and cultural links to the Asia-Pacific region.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Free Trade Agreements</h3>
							<div className="space-y-6">
								<div className="bg-blue-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Asia-Pacific Focus</h4>
									<p className="text-gray-600 mb-4">
										Australia's network of free trade agreements (FTAs) provides superior access to the
										fast-growing Asian region.
									</p>
									<ul className="space-y-2 text-gray-600">
										<li>" Japan Free Trade Agreement</li>
										<li>" Korea Free Trade Agreement</li>
										<li>" China Free Trade Agreement</li>
										<li>" Trans-Pacific Partnership</li>
									</ul>
								</div>
								<div className="bg-blue-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Market Benefits</h4>
									<p className="text-gray-600">
										Comprehensive agreements that reduce barriers to trade and investment, adding to
										Australia's suite of existing FTAs for enhanced market access.
									</p>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Government Support</h3>
							<div className="space-y-6">
								<div className="bg-green-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Agricultural Competitiveness</h4>
									<p className="text-gray-600">
										The agricultural competitiveness white paper sets out practical measures to build more
										competitive supply chains and provide infrastructure needed to support growth.
									</p>
								</div>
								<div className="bg-green-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Northern Development</h4>
									<p className="text-gray-600">
										The white paper on developing northern Australia invests in research that drives
										productivity growth and opens new overseas markets.
									</p>
								</div>
								<div className="bg-green-50 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-2">Innovation Investment</h4>
									<p className="text-gray-600">
										Government commitment to ensuring the agribusiness and food sector remains globally
										competitive through targeted investment and support.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Industry Resilience Section */}
			<section className="py-16 bg-green-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Resilience & Growth</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Despite challenging weather conditions, rising oil prices, and a disrupted supply chain, the
							agricultural sector maintained its export value from 2015 to 2020. Market analysts expect the
							primary production sector to meet global food chain demand due to its solid foundations.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Resilience</h3>
							<p className="text-gray-600">
								Demonstrated ability to maintain export value despite challenging weather conditions and
								climate variability across multiple seasons.
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain Adaptation</h3>
							<p className="text-gray-600">
								Successfully navigated disrupted supply chains and rising input costs while maintaining
								operational efficiency and market position.
							</p>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Market Stability</h3>
							<p className="text-gray-600">
								Solid foundations enabling consistent performance and positioning to meet growing global food
								demand through diversified operations.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Future Growth Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Global Food Security Partnership</h2>
							<p className="text-lg text-gray-600 mb-6">
								With global food demand booming, Australia is ideally placed to become a premium food supplier
								and a long-term partner of choice in food security.
							</p>
							<p className="text-lg text-gray-600 mb-6">
								International investment in Australia's agriculture and food is growing as Australia
								capitalises on the high demand for its safe, premium food products and creates stronger ties
								into regional supply chains.
							</p>
							<div className="space-y-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-semibold text-gray-900">Premium Food Production</h3>
										<p className="text-gray-600">
											Safe, high-quality food products meeting global standards and consumer demands
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-semibold text-gray-900">Regional Supply Chains</h3>
										<p className="text-gray-600">
											Strategic integration into Asia-Pacific supply chains and distribution networks
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-semibold text-gray-900">Food Security Leadership</h3>
										<p className="text-gray-600">
											Long-term partnerships supporting global food security initiatives and sustainable
											practices
										</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="bg-yellow-50 rounded-lg p-8">
								<h3 className="text-2xl font-semibold text-gray-900 mb-6">Investment Focus Areas</h3>
								<div className="space-y-6">
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">Innovation & Technology</h4>
										<p className="text-gray-600">
											Investment in innovation, agriculture production incorporating food and fibre products,
											and advanced food processing technologies.
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">Scale-Up Opportunities</h4>
										<p className="text-gray-600">
											Supporting agribusiness and food sector scale-up to maximize growth opportunities in
											expanding global markets.
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">Industry Consolidation</h4>
										<p className="text-gray-600">
											Agribusiness is recognised as a future wave of economic growth, requiring international
											partnerships and supply chain reconfiguration.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Economic Impact Section */}
			<section className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Economic Growth & Global Opportunity</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Agribusiness represents where Australian advantage meets global opportunity. To achieve globally
							competitive economies of scale, the industry recognizes the need for international partnerships
							and industry consolidation.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">Growing</div>
							<p className="text-gray-600">International Investment</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">Premium</div>
							<p className="text-gray-600">Food Products</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">Regional</div>
							<p className="text-gray-600">Supply Chain Integration</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">Global</div>
							<p className="text-gray-600">Competitive Scale</p>
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
							Partner with Australia's second largest beef producer to capitalize on growing global food
							demand through strategic agricultural investments and innovative farming practices.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Property Development</h3>
							<p className="text-gray-600 mb-4">
								Strategic acquisition and development of pastoral stations and agricultural properties
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" Cattle station acquisitions</li>
								<li>" Infrastructure development</li>
								<li>" Technology implementation</li>
								<li>" Operational optimization</li>
							</ul>
						</div>
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Innovation</h3>
							<p className="text-gray-600 mb-4">
								Investment in cutting-edge agricultural technology and sustainable farming practices
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" Digital monitoring systems</li>
								<li>" Renewable energy solutions</li>
								<li>" Precision agriculture tools</li>
								<li>" Animal welfare technology</li>
							</ul>
						</div>
						<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Market Expansion</h3>
							<p className="text-gray-600 mb-4">
								Access to domestic and international markets through established distribution networks
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" Export market development</li>
								<li>" Premium product positioning</li>
								<li>" Supply chain integration</li>
								<li>" Brand development</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-16 bg-green-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
					<h2 className="text-3xl font-bold text-white mb-6">
						Ready to Invest in Australia's Agricultural Future?
					</h2>
					<p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
						Connect with our agricultural investment specialists to explore opportunities in one of
						Australia's most resilient and growing sectors.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Contact Agriculture Team
						</button>
						<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors">
							Download Agriculture Report
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Agriculture;
