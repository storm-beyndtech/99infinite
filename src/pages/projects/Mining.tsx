import React from "react";
import mining2 from "../../assets/mining-2.jpg";
import gold1 from "../../assets/Gold-1.jpg";
import teambanner from "../../assets/teambanner.png";

const Mining: React.FC = () => {
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
							<h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-left">Mining Investment</h1>
							<p className="text-base sm:text-lg text-white/60 mt-4 max-w-[800px] text-left">
								Evaluate the global mining sector, track the volatile metals market, mitigate risk, and align
								ESG goals using essential data, analytics, and insights for sustainable mining investment
								strategies.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Overview Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Mining Excellence & Innovation</h2>
							<p className="text-lg text-gray-600 mb-6">
								99Infinite maintains strong collaborative relationships with Traditional Owner groups across
								our current iron ore operations, as well as proposed operational areas. We are proud of these
								relationships and meet both formally and informally.
							</p>
							<p className="text-lg text-gray-600 mb-6">
								Mining is critical to securing the minerals essential for everyday life and essential to be
								able to build renewable energy projects. The mining industry produces the primary products
								required for the generation, distribution and delivery of renewable energy.
							</p>
						</div>
						<div>
							<img
								src={mining2}
								alt="Mining Operations"
								className="rounded-lg shadow-lg w-full h-96 object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Gold Mining Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<img src={gold1} alt="Gold Mining Operations" className="rounded-lg shadow-lg w-full" />
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Gold Refining Excellence</h2>
							<p className="text-lg text-gray-600 mb-6">
								Through our partnership network, we leverage expertise from gold refining operations in Ghana,
								West Africa's largest gold producer. Our approach combines traditional mining excellence with
								innovative refining technologies.
							</p>
							<div className="space-y-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
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
										<h3 className="text-lg font-semibold text-gray-900">LBMA Certification Pursuit</h3>
										<p className="text-gray-600">
											Trailblazing to be the first LBMA certified refinery in Ghana
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
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
										<h3 className="text-lg font-semibold text-gray-900">Bullion Hallmark</h3>
										<p className="text-gray-600">
											Forerunner in West Africa introducing bullion hallmark and minted gold coins
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
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
										<h3 className="text-lg font-semibold text-gray-900">ISO Certified Lab</h3>
										<p className="text-gray-600">
											ISO/IEC 17025:2017 certification ensuring high-quality services
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Traditional Partnerships Section */}
			<section className="relative py-16 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/20 overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-100/20 to-blue-200/10 rounded-full blur-3xl"></div>
					<div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-tr from-cyan-100/15 to-blue-200/10 rounded-full blur-2xl"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
							Traditional Owner <span className="text-cyan-600">Partnerships</span>
						</h2>
						<p className="text-lg lg:text-xl text-gray-600 max-w-3xl lg:mx-auto font-light leading-relaxed">
							We have existing agreements with Traditional Owner groups and are working closely with
							communities to ensure best-in-class outcomes in fulfilling our license to operate.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-100/50 hover:border-cyan-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
							<div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[35%] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
								Established Partnerships
							</h3>
							<ul className="space-y-3 text-gray-600 leading-relaxed">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Kariyarra People
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Palyku People
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Nyiyaparli People
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Ngarla People
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Nyamal People
								</li>
							</ul>
							<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>

						<div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-100/50 hover:border-cyan-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
							<div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-[35%] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
								Future Collaborations
							</h3>
							<ul className="space-y-3 text-gray-600 leading-relaxed">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Banjima People
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Yindjibarndi People
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>New partnership
									opportunities
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Community engagement
									programs
								</li>
							</ul>
							<div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>

						<div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-100/50 hover:border-cyan-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
							<div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-[35%] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
								<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
								Community Investment
							</h3>
							<ul className="space-y-3 text-gray-600 leading-relaxed">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Health initiatives
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Education programs
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Arts and culture support
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Infrastructure development
								</li>
							</ul>
							<div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Environmental Commitment Section */}
			<section className="py-16 bg-green-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Environmental Sustainability</h2>
						<p className="text-base lg:text-lg text-gray-600 max-w-3xl lg:mx-auto">
							99Infinite is 100% compliant with all legislation and regulations established by the government
							targeting a reduction of emissions by 43% below 2005 levels by 2030 and net zero by 2050.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">43%</div>
							<p className="text-gray-600">Emissions Reduction Target by 2030</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">2050</div>
							<p className="text-gray-600">Net Zero Target Year</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">100%</div>
							<p className="text-gray-600">Regulatory Compliance</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-green-600 mb-2">Green</div>
							<p className="text-gray-600">Mining Practices</p>
						</div>
					</div>
				</div>
			</section>

			{/* Investment Focus Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Investment & Market Analysis</h2>
						<p className="text-base lg:text-lg text-gray-600 max-w-3xl lg:mx-auto">
							Simplify the complexity of an evolving global mining sector through comprehensive analysis and
							strategic investment solutions.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Global Mining Insights</h3>
							<div className="space-y-4">
								<div className="border-l-4 border-blue-600 pl-4">
									<h4 className="font-semibold text-gray-900">Worldwide Exploration & Development</h4>
									<p className="text-gray-600">
										Comprehensive coverage of global mining opportunities and development projects
									</p>
								</div>
								<div className="border-l-4 border-blue-600 pl-4">
									<h4 className="font-semibold text-gray-900">Market Forecasting</h4>
									<p className="text-gray-600">
										Industrials and base metals markets forecasts and detailed analysis
									</p>
								</div>
								<div className="border-l-4 border-blue-600 pl-4">
									<h4 className="font-semibold text-gray-900">Supply Chain Optimization</h4>
									<p className="text-gray-600">ESG alignment and supply chain management solutions</p>
								</div>
								<div className="border-l-4 border-blue-600 pl-4">
									<h4 className="font-semibold text-gray-900">Risk Management</h4>
									<p className="text-gray-600">Track volatile metals markets and mitigate investment risks</p>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Australian Mining Leadership</h3>
							<div className="bg-blue-50 rounded-lg p-6 mb-6">
								<h4 className="font-semibold text-gray-900 mb-4">Economic Impact</h4>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<div className="text-2xl font-bold text-blue-600">$2.4T</div>
										<p className="text-sm text-gray-600">Export Revenue (Past Decade)</p>
									</div>
									<div>
										<div className="text-2xl font-bold text-blue-600">21%</div>
										<p className="text-sm text-gray-600">Economy Growth Contribution</p>
									</div>
									<div>
										<div className="text-2xl font-bold text-blue-600">$252B</div>
										<p className="text-sm text-gray-600">Mining Wages Paid</p>
									</div>
									<div>
										<div className="text-2xl font-bold text-blue-600">$143B</div>
										<p className="text-sm text-gray-600">Company Taxes Paid</p>
									</div>
								</div>
							</div>
							<p className="text-gray-600">
								The world will need a huge amount of minerals and metals to achieve the goal of global
								net-zero emissions by 2050. This requires massive investment in exploration and mining
								projects with improved productivity through new technologies.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-16 bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
					<h2 className="text-3xl font-bold text-white mb-6">
						Ready to Explore Mining Investment Opportunities?
					</h2>
					<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
						Connect with our mining experts to discuss strategic investment opportunities in the global mining
						sector.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
							Contact Mining Team
						</button>
						<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
							Download Mining Report
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Mining;
