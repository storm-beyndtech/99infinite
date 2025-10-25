import type React from "react";
import { LayoutDashboard, LogOut, Menu, User, User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../UI/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "../../UI/popover";
import { useEffect, useState } from "react";
import DarkModeSwitcher from "@/components/UI/DarkModeSwitcher";
import { contextData, useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

interface HeaderProps {
	setSidebarOpen: (open: boolean) => void;
	sidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
	const [mounted, setMounted] = useState(false);
	const { logout } = useAuth();
	const { user } = contextData();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl border-b border-gray-700/30 dark:border-slate-700/30 px-4 md:px-6 py-2 flex items-center justify-between transition-all duration-300">
			{/* Left side - Mobile menu button and Logo */}
			<div className="flex items-center gap-4">
				<button
					onClick={() => setSidebarOpen(true)}
					className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white/20 dark:bg-slate-800/30 backdrop-blur-sm border border-white/30 dark:border-slate-700/50 hover:bg-white/30 dark:hover:bg-slate-700/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
					aria-label="Open sidebar"
				>
					<Menu className="w-5 h-5" />
				</button>

				{/* Logo - visible on all screen sizes */}
				<div className="dark:hidden">
					<Logo variant="dark" />
				</div>
				<div className="hidden dark:block">
					<Logo />
				</div>
			</div>

			{/* Page title for mobile */}
			<h1 className="lg:hidden text-lg font-semibold text-slate-800 dark:text-slate-200">Dashboard</h1>

			{/* Right side - Theme toggle and Profile with popover */}
			<div className="flex items-center gap-4">
				{/* Theme Toggle Styled as Radio Button */}
				<DarkModeSwitcher />

				<Popover>
					<PopoverTrigger asChild>
						<button className="flex items-center space-x-3 focus:outline-none bg-white/20 dark:bg-slate-800/30 backdrop-blur-sm border border-white/30 dark:border-slate-700/50 p-2 rounded-xl hover:bg-white/30 dark:hover:bg-slate-700/40 transition-all duration-200">
							<div className="relative">
								<Avatar className="w-8 h-8 ring-2 ring-white/50 dark:ring-slate-700/50">
									<AvatarImage
										src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user.username}`}
										alt="User avatar"
									/>
									<AvatarFallback className="bg-gradient-to-br from-cyan-500 to-amber-500 text-white text-sm">
										<UserIcon />
									</AvatarFallback>
								</Avatar>
								{/* Active green dot */}
								<span className="absolute -bottom-0.5 -right-0.5 block w-3 h-3 rounded-full ring-2 ring-white/70 dark:ring-slate-800/70 bg-green-500" />
							</div>
							<div className="hidden md:flex flex-col items-start">
								<span className="text-sm font-medium text-slate-800 dark:text-slate-200">
									{user.username || user.personalInfo?.firstName || "User"}
								</span>
								<span className="text-xs text-slate-600 dark:text-slate-400">{user.email}</span>
							</div>
						</button>
					</PopoverTrigger>
					<PopoverContent
						className="w-64 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/30 dark:border-slate-700/50 shadow-xl rounded-2xl"
						align="end"
					>
						<div className="flex flex-col space-y-3">
							{/* User info */}
							<div className="flex items-center space-x-3">
								<Avatar className="w-10 h-10 ring-2 ring-white/50 dark:ring-slate-700/50">
									<AvatarImage
										src={
											user.profileImage?.trim()
												? user.profileImage
												: `https://ui-avatars.com/api/?name=${encodeURIComponent(
														user.username || user.personalInfo?.firstName || "User",
												  )}&background=0D8ABC&color=fff&rounded=true`
										}
										alt="User avatar"
									/>
									<AvatarFallback className="bg-gradient-to-br from-cyan-500 to-amber-500 text-white text-sm">
										<UserIcon />
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-col">
									<span className="text-sm font-medium text-slate-800 dark:text-slate-200">
										{user.username || user.personalInfo?.firstName || "User"}
									</span>
									<span className="text-xs text-slate-600 dark:text-slate-400">{user.email}</span>
								</div>
							</div>

							{/* Status indicator */}
							<div className="flex items-center space-x-2 px-3 py-2 bg-green-500/10 dark:bg-green-500/20 border border-green-500/20 dark:border-green-500/30 rounded-xl backdrop-blur-sm">
								<span className="inline-block w-2 h-2 rounded-full bg-green-500" />
								<span className="text-xs text-green-700 dark:text-green-300 font-medium">Online</span>
							</div>

							{/* Menu items */}
							<div className="space-y-1">
								<Link
									to="/dashboard"
									className="flex items-center px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 border border-transparent hover:border-white/30 dark:hover:border-slate-700/50"
								>
									<LayoutDashboard size={16} className="mr-3 text-cyan-600 dark:text-cyan-400" />
									Dashboard
								</Link>
								<Link
									to="/dashboard/profile"
									className="flex items-center px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 border border-transparent hover:border-white/30 dark:hover:border-slate-700/50"
								>
									<User size={16} className="mr-3 text-amber-600 dark:text-amber-400" />
									Profile
								</Link>
								<div
									onClick={() => logout()}
									className="flex cursor-pointer items-center px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-red-500/10 dark:hover:bg-red-500/20 rounded-xl transition-all duration-200 border border-transparent hover:border-red-500/20 dark:hover:border-red-500/30"
								>
									<LogOut size={16} className="mr-3 text-red-500" />
									Logout
								</div>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</header>
	);
};

export default Header;
