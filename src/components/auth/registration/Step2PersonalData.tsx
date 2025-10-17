import React, { useState, useEffect } from "react";
import { useRegistration } from "../../../contexts/RegistrationContext";
import { Link } from "react-router-dom";
import { ChevronRight, User, Mail, MapPin, Phone, Calendar } from "lucide-react";
import logo2 from "../../../assets/logo-2.png";

const Step2PersonalData: React.FC = () => {
	const { state, updatePersonalInfo, nextStep, setStepValidity } = useRegistration();
	const [errors, setErrors] = useState<Record<string, string>>({
		sponsorCode: "Sponsor code is required",
		firstName: "First name is required",
		lastName: "Last name is required",
		email: "Email is required",
		address: "Address is required",
		zipCode: "ZIP code is required",
		location: "Location is required",
		country: "Country is required",
		mobileNumber: "Mobile number is required",
		birthday: "You must be at least 18 years old",
	});

	// Form validation
	const validateForm = () => {
		const newErrors: Record<string, string> = {};
		const { personalInfo } = state;

		if (!personalInfo.sponsorCode?.trim()) {
			newErrors.sponsorCode = "Sponsor code is required";
		}
		if (!personalInfo.firstName?.trim()) {
			newErrors.firstName = "First name is required";
		}
		if (!personalInfo.lastName?.trim()) {
			newErrors.lastName = "Last name is required";
		}
		if (!personalInfo.email?.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(personalInfo.email)) {
			newErrors.email = "Email is invalid";
		}
		if (!personalInfo.address?.trim()) {
			newErrors.address = "Address is required";
		}
		if (!personalInfo.zipCode?.trim()) {
			newErrors.zipCode = "ZIP code is required";
		}
		if (!personalInfo.location?.trim()) {
			newErrors.location = "Location is required";
		}
		if (!personalInfo.country?.trim()) {
			newErrors.country = "Country is required";
		}
		if (!personalInfo.mobileNumber?.number?.trim()) {
			newErrors.mobileNumber = "Mobile number is required";
		}

		// Birthday validation
		const today = new Date();
		const birthDate = new Date(
			personalInfo.birthday?.year || 0,
			(personalInfo.birthday?.month || 1) - 1,
			personalInfo.birthday?.day || 1,
		);
		const age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();

		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
			// age--;
		}

		if (age < 18) {
			newErrors.birthday = "You must be at least 18 years old";
		}

		setErrors(newErrors);
		const isValid = Object.keys(newErrors).length === 0;
		setStepValidity("step2", isValid);
		return isValid;
	};

	useEffect(() => {
		validateForm();
	}, [state.personalInfo, setStepValidity]);

	const handleInputChange = (field: string, value: any) => {
		updatePersonalInfo({ [field]: value });
	};

	const handleNestedInputChange = (parentField: string, childField: string, value: any) => {
		const currentValue = (state.personalInfo as any)[parentField] || {};
		updatePersonalInfo({
			[parentField]: {
				...currentValue,
				[childField]: value,
			},
		});
	};

	const handleContinue = () => {
		if (validateForm()) {
			nextStep();
		}
	};

	const currentYear = new Date().getFullYear();
	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const years = Array.from({ length: 100 }, (_, i) => currentYear - 18 - i);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
			<div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
				{/* Header */}
				<div className="bg-cyan-700 text-white p-6">
					<div className="flex items-center justify-between">
						<div>
							<div className="flex items-center space-x-3 mb-2">
								<div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
									<User className="w-6 h-6" />
								</div>
								<div>
									<h1 className="text-2xl font-bold">Personal Data</h1>
									<p className="text-cyan-100">Step 1 of 4</p>
								</div>
							</div>
						</div>
						<div className="flex items-center">
							<Link to="/" className="hover:opacity-80 transition-opacity duration-200">
								<img src={logo2} alt="99infinite" className="h-8 w-auto" />
							</Link>
						</div>
					</div>

					{/* Progress Bar */}
					<div className="mt-6">
						<div className="flex justify-between text-sm text-cyan-100 mb-2">
							<span>Progress</span>
							<span>25%</span>
						</div>
						<div className="w-full bg-blue-500/30 rounded-full h-3">
							<div
								className="bg-gradient-to-r from-white to-cyan-200 h-3 rounded-full transition-all duration-500 shadow-sm"
								style={{ width: "25%" }}
							></div>
						</div>
					</div>
				</div>

				{/* Form Content */}
				<div className="p-8">
					<div className="grid md:grid-cols-2 gap-6">
						{/* Sponsor Code */}
						<div className="md:col-span-2">
							<label className="block text-sm font-medium text-gray-700 mb-2">Sponsor Code</label>
							<input
								type="text"
								value={state.personalInfo.sponsorCode || ""}
								onChange={(e) => handleInputChange("sponsorCode", e.target.value)}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.sponsorCode ? "border-red-500" : "border-gray-300"
								}`}
								placeholder="Enter sponsor code"
							/>
							{errors.sponsorCode && <p className="text-red-500 text-sm mt-1">{errors.sponsorCode}</p>}
						</div>

						{/* Title */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
							<select
								value={state.personalInfo.title || "Mr"}
								onChange={(e) => handleInputChange("title", e.target.value)}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							>
								<option value="Mr">Mr</option>
								<option value="Mrs">Mrs</option>
								<option value="Ms">Ms</option>
								<option value="Dr">Dr</option>
								<option value="Prof">Prof</option>
							</select>
						</div>

						{/* First Name */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
							<input
								type="text"
								value={state.personalInfo.firstName || ""}
								onChange={(e) => handleInputChange("firstName", e.target.value)}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.firstName ? "border-red-500" : "border-gray-300"
								}`}
								placeholder="Enter first name"
							/>
							{errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
						</div>

						{/* Last Name */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
							<input
								type="text"
								value={state.personalInfo.lastName || ""}
								onChange={(e) => handleInputChange("lastName", e.target.value)}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.lastName ? "border-red-500" : "border-gray-300"
								}`}
								placeholder="Enter last name"
							/>
							{errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
						</div>

						{/* Email */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								<Mail className="w-4 h-4 inline mr-1" />
								Email Address *
							</label>
							<input
								type="email"
								value={state.personalInfo.email || ""}
								onChange={(e) => handleInputChange("email", e.target.value)}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.email ? "border-red-500" : "border-gray-300"
								}`}
								placeholder="Enter email address"
							/>
							{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
						</div>

						{/* Birthday */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								<Calendar className="w-4 h-4 inline mr-1" />
								Date of Birth *
							</label>
							<div className="grid grid-cols-3 gap-2">
								<select
									value={state.personalInfo.birthday?.day || 1}
									onChange={(e) => handleNestedInputChange("birthday", "day", parseInt(e.target.value))}
									className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								>
									{days.map((day) => (
										<option key={day} value={day}>
											{day}
										</option>
									))}
								</select>
								<select
									value={state.personalInfo.birthday?.month || 1}
									onChange={(e) => handleNestedInputChange("birthday", "month", parseInt(e.target.value))}
									className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								>
									{months.map((month, index) => (
										<option key={index + 1} value={index + 1}>
											{month}
										</option>
									))}
								</select>
								<select
									value={state.personalInfo.birthday?.year || currentYear - 18}
									onChange={(e) => handleNestedInputChange("birthday", "year", parseInt(e.target.value))}
									className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								>
									{years.map((year) => (
										<option key={year} value={year}>
											{year}
										</option>
									))}
								</select>
							</div>
							{errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday}</p>}
						</div>

						{/* Address */}
						<div className="md:col-span-2">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								<MapPin className="w-4 h-4 inline mr-1" />
								Address *
							</label>
							<input
								type="text"
								value={state.personalInfo.address || ""}
								onChange={(e) => handleInputChange("address", e.target.value)}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.address ? "border-red-500" : "border-gray-300"
								}`}
								placeholder="Enter street address"
							/>
							{errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
						</div>

						{/* ZIP Code */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
							<input
								type="text"
								value={state.personalInfo.zipCode || ""}
								onChange={(e) => handleInputChange("zipCode", e.target.value)}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.zipCode ? "border-red-500" : "border-gray-300"
								}`}
								placeholder="Enter ZIP code"
							/>
							{errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
						</div>

						{/* Location */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
							<input
								type="text"
								value={state.personalInfo.location || ""}
								onChange={(e) => handleInputChange("location", e.target.value)}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.location ? "border-red-500" : "border-gray-300"
								}`}
								placeholder="Enter city/location"
							/>
							{errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
						</div>

						{/* Country */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
							<input
								type="text"
								value={state.personalInfo.country || ""}
								onChange={(e) => handleInputChange("country", e.target.value)}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
									errors.country ? "border-red-500" : "border-gray-300"
								}`}
								placeholder="Enter country"
							/>
							{errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
						</div>

						{/* Mobile Number */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								<Phone className="w-4 h-4 inline mr-1" />
								Mobile Number *
							</label>
							<div className="flex space-x-2">
								<select
									value={state.personalInfo.mobileNumber?.countryCode || "+1"}
									onChange={(e) => handleNestedInputChange("mobileNumber", "countryCode", e.target.value)}
									className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								>
									<option value="+1">+1</option>
									<option value="+44">+44</option>
									<option value="+49">+49</option>
									<option value="+33">+33</option>
									<option value="+39">+39</option>
									<option value="+34">+34</option>
								</select>
								<input
									type="tel"
									value={state.personalInfo.mobileNumber?.number || ""}
									onChange={(e) => handleNestedInputChange("mobileNumber", "number", e.target.value)}
									className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
										errors.mobileNumber ? "border-red-500" : "border-gray-300"
									}`}
									placeholder="Enter mobile number"
								/>
							</div>
							{errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
						</div>
					</div>

					{/* Navigation Buttons */}
					<div className="flex justify-end mt-8">
						<button
							onClick={handleContinue}
							disabled={Object.keys(errors).length > 0}
							className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
						>
							Continue
							<ChevronRight className="w-5 h-5 ml-2" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step2PersonalData;
