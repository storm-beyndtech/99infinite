import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Wheat, Fuel, Coins, TrendingUp, Building } from "lucide-react";

const ExpertiseSection: React.FC = () => {
	const services = [
		{
			icon: <Mountain className="w-6 h-6 text-white" />,
			title: "Mining Operations",
			description:
				"Iron ore extraction and gold mining operations with over $300M in community royalties and sustainable practices.",
			bgColor: "from-slate-50 to-gray-50",
			iconBg: "bg-slate-600",
			textColor: "text-slate-900",
			linkColor: "text-slate-600 hover:text-slate-700",
			route: "/projects/mining"
		},
		{
			icon: <Wheat className="w-6 h-6 text-white" />,
			title: "Agriculture & Livestock",
			description: "Australia's second largest beef producer with 340,000+ herd capacity and sustainable farming practices.",
			bgColor: "from-green-50 to-emerald-50",
			iconBg: "bg-green-600",
			textColor: "text-green-900",
			linkColor: "text-green-600 hover:text-green-700",
			route: "/projects/agriculture"
		},
		{
			icon: <Fuel className="w-6 h-6 text-white" />,
			title: "Oil & Gas",
			description: "Strategic energy investments and operations across oil and gas sectors with focus on efficiency and sustainability.",
			bgColor: "from-blue-50 to-indigo-50",
			iconBg: "bg-blue-600",
			textColor: "text-blue-900",
			linkColor: "text-blue-600 hover:text-blue-700",
			route: "/projects/oil-and-gas"
		},
		{
			icon: <Coins className="w-6 h-6 text-white" />,
			title: "Gold Refining",
			description: "Strategic partnerships in West Africa's largest gold-producing region with LBMA certification pursuit.",
			bgColor: "from-yellow-50 to-amber-50",
			iconBg: "bg-yellow-600",
			textColor: "text-yellow-900",
			linkColor: "text-yellow-600 hover:text-yellow-700",
			route: "/gold"
		},
		{
			icon: <TrendingUp className="w-6 h-6 text-white" />,
			title: "Investment Services",
			description: "Comprehensive investment solutions and portfolio management for high-net-worth individuals and institutions.",
			bgColor: "from-cyan-50 to-blue-50",
			iconBg: "bg-cyan-600",
			textColor: "text-cyan-900",
			linkColor: "text-cyan-600 hover:text-cyan-700",
			route: "/gold"
		},
		{
			icon: <Building className="w-6 h-6 text-white" />,
			title: "ESG Initiatives",
			description: "Leading environmental, social, and governance initiatives with 43% emissions reduction target by 2030.",
			bgColor: "from-emerald-50 to-green-50",
			iconBg: "bg-emerald-600",
			textColor: "text-emerald-900",
			linkColor: "text-emerald-600 hover:text-emerald-700",
			route: "/projects/philanthropy"
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-left lg:text-center mb-12">
					<h2 className="text-2xl lg:text-3xl font-bold text-cyan-900 mb-4">Our Expertise</h2>
					<p className="text-gray-600 max-w-3xl lg:mx-auto">
						Diversified investment solutions across mining, agriculture, energy, and precious metals with over 30 years 
						of global experience and $100B+ in capitalizations since inception.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-xl border border-opacity-20 hover:shadow-lg transition-shadow duration-300`}
						>
							<div className="flex items-center mb-6">
								<div
									className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mr-4`}
								>
									{service.icon}
								</div>
								<h3 className={`text-lg font-bold ${service.textColor}`}>{service.title}</h3>
							</div>
							<p className="text-gray-700 mb-4 text-sm leading-relaxed">{service.description}</p>
							<Link
								to={service.route}
								className={`${service.linkColor} font-semibold inline-flex items-center text-sm transition-colors`}
							>
								Learn More <ArrowRight className="w-4 h-4 ml-1" />
							</Link>
						</div>
					))}
				</div>

				<div className="text-left lg:text-center mt-12">
					<Link
						to="/about"
						className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-xl"
					>
						Learn About Our Journey
						<ArrowRight className="w-5 h-5 ml-3" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ExpertiseSection;
