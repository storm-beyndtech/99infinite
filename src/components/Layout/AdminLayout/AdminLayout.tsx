import { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

declare global {
  interface Window {
	Tawk_API?: {
	  hideWidget?: () => void;
	  showWidget?: () => void;
	};
  }
}

interface AdminLayoutProps {
	children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

useEffect(() => {
  // Hide chat widgets for admin panel
  const chatCtn = document.getElementById('smartsupp-widget-container');
  if (chatCtn) chatCtn.style.display = 'none';

  const tawkIframe = document.querySelector('iframe[title="chat widget"]') as HTMLIFrameElement;
  if (tawkIframe) tawkIframe.style.display = 'none';

  if (window.Tawk_API?.hideWidget) window.Tawk_API.hideWidget();

  return () => {
    // Restore chat widgets when leaving admin panel
    if (chatCtn) chatCtn.style.display = 'block';
    if (tawkIframe) tawkIframe.style.display = 'block';
    if (window.Tawk_API?.showWidget) window.Tawk_API.showWidget();
  };
}, []);

	return (
		<div className="dark:bg-black dark:text-bodydark">
			<div className="flex h-screen overflow-hidden">
				<AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
					<AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

					<main>
						<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
							{children}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}
