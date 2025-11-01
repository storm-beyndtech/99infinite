import React from "react";
import { Mail, MapPin } from "lucide-react";
import logo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: "About", href: "/about" },
		{ name: "Team", href: "/team" },
		{ name: "Gold", href: "/gold" },
		{ name: "Annual Report", href: "/annual-report" },
		{ name: "Contact", href: "/contact" },
	];

	const projects = [
		{ name: "Mining", href: "/mining" },
		{ name: "Agriculture", href: "/agriculture" },
		{ name: "Oil and Gas", href: "/oil-and-gas" },
		{ name: "Philanthropy", href: "/philanthropy" },
		{ name: "Retirement", href: "/retirement" },
	];

	return (
		<footer className="bg-gsp-navy text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Logo */}
					<div className="lg:col-span-1">
						<Link to="/">
							<img src={logo} alt="logo" className="h-16 mb-4" />
						</Link>
						<p className="text-sm text-gray-300">
							Building sustainable value through strategic investments in gold, mining, agriculture, and
							energy sectors.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link to={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Projects */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Projects</h3>
						<ul className="space-y-2">
							{projects.map((project) => (
								<li key={project.name}>
									<Link
										to={project.href}
										className="text-sm text-gray-300 hover:text-white transition-colors"
									>
										{project.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Information */}
					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
						<div className="space-y-3">
							<div className="flex items-start">
								<MapPin className="h-4 w-4 mr-3 text-gsp-teal mt-1 flex-shrink-0" />
								<div className="text-sm text-gray-300">
									<div>GOLDEN BEACH QLD 4551</div>
									<div>Australia</div>
								</div>
							</div>
							<div className="flex items-center">
								<Mail className="h-4 w-4 mr-2 text-gsp-teal" />
								<a
									href="mailto:support@99infinite.club"
									className="text-sm text-gray-300 hover:text-white transition-colors"
								>
									support@99infinite.club
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gsp-teal/20 mt-8 pt-8 text-center">
					<p className="text-xs text-gray-400">
						© {currentYear} 99Infinite Capital, Inc. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
