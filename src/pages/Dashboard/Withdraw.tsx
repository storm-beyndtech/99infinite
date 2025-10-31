import React, { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, ArrowDownLeft } from "lucide-react";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

interface SupportedCoin {
	coin: string;
	chains: Array<{
		chain: string;
		chainType: string;
		withdrawFee: string;
		withdrawMin: string;
		withdrawMax?: string;
		chainWithdraw: string;
	}>;
}

interface WithdrawalAvailability {
	available: boolean;
	balance: number;
	message?: string;
}

const Withdraw: React.FC = () => {
	const [formData, setFormData] = useState({
		amount: "",
		coinName: "USDT",
		network: "ERC20",
		address: "",
	});

	const [supportedCoins, setSupportedCoins] = useState<SupportedCoin[]>([]);
	const [availability, setAvailability] = useState<WithdrawalAvailability | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const { user, fetchUser } = useAuth();
	const userBalance = (user?.deposit || 0) + (user?.interest || 0);

	// Fetch supported coins on component mount
	useEffect(() => {
		fetchSupportedCoins();
	}, []);

	// Check withdrawal availability when amount or coin changes
	useEffect(() => {
		if (formData.amount && parseFloat(formData.amount) > 0) {
			checkWithdrawalAvailability();
		} else {
			setAvailability(null);
		}
	}, [formData.amount, formData.coinName]);

	const fetchSupportedCoins = async () => {
		try {
			const response = await api.get("/withdrawals/supported-coins");
			setSupportedCoins(Array.isArray(response.data) ? response.data : []);
		} catch (error) {
			console.error("Error fetching supported coins:", error);
			setSupportedCoins([]);
		}
	};

	const checkWithdrawalAvailability = async () => {
		setIsCheckingAvailability(true);
		try {
			const response = await api.post("/withdrawals/check-availability", {
				amount: parseFloat(formData.amount),
				coinName: formData.coinName,
			});
			setAvailability(response.data);
		} catch (error) {
			console.error("Error checking availability:", error);
			setAvailability({
				available: false,
				balance: 0,
				message: "Error checking withdrawal availability",
			});
		} finally {
			setIsCheckingAvailability(false);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		setError("");
		setSuccess("");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");
		setSuccess("");

		try {
			// Validate form
			if (!formData.amount || !formData.address || !formData.coinName || !formData.network) {
				throw new Error("Please fill in all required fields");
			}

			const amount = parseFloat(formData.amount);
			if (amount <= 0) {
				throw new Error("Amount must be greater than 0");
			}

			if (amount > userBalance) {
				throw new Error("Insufficient balance");
			}

			const response = await api.post("/withdrawals", {
				id: user?.id,
				amount: amount,
				convertedAmount: amount, // For now, assume 1:1 conversion
				coinName: formData.coinName,
				network: formData.network,
				address: formData.address,
				autoWithdraw: true, // Always automatic
			});

			setSuccess(response.data.message);

			// Silently refresh user data to reflect updated balance
			if (user?.id && fetchUser) {
				fetchUser(user.id, true);
			}

			// Reset form after successful submission
			setFormData({
				amount: "",
				coinName: "USDT",
				network: "ERC20",
				address: "",
			});
		} catch (error: any) {
			setError(error.response?.data?.message || error.message || "Withdrawal failed");
		} finally {
			setIsLoading(false);
		}
	};

	const selectedCoin = supportedCoins.find((coin) => coin.coin === formData.coinName);
	const availableChains = selectedCoin?.chains.filter((chain) => chain.chainWithdraw === "1") || [];

	return (
		<div className="max-w-lg mx-auto space-y-6">
			{/* Header */}
			<div className="flex items-center gap-4 mb-8">
				<div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-100 dark:from-red-950/50 dark:to-red-900/30 rounded-xl flex items-center justify-center shadow-inner">
					<ArrowDownLeft className="w-6 h-6 text-red-600 dark:text-red-400" />
				</div>
				<div>
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Withdraw Funds</h1>
					<div className="text-gray-600 dark:text-gray-400 text-sm">
						<p>Total Available: ${userBalance.toFixed(2)}</p>
						<p className="text-xs">
							Deposit: ${(user?.deposit || 0).toFixed(2)} + Interest: ${(user?.interest || 0).toFixed(2)}
						</p>
					</div>
				</div>
			</div>

			<div className="relative z-10 bg-white/40 dark:bg-slate-800/20 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl">
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Amount */}
					<div>
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Withdrawal Amount (USD)
						</label>
						<input
							type="number"
							name="amount"
							value={formData.amount}
							onChange={handleInputChange}
							step="0.01"
							min="10"
							max={userBalance}
							className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-slate-700/50 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-200"
							placeholder="Enter amount"
							required
						/>
					</div>

					{/* Availability Check */}
					{availability && (
						<div
							className={`rounded-xl p-4 border ${
								availability.available
									? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800"
									: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
							}`}
						>
							<div className="flex items-start gap-3">
								{availability.available ? (
									<CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
								) : (
									<AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
								)}
								<div>
									<p
										className={`text-sm font-medium ${
											availability.available
												? "text-emerald-800 dark:text-emerald-300"
												: "text-red-800 dark:text-red-300"
										}`}
									>
										{availability.available ? "Auto-withdrawal available" : "Manual approval required"}
									</p>
									<p
										className={`text-xs ${
											availability.available
												? "text-emerald-700 dark:text-emerald-400"
												: "text-red-700 dark:text-red-400"
										}`}
									>
										{availability.message}
									</p>
								</div>
							</div>
						</div>
					)}

					{/* Coin Selection */}
					<div>
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Cryptocurrency
						</label>
						<select
							name="coinName"
							value={formData.coinName}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-slate-700/50 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-200"
							required
						>
							{supportedCoins.map((coin) => (
								<option key={coin.coin} value={coin.coin}>
									{coin.coin}
								</option>
							))}
						</select>
					</div>

					{/* Network Selection */}
					<div>
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Network</label>
						<select
							name="network"
							value={formData.network}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-slate-700/50 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-200"
							required
						>
							{availableChains.map((chain) => (
								<option key={chain.chain} value={chain.chain}>
									{chain.chain} (Fee: {chain.withdrawFee} {formData.coinName})
								</option>
							))}
						</select>
					</div>

					{/* Wallet Address */}
					<div>
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Wallet Address
						</label>
						<input
							type="text"
							name="address"
							value={formData.address}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-slate-700/50 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-200"
							placeholder="Enter your wallet address"
							required
						/>
					</div>

					{/* Error Message */}
					{error && (
						<div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4">
							<div className="flex items-start gap-3">
								<AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
								<p className="text-sm text-red-800 dark:text-red-300">{error}</p>
							</div>
						</div>
					)}

					{/* Success Message */}
					{success && (
						<div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
							<div className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
								<p className="text-sm text-emerald-800 dark:text-emerald-300">{success}</p>
							</div>
						</div>
					)}

					{/* Submit Button */}
					<button
						type="submit"
						disabled={isLoading || isCheckingAvailability}
						className="w-full bg-red-700 hover:bg-red-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold text-sm py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-red-500/25 disabled:cursor-not-allowed"
					>
						{isLoading ? "Processing..." : "Submit Withdrawal"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Withdraw;
