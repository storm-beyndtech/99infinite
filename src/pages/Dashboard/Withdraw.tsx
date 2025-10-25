import React, { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, Info, Zap, ArrowDownLeft } from "lucide-react";
import axios from "axios";
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
		autoWithdraw: true,
	});

	const [supportedCoins, setSupportedCoins] = useState<SupportedCoin[]>([]);
	const [availability, setAvailability] = useState<WithdrawalAvailability | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const { user } = useAuth();
	const userBalance = user?.deposit || 0;

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
			const response = await axios.get("/api/withdrawals/supported-coins");
			setSupportedCoins(response.data);
		} catch (error) {
			console.error("Error fetching supported coins:", error);
		}
	};

	const checkWithdrawalAvailability = async () => {
		setIsCheckingAvailability(true);
		try {
			const response = await axios.post("/api/withdrawals/check-availability", {
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
		const { name, value, type } = e.target;

		if (type === "checkbox") {
			const checkbox = e.target as HTMLInputElement;
			setFormData((prev) => ({
				...prev,
				[name]: checkbox.checked,
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}

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

			const response = await axios.post("/api/withdrawals", {
				id: user?.id,
				amount: amount,
				convertedAmount: amount, // For now, assume 1:1 conversion
				coinName: formData.coinName,
				network: formData.network,
				address: formData.address,
				autoWithdraw: formData.autoWithdraw,
			});

			setSuccess(response.data.message);

			// Reset form after successful submission
			setFormData({
				amount: "",
				coinName: "USDT",
				network: "ERC20",
				address: "",
				autoWithdraw: true,
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
		<div className="max-w-2xl mx-auto space-y-6">
			{/* Header */}
			<div className="flex items-center gap-4 mb-8">
				<div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-950/50 dark:to-yellow-900/30 rounded-2xl flex items-center justify-center shadow-inner">
					<ArrowDownLeft className="w-6 h-6 text-amber-600 dark:text-amber-400" />
				</div>
				<div>
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Withdraw Funds</h1>
					<p className="text-gray-600 dark:text-gray-400 text-sm">Available: ${userBalance.toFixed(2)}</p>
				</div>
			</div>

			<div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl">
				<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>

				<div className="relative z-10">
					{/* Auto-withdrawal Info */}
					{formData.autoWithdraw && (
						<div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-2xl p-4 mb-6 border border-emerald-200/50 dark:border-emerald-800/50">
							<div className="flex items-start gap-3">
								<Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
								<div>
									<h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
										Auto-Withdrawal Enabled
									</h3>
									<p className="text-sm text-emerald-700 dark:text-emerald-400">
										Your withdrawal will be processed automatically if funds are available in our Bybit
										wallet.
									</p>
								</div>
							</div>
						</div>
					)}

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
								className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-slate-700/50 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent transition-all duration-200"
								placeholder="Enter amount"
								required
							/>
						</div>

						{/* Availability Check */}
						{availability && (
							<div
								className={`rounded-2xl p-4 border ${
									availability.available
										? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800"
										: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800"
								}`}
							>
								<div className="flex items-start gap-3">
									{availability.available ? (
										<CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
									) : (
										<AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
									)}
									<div>
										<p
											className={`text-sm font-medium ${
												availability.available
													? "text-emerald-800 dark:text-emerald-300"
													: "text-amber-800 dark:text-amber-300"
											}`}
										>
											{availability.available ? "Auto-withdrawal available" : "Manual approval required"}
										</p>
										<p
											className={`text-xs ${
												availability.available
													? "text-emerald-700 dark:text-emerald-400"
													: "text-amber-700 dark:text-amber-400"
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
								className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-slate-700/50 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent transition-all duration-200"
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
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Network
							</label>
							<select
								name="network"
								value={formData.network}
								onChange={handleInputChange}
								className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-slate-700/50 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent transition-all duration-200"
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
								className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-slate-700/50 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent transition-all duration-200"
								placeholder="Enter your wallet address"
								required
							/>
						</div>

						{/* Auto-withdrawal Toggle */}
						<div className="flex items-center gap-3">
							<input
								type="checkbox"
								name="autoWithdraw"
								checked={formData.autoWithdraw}
								onChange={handleInputChange}
								className="w-5 h-5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
							/>
							<label className="text-sm text-gray-700 dark:text-gray-300">
								Enable auto-withdrawal (faster processing when available)
							</label>
						</div>

						{/* Error Message */}
						{error && (
							<div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-4">
								<div className="flex items-start gap-3">
									<AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
									<p className="text-sm text-red-800 dark:text-red-300">{error}</p>
								</div>
							</div>
						)}

						{/* Success Message */}
						{success && (
							<div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4">
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
							className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-amber-500/25 disabled:cursor-not-allowed"
						>
							{isLoading ? "Processing..." : "Submit Withdrawal"}
						</button>
					</form>

					{/* Info Section */}
					<div className="mt-6 bg-gray-50 dark:bg-slate-700/30 rounded-2xl p-4">
						<div className="flex items-start gap-3">
							<Info className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" />
							<div className="text-sm text-gray-600 dark:text-gray-400">
								<p className="mb-2">
									<strong>Auto-withdrawals</strong> are processed instantly when funds are available.
								</p>
								<p>
									<strong>Manual withdrawals</strong> require admin approval and may take 24-48 hours.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Withdraw;
