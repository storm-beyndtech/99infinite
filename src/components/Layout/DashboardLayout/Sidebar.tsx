import React from "react";
import { NavLink } from "react-router-dom";
import {
	User,
	TrendingUp,
	ArrowDownLeft,
	History,
	Target,
	ChevronLeft,
	ChevronRight,
	X,
	Calendar,
	CreditCard,
	Wallet,
	Shield,
	Settings,
	DollarSign,
  LayoutPanelLeft,
} from "lucide-react";

interface SidebarProps {
	sidebarOpen: boolean;
	setSidebarOpen: (open: boolean) => void;
	sidebarCollapsed: boolean;
	setSidebarCollapsed: (collapsed: boolean) => void;
}

interface MenuItem {
	icon: React.ComponentType<{ className?: string }>;
	label: string;
	to?: string;
}

interface MenuGroup {
	title: string;
	items: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
	sidebarOpen,
	setSidebarOpen,
	sidebarCollapsed,
	setSidebarCollapsed,
}) => {
	const menuGroups: MenuGroup[] = [
		{
			title: "DASHBOARD",
			items: [
				{ icon: LayoutPanelLeft, label: "Wallet", to: "/dashboard" },
			],
		},
		{
			title: "INVESTMENTS",
			items: [
				{ icon: Target, label: "Investment Plans", to: "/dashboard/investment-plans" },
				{ icon: TrendingUp, label: "My Investments", to: "/dashboard/investments" },
			],
		},
		{
			title: "TRANSACTIONS",
			items: [
				{ icon: DollarSign, label: "Deposit", to: "/dashboard/deposit" },
				{ icon: Wallet, label: "Withdraw", to: "/dashboard/withdraw" },
			],
		},
		{
			title: "HISTORY",
			items: [
				{ icon: CreditCard, label: "Deposits", to: "/dashboard/deposit-log" },
				{ icon: ArrowDownLeft, label: "Withdrawals", to: "/dashboard/withdraw-log" },
				{ icon: History, label: "Transactions", to: "/dashboard/transactions" },
			],
		},
		{
			title: "ACCOUNT",
			items: [
				{ icon: User, label: "Profile", to: "/dashboard/profile" },
				{ icon: Shield, label: "KYC Verification", to: "/dashboard/kyc" },
				{ icon: Settings, label: "Settings", to: "/dashboard/settings" },
				{ icon: Calendar, label: "Events", to: "/dashboard/events" },
			],
		},
	];

	const handleNavClick = () => {
		setSidebarOpen(false);
	};

	return (
		<>
			{/* Mobile overlay */}
			{sidebarOpen && (
				<div
					className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
					onClick={() => setSidebarOpen(false)}
				/>
			)}

			{/* Sidebar */}
			<aside
				className={`
        fixed lg:static inset-y-0 left-0 z-30
        ${sidebarCollapsed ? "lg:w-20" : "lg:w-64"} 
        w-64 dark:bg-cyan-950/90 bg-[#001215] border border-cyan-900/50 dark:border-cyan-800/30 
      rounded-2xl shadow-2xl backdrop-blur-xl
        flex flex-col transform transition-all duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
			>
				{/* Header with mobile close button */}
				<div className="flex items-center justify-end lg:justify-center">
					{/* Mobile close button */}
					<button
						onClick={() => setSidebarOpen(false)}
						className="lg:hidden p-1 rounded-xl text-cyan-100 hover:bg-cyan-800/50 hover:text-white transition-all duration-200 border border-cyan-800/30 hover:border-cyan-700/50"
						aria-label="Close sidebar"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Menu Sections */}
				<div className="flex-1 px-4 py-8">
					<div className="space-y-6">
						{menuGroups.map((group, groupIndex) => (
							<div key={groupIndex} className="space-y-2">
								{!sidebarCollapsed && (
									<h3 className="text-xs font-semibold text-cyan-300/80 uppercase tracking-wider mb-3 px-1">
										{group.title}
									</h3>
								)}

								<nav className="space-y-2">
									{group.items.map((item, index) => (
										<div key={index} className="relative">
											<NavLink
												to={item.to!}
												end={item.to === "/dashboard"}
												onClick={handleNavClick}
												className={({ isActive }) =>
													`flex items-center ${
														sidebarCollapsed ? "lg:justify-center lg:px-2" : "space-x-3 px-3"
													} py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative border backdrop-blur-sm ${
														isActive
															? "bg-cyan-600/10 text-white border-cyan-400/50 dark:border-cyan-300/50 shadow-lg shadow-cyan-500/20"
															: "bg-cyan-950/5 text-cyan-100/70 hover:bg-cyan-800/50 dark:hover:bg-cyan-800/70 hover:text-white border-transparent hover:border-cyan-700/50 dark:hover:border-cyan-600/50"
													}`
												}
												title={sidebarCollapsed ? item.label : ""}
											>
												<item.icon className={`flex-shrink-0 ${sidebarCollapsed ? "w-5 h-5" : "w-4 h-4"}`} />
												{!sidebarCollapsed && <span className="truncate">{item.label}</span>}

												{sidebarCollapsed && (
													<div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 hidden lg:block pointer-events-none">
														{item.label}
													</div>
												)}
											</NavLink>
										</div>
									))}
								</nav>

								{/* Add spacing between groups when collapsed */}
								{sidebarCollapsed && groupIndex < menuGroups.length - 1 && (
									<div className="border-t border-cyan-800/40 dark:border-cyan-700/30 mt-4 pt-2" />
								)}
							</div>
						))}
					</div>
				</div>

				{/* Desktop collapse toggle button - positioned on the border */}
				<button
					onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
					className={`
            hidden lg:flex absolute -right-3 top-20 z-40 
            w-8 h-8 bg-white/90 dark:bg-slate-800/90 border border-cyan-300/50 dark:border-cyan-700/50 rounded-full shadow-lg backdrop-blur-sm
            hover:bg-white dark:hover:bg-slate-700 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300
            transition-all duration-200 items-center justify-center
            focus:outline-none focus:ring-2 focus:ring-cyan-400/50
          `}
					aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
				>
					{sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
				</button>
			</aside>
		</>
	);
};

export default Sidebar;
