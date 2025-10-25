import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Layout from "./components/Layout/Layout";
import DashboardLayoutWrapper from "./components/Layout/DashboardLayoutWrapper";
import AdminLayoutWrapper from "./components/Layout/AdminLayoutWrapper";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Gold from "./pages/Gold";
import AnnualReport from "./pages/AnnualReport";
import Mining from "./pages/projects/Mining";
import Agriculture from "./pages/projects/Agriculture";
import OilAndGas from "./pages/projects/OilAndGas";
import Philanthropy from "./pages/projects/Philanthropy";
import Retirement from "./pages/projects/Retirement";

// Auth pages
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

// Dashboard pages
import Dashboard from "./pages/Dashboard/Dashboard";
import AllTransactions from "./pages/Dashboard/AllTransactions";
import Deposit from "./pages/Dashboard/Deposit";
import DepositLog from "./pages/Dashboard/DepositLog";
import Events from "./pages/Dashboard/Events";
import InvestmentLog from "./pages/Dashboard/InvestmentLog";
import InvestmentPlan from "./pages/Dashboard/InvestmentPlan";
import KYC from "./pages/Dashboard/KYC";
import Profile from "./pages/Dashboard/Profile";
import Withdraw from "./pages/Dashboard/Withdraw";
import WithdrawLog from "./pages/Dashboard/WithdrawLog";

// Admin pages
import Admin from "./pages/Admin/Admin";
import AdminSettings from "./pages/Admin/AdminSettings";
import ActiveUsers from "./pages/Admin/ActiveUsers";
import ApprovedDeposits from "./pages/Admin/ApprovedDeposits";
import ApprovedWithdrawals from "./pages/Admin/ApprovedWithdrawals";
import BannedUsers from "./pages/Admin/BannedUsers";
import InvestmentHistory from "./pages/Admin/InvestmentHistory";
import KycApproval from "./pages/Admin/KycApproval";
import ManageInvestments from "./pages/Admin/ManageInvestments";
import ManagePlans from "./pages/Admin/ManagePlans";
import PendingDeposits from "./pages/Admin/PendingDeposits";
import PendingWithdrawals from "./pages/Admin/PendingWithdrawals";
import RejectedDeposits from "./pages/Admin/RejectedDeposits";
import RejectedWithdrawals from "./pages/Admin/RejectedWithdrawals";
import SendMail from "./pages/Admin/SendMail";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { user, fetching } = useAuth();

	if (fetching) {
		return <PageLoader />;
	}

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
};

// Admin route wrapper
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
	const { user, fetching } = useAuth();

	if (fetching) {
		return <PageLoader />;
	}

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	if (!user.isAdmin) {
		return <Navigate to="/dashboard" replace />;
	}

	return <>{children}</>;
};

// Auth route wrapper (redirects authenticated users)
const AuthRoute = ({ children }: { children: React.ReactNode }) => {
	const { user, fetching } = useAuth();

	if (fetching) {
		return <PageLoader />;
	}

	if (user) {
		return <Navigate to="/dashboard" replace />;
	}

	return <>{children}</>;
};

const AppRoutes = () => {
	return (
		<Routes>
			<ScrollToTop />
			{/* Public routes */}
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="team" element={<Team />} />
				<Route path="team/:slug" element={<Team />} />
				<Route path="gold" element={<Gold />} />
				<Route path="annual-report" element={<AnnualReport />} />
				<Route path="mining" element={<Mining />} />
				<Route path="agriculture" element={<Agriculture />} />
				<Route path="oil-and-gas" element={<OilAndGas />} />
				<Route path="philanthropy" element={<Philanthropy />} />
				<Route path="retirement" element={<Retirement />} />
				<Route path="contact" element={<Contact />} />
				<Route path="support" element={<Contact />} />
			</Route>

			{/* Protected Dashboard routes */}
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute>
						<DashboardLayoutWrapper />
					</ProtectedRoute>
				}
			>
				<Route index element={<Dashboard />} />
				<Route path="transactions" element={<AllTransactions />} />
				<Route path="deposit" element={<Deposit />} />
				<Route path="deposit-log" element={<DepositLog />} />
				<Route path="events" element={<Events />} />
				<Route path="investments" element={<InvestmentLog />} />
				<Route path="investment-plans" element={<InvestmentPlan />} />
				<Route path="kyc" element={<KYC />} />
				<Route path="profile" element={<Profile />} />
				<Route path="settings" element={<Profile />} />
				<Route path="withdraw" element={<Withdraw />} />
				<Route path="withdraw-log" element={<WithdrawLog />} />
			</Route>

			{/* Protected Admin routes */}
			<Route
				path="/admin"
				element={
					<AdminRoute>
						<AdminLayoutWrapper />
					</AdminRoute>
				}
			>
				<Route index element={<Admin />} />
				<Route path="settings" element={<AdminSettings />} />
				<Route path="users" element={<ActiveUsers />} />
				<Route path="deposits/approved" element={<ApprovedDeposits />} />
				<Route path="withdrawals/approved" element={<ApprovedWithdrawals />} />
				<Route path="users/banned" element={<BannedUsers />} />
				<Route path="investments/history" element={<InvestmentHistory />} />
				<Route path="kyc" element={<KycApproval />} />
				<Route path="investments" element={<ManageInvestments />} />
				<Route path="plans" element={<ManagePlans />} />
				<Route path="deposits/pending" element={<PendingDeposits />} />
				<Route path="withdrawals/pending" element={<PendingWithdrawals />} />
				<Route path="deposits/rejected" element={<RejectedDeposits />} />
				<Route path="withdrawals/rejected" element={<RejectedWithdrawals />} />
				<Route path="send-mail" element={<SendMail />} />
			</Route>

			{/* Auth routes outside of layouts */}
			<Route
				path="login"
				element={
					<AuthRoute>
						<Login />
					</AuthRoute>
				}
			/>
			<Route
				path="auth/login"
				element={
					<AuthRoute>
						<Login />
					</AuthRoute>
				}
			/>
			<Route
				path="register"
				element={
					<AuthRoute>
						<Register />
					</AuthRoute>
				}
			/>
			<Route
				path="auth/register"
				element={
					<AuthRoute>
						<Register />
					</AuthRoute>
				}
			/>
		</Routes>
	);
};

function App() {
	return (
		<AuthProvider>
			<Router>
				<AppRoutes />
			</Router>
		</AuthProvider>
	);
}

export default App;
