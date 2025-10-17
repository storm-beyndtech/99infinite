import React, { useState } from "react";
import {
	TrendingUp,
	BarChart,
	DollarSign,
	MapPin,
	Users,
	Award,
	Building,
	Globe2,
} from "lucide-react";
import teambanner from "../assets/teambanner.png";

const About: React.FC = () => {
	const [activeTimelineItem, setActiveTimelineItem] = useState(0);

	const timelineData = [
		{
			year: "1992",
			title: "Foundation",
			description:
				"99Infinite Capital was founded with a vision to revolutionize investment strategies across global markets.",
			icon: <Building className="w-6 h-6" />,
			color: "from-blue-500 to-cyan-500",
		},
		{
			year: "2000",
			title: "Global Expansion",
			description:
				"Expanded operations internationally, establishing key partnerships in mining and agriculture sectors.",
			icon: <Globe2 className="w-6 h-6" />,
			color: "from-green-500 to-emerald-500",
		},
		{
			year: "2010",
			title: "Portfolio Diversification",
			description:
				"Diversified into oil & gas, becoming Australia's second largest beef producer with 340,000+ herd capacity.",
			icon: <Award className="w-6 h-6" />,
			color: "from-yellow-500 to-orange-500",
		},
		{
			year: "2019",
			title: "Gold Refining Leadership",
			description:
				"Strategic partnership in West Africa's largest gold-producing region, pioneering LBMA certification pursuit.",
			icon: <Users className="w-6 h-6" />,
			color: "from-purple-500 to-pink-500",
		},
		{
			year: "Present",
			title: "Sustainable Future",
			description:
				"Leading ESG initiatives with 43% emissions reduction target by 2030 and net zero by 2050.",
			icon: <MapPin className="w-6 h-6" />,
			color: "from-teal-500 to-cyan-500",
		},
	];

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
							<h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-left">About 99Infinite</h1>
							<p className="text-base sm:text-lg text-white/60 mt-4 max-w-[800px] text-left">
								More Than Advisors, We're Your Partners in Building Sustainable Wealth and Strategic
								Investment Solutions Across Global Markets.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Cards Section - Three teal cards */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-cyan-600 text-white p-8 rounded-lg">
							<div className="text-4xl font-bold mb-2">
								$100B<span className="text-gsp-orange">+</span>
							</div>
							<div className="text-sm">
								Capitalizations Since
								<br />
								Our Inception in 1992
							</div>
						</div>
						<div className="bg-cyan-600 text-white p-8 rounded-lg">
							<div className="text-4xl font-bold mb-2">
								$5B<span className="text-gsp-orange">+</span>
							</div>
							<div className="text-sm">
								In Annual Capital
								<br />
								Placements per Year
							</div>
						</div>
						<div className="bg-cyan-600 text-white p-8 rounded-lg">
							<div className="text-4xl font-bold mb-2">
								30<span className="text-gsp-orange">+</span>
							</div>
							<div className="text-sm">
								Years of Industry
								<br />
								Experience
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Interactive Journey Timeline Section */}
			<section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-cyan-200/10 rounded-full blur-3xl"></div>
					<div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-tr from-cyan-100/15 to-blue-200/10 rounded-full blur-2xl"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
							Our <span className="text-cyan-600">Journey</span> Through Time
						</h2>
						<p className="text-lg lg:text-xl text-gray-600 max-w-3xl lg:mx-auto font-light leading-relaxed">
							From humble beginnings to global leadership, discover the milestones that shaped 99Infinite into
							the investment powerhouse it is today.
						</p>
					</div>

					{/* Interactive Timeline */}
					<div className="relative">
						{/* Timeline Line - Hidden on mobile, visible on desktop */}
						<div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-200 via-blue-300 to-cyan-200 rounded-full"></div>
						
						{/* Mobile Timeline Line - Left aligned */}
						<div className="lg:hidden absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-cyan-200 via-blue-300 to-cyan-200 rounded-full"></div>

						{/* Timeline Items */}
						<div className="space-y-8 lg:space-y-12">
							{timelineData.map((item, index) => (
								<div
									key={index}
									className={`relative ${
										// Mobile: all items left-aligned
										// Desktop: alternating layout
										'lg:flex lg:items-center'
									} ${
										index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
									}`}
									onMouseEnter={() => setActiveTimelineItem(index)}
								>
									{/* Content Card */}
									<div className={`
										ml-16 lg:ml-0 lg:w-5/12 
										${index % 2 === 0 ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:text-left"}
									`}>
										<div
											className={`group bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-100/50 hover:border-cyan-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
												activeTimelineItem === index ? "shadow-2xl -translate-y-2 border-cyan-200" : ""
											}`}
										>
											{/* Mobile & Desktop Icon/Year Layout */}
											<div className={`flex items-center gap-3 mb-4 
												${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}
											`}>
												<div
													className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${item.color} rounded-[35%] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}
												>
													{item.icon}
												</div>
												<div
													className={`text-xl lg:text-2xl font-bold text-gray-800 ${
														index % 2 === 0 ? "lg:order-first" : ""
													}`}
												>
													{item.year}
												</div>
											</div>
											
											{/* Title and Description - Left aligned on mobile */}
											<h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 text-left lg:text-inherit">
												{item.title}
											</h3>
											<p className="text-gray-600 leading-relaxed text-left lg:text-inherit">{item.description}</p>
										</div>
									</div>

									{/* Timeline Dot */}
									<div className="absolute lg:left-1/2 left-6 lg:transform lg:-translate-x-1/2 -translate-x-1/2 z-10">
										<div
											className={`w-4 h-4 lg:w-6 lg:h-6 bg-white border-2 lg:border-4 rounded-full transition-all duration-300 ${
												activeTimelineItem === index
													? "border-cyan-500 scale-125 shadow-lg"
													: "border-gray-300"
											}`}
										>
											<div
												className={`w-full h-full bg-gradient-to-br ${
													item.color
												} rounded-full transform transition-all duration-300 ${
													activeTimelineItem === index ? "scale-100" : "scale-0"
												}`}
											></div>
										</div>
									</div>

									{/* Spacer for opposite side - Desktop only */}
									<div className="hidden lg:block lg:w-5/12"></div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Nationwide Presence Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gsp-navy text-left lg:text-center mb-12">Nationwide Presence</h2>
					{/* GSP Nationwide Presence Map */}
					<div className="rounded-lg overflow-hidden">
						<img
							src="https://www.gspartners.com/wp-content/uploads/2025/03/gsp-map-1536x743.png"
							alt="GSP Nationwide Presence Map showing office locations across the United States"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</section>

			{/* Mission & Values Section */}
			<section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-2xl"></div>
					<div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-teal-500/10 to-cyan-500/5 rounded-full blur-xl"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left lg:text-center mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
							Our <span className="text-cyan-400">Mission</span> & Values
						</h2>
						<p className="text-lg lg:text-xl text-gray-300 max-w-3xl lg:mx-auto font-light leading-relaxed">
							Guided by principles of integrity, innovation, and sustainability, we're committed to delivering
							exceptional value while building a better future.
						</p>
					</div>

					{/* Mission Statement */}
					<div className="mb-16">
						<div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-cyan-500/20">
							<div className="text-left lg:text-center">
								<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-cyan-400">Our Mission</h3>
								<p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-4xl lg:mx-auto">
									To democratize access to premium investment opportunities while fostering sustainable growth
									across global markets through innovative strategies, strategic partnerships, and unwavering
									commitment to our clients' success.
								</p>
							</div>
						</div>
					</div>

					{/* Core Values Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: <Award className="w-8 h-8" />,
								title: "Excellence",
								description:
									"We pursue the highest standards in everything we do, continuously innovating to exceed expectations and deliver exceptional results.",
								color: "from-yellow-500 to-orange-500",
							},
							{
								icon: <Users className="w-8 h-8" />,
								title: "Integrity",
								description:
									"Built on trust and transparency, our relationships are founded on ethical practices and honest communication at every level.",
								color: "from-blue-500 to-cyan-500",
							},
							{
								icon: <Globe2 className="w-8 h-8" />,
								title: "Sustainability",
								description:
									"Committed to responsible investment practices that create long-term value while preserving our planet for future generations.",
								color: "from-green-500 to-emerald-500",
							},
							{
								icon: <TrendingUp className="w-8 h-8" />,
								title: "Innovation",
								description:
									"Leveraging cutting-edge technology and forward-thinking strategies to identify and capitalize on emerging opportunities.",
								color: "from-purple-500 to-pink-500",
							},
							{
								icon: <Building className="w-8 h-8" />,
								title: "Partnership",
								description:
									"We believe in the power of collaboration, building lasting relationships that drive mutual success and shared prosperity.",
								color: "from-indigo-500 to-blue-500",
							},
							{
								icon: <MapPin className="w-8 h-8" />,
								title: "Global Impact",
								description:
									"Creating positive change across communities worldwide through strategic investments and community development initiatives.",
								color: "from-teal-500 to-cyan-500",
							},
						].map((value, index) => (
							<div
								key={index}
								className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
							>
								<div
									className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-[35%] flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
								>
									{value.icon}
								</div>
								<h4 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
									{value.title}
								</h4>
								<p className="text-gray-300 leading-relaxed">{value.description}</p>
							</div>
						))}
					</div>

					{/* Call to Action */}
					<div className="mt-16 text-left lg:text-center">
						<div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
							<h3 className="text-xl lg:text-2xl font-bold mb-4 text-cyan-400">Ready to Partner with Us?</h3>
							<p className="text-gray-300 mb-6 max-w-2xl lg:mx-auto">
								Join thousands of investors who trust 99Infinite to guide their financial journey towards
								sustainable wealth creation.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 lg:justify-center">
								<button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
									Start Your Journey
								</button>
								<button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Service Feature Boxes */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-8">
						{/* Creative Financing Box */}
						<div className="bg-white p-8 rounded-lg shadow-sm">
							<div className="mb-4">
								<TrendingUp className="h-12 w-12 text-cyanbg-cyan-600" />
							</div>
							<h3 className="text-xl font-bold text-gsp-navy mb-4">
								Creative Financing for Complex Projects
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								With integrity and transparency at our core, we structure flexible financing solutions for
								complex projects, including construction, land, and bridge loans.
							</p>
						</div>

						{/* Market Insights Box */}
						<div className="bg-white p-8 rounded-lg shadow-sm">
							<div className="mb-4">
								<BarChart className="h-12 w-12 text-cyanbg-cyan-600" />
							</div>
							<h3 className="text-xl font-bold text-gsp-navy mb-4">Market Insights That Drive Results</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Leveraging proprietary software, real-time data, and industry expertise, our team navigates
								market shifts and optimizes capital strategies with confidence.
							</p>
						</div>

						{/* Tailored Solutions Box */}
						<div className="bg-white p-8 rounded-lg shadow-sm">
							<div className="mb-4">
								<DollarSign className="h-12 w-12 text-cyanbg-cyan-600" />
							</div>
							<h3 className="text-xl font-bold text-gsp-navy mb-4">Tailored Capital Solutions</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								From bridge and construction financing for acquisitions, refinance/recapitalizations,
								development and historic adaptive reuse, we're committed to delivering the best result.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
