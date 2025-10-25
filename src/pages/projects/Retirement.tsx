import React from "react";
import teambanner from "../../assets/teambanner.png";
import elderlyWoman from "../../assets/Elderly-Woman.png";

const Retirement: React.FC = () => {
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
							<h1 className="text-5xl lg:text-6xl font-bold text-left">Retirement Solutions</h1>
							<p className="text-base sm:text-lg text-white/60 mt-4 max-w-[800px] text-left">
								Secure your financial future with 99Infinite's comprehensive retirement investment strategies
								designed to preserve and grow wealth through diversified global portfolio management.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Overview Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Wealth Preservation & Growth</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Everything we do is focused on preserving and growing wealth. To meet our clients' expanding
							global needs, we offer private wealth planning services that transcend borders and deliver
							consistent long-term returns.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Strategic Wealth Management</h3>
							<div className="space-y-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
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
										<h4 className="text-lg font-semibold text-gray-900">Diversified Portfolio Approach</h4>
										<p className="text-gray-600">
											Strategic allocation across mining, agriculture, energy, and real estate sectors
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
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
										<h4 className="text-lg font-semibold text-gray-900">Global Investment Opportunities</h4>
										<p className="text-gray-600">
											Access to international markets and cross-border investment solutions
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
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
										<h4 className="text-lg font-semibold text-gray-900">Risk Management</h4>
										<p className="text-gray-600">
											Conservative approach balanced with growth opportunities for sustainable returns
										</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<img
								src={elderlyWoman}
								alt="Retirement Investment Planning"
								className="rounded-lg shadow-lg w-full h-96 object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Investment Performance Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Investment Performance</h2>
							<p className="text-lg text-gray-600 mb-6">
								Over 30 years of experience in wealth management has delivered consistent returns for our retirement
								planning clients through disciplined investment strategies and diversified portfolio management.
							</p>
							<div className="space-y-4">
								<div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
									<span className="text-gray-600">Average Annual Return</span>
									<span className="font-semibold text-emerald-600 text-lg">12.5%</span>
								</div>
								<div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
									<span className="text-gray-600">Years of Experience</span>
									<span className="font-semibold text-gray-900 text-lg">30+</span>
								</div>
								<div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
									<span className="text-gray-600">Portfolio Diversification</span>
									<span className="font-semibold text-blue-600 text-lg">4 Sectors</span>
								</div>
							</div>
						</div>
						<div>
							<div className="bg-emerald-50 rounded-lg p-8">
								<h3 className="text-2xl font-semibold text-gray-900 mb-6">Capital Deployment</h3>
								<div className="space-y-4">
								<div className="flex justify-between items-center border-b border-emerald-200 pb-2">
									<span className="text-gray-600">Capital Placements (Annual)</span>
									<span className="font-semibold text-emerald-600 text-lg">$5B</span>
								</div>
								<div className="flex justify-between items-center border-b border-emerald-200 pb-2">
									<span className="text-gray-600">Global Clients Served</span>
									<span className="font-semibold text-gray-900 text-lg">1000+</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Success Rate</span>
									<span className="font-semibold text-emerald-600 text-lg">98%</span>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Investment Options Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Retirement Investment Options</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Choose from a range of retirement investment solutions tailored to your risk tolerance, time
							horizon, and financial objectives.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
							<div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Conservative Growth</h3>
							<p className="text-gray-600 mb-4">
								Low-risk investment strategy focusing on capital preservation with modest growth potential
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" 60% Fixed Income Securities</li>
								<li>" 25% Blue-chip Equities</li>
								<li>" 15% Real Estate Investment</li>
								<li>" Target Return: 6-8% annually</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Balanced Portfolio</h3>
							<p className="text-gray-600 mb-4">
								Moderate risk approach balancing growth potential with capital protection
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" 40% Growth Equities</li>
								<li>" 30% Fixed Income</li>
								<li>" 20% Commodity Investments</li>
								<li>" 10% Alternative Assets</li>
								<li>" Target Return: 9-12% annually</li>
							</ul>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
							<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Focused</h3>
							<p className="text-gray-600 mb-4">
								Higher risk strategy for long-term investors seeking maximum growth potential
							</p>
							<ul className="space-y-2 text-gray-600">
								<li>" 50% Growth & Emerging Markets</li>
								<li>" 25% Mining & Energy Sectors</li>
								<li>" 15% Technology Innovation</li>
								<li>" 10% Venture Capital</li>
								<li>" Target Return: 12-15% annually</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Real Estate Tokenization Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Real Estate Tokenization</h2>
							<p className="text-lg text-gray-600 mb-6">
								Real estate tokenization is an emerging trend that combines real estate investing with
								blockchain technology. This approach allows asset or fund owners to raise capital more
								efficiently and provides investors with unparalleled access to private real estate
								investments.
							</p>
							<div className="space-y-4">
								<div className="border-l-4 border-emerald-600 pl-4">
									<h4 className="font-semibold text-gray-900">Enhanced Transparency</h4>
									<p className="text-gray-600">
										Blockchain technology provides transparent and immutable investment records
									</p>
								</div>
								<div className="border-l-4 border-blue-600 pl-4">
									<h4 className="font-semibold text-gray-900">Increased Liquidity</h4>
									<p className="text-gray-600">
										Tokenization enables fractional ownership and easier asset trading
									</p>
								</div>
								<div className="border-l-4 border-purple-600 pl-4">
									<h4 className="font-semibold text-gray-900">Lower Barriers to Entry</h4>
									<p className="text-gray-600">
										Access premium real estate investments with smaller capital requirements
									</p>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8">
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Tokenization Benefits</h3>
							<div className="grid grid-cols-2 gap-6">
								<div className="text-left lg:text-center">
									<div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
									<p className="text-gray-600">Trading Access</p>
								</div>
								<div className="text-left lg:text-center">
									<div className="text-3xl font-bold text-emerald-600 mb-2">Global</div>
									<p className="text-gray-600">Market Reach</p>
								</div>
								<div className="text-left lg:text-center">
									<div className="text-3xl font-bold text-emerald-600 mb-2">Instant</div>
									<p className="text-gray-600">Settlement</p>
								</div>
								<div className="text-left lg:text-center">
									<div className="text-3xl font-bold text-emerald-600 mb-2">Low</div>
									<p className="text-gray-600">Transaction Costs</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Planning Services Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Retirement Planning</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Our retirement planning services extend beyond investment management to include comprehensive
							financial planning, tax optimization, and estate planning solutions.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-emerald-600 mb-2">$5B</div>
							<p className="text-gray-600">Annual Capital Placements</p>
							<p className="text-sm text-gray-500 mt-1">Since 1992</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
							<p className="text-gray-600">Years Experience</p>
							<p className="text-sm text-gray-500 mt-1">Proven Track Record</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
							<p className="text-gray-600">Satisfied Clients</p>
							<p className="text-sm text-gray-500 mt-1">Global Reach</p>
						</div>
						<div className="text-left lg:text-center bg-white rounded-lg p-6 shadow-md">
							<div className="text-3xl font-bold text-orange-600 mb-2">4</div>
							<p className="text-gray-600">Investment Sectors</p>
							<p className="text-sm text-gray-500 mt-1">Diversified Portfolio</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-16 bg-emerald-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
					<h2 className="text-3xl font-bold text-white mb-6">Start Planning Your Financial Future Today</h2>
					<p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
						Connect with our retirement planning specialists to develop a personalized investment strategy
						that aligns with your long-term financial goals.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Schedule Consultation
						</button>
						<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors">
							Download Retirement Guide
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Retirement;
