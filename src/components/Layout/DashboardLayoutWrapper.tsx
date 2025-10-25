import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import PageLoader from "../PageLoader";

// This wrapper ensures user is never null in DashboardLayout and its children
const DashboardLayoutWrapper: React.FC = () => {
	const { user, fetching } = useAuth();

	// Loading state
	if (fetching) {
		return <PageLoader />;
	}

	// Not authenticated
	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return (
		<DashboardLayout>
			<Outlet />
		</DashboardLayout>
	);
};

export default DashboardLayoutWrapper;
