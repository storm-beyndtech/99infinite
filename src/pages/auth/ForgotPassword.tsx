import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Loader, ArrowLeft, Key, Eye, EyeOff } from "lucide-react";
import logo from "../../assets/logo-2-dark.png";
import Alert from "../../components/UI/Alert";

const ForgotPassword: React.FC = () => {
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
	const [step, setStep] = useState<"email" | "verify">("email");
	const [formData, setFormData] = useState({
		email: "",
		code: "",
		newPassword: "",
		confirmPassword: "",
	});

	const [showPassword, setShowPassword] = useState({
		newPassword: false,
		confirmPassword: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (error) {
			setError(null);
		}
	};

	const handleRequestReset = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.email) {
			setError("Please enter your email address");
			return;
		}

		if (!/\S+@\S+\.\S+/.test(formData.email)) {
			setError("Please enter a valid email address");
			return;
		}

		setIsSubmitting(true);
		setError(null);

		try {
			const res = await fetch(`${url}/users/password-reset/request`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: formData.email }),
			});

			const data = await res.json();

			if (res.ok) {
				setSuccess("Password reset code sent to your email");
				setStep("verify");
			} else {
				setError(data.message || "Failed to send reset code");
			}
		} catch (error) {
			console.error("Password reset request error:", error);
			setError("An unexpected error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleVerifyAndReset = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.code || !formData.newPassword || !formData.confirmPassword) {
			setError("Please fill in all fields");
			return;
		}

		if (formData.newPassword !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (formData.newPassword.length < 8) {
			setError("Password must be at least 8 characters long");
			return;
		}

		setIsSubmitting(true);
		setError(null);

		try {
			const res = await fetch(`${url}/users/password-reset/verify`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: formData.email,
					code: formData.code,
					newPassword: formData.newPassword,
				}),
			});

			const data = await res.json();

			if (res.ok) {
				setSuccess("Password reset successful! You can now login with your new password.");
				setFormData({
					email: "",
					code: "",
					newPassword: "",
					confirmPassword: "",
				});
			} else {
				setError(data.message || "Failed to reset password");
			}
		} catch (error) {
			console.error("Password reset verify error:", error);
			setError("An unexpected error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const togglePasswordVisibility = (field: "newPassword" | "confirmPassword") => {
		setShowPassword((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<div className="max-w-md w-full">
				<div className="bg-white rounded-xl shadow-lg p-8">
					{/* Header */}
					<div className="text-center mb-8">
						<Link to="/" className="inline-block mb-6">
							<img src={logo} alt="99infinite" className="h-12 mx-auto" />
						</Link>
						<h2 className="text-xl font-semibold text-gray-900">
							{step === "email" ? "Reset Password" : "Enter Reset Code"}
						</h2>
						<p className="text-gray-600 mt-2">
							{step === "email" 
								? "Enter your email address and we'll send you a reset code"
								: "Enter the code sent to your email and your new password"
							}
						</p>
					</div>

					{/* Error/Success Display */}
					{error && <Alert type="danger" message={error} showToggle={true} />}
					{success && <Alert type="success" message={success} showToggle={true} />}

					{step === "email" ? (
						/* Email Form */
						<form onSubmit={handleRequestReset} className="space-y-6">
							{/* Email Field */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Mail className="h-5 w-5 text-gray-400" />
									</div>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Enter your email address"
										required
									/>
								</div>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={!formData.email || isSubmitting}
								className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<>
										<Loader className="w-5 h-5 mr-2 animate-spin" />
										Sending...
									</>
								) : (
									"Send Reset Code"
								)}
							</button>
						</form>
					) : (
						/* Verify and Reset Form */
						<form onSubmit={handleVerifyAndReset} className="space-y-6">
							{/* Reset Code Field */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Reset Code</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Key className="h-5 w-5 text-gray-400" />
									</div>
									<input
										type="text"
										name="code"
										value={formData.code}
										onChange={handleInputChange}
										className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Enter the 6-digit code"
										required
									/>
								</div>
							</div>

							{/* New Password Field */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
								<div className="relative">
									<input
										type={showPassword.newPassword ? "text" : "password"}
										name="newPassword"
										value={formData.newPassword}
										onChange={handleInputChange}
										className="block w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Enter your new password"
										required
									/>
									<button
										type="button"
										onClick={() => togglePasswordVisibility("newPassword")}
										className="absolute inset-y-0 right-0 pr-3 flex items-center"
									>
										{showPassword.newPassword ? (
											<EyeOff className="h-5 w-5 text-gray-400" />
										) : (
											<Eye className="h-5 w-5 text-gray-400" />
										)}
									</button>
								</div>
							</div>

							{/* Confirm Password Field */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
								<div className="relative">
									<input
										type={showPassword.confirmPassword ? "text" : "password"}
										name="confirmPassword"
										value={formData.confirmPassword}
										onChange={handleInputChange}
										className="block w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Confirm your new password"
										required
									/>
									<button
										type="button"
										onClick={() => togglePasswordVisibility("confirmPassword")}
										className="absolute inset-y-0 right-0 pr-3 flex items-center"
									>
										{showPassword.confirmPassword ? (
											<EyeOff className="h-5 w-5 text-gray-400" />
										) : (
											<Eye className="h-5 w-5 text-gray-400" />
										)}
									</button>
								</div>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={!formData.code || !formData.newPassword || !formData.confirmPassword || isSubmitting}
								className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<>
										<Loader className="w-5 h-5 mr-2 animate-spin" />
										Resetting...
									</>
								) : (
									"Reset Password"
								)}
							</button>

							{/* Back to Email Step */}
							<button
								type="button"
								onClick={() => {
									setStep("email");
									setError(null);
									setSuccess(null);
								}}
								className="w-full flex justify-center items-center py-2 text-sm text-gray-600 hover:text-gray-900"
							>
								<ArrowLeft className="w-4 h-4 mr-2" />
								Back to Email
							</button>
						</form>
					)}

					{/* Links */}
					<div className="mt-6 text-center space-y-2">
						<p className="text-sm">
							Remember your password?{" "}
							<Link to="/login" className="text-blue-600 hover:text-blue-500">
								Sign in
							</Link>
						</p>
					</div>
				</div>

				{/* Footer */}
				<div className="text-center mt-8">
					<p className="text-xs text-gray-500">© 2025 99infinite. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;