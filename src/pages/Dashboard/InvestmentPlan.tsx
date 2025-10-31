import type React from "react";
import { useState, useEffect } from "react";
import { Check, X, Shield } from "lucide-react";
import { useToastUtils } from "@/services/toast";
import { contextData } from "@/contexts/AuthContext";

// TypeScript interfaces
interface InvestmentPlan {
	_id: string;
	name: string;
	description: string;
	roi: number;
	minAmount: number;
	duration: string;
	features: string[];
}

const InvestmentPlan: React.FC = () => {
	const [plans, setPlans] = useState<InvestmentPlan[]>([]);
	const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [investmentAmount, setInvestmentAmount] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const { user, fetchUser } = contextData();
	const { showSuccessToast, showErrorToast } = useToastUtils();

	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	// Fetch plans with proper error handling
	const fetchPlans = async (): Promise<void> => {
		try {
			const response = await fetch(`${url}/plans`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data: InvestmentPlan[] = await response.json();
			setPlans(data);
		} catch (error: any) {
			console.error("Error fetching plans:", error);
			showErrorToast(error.message || "Error Fetching Plans");
		}
	};

	useEffect(() => {
		fetchPlans();
	}, []);

	const handlePlanSelect = (plan: InvestmentPlan): void => {
		setSelectedPlan(plan);
		setShowModal(true);
		setInvestmentAmount("");
	};

	const handleInvestment = async () => {
		if (!selectedPlan) return;

		setIsSubmitting(true);

		const amount = parseFloat(investmentAmount);

		if (isNaN(amount) || amount <= 0) {
			showErrorToast("Please enter a valid investment amount");
			setIsSubmitting(false);
			return;
		}

		if (amount < selectedPlan.minAmount) {
			showErrorToast(`Minimum investment is $${selectedPlan.minAmount.toLocaleString()}`);
			setIsSubmitting(false);
			return;
		}

		if (amount > user.deposit) {
			showErrorToast(`Insufficient balance. Available: $${user.deposit.toLocaleString()}`);
			setIsSubmitting(false);
			return;
		}

		try {
			const response = await fetch(`${url}/plans/invest`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					planId: selectedPlan._id,
					amount: amount,
					interest: (parseFloat(investmentAmount) * selectedPlan.roi) / 100,
					userId: user._id,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				showSuccessToast(
					`Investment of $${amount.toLocaleString()} activated successfully! Your investment is now earning returns.`,
				);
				
				// Silently refresh user data to reflect updated balance
				if (user?.id && fetchUser) {
					fetchUser(user.id, true);
				}
				
				setShowModal(false);
				setSelectedPlan(null);
				setInvestmentAmount("");
			} else {
				throw new Error(data.message || "Failed to create investment");
			}
		} catch (error: any) {
			showErrorToast(error.message || "Failed to create investment");
		} finally {
			setIsSubmitting(false);
		}
	};

	const isFormValid = (): boolean => {
		const amount = parseFloat(investmentAmount);
		return !isNaN(amount) && amount > 0 && selectedPlan !== null;
	};

	return (
		<>
			<div>
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="mb-12">
						<h1 className="text-2xl font-light text-slate-900 dark:text-white mb-2">Investment Plans</h1>
					</div>

					{/* Plans Grid */}
					<div className="grid lg:grid-cols-3 gap-8">
						{plans.map((plan: InvestmentPlan) => {
							return (
								<div
									key={plan._id}
									className="group relative bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-8 
                 hover:bg-white/30 dark:hover:bg-slate-800/30 hover:border-white/60 dark:hover:border-slate-600/60 
                 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-3xl hover:-translate-y-3 
                 overflow-hidden"
									onClick={() => handlePlanSelect(plan)}
								>
									{/* Subtle noise texture for frosted glass feel */}
									<div className="absolute inset-0 opacity-10">
										<div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:via-slate-600/20"></div>
									</div>

									{/* Shimmer border effect on hover */}
									<div
										className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 dark:group-hover:border-white/20 
                      bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-slate-500/10 
                      bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700"
									></div>

									{/* Inner glow ring */}
									<div
										className="absolute -inset-1 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 
                      blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 rounded-3xl -z-10"
									></div>

									{/* Content */}
									<div className="relative z-10">
										{/* Icon & Title */}
										<div className="flex items-center space-x-4 mb-6">
											<div
												className="p-3 rounded-2xl bg-white/40 dark:bg-slate-700/40 backdrop-blur-md border border-white/50 dark:border-slate-600/50 
                          shadow-inner shadow-white/30 dark:shadow-slate-900/30"
											>
												<Shield className="w-7 h-7 text-slate-700 dark:text-slate-200" />
											</div>
											<div>
												<h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
													{plan.name}
												</h3>
												<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{plan.duration}</p>
											</div>
										</div>

										{/* ROI Highlight */}
										<div
											className="mb-6 p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-600/10 dark:to-teal-600/10 
                        rounded-2xl border border-emerald-300/30 dark:border-emerald-700/30 backdrop-blur-sm"
										>
											<div className="text-4xl font-bold text-emerald-700 dark:text-emerald-300">
												{plan.roi}%
											</div>
											<div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">ROI</div>
										</div>

										{/* Min Investment */}
										<div className="mb-6">
											<div className="text-2xl font-medium text-slate-800 dark:text-slate-100">
												${plan.minAmount.toLocaleString()}
												<span className="text-sm text-slate-500 dark:text-slate-400 font-normal"> min</span>
											</div>
										</div>

										{/* Description */}
										<p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm line-clamp-2">
											{plan.description}
										</p>

										{/* Features */}
										<div className="space-y-3 mb-8">
											{plan.features.slice(0, 3).map((feature: string, index: number) => (
												<div key={index} className="flex items-center space-x-3">
													<div
														className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30 
                              flex items-center justify-center border border-emerald-300/40 dark:border-emerald-600/40 
                              backdrop-blur-sm"
													>
														<Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
													</div>
													<span className="text-sm text-slate-700 dark:text-slate-200 font-medium">
														{feature}
													</span>
												</div>
											))}
										</div>

										{/* CTA Button */}
										<button
											className="w-full py-3 px-6 bg-gradient-to-r from-slate-900/90 to-slate-800/90 dark:from-white/90 dark:to-slate-100 
                     text-white dark:text-slate-900 font-semibold rounded-2xl transition-all duration-300 
                     hover:from-slate-800 dark:hover:from-white hover:to-slate-700 dark:hover:to-slate-200 
                     backdrop-blur-md border border-white/30 dark:border-slate-700/30 
                     hover:scale-[1.02] hover:shadow-xl active:scale-100"
											type="button"
											aria-label={`Start investment with ${plan.name} plan`}
										>
											Start Investment
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Investment Modal */}
			{showModal && selectedPlan && (
				<div className="fixed h-full inset-0 z-[999999] flex justify-center p-4 pt-20 bg-white/40 dark:bg-gradient-to-b from-black/95 to-cyan-950/95 backdrop-blur-3xl">
					<div className="bg-white/90 dark:bg-[#031615]/90 backdrop-blur-2xl rounded-2xl p-8 max-w-md w-full h-fit shadow-2xl border border-white/20 dark:border-slate-700/30">
						<div className="relative z-10">
							<div className="flex justify-between items-center mb-8">
								<div>
									<h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedPlan.name}</h3>
									<p className="text-slate-600 dark:text-slate-400 text-sm">
										{selectedPlan.roi}% ROI • {selectedPlan.duration}
									</p>
								</div>
								<button
									onClick={() => setShowModal(false)}
									className="p-2 hover:bg-white/20 dark:hover:bg-slate-700/20 rounded-xl transition-colors"
									type="button"
									aria-label="Close modal"
								>
									<X className="w-5 h-5 text-slate-500" />
								</button>
							</div>

							<div className="mb-6">
								<label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
									Investment Amount
								</label>
								<div className="relative">
									<span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 dark:text-slate-400">
										$
									</span>
									<input
										type="number"
										value={investmentAmount}
										onChange={(e) => setInvestmentAmount(e.target.value)}
										placeholder={`Min ${selectedPlan.minAmount.toLocaleString()}`}
										className="w-full pl-8 pr-4 py-4 border border-white/30 dark:border-slate-600/30 rounded-xl bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none backdrop-blur-sm transition-all"
										min={selectedPlan.minAmount}
										max={user.deposit}
										step="1"
										required
									/>
								</div>
								<div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
									Available: ${user.deposit.toLocaleString()}
								</div>
							</div>

							{investmentAmount && !isNaN(parseFloat(investmentAmount)) && (
								<div className="mb-6 p-4 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-xl backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30">
									<div className="text-sm text-emerald-700 dark:text-emerald-400 mb-1">
										Expected Return (after {selectedPlan.duration})
									</div>
									<div className="text-xl font-medium text-emerald-800 dark:text-emerald-300">
										${((parseFloat(investmentAmount) * selectedPlan.roi) / 100).toLocaleString()}
									</div>
									<div className="text-xs text-emerald-600 dark:text-emerald-500 mt-1">
										Total: $
										{(
											parseFloat(investmentAmount) +
											(parseFloat(investmentAmount) * selectedPlan.roi) / 100
										).toLocaleString()}
									</div>
								</div>
							)}

							<div className="flex gap-4">
								<button
									onClick={() => setShowModal(false)}
									className="flex-1 py-3 px-6 border border-slate-300/50 dark:border-slate-600/50 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-white/20 dark:hover:bg-slate-700/20 transition-all backdrop-blur-sm"
									type="button"
								>
									Cancel
								</button>
								<button
									onClick={handleInvestment}
									disabled={isSubmitting || !isFormValid()}
									className="flex-1 py-3 px-6 bg-blue-500/80 hover:bg-blue-500 text-white rounded-xl transition-all disabled:opacity-50 backdrop-blur-sm border border-blue-400/30 hover:scale-105"
									type="button"
								>
									{isSubmitting ? "Processing..." : "Proceed"}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default InvestmentPlan;
