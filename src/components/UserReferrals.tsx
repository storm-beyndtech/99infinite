import { contextData } from "@/contexts/AuthContext";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

type ReferralSummary = {
	code: string;
	program: {
		enabled: boolean;
		depositPercentage: number;
		activityPercentage: number;
		signupBonus: number;
		minDepositAmount: number;
		creditTo: string;
		payOnFirstDepositOnly: boolean;
	};
	stats: {
		totalReferred: number;
		totalEarned: number;
		lastRewardAt: string | null;
	};
	referrals: {
		username: string;
		fullName: string;
		status: string;
		kycStatus: string;
		date: string;
	}[];
	rewards: {
		id: string;
		amount: number;
		date: string;
		sourceType: string;
		percentage: number;
		baseAmount: number;
		referredUserName: string;
	}[];
};

const sourceLabels: Record<string, string> = {
	signup: "Signup reward",
	deposit: "Deposit commission",
	activity: "Activity commission",
	manual: "Manual award",
};

export default function UserReferrals() {
	const { user } = contextData();
	const [summary, setSummary] = useState<ReferralSummary | null>(null);
	const [loading, setLoading] = useState(false);
	const [copied, setCopied] = useState(false);
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	const referralCode = summary?.code || user?.username || user?._id;
	const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(referralLink);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy referral code:", err);
		}
	};

	useEffect(() => {
		const fetchSummary = async () => {
			setLoading(true);
			try {
				const response = await fetch(`${url}/referrals/summary/${user?._id}`);
				const data = await response.json();

				if (response.ok) {
					setSummary(data);
				} else {
					console.error("Failed to fetch referrals:", data.message);
				}
			} catch (err) {
				console.error("Error fetching referrals:", err);
			} finally {
				setLoading(false);
			}
		};

		if (user?._id) {
			fetchSummary();
		}
	}, [user, url]);

	const program = summary?.program;

	return (
		<>
			<div className="dark:bg-gray-800 bg-gray-100 p-4 rounded-lg mb-8">
				<div className="flex flex-wrap items-center justify-between gap-2 mb-4">
					<h3 className="text-lg font-medium dark:text-white text-gray-900">Your Referral Link</h3>

					{program && (
						<span
							className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
								program.enabled
									? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
									: "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
							}`}
						>
							{program.enabled ? "Rewards active" : "Rewards paused"}
						</span>
					)}
				</div>

				<div className="flex items-center gap-2">
					<input
						type="text"
						value={referralLink}
						readOnly
						className="flex-1 p-3 dark:bg-gray-700 bg-gray-50 border dark:border-gray-600 border-gray-300 rounded-md dark:text-white text-gray-900"
					/>
					<button
						onClick={() => handleCopy()}
						className="bg-blue-500 hover:bg-blue-600 p-3 rounded-md transition-all duration-200 flex items-center gap-2 text-white"
					>
						{copied ? (
							<>
								<Check size={20} />
								<span className="text-sm font-medium">Copied!</span>
							</>
						) : (
							<>
								<Copy size={20} />
								<span className="text-sm font-medium">Copy</span>
							</>
						)}
					</button>
				</div>

				{program?.enabled && (
					<p className="mt-3 text-xs dark:text-gray-400 text-gray-600">
						You earn{" "}
						<strong className="dark:text-white text-gray-900">{program.depositPercentage}%</strong> of every
						deposit your referrals make
						{program.activityPercentage > 0 && (
							<>
								{" "}
								and{" "}
								<strong className="dark:text-white text-gray-900">{program.activityPercentage}%</strong>{" "}
								of their contract activity
							</>
						)}
						{program.signupBonus > 0 && (
							<>
								, plus a{" "}
								<strong className="dark:text-white text-gray-900">${program.signupBonus}</strong> reward
								for each signup
							</>
						)}
						. Rewards are credited to your {program.creditTo} balance.
					</p>
				)}
			</div>

			{/* Stats */}
			<div className="grid grid-cols-2 gap-4 mb-8">
				<div className="dark:bg-gray-800 bg-gray-100 p-4 rounded-lg">
					<div className="text-xs dark:text-gray-400 text-gray-500">Total referrals</div>
					<div className="text-2xl font-semibold dark:text-white text-gray-900">
						{summary?.stats.totalReferred ?? 0}
					</div>
				</div>
				<div className="dark:bg-gray-800 bg-gray-100 p-4 rounded-lg">
					<div className="text-xs dark:text-gray-400 text-gray-500">Total earned</div>
					<div className="text-2xl font-semibold dark:text-white text-gray-900">
						${(summary?.stats.totalEarned ?? 0).toFixed(2)}
					</div>
				</div>
			</div>

			{/* Referred users */}
			<div className="mb-8">
				<h3 className="text-lg font-medium dark:text-white text-gray-900 mb-4">Your Referrals</h3>
				<div className="dark:bg-gray-800 bg-gray-100 rounded-lg overflow-hidden">
					<table className="w-full text-sm dark:text-gray-300 text-gray-700">
						<thead className="dark:bg-gray-700 bg-gray-200 text-left">
							<tr>
								<th className="p-4 dark:text-white text-gray-900">Username</th>
								<th className="p-4 dark:text-white text-gray-900">Status</th>
								<th className="p-4 dark:text-white text-gray-900">Date</th>
							</tr>
						</thead>
						<tbody>
							{loading ? (
								<tr>
									<td colSpan={3} className="p-4 text-center dark:text-gray-400 text-gray-500">
										Loading...
									</td>
								</tr>
							) : summary && summary.referrals.length > 0 ? (
								summary.referrals.map((referral, index) => (
									<tr key={index} className="border-t dark:border-gray-700 border-gray-300">
										<td className="p-4">{referral.username}</td>
										<td className="p-4 capitalize">
											{referral.status === "claimed" ? "Rewarded" : "Pending"}
										</td>
										<td className="p-4">{new Date(referral.date).toLocaleDateString()}</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={3} className="p-4 text-center dark:text-gray-400 text-gray-500">
										No referrals yet
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>

			{/* Reward history */}
			<div>
				<h3 className="text-lg font-medium dark:text-white text-gray-900 mb-4">Commission History</h3>
				<div className="dark:bg-gray-800 bg-gray-100 rounded-lg overflow-hidden">
					<table className="w-full text-sm dark:text-gray-300 text-gray-700">
						<thead className="dark:bg-gray-700 bg-gray-200 text-left">
							<tr>
								<th className="p-4 dark:text-white text-gray-900">Type</th>
								<th className="p-4 dark:text-white text-gray-900">From</th>
								<th className="p-4 dark:text-white text-gray-900">Amount</th>
								<th className="p-4 dark:text-white text-gray-900">Date</th>
							</tr>
						</thead>
						<tbody>
							{summary && summary.rewards.length > 0 ? (
								summary.rewards.map((reward) => (
									<tr key={reward.id} className="border-t dark:border-gray-700 border-gray-300">
										<td className="p-4">
											{sourceLabels[reward.sourceType] || reward.sourceType}
											{reward.percentage > 0 && (
												<span className="text-xs dark:text-gray-400 text-gray-500">
													{" "}
													({reward.percentage}% of ${reward.baseAmount})
												</span>
											)}
										</td>
										<td className="p-4">{reward.referredUserName || "—"}</td>
										<td className="p-4 font-semibold text-green-600 dark:text-green-400">
											+${Number(reward.amount).toFixed(2)}
										</td>
										<td className="p-4">{new Date(reward.date).toLocaleDateString()}</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={4} className="p-4 text-center dark:text-gray-400 text-gray-500">
										No commissions yet
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
