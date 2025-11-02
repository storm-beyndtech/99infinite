import { contextData } from "@/contexts/AuthContext";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export default function UserReferrals() {
	const { user } = contextData();
	const [referrals, setReferrals] = useState([]);
	const [loading, setLoading] = useState(false);
	const [copied, setCopied] = useState(false);
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(`${window.location.origin}/signup?ref=${user?.username || user?._id}`);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy referral code:", err);
		}
	};

	useEffect(() => {
		const fetchReferrals = async () => {
			setLoading(true);
			try {
				const response = await fetch(`${url}/api/users/referrals/${user?.username || user?._id}`);

				const data = await response.json();
				if (response.ok) {
					setReferrals(data);
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
			fetchReferrals();
		}
	}, [user]);

	return (
		<>
			<div className="dark:bg-gray-800 bg-gray-100 p-4 rounded-lg mb-8">
				<h3 className="text-lg font-medium dark:text-white text-gray-900 mb-4">Your Referral Link</h3>
				<div className="flex items-center gap-2">
					<input
						type="text"
						value={`${window.location.origin}/signup?ref=${user?.username || user?._id}`}
						readOnly
						className="flex-1 p-3 dark:bg-gray-700 bg-gray-50 border dark:border-gray-600 border-gray-300 rounded-md dark:text-white text-gray-900"
					/>
					<button onClick={() => handleCopy()} className="bg-blue-500 hover:bg-blue-600 p-3 rounded-md transition-all duration-200 flex items-center gap-2">
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
			</div>

			<div>
				<h3 className="text-lg font-medium dark:text-white text-gray-900 mb-4">Your Referrals</h3>
				<div className="dark:bg-gray-800 bg-gray-100 rounded-lg overflow-hidden">
					<table className="w-full text-sm dark:text-gray-300 text-gray-700">
						<thead className="dark:bg-gray-700 bg-gray-200 text-left">
							<tr>
								<th className="p-4 dark:text-white text-gray-900">Username</th>
								<th className="p-4 dark:text-white text-gray-900">Date</th>
							</tr>
						</thead>
						<tbody>
							{loading ? (
								<tr>
									<td colSpan={2} className="p-4 text-center dark:text-gray-400 text-gray-500">
										Loading...
									</td>
								</tr>
							) : referrals.length > 0 ? (
								referrals.map((referral: any, index: number) => (
									<tr key={index} className="border-t dark:border-gray-700 border-gray-300">
										<td className="p-4">{referral.username}</td>
										<td className="p-4">{new Date(referral.date).toLocaleDateString()}</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={2} className="p-4 text-center dark:text-gray-400 text-gray-500">
										No referrals yet
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
