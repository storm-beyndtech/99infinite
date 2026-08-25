import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./UI/Alert";
import { countries } from "@/utils/countries";
import { useAuth } from "@/contexts/AuthContext";

export default function EditUserModal({ userData, handleUserData }: any) {
	const [userId, setUserId] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [deposit, setDeposit] = useState(0);
	const [interest, setInterest] = useState(0);
	const [trade, setTrade] = useState(0);
	const [bonus, setBonus] = useState(0);
	// Referral overrides: "" means inherit the global programme setting
	const [referralEnabled, setReferralEnabled] = useState<string>("inherit");
	const [referralDepositPct, setReferralDepositPct] = useState<string>("");
	const [referralActivityPct, setReferralActivityPct] = useState<string>("");
	const [referralSignupBonus, setReferralSignupBonus] = useState<string>("");
	const [referralEffective, setReferralEffective] = useState<any>(null);
	const [savingReferral, setSavingReferral] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);
	const { login } = useAuth();
	const navigate = useNavigate();
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	useEffect(() => {
		setUserId(userData._id);
		setFullName(userData.fullName);
		setEmail(userData.email);
		setSelectedCountry(userData.country);
		setPhoneNumber(userData.phone);
		setAddress(userData.streetAddress);
		setCity(userData.city);
		setState(userData.state);
		setZipCode(userData.zipCode);
		setDeposit(userData.deposit || 0);
		setInterest(userData.interest || 0);
		setTrade(userData.trade || 0);
		setBonus(userData.bonus || 0);

		const program = userData.referralProgram || {};
		setReferralEnabled(program.enabled === null || program.enabled === undefined ? "inherit" : String(program.enabled));
		setReferralDepositPct(program.depositPercentage ?? "");
		setReferralActivityPct(program.activityPercentage ?? "");
		setReferralSignupBonus(program.signupBonus ?? "");
	}, []);

	const saveReferralSettings = async () => {
		setError(null);

		try {
			setSavingReferral(true);
			const token = localStorage.getItem("token");
			const res = await fetch(`${url}/referrals/users/${userData._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					enabled: referralEnabled === "inherit" ? null : referralEnabled === "true",
					depositPercentage: referralDepositPct === "" ? null : Number(referralDepositPct),
					activityPercentage: referralActivityPct === "" ? null : Number(referralActivityPct),
					signupBonus: referralSignupBonus === "" ? null : Number(referralSignupBonus),
				}),
			});
			const data = await res.json();

			if (!res.ok) throw new Error(data.message);

			setReferralEffective(data.effective);
			setSuccess(data.message || "Referral settings updated");
		} catch (err: any) {
			setError(err.message);
		} finally {
			setSavingReferral(false);
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setError(null);

		const [firstName, ...rest] = fullName.trim().split(" ");
		const lastName = rest.join(" ") || "";

		const profileData = {
			userId,
			email,
			firstName,
			lastName,
			country: selectedCountry,
			phone: phoneNumber,
			streetAddress: address,
			state,
			city,
			zipCode,
			deposit,
			interest,
			trade,
			bonus,
		};

		try {
			setLoading(true);
			const res = await fetch(`${url}/users/update-profile`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(profileData),
			});
			const data = await res.json();

			if (res.ok) setSuccess(data.message || "User update successful");
			else throw new Error(data.message);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	const loginAsUser = () => {
		login(userData);
		navigate("/dashboard");
	};

	const deleteUser = async () => {
		try {
			setLoading(true);
			const res = await fetch(`${url}/users/${userData.email}`, {
				method: "DELETE",
			});
			const data = await res.json();

			if (res.ok) setSuccess(data.message || "User deleted successfully");
			else throw new Error(data.message);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-gray-800/70 backdrop-blur-md fixed top-0 left-0 right-0  z-999999 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full">
			<div className="relative w-full max-w-2xl max-h-full">
				{/* <!-- Modal content --> */}
				<form onSubmit={handleSubmit} className="relative bg-white rounded-lg shadow dark:bg-gray-800/95">
					{/* <!-- Modal header --> */}
					<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-900">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">Edit user</h3>
						<button
							onClick={() => handleUserData(null)}
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							data-modal-hide="editUserModal"
						>
							<svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>

					{/* <!-- Modal body --> */}
					<div className="p-6 space-y-6">
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="full-name" className="editUserLabel">
									Full Name
								</label>
								<input
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									type="text"
									id="full-name"
									className="editUserInput"
									placeholder={userData.fullName}
									required
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="email" className="editUserLabel">
									Email
								</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									id="email"
									className="editUserInput"
									placeholder={userData.email}
									required
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="country" className="editUserLabel">
									Country
								</label>
								<select
									id="country"
									value={selectedCountry}
									onChange={(e) => {
										setSelectedCountry(e.target.value);
									}}
									className="editUserInput"
								>
									<option value="none">{userData.country}</option>
									{countries.map((country, i) => (
										<option key={i} value={country.name}>
											{country.name}
										</option>
									))}
								</select>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="phone-number" className="editUserLabel">
									Phone Number
								</label>
								<input
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									type="text"
									id="phone-number"
									className="editUserInput"
									placeholder={userData.phone}
									required
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="address" className="editUserLabel">
									Address
								</label>
								<input
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									type="text"
									name="address"
									id="address"
									className="editUserInput"
									placeholder={userData.address}
									required
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="state" className="editUserLabel">
									State
								</label>
								<input
									value={state}
									onChange={(e) => setState(e.target.value)}
									type="text"
									id="state"
									className="editUserInput"
									placeholder={userData.state}
									required
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="city" className="editUserLabel">
									City
								</label>
								<input
									value={city}
									onChange={(e) => setCity(e.target.value)}
									type="text"
									id="city"
									className="editUserInput"
									placeholder={userData.city}
									required
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="zipCode" className="editUserLabel">
									Zip Code
								</label>
								<input
									value={zipCode}
									onChange={(e) => setZipCode(e.target.value)}
									type="text"
									id="zipCode"
									className="editUserInput"
									placeholder={userData.zipCode}
									required
								/>
							</div>

							<div className="col-span-3 sm:col-span-2">
								<label htmlFor="deposit" className="editUserLabel">
									Deposit
								</label>
								<input
									value={deposit}
									onChange={(e) => setDeposit(Number(e.target.value))}
									type="number"
									id="deposit"
									className="editUserInput"
									placeholder={userData.deposit || 0}
									required
									min={0}
								/>
							</div>

							<div className="col-span-3 sm:col-span-2">
								<label htmlFor="interest" className="editUserLabel">
									Interest
								</label>
								<input
									value={interest}
									onChange={(e) => setInterest(Number(e.target.value))}
									type="number"
									id="interest"
									className="editUserInput"
									placeholder={userData.interest}
									required
									min={0}
								/>
							</div>

							<div className="col-span-3 sm:col-span-2">
								<label htmlFor="trade" className="editUserLabel">
									Trade
								</label>
								<input
									value={trade}
									onChange={(e) => setTrade(Number(e.target.value))}
									type="number"
									id="trade"
									className="editUserInput"
									placeholder={userData.trade}
									required
									min={0}
								/>
							</div>

							<div className="col-span-3 sm:col-span-2">
								<label htmlFor="bonus" className="editUserLabel">
									Bonus
								</label>
								<input
									value={bonus}
									onChange={(e) => setBonus(Number(e.target.value))}
									type="number"
									id="bonus"
									className="editUserInput"
									placeholder={userData.bonus}
									required
									min={0}
								/>
							</div>
						</div>

						{/* Referral programme override for this user */}
						<div className="pt-4 border-t dark:border-gray-900">
							<div className="flex items-center justify-between mb-3">
								<h4 className="text-sm font-semibold text-gray-900 dark:text-white">
									Referral Programme
								</h4>
								<button
									type="button"
									onClick={saveReferralSettings}
									disabled={savingReferral}
									className="text-xs font-medium text-blue-600 dark:text-blue-500 hover:underline disabled:opacity-50"
								>
									{savingReferral ? "Saving..." : "Save referral settings"}
								</button>
							</div>

							<p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
								Leave a field blank to inherit the global programme defaults.
							</p>

							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-6 sm:col-span-3">
									<label htmlFor="referral-enabled" className="editUserLabel">
										Availability
									</label>
									<select
										id="referral-enabled"
										value={referralEnabled}
										onChange={(e) => setReferralEnabled(e.target.value)}
										className="editUserInput"
									>
										<option value="inherit">Inherit global setting</option>
										<option value="true">Enabled for this user</option>
										<option value="false">Disabled for this user</option>
									</select>
								</div>

								<div className="col-span-3 sm:col-span-1">
									<label htmlFor="referral-deposit-pct" className="editUserLabel">
										Deposit %
									</label>
									<input
										id="referral-deposit-pct"
										type="number"
										min={0}
										max={100}
										step="0.1"
										value={referralDepositPct}
										onChange={(e) => setReferralDepositPct(e.target.value)}
										className="editUserInput"
										placeholder="inherit"
									/>
								</div>

								<div className="col-span-3 sm:col-span-1">
									<label htmlFor="referral-activity-pct" className="editUserLabel">
										Activity %
									</label>
									<input
										id="referral-activity-pct"
										type="number"
										min={0}
										max={100}
										step="0.1"
										value={referralActivityPct}
										onChange={(e) => setReferralActivityPct(e.target.value)}
										className="editUserInput"
										placeholder="inherit"
									/>
								</div>

								<div className="col-span-3 sm:col-span-1">
									<label htmlFor="referral-signup-bonus" className="editUserLabel">
										Signup $
									</label>
									<input
										id="referral-signup-bonus"
										type="number"
										min={0}
										step="0.01"
										value={referralSignupBonus}
										onChange={(e) => setReferralSignupBonus(e.target.value)}
										className="editUserInput"
										placeholder="inherit"
									/>
								</div>
							</div>

							{referralEffective && (
								<p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
									Now applying:{" "}
									<strong className="text-gray-900 dark:text-white">
										{referralEffective.enabled ? "enabled" : "disabled"}
									</strong>{" "}
									· {referralEffective.depositPercentage}% deposit ·{" "}
									{referralEffective.activityPercentage}% activity · $
									{referralEffective.signupBonus} signup
								</p>
							)}
						</div>

						{error && <Alert type="danger" message={error} />}
						{success && <Alert type="success" message={success} />}
					</div>

					{/* <!-- Modal footer --> */}
					<div className="flex flex-wrap gap-3 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-900">
						<button
							type="submit"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							{loading ? "Saving..." : "Save all"}
						</button>

						<a
							href="#"
							onClick={deleteUser}
							className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
						>
							{loading ? "deleting..." : "Delete user"}
						</a>

						<a
							href="#"
							onClick={loginAsUser}
							className="text-white bg-gray-900 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-200 dark:text-gray-800"
						>
							Login as user
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}
