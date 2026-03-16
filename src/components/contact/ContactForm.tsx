import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setIsSubmitted(true);

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
		}, 3000);
	};

	const requestPurposes = ["debit card", "physical gold", "general purpose"];

	return (
		<div>
			<div className="text-center lg:text-left mb-8">
				<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Submit Your Request</h2>
				<p className="text-lg text-gray-600">Tell us about your project and we'll get back to you swiftly.</p>
			</div>

			{isSubmitted ? (
				<div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
					<CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
					<h3 className="text-xl font-bold text-green-900 mb-2">Thank You!</h3>
					<p className="text-green-700">
						Your request has been submitted successfully. Our team will review your information and
						contact you within 24 hours.
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
						className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group"
					>
						Submit Request
						<Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
					</button>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
