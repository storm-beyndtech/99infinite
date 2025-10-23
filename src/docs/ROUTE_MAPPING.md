# Route Mapping Reference

## Dashboard Routes (Protected by DashboardLayoutWrapper)

| Route Path | Component | Sidebar Label | Description |
|------------|-----------|---------------|-------------|
| `/dashboard` | Dashboard | Dashboard | Main dashboard overview |
| `/dashboard/transactions` | AllTransactions | All Transactions | Complete transaction history |
| `/dashboard/deposit` | Deposit | Deposit | Make new deposit |
| `/dashboard/deposit-log` | DepositLog | Deposit History | Deposit transaction history |
| `/dashboard/events` | Events | Events | User events and notifications |
| `/dashboard/investments` | InvestmentLog | My Investments | Investment portfolio |
| `/dashboard/investment-plans` | InvestmentPlan | Investment Plans | Available investment plans |
| `/dashboard/kyc` | KYC | - | KYC verification process |
| `/dashboard/profile` | Profile | Profile | User profile management |
| `/dashboard/withdraw` | Withdraw | Withdraw | Make new withdrawal |
| `/dashboard/withdraw-log` | WithdrawLog | Withdrawal History | Withdrawal transaction history |

## Admin Routes (Protected by AdminLayoutWrapper)

| Route Path | Component | Description |
|------------|-----------|-------------|
| `/admin` | Admin | Admin dashboard |
| `/admin/settings` | AdminSettings | Admin settings |
| `/admin/users` | ActiveUsers | Manage active users |
| `/admin/deposits/approved` | ApprovedDeposits | Approved deposits |
| `/admin/withdrawals/approved` | ApprovedWithdrawals | Approved withdrawals |
| `/admin/users/banned` | BannedUsers | Banned users management |
| `/admin/investments/history` | InvestmentHistory | Investment history |
| `/admin/kyc` | KycApproval | KYC approval process |
| `/admin/investments` | ManageInvestments | Investment management |
| `/admin/plans` | ManagePlans | Investment plans management |
| `/admin/deposits/pending` | PendingDeposits | Pending deposits |
| `/admin/withdrawals/pending` | PendingWithdrawals | Pending withdrawals |
| `/admin/deposits/rejected` | RejectedDeposits | Rejected deposits |
| `/admin/withdrawals/rejected` | RejectedWithdrawals | Rejected withdrawals |
| `/admin/send-mail` | SendMail | Send mail to users |

## Public Routes (No authentication required)

| Route Path | Component | Description |
|------------|-----------|-------------|
| `/` | Home | Homepage |
| `/about` | About | About page |
| `/team` | Team | Team page |
| `/team/:slug` | Team | Team member detail |
| `/gold` | Gold | Gold information |
| `/annual-report` | AnnualReport | Annual report |
| `/mining` | Mining | Mining project |
| `/agriculture` | Agriculture | Agriculture project |
| `/oil-and-gas` | OilAndGas | Oil and gas project |
| `/philanthropy` | Philanthropy | Philanthropy project |
| `/retirement` | Retirement | Retirement project |
| `/contact` | Contact | Contact page |
| `/support` | Contact | Support page (alias) |

## Auth Routes (Public access)

| Route Path | Component | Description |
|------------|-----------|-------------|
| `/login` | Login | User login |
| `/auth/login` | Login | User login (alias) |
| `/register` | Register | User registration |
| `/auth/register` | Register | User registration (alias) |
| `/auth/success` | RegistrationSuccess | Registration success |

## Important Notes

1. **Route Consistency**: All sidebar navigation links must match the exact route paths defined in App.tsx
2. **Protected Routes**: Dashboard and Admin routes are automatically protected by their respective layout wrappers
3. **User Guarantees**: Components inside DashboardLayoutWrapper and AdminLayoutWrapper can safely access user without null checks
4. **Navigation**: Use the exact route paths when navigating programmatically with `navigate()`