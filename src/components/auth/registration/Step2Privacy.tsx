import React, { useState, useEffect } from "react";
import { useRegistration } from "../../../contexts/RegistrationContext";
import { ChevronLeft, Shield, CheckCircle, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Alert from "../../UI/Alert";
import { useToastUtils } from "../../../services/toast";
import { contextData } from "@/contexts/AuthContext";

const Step2Privacy: React.FC = () => {
	const { state, updatePrivacy, updatePassword, prevStep, setStepValidity, getRegistrationData, resetForm } =
		useRegistration();
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
	const { login } = contextData();
	const navigate = useNavigate();
	const { showSuccessToast } = useToastUtils();

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Form validation
	const validateForm = () => {
		const newErrors: Record<string, string> = {};
		const { privacy } = state;

		if (!privacy.termsAndConditions) {
			newErrors.termsAndConditions = "You must accept the terms and conditions";
		}
		if (!privacy.privacyStatement) {
			newErrors.privacyStatement = "You must accept the privacy statement";
		}
		if (!state.password.trim()) {
			newErrors.password = "Password is required";
		} else if (state.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
		}
		if (state.password !== state.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		setErrors(newErrors);
		const isValid = Object.keys(newErrors).length === 0;
		setStepValidity("step2", isValid);
		return isValid;
	};

	useEffect(() => {
		validateForm();
	}, [state.privacy, state.password, state.confirmPassword]);

	const handlePrivacyChange = (field: string, value: any) => {
		updatePrivacy({ [field]: value });
	};

	const handlePasswordChange = (field: "password" | "confirmPassword", value: string) => {
		if (field === "password") {
			updatePassword(value, state.confirmPassword);
		} else {
			updatePassword(state.password, value);
		}
	};

	const handleSubmit = async () => {
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		const registrationData = getRegistrationData();
		try {
			const res = await fetch(`${url}/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(registrationData),
			});

			const data = await res.json();

			if (res.ok && data.user) {
				showSuccessToast("Registration successful! Welcome to 99infinite!", 3000);
				login(data.user);
				resetForm();

				navigate("/kyc");
			} else {
				setErrors({ submit: data.message || "Registration failed. Please try again." });
				setTimeout(() => {
					setErrors({});
				}, 4000);
			}
		} catch (error: any) {
			console.error("Registration error:", error.message);
			setErrors({ submit: error.message || "Registration failed. Please try again." });
			setTimeout(() => {
				setErrors({});
			}, 4000);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
				{/* Header */}
				<div className="bg-gray-800 text-white p-4 md:p-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-bold">Verification & Checkout</h1>
							<p className="text-gray-300">Step 2 of 2 - Complete Your Registration</p>
						</div>
					</div>

					{/* Progress Bar */}
					<div className="mt-4">
						<div className="w-full bg-gray-600 rounded-full h-2">
							<div
								className="bg-white h-2 rounded-full transition-all duration-300"
								style={{ width: "100%" }}
							></div>
						</div>
					</div>
				</div>

				<div className="p-4 md:p-8">
					<div className="space-y-8">
						{/* Account Security */}
						<div className="bg-gray-50 rounded-xl p-6">
							<h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
								<Shield className="w-5 h-5 mr-2 text-red-600" />
								Account Security
							</h2>

							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
									<input
										type="password"
										defaultValue={state.password}
										onChange={(e) => handlePasswordChange("password", e.target.value)}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
											errors.password ? "border-red-500" : "border-gray-300"
										}`}
										placeholder="Create a strong password"
									/>
									{errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
									<p className="text-xs text-gray-500 mt-1">Must be at least 6 characters long.</p>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
									<input
										type="password"
										defaultValue={state.confirmPassword}
										onChange={(e) => handlePasswordChange("confirmPassword", e.target.value)}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
											errors.confirmPassword ? "border-red-500" : "border-gray-300"
										}`}
										placeholder="Confirm your password"
									/>
									{errors.confirmPassword && (
										<p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
									)}
								</div>
							</div>
						</div>

						{/* Terms and Conditions */}
						<div className="bg-gray-50 rounded-xl p-6">
							<h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
								<CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
								Legal Agreements
							</h2>

							<div className="space-y-4">
								<label className="flex items-start">
									<input
										type="checkbox"
										checked={state.privacy.termsAndConditions || false}
										onChange={(e) => handlePrivacyChange("termsAndConditions", e.target.checked)}
										className="mr-3 mt-1 text-blue-600 focus:ring-blue-500"
									/>
									<span className="text-sm text-gray-700">
										I have read and agree to the{" "}
										<a href="#" className="text-blue-600 hover:underline">
											Terms and Conditions
										</a>{" "}
										and{" "}
										<a href="#" className="text-blue-600 hover:underline">
											Investment Agreement
										</a>
										{" *"}
									</span>
								</label>
								{errors.termsAndConditions && (
									<p className="text-red-500 text-sm">{errors.termsAndConditions}</p>
								)}

								<label className="flex items-start">
									<input
										type="checkbox"
										checked={state.privacy.privacyStatement || false}
										onChange={(e) => handlePrivacyChange("privacyStatement", e.target.checked)}
										className="mr-3 mt-1 text-blue-600 focus:ring-blue-500"
									/>
									<span className="text-sm text-gray-700">
										I have read and agree to the{" "}
										<a href="#" className="text-blue-600 hover:underline">
											Privacy Policy
										</a>{" "}
										and consent to the processing of my personal data
										{" *"}
									</span>
								</label>
								{errors.privacyStatement && <p className="text-red-500 text-sm">{errors.privacyStatement}</p>}
							</div>
						</div>

						{/* Registration Summary */}
						<div className="bg-gray-100 rounded-lg p-6">
							<h3 className="text-lg font-bold mb-4 text-gray-900">Registration Summary</h3>
							<div className="grid md:grid-cols-2 gap-4 text-sm">
								<div>
									<p className="text-gray-600">Account Holder</p>
									<p className="font-bold text-lg text-gray-900">
										{state.personalInfo.firstName} {state.personalInfo.lastName}
									</p>
								</div>
								<div>
									<p className="text-gray-600">Email</p>
									<p className="font-semibold text-gray-900">{state.personalInfo.email}</p>
								</div>
							</div>
						</div>

						{/* Error Display */}
						{errors.submit && <Alert type="danger" message={errors.submit} showToggle={true} />}
					</div>

					{/* Navigation Buttons */}
					<div className="flex justify-between mt-8">
						<button
							onClick={prevStep}
							disabled={isSubmitting}
							className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium transition-colors duration-200"
						>
							<ChevronLeft className="w-5 h-5 mr-2" />
							Back
						</button>

						<button
							onClick={handleSubmit}
							disabled={Object.keys(errors).length > 0 || isSubmitting}
							className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors duration-200"
						>
							{isSubmitting ? (
								<>
									<Loader className="w-5 h-5 mr-2 animate-spin" />
									Submitting...
								</>
							) : (
								<>
									Submit
									<CheckCircle className="w-5 h-5 ml-2" />
								</>
							)}
						</button>
					</div>

					<div className="text-center mt-4">
						<p className="text-xs text-gray-500">
							By completing registration, you authorize 99infinite to process your investment and begin the
							Privacy verification process.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step2Privacy;
