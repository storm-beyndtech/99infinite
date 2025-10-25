import React from "react";
import teambanner from "../../assets/teambanner.png";
import philanthropy from "../../assets/philantropy.png";

const Philanthropy: React.FC = () => {
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
							<h1 className="text-5xl lg:text-6xl font-bold text-left">Philanthropy</h1>
							<p className="text-base sm:text-lg text-white/60 mt-4 max-w-[800px] text-left">
								Committed to creating positive change through strategic philanthropic investments and
								community development initiatives that support sustainable growth and social responsibility.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Our Social Impact Mission</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							99Infinite believes in leading by example through strong and sustained commitment to responsible
							business practices. We contribute for a better and more efficient tomorrow through strategic
							community investments and social development programs.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-left lg:text-center bg-purple-50 rounded-lg p-6">
							<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Community Health</h3>
							<p className="text-gray-600">
								Supporting health initiatives and medical programs in communities where we operate
							</p>
						</div>
						<div className=" bg-blue-50 rounded-lg p-6">
							<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Education Programs</h3>
							<p className="text-gray-600">
								Investing in educational opportunities and skill development for sustainable futures
							</p>
						</div>
						<div className=" bg-green-50 rounded-lg p-6">
							<div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">Arts & Culture</h3>
							<p className="text-gray-600">
								Preserving and promoting cultural heritage through arts and cultural support programs
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Investment Areas Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Community Investment Focus</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Our philanthropic initiatives focus on sustainable development and community empowerment across
							all regions where 99Infinite operates, creating lasting positive impact.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<img
								src={philanthropy}
								alt="Philanthropy and Community Development"
								className="rounded-lg shadow-lg w-full h-96 object-cover"
							/>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Infrastructure Development</h3>
							<div className="space-y-4">
								<div className="border-l-4 border-purple-600 pl-4">
									<h4 className="font-semibold text-gray-900">Rural Infrastructure</h4>
									<p className="text-gray-600">
										Building essential infrastructure in rural communities to support economic development
									</p>
								</div>
								<div className="border-l-4 border-blue-600 pl-4">
									<h4 className="font-semibold text-gray-900">Technology Access</h4>
									<p className="text-gray-600">
										Improving digital connectivity and technology access in underserved areas
									</p>
								</div>
								<div className="border-l-4 border-green-600 pl-4">
									<h4 className="font-semibold text-gray-900">Environmental Projects</h4>
									<p className="text-gray-600">
										Supporting environmental conservation and sustainable development initiatives
									</p>
								</div>
							</div>
						</div>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">Skill Development</h3>
							<div className="space-y-4">
								<div className="border-l-4 border-orange-600 pl-4">
									<h4 className="font-semibold text-gray-900">Vocational Training</h4>
									<p className="text-gray-600">
										Providing vocational training and skill transfers for sustainable employment
									</p>
								</div>
								<div className="border-l-4 border-red-600 pl-4">
									<h4 className="font-semibold text-gray-900">Youth Programs</h4>
									<p className="text-gray-600">
										Supporting youth development and mentorship programs for future leaders
									</p>
								</div>
								<div className="border-l-4 border-indigo-600 pl-4">
									<h4 className="font-semibold text-gray-900">Women's Empowerment</h4>
									<p className="text-gray-600">
										Initiatives focused on women's economic empowerment and leadership development
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className="bg-purple-50 rounded-lg p-8">
								<h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Skills Training</h3>
								<div className="space-y-4">
									<div className="flex items-start">
										<div className="flex-shrink-0">
											<div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
												<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-semibold text-gray-900">Digital Literacy Programs</h4>
											<p className="text-gray-600">Computer skills and digital technology training for community members</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0">
											<div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
												<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-semibold text-gray-900">Business Development</h4>
											<p className="text-gray-600">Entrepreneurship training and small business support initiatives</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0">
											<div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
												<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg font-semibold text-gray-900">Leadership Training</h4>
											<p className="text-gray-600">Developing community leaders and management skills</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Impact Statistics Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Making a Measurable Difference</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Our commitment to social responsibility is reflected in tangible outcomes and sustained
							community development across all our operational areas.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-left lg:text-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
							<div className="text-3xl font-bold text-purple-600 mb-2">$300M+</div>
							<p className="text-gray-600">Community Royalties</p>
							<p className="text-sm text-gray-500 mt-1">Over 7 years</p>
						</div>
						<div className="text-left lg:text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
							<div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
							<p className="text-gray-600">Community Projects</p>
							<p className="text-sm text-gray-500 mt-1">Active initiatives</p>
						</div>
						<div className="text-left lg:text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
							<div className="text-3xl font-bold text-green-600 mb-2">15</div>
							<p className="text-gray-600">Partner Organizations</p>
							<p className="text-sm text-gray-500 mt-1">Strategic alliances</p>
						</div>
						<div className="text-left lg:text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
							<div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
							<p className="text-gray-600">Lives Impacted</p>
							<p className="text-sm text-gray-500 mt-1">Direct beneficiaries</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="py-16 bg-purple-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
					<h2 className="text-3xl font-bold text-white mb-6">Partner with Us for Social Impact</h2>
					<p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
						Join 99Infinite in creating meaningful change through strategic philanthropic investments and
						community development partnerships.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Explore Partnership Opportunities
						</button>
						<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
							Download Impact Report
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Philanthropy;
