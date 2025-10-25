import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../../assets/logo-2-dark.png";
import { useAuth } from "../../contexts/AuthContext";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
	const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
	const location = useLocation();
	const { user } = useAuth();

	// Close mobile menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
		setMobileDropdown(null);
		setActiveDropdown(null);
		if (dropdownTimeout) {
			clearTimeout(dropdownTimeout);
			setDropdownTimeout(null);
		}
	}, [location, dropdownTimeout]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	const navigation = [
		{ name: "ABOUT", href: "/about", hasDropdown: false },
		{ name: "TEAM", href: "/team", hasDropdown: false },
		{ name: "GOLD", href: "/gold", hasDropdown: false },
		{ name: "ANNUAL REPORT", href: "/annual-report", hasDropdown: false },
		{
			name: "PROJECTS",
			href: "#",
			hasDropdown: true,
			dropdownItems: [
				{ name: "Mining", href: "/mining" },
				{ name: "Agriculture", href: "/agriculture" },
				{ name: "Oil And Gas", href: "/oil-and-gas" },
				{ name: "Philanthropy", href: "/philanthropy" },
				{ name: "Retirement", href: "/retirement" },
			],
		},
		{ name: "CONTACT", href: "/contact" },
	];

	const isActive = (path: string) => {
		if (path === "/") {
			return location.pathname === "/";
		}
		return location.pathname.startsWith(path);
	};

	const handleDropdownEnter = (itemName: string) => {
		if (dropdownTimeout) {
			clearTimeout(dropdownTimeout);
			setDropdownTimeout(null);
		}
		setActiveDropdown(itemName);
	};

	const handleDropdownLeave = () => {
		const timeout = setTimeout(() => {
			setActiveDropdown(null);
		}, 150);
		setDropdownTimeout(timeout);
	};

	const handleDropdownMenuEnter = (itemName: string) => {
		if (dropdownTimeout) {
			clearTimeout(dropdownTimeout);
			setDropdownTimeout(null);
		}
		setActiveDropdown(itemName);
	};

	const handleDropdownMenuLeave = () => {
		const timeout = setTimeout(() => {
			setActiveDropdown(null);
		}, 150);
		setDropdownTimeout(timeout);
	};

	return (
		<header className="bg-white shadow-sm border-b border-gray-100">
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link to="/">
						<img src={logo} alt="logo" className="h-9" />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{navigation.map((item) => (
							<div
								key={item.name}
								className="relative group"
								onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
								onMouseLeave={handleDropdownLeave}
							>
								{item.hasDropdown ? (
									<button
										onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
										className={`flex items-center px-1 py-2 text-sm font-semibold tracking-wide transition-colors ${
											activeDropdown === item.name
												? "text-gsp-navy border-b-2 border-gsp-teal"
												: "text-gray-700 hover:text-gsp-navy"
										}`}
									>
										{item.name}
										<ChevronDown className="ml-1 h-4 w-4" />
									</button>
								) : (
									<Link
										to={item.href}
										className={`flex items-center px-1 py-2 text-sm font-semibold tracking-wide transition-colors ${
											isActive(item.href)
												? "text-gsp-navy border-b-2 border-gsp-teal"
												: "text-gray-700 hover:text-gsp-navy"
										}`}
									>
										{item.name}
									</Link>
								)}

								{/* Dropdown Menu */}
								{item.hasDropdown && item.dropdownItems && activeDropdown === item.name && (
									<div
										className="absolute top-full left-0 pt-2 w-52 z-50"
										onMouseEnter={() => handleDropdownMenuEnter(item.name)}
										onMouseLeave={handleDropdownMenuLeave}
									>
										<div className="bg-white shadow-xl border border-gray-200 rounded-lg">
											{item.dropdownItems.map((dropdownItem) => (
												<Link
													key={dropdownItem.name}
													to={dropdownItem.href}
													className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gsp-navy transition-colors"
													onClick={() => setActiveDropdown(null)}
												>
													{dropdownItem.name}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						))}

						{/* Subscribe/Dashboard Button */}
						<Link
							to={user ? "/dashboard" : "/register"}
							className="border border-gray-300 text-gray-200 bg-black hover:border-gsp-navy px-4 py-2 text-sm font-semibold tracking-wide transition-colors"
						>
							{user ? "DASHBOARD" : "GET STARTED"}
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden">
						<button
							type="button"
							className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gsp-navy focus:outline-none"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Overlay */}
				{isMenuOpen && (
					<div className="fixed inset-0 z-50 lg:hidden">
						{/* Backdrop */}
						<div
							className="fixed inset-0 bg-opacity-50 backdrop-blur-sm transition-opacity"
							onClick={() => setIsMenuOpen(false)}
						/>

						{/* Slide-out Menu */}
						<div
							className={`fixed top-0 right-0 h-full w-80 bg-cyan-950 shadow-2xl transform transition-transform duration-300 ease-in-out ${
								isMenuOpen ? "translate-x-0" : "translate-x-full"
							}`}
						>
							{/* Menu Header */}
							<div className="flex items-center justify-between p-6 border-b border-slate-700">
								<div className="text-white">
									<div className="text-2xl font-bold tracking-tight">
										<span className="text-3xl">9</span>9
									</div>
									<div className="text-xs text-slate-300 leading-tight">
										INFINITE <br /> CAPITAL
									</div>
								</div>
								<button
									onClick={() => setIsMenuOpen(false)}
									className="text-white hover:text-cyan-400 p-2 rounded-lg hover:bg-white/10 transition-colors"
								>
									<X className="h-6 w-6" />
								</button>
							</div>

							{/* Menu Items */}
							<div className="px-6 py-6 space-y-1">
								{navigation.map((item) => (
									<div key={item.name}>
										{/* Main Menu Item */}
										<div className="flex items-center justify-between">
											{item.hasDropdown ? (
												<button
													onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
													className="flex-1 flex items-center justify-between py-3 text-base font-semibold tracking-wide transition-colors text-white hover:text-cyan-400"
												>
													<span>{item.name}</span>
													{mobileDropdown === item.name ? (
														<ChevronUp className="h-4 w-4" />
													) : (
														<ChevronDown className="h-4 w-4" />
													)}
												</button>
											) : (
												<Link
													to={item.href}
													className={`flex-1 block py-3 text-base font-semibold tracking-wide transition-colors ${
														isActive(item.href) ? "text-cyan-400" : "text-white hover:text-cyan-400"
													}`}
													onClick={() => setIsMenuOpen(false)}
												>
													{item.name}
												</Link>
											)}
										</div>

										{/* Mobile Dropdown Items */}
										{item.hasDropdown && item.dropdownItems && mobileDropdown === item.name && (
											<div className="pl-4 pb-2 space-y-1 bg-cyan-950 rounded-lg mx-4 p-3 mt-2">
												{item.dropdownItems.map((dropdownItem) => (
													<Link
														key={dropdownItem.name}
														to={dropdownItem.href}
														className="block py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded px-3 transition-colors"
														onClick={() => setIsMenuOpen(false)}
													>
														{dropdownItem.name}
													</Link>
												))}
											</div>
										)}
									</div>
								))}

								{/* Subscribe/Dashboard Button */}
								<Link
									to={user ? "/dashboard" : "/register"}
									className="block mt-8 py-3 px-6 border-2 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-cyan-900 font-semibold tracking-wide transition-colors rounded-lg"
									onClick={() => setIsMenuOpen(false)}
								>
									{user ? "Dashboard" : "Get Started"}
								</Link>
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
