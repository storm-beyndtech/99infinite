import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import RegistrationSuccess from "./pages/auth/RegistrationSuccess";

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

function App() {
	return (
		<Router>
			<Routes>
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
				<Route path="/dashboard" element={<DashboardLayoutWrapper><Dashboard /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/transactions" element={<DashboardLayoutWrapper><AllTransactions /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/deposit" element={<DashboardLayoutWrapper><Deposit /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/deposit-log" element={<DashboardLayoutWrapper><DepositLog /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/events" element={<DashboardLayoutWrapper><Events /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/investments" element={<DashboardLayoutWrapper><InvestmentLog /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/investment-plans" element={<DashboardLayoutWrapper><InvestmentPlan /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/kyc" element={<DashboardLayoutWrapper><KYC /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/profile" element={<DashboardLayoutWrapper><Profile /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/withdraw" element={<DashboardLayoutWrapper><Withdraw /></DashboardLayoutWrapper>} />
				<Route path="/dashboard/withdraw-log" element={<DashboardLayoutWrapper><WithdrawLog /></DashboardLayoutWrapper>} />

				{/* Protected Admin routes */}
				<Route path="/admin" element={<AdminLayoutWrapper><Admin /></AdminLayoutWrapper>} />
				<Route path="/admin/settings" element={<AdminLayoutWrapper><AdminSettings /></AdminLayoutWrapper>} />
				<Route path="/admin/users" element={<AdminLayoutWrapper><ActiveUsers /></AdminLayoutWrapper>} />
				<Route path="/admin/deposits/approved" element={<AdminLayoutWrapper><ApprovedDeposits /></AdminLayoutWrapper>} />
				<Route path="/admin/withdrawals/approved" element={<AdminLayoutWrapper><ApprovedWithdrawals /></AdminLayoutWrapper>} />
				<Route path="/admin/users/banned" element={<AdminLayoutWrapper><BannedUsers /></AdminLayoutWrapper>} />
				<Route path="/admin/investments/history" element={<AdminLayoutWrapper><InvestmentHistory /></AdminLayoutWrapper>} />
				<Route path="/admin/kyc" element={<AdminLayoutWrapper><KycApproval /></AdminLayoutWrapper>} />
				<Route path="/admin/investments" element={<AdminLayoutWrapper><ManageInvestments /></AdminLayoutWrapper>} />
				<Route path="/admin/plans" element={<AdminLayoutWrapper><ManagePlans /></AdminLayoutWrapper>} />
				<Route path="/admin/deposits/pending" element={<AdminLayoutWrapper><PendingDeposits /></AdminLayoutWrapper>} />
				<Route path="/admin/withdrawals/pending" element={<AdminLayoutWrapper><PendingWithdrawals /></AdminLayoutWrapper>} />
				<Route path="/admin/deposits/rejected" element={<AdminLayoutWrapper><RejectedDeposits /></AdminLayoutWrapper>} />
				<Route path="/admin/withdrawals/rejected" element={<AdminLayoutWrapper><RejectedWithdrawals /></AdminLayoutWrapper>} />
				<Route path="/admin/send-mail" element={<AdminLayoutWrapper><SendMail /></AdminLayoutWrapper>} />

				{/* Auth routes outside of layouts */}
				<Route path="login" element={<Login />} />
				<Route path="auth/login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="auth/register" element={<Register />} />
				<Route path="auth/success" element={<RegistrationSuccess />} />
			</Routes>
		</Router>
	);
}

export default App;
