import type React from "react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	return (
		<div className="min-h-screen dark:bg-black">
			<div className="h-full bg-gradient-to-b from-stone-50/20 to-cyan-50/30 dark:from-stone-950/70 dark:to-cyan-950/70">
				{/* Header - spans full width */}
				<Header setSidebarOpen={setSidebarOpen} sidebarCollapsed={sidebarCollapsed} />

				<div className="flex px-3 pt-16">
					{/* Sidebar - positioned under header with margin */}
					<div className="mt-2">
						<Sidebar
							sidebarOpen={sidebarOpen}
							setSidebarOpen={setSidebarOpen}
							sidebarCollapsed={sidebarCollapsed}
							setSidebarCollapsed={setSidebarCollapsed}
						/>
					</div>

					{/* Main content area */}
					<div className="flex-1 flex flex-col min-w-0 relative sm:ml-4">
						{/* Main content */}
						<main className="flex-1 mt-2 rounded-2xl bg-white/40 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-xl p-6 max-sm:px-3">
							{children}
						</main>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
