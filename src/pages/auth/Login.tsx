import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Loader } from "lucide-react";
import logo from "../../assets/logo-2-dark.png";
import Alert from "../../components/UI/Alert";
import { useToastUtils } from "../../services/toast";

const LoginForm: React.FC = () => {
	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
	const { login, clearError } = useAuth();
	const navigate = useNavigate();
	const { showSuccessToast } = useToastUtils();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

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

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Clear all errors
		clearError();
		setError(null);

		// Validate form
		if (!formData.email || !formData.password) {
			setError("Please fill in all fields");
			return;
		}

		if (!formData.email.includes("@")) {
			setError("Please enter a valid email address");
			return;
		}

		setIsSubmitting(true);

		try {
			const res = await fetch(`${url}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (res.ok && data.user) {
				showSuccessToast("Logged in successfully");
				login(data.user);

				setTimeout(() => {
					navigate;
				}, 2000);
			} else {
				setError(data.message || "Login failed");
			}
		} catch (error) {
			console.error("Login error:", error);
			setError("An unexpected error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const isFormValid = formData.email && formData.password;

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<div className="max-w-md w-full">
				<div className="bg-white rounded-xl shadow-lg p-8">
					{/* Header */}
					<div className="text-center mb-8">
						<Link to="/" className="inline-block mb-6">
							<img src={logo} alt="99infinite" className="h-12 mx-auto" />
						</Link>
						<h2 className="text-xl font-semibold text-gray-900">Welcome Back</h2>
						<p className="text-gray-600 mt-2">Sign in to your account</p>
					</div>

					{/* Error Display */}
					{error && <Alert type="danger" message={error} showToggle={true} />}

					{/* Login Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
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
									placeholder="Enter your email"
									required
								/>
							</div>
						</div>

						{/* Password Field */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Lock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									value={formData.password}
									onChange={handleInputChange}
									className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									placeholder="Enter your password"
									required
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute inset-y-0 right-0 pr-3 flex items-center"
								>
									{showPassword ? (
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
							disabled={!isFormValid || isSubmitting}
							className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? (
								<>
									<Loader className="w-5 h-5 mr-2 animate-spin" />
									Signing in...
								</>
							) : (
								"Sign in"
							)}
						</button>
					</form>

					{/* Links */}
					<div className="mt-6 text-center space-y-2">
						<p className="text-sm text-gray-600">
							Don't have an account?{" "}
							<Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium">
								Sign up
							</Link>
						</p>
						<p className="text-sm">
							<a href="#" className="text-blue-600 hover:text-blue-500">
								Forgot your password?
							</a>
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

const Login: React.FC = () => {
	return <LoginForm />;
};

export default Login;
