import Alert from "@/components/UI/Alert";
import { useCallback, useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";

const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

type GlobalSettings = {
	enabled: boolean;
	depositPercentage: number;
	activityPercentage: number;
	signupBonus: number;
	minDepositAmount: number;
	maxRewardPerEvent: number;
	payOnFirstDepositOnly: boolean;
	creditTo: "bonus" | "deposit";
	notifyByEmail: boolean;
};

type UserRow = {
	_id: string;
	username: string;
	fullName: string;
	email: string;
	referredCount: number;
	totalEarned: number;
	override: {
		enabled: boolean | null;
		depositPercentage: number | null;
		activityPercentage: number | null;
		signupBonus: number | null;
	};
	effective: {
		enabled: boolean;
		depositPercentage: number;
		activityPercentage: number;
		signupBonus: number;
	};
};

const defaultSettings: GlobalSettings = {
	enabled: false,
	depositPercentage: 5,
	activityPercentage: 0,
	signupBonus: 0,
	minDepositAmount: 0,
	maxRewardPerEvent: 0,
	payOnFirstDepositOnly: false,
	creditTo: "bonus",
	notifyByEmail: true,
};

const authHeaders = () => {
	const token = localStorage.getItem("token");
	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
};

export default function ReferralSettings() {
	const [settings, setSettings] = useState<GlobalSettings>(defaultSettings);
	const [users, setUsers] = useState<UserRow[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [savingUserId, setSavingUserId] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const fetchSettings = useCallback(async () => {
		try {
			const res = await fetch(`${url}/referrals/settings`, { headers: authHeaders() });
			const data = await res.json();
			if (!res.ok) throw new Error(data.message || "Failed to load referral settings");
			setSettings({ ...defaultSettings, ...data });
		} catch (err: any) {
			setError(err.message);
		}
	}, []);

	const fetchUsers = useCallback(async (page = 1, search = "") => {
		try {
			const query = new URLSearchParams({ page: String(page), limit: "10", search });
			const res = await fetch(`${url}/referrals/users?${query}`, { headers: authHeaders() });
			const data = await res.json();
			if (!res.ok) throw new Error(data.message || "Failed to load users");
			setUsers(data.users || []);
			setTotalPages(data.totalPages || 1);
			setCurrentPage(data.currentPage || 1);
		} catch (err: any) {
			setError(err.message);
		}
	}, []);

	useEffect(() => {
		(async () => {
			setLoading(true);
			await Promise.all([fetchSettings(), fetchUsers(1, "")]);
			setLoading(false);
		})();
	}, [fetchSettings, fetchUsers]);

	const flash = (message: string) => {
		setSuccess(message);
		setTimeout(() => setSuccess(null), 4000);
	};

	const saveSettings = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		try {
			setSaving(true);
			const res = await fetch(`${url}/referrals/settings`, {
				method: "PUT",
				headers: authHeaders(),
				body: JSON.stringify(settings),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.message || "Failed to save");

			setSettings({ ...defaultSettings, ...data.settings });
			flash("Referral programme updated");
			// Effective per-user values depend on the global settings, so refresh the table
			fetchUsers(currentPage, searchTerm);
		} catch (err: any) {
			setError(err.message);
		} finally {
			setSaving(false);
		}
	};

	const saveUserOverride = async (userId: string, payload: Record<string, any>) => {
		setError(null);

		try {
			setSavingUserId(userId);
			const res = await fetch(`${url}/referrals/users/${userId}`, {
				method: "PUT",
				headers: authHeaders(),
				body: JSON.stringify(payload),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.message || "Failed to update user");

			setUsers((prev) =>
				prev.map((user) =>
					user._id === userId ? { ...user, override: data.override, effective: data.effective } : user,
				),
			);
			flash("User referral settings updated");
		} catch (err: any) {
			setError(err.message);
		} finally {
			setSavingUserId(null);
		}
	};

	const setLocalOverride = (userId: string, field: string, value: any) => {
		setUsers((prev) =>
			prev.map((user) => (user._id === userId ? { ...user, override: { ...user.override, [field]: value } } : user)),
		);
	};

	const handleSearch = (search: string) => {
		setSearchTerm(search);
		fetchUsers(1, search);
	};

	if (loading) {
		return <div className="p-6 text-sm text-gray-500 dark:text-gray-400">Loading referral programme...</div>;
	}

	return (
		<div className="space-y-8">
			{/* ---------------------------------------------------------------- */}
			{/* Global programme                                                  */}
			{/* ---------------------------------------------------------------- */}
			<form
				onSubmit={saveSettings}
				className="relative bg-white rounded-lg shadow dark:bg-gray-900/50 customBlur border dark:border-gray-800"
			>
				<div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-900">
					<div>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">Referral Programme</h3>
						<p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
							These values are what the server pays out. Nothing is hard-coded.
						</p>
					</div>

					<label className="inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							checked={settings.enabled}
							onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })}
							className="sr-only peer"
						/>
						<div className="relative w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
						<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
							{settings.enabled ? "Enabled" : "Disabled"}
						</span>
					</label>
				</div>

				<div className="p-6 space-y-6">
					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="depositPercentage" className="editUserLabel">
								Deposit commission (%)
							</label>
							<input
								id="depositPercentage"
								type="number"
								min={0}
								max={100}
								step="0.1"
								value={settings.depositPercentage}
								onChange={(e) => setSettings({ ...settings, depositPercentage: Number(e.target.value) })}
								className="editUserInput"
							/>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
								Paid to the referrer each time a referred user's deposit is approved.
							</p>
						</div>

						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="activityPercentage" className="editUserLabel">
								Activity commission (%)
							</label>
							<input
								id="activityPercentage"
								type="number"
								min={0}
								max={100}
								step="0.1"
								value={settings.activityPercentage}
								onChange={(e) => setSettings({ ...settings, activityPercentage: Number(e.target.value) })}
								className="editUserInput"
							/>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
								Paid when a referred user opens a contract. Set to 0 to disable.
							</p>
						</div>

						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="signupBonus" className="editUserLabel">
								Signup reward ($)
							</label>
							<input
								id="signupBonus"
								type="number"
								min={0}
								step="0.01"
								value={settings.signupBonus}
								onChange={(e) => setSettings({ ...settings, signupBonus: Number(e.target.value) })}
								className="editUserInput"
							/>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
								Flat amount paid once, the moment a referred user registers.
							</p>
						</div>

						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="minDepositAmount" className="editUserLabel">
								Minimum deposit ($)
							</label>
							<input
								id="minDepositAmount"
								type="number"
								min={0}
								step="0.01"
								value={settings.minDepositAmount}
								onChange={(e) => setSettings({ ...settings, minDepositAmount: Number(e.target.value) })}
								className="editUserInput"
							/>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
								Deposits below this never generate a commission.
							</p>
						</div>

						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="maxRewardPerEvent" className="editUserLabel">
								Max reward per event ($)
							</label>
							<input
								id="maxRewardPerEvent"
								type="number"
								min={0}
								step="0.01"
								value={settings.maxRewardPerEvent}
								onChange={(e) => setSettings({ ...settings, maxRewardPerEvent: Number(e.target.value) })}
								className="editUserInput"
							/>
							<p className="mt-1 text-xs text-gray-500 dark:text-gray-400">0 means uncapped.</p>
						</div>

						<div className="col-span-6 sm:col-span-3">
							<label htmlFor="creditTo" className="editUserLabel">
								Credit reward to
							</label>
							<select
								id="creditTo"
								value={settings.creditTo}
								onChange={(e) =>
									setSettings({ ...settings, creditTo: e.target.value as "bonus" | "deposit" })
								}
								className="editUserInput"
							>
								<option value="bonus">Bonus balance</option>
								<option value="deposit">Deposit balance (withdrawable)</option>
							</select>
						</div>

						<div className="col-span-6 flex flex-wrap gap-6">
							<label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
								<input
									type="checkbox"
									checked={settings.payOnFirstDepositOnly}
									onChange={(e) =>
										setSettings({ ...settings, payOnFirstDepositOnly: e.target.checked })
									}
									className="w-4 h-4"
								/>
								Pay on first deposit only
							</label>

							<label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
								<input
									type="checkbox"
									checked={settings.notifyByEmail}
									onChange={(e) => setSettings({ ...settings, notifyByEmail: e.target.checked })}
									className="w-4 h-4"
								/>
								Email the referrer on every commission
							</label>
						</div>
					</div>

					{error && <Alert type="danger" message={error} />}
					{success && <Alert type="success" message={success} />}
				</div>

				<div className="flex items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
					<button
						type="submit"
						disabled={saving}
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-60"
					>
						{saving ? "Saving..." : "Save programme"}
					</button>
				</div>
			</form>

			{/* ---------------------------------------------------------------- */}
			{/* Per-user availability + manual percentages                        */}
			{/* ---------------------------------------------------------------- */}
			<div className="relative bg-white rounded-lg shadow dark:bg-gray-900/50 customBlur border dark:border-gray-800">
				<div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b rounded-t dark:border-gray-900">
					<div>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">Per-user control</h3>
						<p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
							Leave a field blank to inherit the programme default. "Availability" overrides the master
							switch for that user.
						</p>
					</div>

					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<TfiSearch className="w-3 h-3 text-gray-500 dark:text-gray-400" />
						</div>
						<input
							onChange={(e) => handleSearch(e.target.value)}
							type="text"
							className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-72 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
							placeholder="Search users"
						/>
					</div>
				</div>

				<div className="overflow-x-auto">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th className="px-4 py-3">User</th>
								<th className="px-4 py-3">Availability</th>
								<th className="px-4 py-3">Deposit %</th>
								<th className="px-4 py-3">Activity %</th>
								<th className="px-4 py-3">Signup $</th>
								<th className="px-4 py-3">Performance</th>
								<th className="px-4 py-3"></th>
							</tr>
						</thead>

						<tbody>
							{users.map((user) => (
								<tr
									key={user._id}
									className="bg-white border-b dark:bg-gray-800/40 dark:border-gray-700"
								>
									<td className="px-4 py-3">
										<div className="text-xs font-semibold text-gray-900 dark:text-white">
											{user.fullName || user.username}
										</div>
										<div className="text-xs text-gray-500">@{user.username}</div>
									</td>

									<td className="px-4 py-3">
										<select
											value={
												user.override.enabled === null ? "inherit" : String(user.override.enabled)
											}
											onChange={(e) => setLocalOverride(user._id, "enabled", e.target.value === "inherit" ? null : e.target.value === "true")}
											className="text-xs p-2 rounded border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
										>
											<option value="inherit">
												Inherit ({settings.enabled ? "on" : "off"})
											</option>
											<option value="true">Enabled</option>
											<option value="false">Disabled</option>
										</select>
									</td>

									<td className="px-4 py-3">
										<input
											type="number"
											min={0}
											max={100}
											step="0.1"
											value={user.override.depositPercentage ?? ""}
											placeholder={String(settings.depositPercentage)}
											onChange={(e) =>
												setLocalOverride(
													user._id,
													"depositPercentage",
													e.target.value === "" ? null : Number(e.target.value),
												)
											}
											className="w-20 text-xs p-2 rounded border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
										/>
									</td>

									<td className="px-4 py-3">
										<input
											type="number"
											min={0}
											max={100}
											step="0.1"
											value={user.override.activityPercentage ?? ""}
											placeholder={String(settings.activityPercentage)}
											onChange={(e) =>
												setLocalOverride(
													user._id,
													"activityPercentage",
													e.target.value === "" ? null : Number(e.target.value),
												)
											}
											className="w-20 text-xs p-2 rounded border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
										/>
									</td>

									<td className="px-4 py-3">
										<input
											type="number"
											min={0}
											step="0.01"
											value={user.override.signupBonus ?? ""}
											placeholder={String(settings.signupBonus)}
											onChange={(e) =>
												setLocalOverride(
													user._id,
													"signupBonus",
													e.target.value === "" ? null : Number(e.target.value),
												)
											}
											className="w-24 text-xs p-2 rounded border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
										/>
									</td>

									<td className="px-4 py-3 text-xs">
										<div>{user.referredCount} referred</div>
										<div className="text-gray-500">${(user.totalEarned || 0).toFixed(2)} earned</div>
										<div
											className={`mt-1 inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
												user.effective.enabled
													? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
													: "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
											}`}
										>
											{user.effective.enabled
												? `Active · ${user.effective.depositPercentage}% / ${user.effective.activityPercentage}%`
												: "Inactive"}
										</div>
									</td>

									<td className="px-4 py-3">
										<button
											type="button"
											disabled={savingUserId === user._id}
											onClick={() =>
												saveUserOverride(user._id, {
													enabled: user.override.enabled,
													depositPercentage: user.override.depositPercentage,
													activityPercentage: user.override.activityPercentage,
													signupBonus: user.override.signupBonus,
												})
											}
											className="text-xs font-medium text-blue-600 dark:text-blue-500 hover:underline disabled:opacity-50"
										>
											{savingUserId === user._id ? "Saving..." : "Save"}
										</button>
									</td>
								</tr>
							))}

							{users.length === 0 && (
								<tr>
									<td colSpan={7} className="px-4 py-6 text-center text-xs text-gray-500">
										No users found
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				{totalPages > 1 && (
					<div className="flex justify-center items-center gap-2 p-4">
						<button
							onClick={() => fetchUsers(currentPage - 1, searchTerm)}
							disabled={currentPage === 1}
							className="px-3 py-2 text-xs text-gray-500 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 disabled:opacity-50"
						>
							Previous
						</button>
						<span className="text-xs text-gray-500 dark:text-gray-400">
							Page {currentPage} of {totalPages}
						</span>
						<button
							onClick={() => fetchUsers(currentPage + 1, searchTerm)}
							disabled={currentPage === totalPages}
							className="px-3 py-2 text-xs text-gray-500 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 disabled:opacity-50"
						>
							Next
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
