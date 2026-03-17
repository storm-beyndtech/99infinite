import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
	name: string;
	email: string;
	phone: string;
	address: string;
	requestPurpose: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		address: "",
		requestPurpose: "debit card",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user starts typing
		if (error) setError(null);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			const response = await fetch(`${url}/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Failed to submit contact form");
			}

			setIsSubmitted(true);

			// Reset form after 5 seconds
			setTimeout(() => {
				setIsSubmitted(false);
				setFormData({
					name: "",
					email: "",
					phone: "",
					address: "",
					requestPurpose: "debit card",
					message: "",
				});
			}, 5000);
		} catch (err: any) {
			console.error("Contact form submission error:", err);
			setError(err.message || "Failed to submit form. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const requestPurposes = ["debit card", "physical gold", "general purpose"];

	return (
		<div>
			<div className="text-center lg:text-left mb-8">
				<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Submit Your Request</h2>
				<p className="text-lg text-gray-600">Tell us about your project and we'll get back to you swiftly.</p>
			</div>

			{error && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
					<AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
					<p className="text-red-700">{error}</p>
				</div>
			)}

			{isSubmitted ? (
				<div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
					<CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
					<h3 className="text-xl font-bold text-green-900 mb-2">Thank You!</h3>
					<p className="text-green-700">
						Your request has been submitted successfully. Our team will review your information and
						contact you within 24 hours. You will also receive a confirmation email shortly.
					</p>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
								Full Name *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={formData.name}
								onChange={handleInputChange}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder="John Smith"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
								Email Address *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={formData.email}
								onChange={handleInputChange}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder="john@company.com"
							/>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleInputChange}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder="(555) 123-4567"
							/>
						</div>
						<div>
							<label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
								Home Address *
							</label>
							<input
								type="text"
								id="address"
								name="address"
								required
								value={formData.address}
								onChange={handleInputChange}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder="123 Main Street, City, State"
							/>
						</div>
					</div>

					<div>
						<label htmlFor="requestPurpose" className="block text-sm font-semibold text-gray-700 mb-2">
							Request Purpose *
						</label>
						<select
							id="requestPurpose"
							name="requestPurpose"
							required
							value={formData.requestPurpose}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						>
							{requestPurposes.map((purpose) => (
								<option key={purpose} value={purpose}>
									{purpose}
								</option>
							))}
						</select>
					</div>

					<div>
						<label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
							Additional Information
						</label>
						<textarea
							id="message"
							name="message"
							rows={6}
							value={formData.message}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							placeholder="Please provide any additional details about your request or specific requirements..."
						/>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group"
					>
						{isSubmitting ? (
							<>
								<svg
									className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Submitting...
							</>
						) : (
							<>
								Submit Request
								<Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</>
						)}
					</button>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
