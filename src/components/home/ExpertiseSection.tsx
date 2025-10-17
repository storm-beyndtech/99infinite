import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, TrendingUp, Building, Users, Calculator, Shield } from "lucide-react";

const ExpertiseSection: React.FC = () => {
	const services = [
		{
			icon: <DollarSign className="w-6 h-6 text-white" />,
			title: "Capital Raising & Financing",
			description:
				"From bridge loans to permanent financing, we provide comprehensive debt and equity solutions.",
			bgColor: "from-cyan-50 to-blue-50",
			iconBg: "bg-cyan-600",
			textColor: "text-cyan-900",
			linkColor: "text-cyan-600 hover:text-cyan-700",
		},
		{
			icon: <TrendingUp className="w-6 h-6 text-white" />,
			title: "Advisory & Restructuring",
			description: "Strategic advisory services for complex transactions and workout solutions.",
			bgColor: "from-slate-50 to-gray-50",
			iconBg: "bg-slate-600",
			textColor: "text-slate-900",
			linkColor: "text-slate-600 hover:text-slate-700",
		},
		{
			icon: <Building className="w-6 h-6 text-white" />,
			title: "Asset Management",
			description: "Professional asset management services to maximize your real estate investment returns.",
			bgColor: "from-emerald-50 to-green-50",
			iconBg: "bg-emerald-600",
			textColor: "text-emerald-900",
			linkColor: "text-emerald-600 hover:text-emerald-700",
		},
		{
			icon: <Users className="w-6 h-6 text-white" />,
			title: "Investment Sales",
			description: "Expert guidance in gold asset investment sales and acquisitions.",
			bgColor: "from-orange-50 to-amber-50",
			iconBg: "bg-orange-600",
			textColor: "text-orange-900",
			linkColor: "text-orange-600 hover:text-orange-700",
		},
		{
			icon: <Calculator className="w-6 h-6 text-white" />,
			title: "Financial Analysis",
			description: "Comprehensive financial modeling and analysis for real estate investment decisions.",
			bgColor: "from-purple-50 to-indigo-50",
			iconBg: "bg-purple-600",
			textColor: "text-purple-900",
			linkColor: "text-purple-600 hover:text-purple-700",
		},
		{
			icon: <Shield className="w-6 h-6 text-white" />,
			title: "Risk Management",
			description: "Sophisticated risk assessment and mitigation strategies for your real estate portfolio.",
			bgColor: "from-rose-50 to-pink-50",
			iconBg: "bg-rose-600",
			textColor: "text-rose-900",
			linkColor: "text-rose-600 hover:text-rose-700",
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-left lg:text-center mb-12">
					<h2 className="text-2xl lg:text-3xl font-bold text-cyan-900 mb-4">Our Expertise</h2>
					<p className="text-gray-600 max-w-sm lg:mx-auto">
						Comprehensive capital solutions designed to meet your commercial real estate financing needs.
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
								to="/services"
								className={`${service.linkColor} font-semibold inline-flex items-center text-sm transition-colors`}
							>
								Learn More <ArrowRight className="w-4 h-4 ml-1" />
							</Link>
						</div>
					))}
				</div>

				<div className="text-left lg:text-center mt-12">
					<Link
						to="/services"
						className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-xl"
					>
						View All Services
						<ArrowRight className="w-5 h-5 ml-3" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ExpertiseSection;
