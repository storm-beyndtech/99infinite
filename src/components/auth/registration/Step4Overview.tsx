import React, { useEffect } from "react";
import { useRegistration } from "../../../contexts/RegistrationContext";
import { ChevronLeft, ChevronRight, User, ShoppingCart, FileText, Edit3, CheckCircle } from "lucide-react";

const Step4Overview: React.FC = () => {
	const { state, nextStep, prevStep, setStep, setStepValidity } = useRegistration();

	useEffect(() => {
		// Step 4 is always valid (review only)
		setStepValidity("step4", true);
	}, [setStepValidity]);

	const productNames = {
		gold_bar: "Gold Bar",
		gold_coin: "Gold Coin",
		silver_bar: "Silver Bar",
		silver_coin: "Silver Coin",
		platinum: "Platinum",
		palladium: "Palladium",
	};

	const deliveryPeriodNames = {
		immediate: "Immediate Delivery",
		"1_month": "1 Month",
		"3_months": "3 Months",
		"6_months": "6 Months",
	};

	const handleContinue = () => {
		nextStep();
	};

	const editSection = (step: number) => {
		setStep(step);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
			<div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
				{/* Header */}
				<div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-bold">Review Your Information</h1>
							<p className="text-green-100">Step 4 of 5 - Please verify all details</p>
						</div>
						<div className="flex items-center space-x-2">
							<FileText className="w-8 h-8" />
						</div>
					</div>

					{/* Progress Bar */}
					<div className="mt-4">
						<div className="w-full bg-green-500 rounded-full h-2">
							<div
								className="bg-white h-2 rounded-full transition-all duration-300"
								style={{ width: "80%" }}
							></div>
						</div>
					</div>
				</div>

				<div className="p-8">
					<div className="space-y-8">
						{/* Personal Information Section */}
						<div className="bg-gray-50 rounded-xl p-6">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-xl font-bold text-gray-900 flex items-center">
									<User className="w-5 h-5 mr-2 text-blue-600" />
									Personal Information
								</h2>
								<button
									onClick={() => editSection(2)}
									className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
								>
									<Edit3 className="w-4 h-4 mr-1" />
									Edit
								</button>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<h3 className="font-medium text-gray-700 mb-2">Basic Information</h3>
									<div className="space-y-2 text-sm text-gray-600">
										<p>
											<span className="font-medium">Name:</span> {state.personalInfo.title}{" "}
											{state.personalInfo.firstName} {state.personalInfo.lastName}
										</p>
										<p>
											<span className="font-medium">Email:</span> {state.personalInfo.email}
										</p>
										<p>
											<span className="font-medium">Date of Birth:</span> {state.personalInfo.birthday?.day}/
											{state.personalInfo.birthday?.month}/{state.personalInfo.birthday?.year}
										</p>
										<p>
											<span className="font-medium">Mobile:</span>{" "}
											{state.personalInfo.mobileNumber?.countryCode} {state.personalInfo.mobileNumber?.number}
										</p>
									</div>
								</div>

								<div>
									<h3 className="font-medium text-gray-700 mb-2">Address Information</h3>
									<div className="space-y-2 text-sm text-gray-600">
										<p>
											<span className="font-medium">Address:</span> {state.personalInfo.address}
										</p>
										<p>
											<span className="font-medium">ZIP Code:</span> {state.personalInfo.zipCode}
										</p>
										<p>
											<span className="font-medium">Location:</span> {state.personalInfo.location}
										</p>
										<p>
											<span className="font-medium">Country:</span> {state.personalInfo.country}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Investment Portfolio Section */}
						<div className="bg-gray-50 rounded-xl p-6">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-xl font-bold text-gray-900 flex items-center">
									<ShoppingCart className="w-5 h-5 mr-2 text-yellow-600" />
									Investment Portfolio
								</h2>
								<button
									onClick={() => editSection(3)}
									className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
								>
									<Edit3 className="w-4 h-4 mr-1" />
									Edit
								</button>
							</div>

							{state.portfolio.products && state.portfolio.products.length > 0 ? (
								<div className="space-y-4">
									{state.portfolio.products.map((product, index) => (
										<div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
											<div className="flex justify-between items-start">
												<div>
													<h3 className="font-semibold text-gray-900">{productNames[product.product]}</h3>
													<div className="text-sm text-gray-600 mt-1 space-y-1">
														<p>Weight: {product.weight}</p>
														<p>Quantity: {product.quantity}</p>
														<p>
															Delivery:{" "}
															{
																deliveryPeriodNames[
																	product.deliveryPeriod as keyof typeof deliveryPeriodNames
																]
															}
														</p>
													</div>
												</div>
												<div className="text-right">
													<p className="font-bold text-lg text-gray-900">€{product.totalSum.toFixed(2)}</p>
													<p className="text-sm text-gray-600">per unit: €{product.price.toFixed(2)}</p>
												</div>
											</div>
										</div>
									))}

									<div className="bg-green-100 border border-green-200 rounded-lg p-4">
										<div className="flex justify-between items-center">
											<span className="font-semibold text-green-800">Total Investment:</span>
											<span className="font-bold text-xl text-green-800">
												€{state.portfolio.finalSum?.toFixed(2)}
											</span>
										</div>
									</div>
								</div>
							) : (
								<div className="text-center py-8 text-gray-500">
									<ShoppingCart className="w-12 h-12 mx-auto mb-2 text-gray-300" />
									<p>No products selected</p>
								</div>
							)}
						</div>

						{/* Security & Verification Section */}
						<div className="bg-blue-50 rounded-xl p-6">
							<h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
								<CheckCircle className="w-5 h-5 mr-2 text-green-600" />
								Next Steps
							</h2>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<h3 className="font-medium text-gray-700 mb-2">Verification Process</h3>
									<div className="space-y-2 text-sm text-gray-600">
										<p>✓ Identity verification (KYC)</p>
										<p>✓ Terms and conditions acceptance</p>
										<p>✓ Payment method setup</p>
										<p>✓ Account activation</p>
									</div>
								</div>

								<div>
									<h3 className="font-medium text-gray-700 mb-2">What Happens Next</h3>
									<div className="space-y-2 text-sm text-gray-600">
										<p>1. Complete KYC verification</p>
										<p>2. Account review (24-48 hours)</p>
										<p>3. Email confirmation</p>
										<p>4. Start investing!</p>
									</div>
								</div>
							</div>
						</div>

						{/* Summary Box */}
						<div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
							<h3 className="text-lg font-bold mb-4">Registration Summary</h3>
							<div className="grid md:grid-cols-3 gap-4 text-sm">
								<div>
									<p className="text-blue-100">Account Holder</p>
									<p className="font-semibold">
										{state.personalInfo.firstName} {state.personalInfo.lastName}
									</p>
								</div>
								<div>
									<p className="text-blue-100">Initial Investment</p>
									<p className="font-semibold">€{state.portfolio.finalSum?.toFixed(2) || "0.00"}</p>
								</div>
								<div>
									<p className="text-blue-100">Products Selected</p>
									<p className="font-semibold">{state.portfolio.products?.length || 0} items</p>
								</div>
							</div>
						</div>

						{/* Important Notice */}
						<div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
							<h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
							<p className="text-sm text-yellow-700">
								Please review all information carefully. Once you proceed to the verification step, some
								information cannot be changed without contacting customer support. Make sure all details are
								accurate before continuing.
							</p>
						</div>
					</div>

					{/* Navigation Buttons */}
					<div className="flex justify-between mt-8">
						<button
							onClick={prevStep}
							className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
						>
							<ChevronLeft className="w-5 h-5 mr-2" />
							Back to Investment
						</button>

						<button
							onClick={handleContinue}
							className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
						>
							Proceed to Verification
							<ChevronRight className="w-5 h-5 ml-2" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step4Overview;
