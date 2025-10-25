import { useState, useRef, type JSX, type ChangeEvent, type FormEvent } from "react";
import { Calendar, Camera, Upload } from "lucide-react";
import Alert from "./UI/Alert";
import { contextData } from "@/contexts/AuthContext";

// Define types
type DocumentType = "id" | "passport" | "driver";
type AlertType = "danger" | "success";

interface FormData {
	documentType: DocumentType;
	documentNumber: string;
	expiryDate: string;
	frontImage: File | null;
	backImage: File | null;
}

interface AlertState {
	type: AlertType;
	message: string;
}

interface FormErrors {
	documentNumber?: string;
	expiryDate?: string;
	frontImage?: string;
	backImage?: string;
}

const defaultData: FormData = {
	documentType: "id",
	documentNumber: "",
	expiryDate: "",
	frontImage: null,
	backImage: null,
};

export default function ProofOfIdentificationForm({ onSubmit }: { onSubmit: () => void }): JSX.Element {
	const [formData, setFormData] = useState<FormData>(defaultData);

	const [loading, setLoading] = useState<boolean>(false);
	const [alert, setAlert] = useState<AlertState | null>(null);
	const [errors, setErrors] = useState<FormErrors>({});

	const frontImageRef = useRef<HTMLInputElement | null>(null);
	const backImageRef = useRef<HTMLInputElement | null>(null);
	const { user } = contextData();

	const handleDocumentTypeChange = (type: DocumentType): void => {
		setFormData({
			...formData,
			documentType: type,
			frontImage: null,
			backImage: null,
		});

		// Reset file inputs
		if (frontImageRef.current) frontImageRef.current.value = "";
		if (backImageRef.current) backImageRef.current.value = "";
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// Clear error for this field
		if (errors[name as keyof FormErrors]) {
			setErrors({ ...errors, [name]: undefined });
		}
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>, side: "frontImage" | "backImage"): void => {
		if (e.target.files && e.target.files.length > 0) {
			setFormData({ ...formData, [side]: e.target.files[0] });

			// Clear error for this field
			if (errors[side]) {
				setErrors({ ...errors, [side]: undefined });
			}
		}
	};

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};
		const MAX_FILE_SIZE_MB = 5;
		const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;

		if (!formData.documentNumber.trim()) {
			newErrors.documentNumber = "Document number is required";
		}

		if (!formData.expiryDate) {
			newErrors.expiryDate = "Expiry date is required";
		}

		if (!formData.frontImage) {
			newErrors.frontImage = "Front side image is required";
		} else if (formData.frontImage.size > MAX_FILE_SIZE) {
			newErrors.frontImage = `Front image must be less than ${MAX_FILE_SIZE_MB}MB`;
		}

		if (!formData.backImage) {
			newErrors.backImage = "Back side image is required";
		} else if (formData.backImage.size > MAX_FILE_SIZE) {
			newErrors.backImage = `Back image must be less than ${MAX_FILE_SIZE_MB}MB`;
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		// Clear any existing alert
		setAlert(null);

		if (!validateForm()) {
			setAlert({
				type: "danger",
				message: "Please fill in all required fields correctly.",
			});
			return;
		}

		setLoading(true);

		try {
			// Create form data for file upload
			const submitData = new FormData();
			submitData.append("documentType", formData.documentType);
			submitData.append("documentNumber", formData.documentNumber);
			submitData.append("documentExpDate", formData.expiryDate);
			submitData.append("email", user.email);
			submitData.append("name", user.username);

			if (formData.frontImage) {
				submitData.append("documentFront", formData.frontImage);
			}

			if (formData.backImage) {
				submitData.append("documentBack", formData.backImage);
			}

			// Get the server URL and construct the endpoint
			const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
			const endpoint = `${url}/kycs`;

			// In a real implementation, you would use:
			const response = await fetch(endpoint, {
				method: "POST",
				body: submitData,
			});

			const resData = await response.json();

			if (!response.ok) {
				throw new Error(resData.message);
			}

			// Success message
			setAlert({
				type: "success",
				message:
					"Your identification has been submitted successfully. We will verify your documents shortly.",
			});

			// Reset form
			setFormData(defaultData);

			if (frontImageRef.current) frontImageRef.current.value = "";
			if (backImageRef.current) backImageRef.current.value = "";
		} catch (error: any) {
			setAlert({
				type: "danger",
				message: error.message,
			});
			console.error("Error submitting form:", error);
		} finally {
			setLoading(false);
			onSubmit(); // Call the onSubmit prop to notify parent component
		}
	};

	return (
		<div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
			<div className="flex justify-between items-start mb-6">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white">Proof of Identification</h2>
			</div>

			<div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-800">
				<p className="mb-2 text-gray-700 dark:text-gray-300 text-sm">
					To verify your identification, please upload one of the following proof of identification documents:
					<span className="font-semibold text-blue-600 dark:text-blue-400"> ID Card, Passport, or Driver's License</span>. 
					All sides containing your personal details are required.
				</p>
				<p className="text-gray-600 dark:text-gray-400 text-xs">
					<span className="font-medium">Required information:</span> Full name, ID number, photograph, date of birth, place of birth, and nationality
				</p>
			</div>

			<form onSubmit={handleSubmit}>
				{/* Document Type Selection */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
					{(["id", "passport", "driver"] as const).map((type) => (
						<button
							key={type}
							type="button"
							className={`p-3 text-center rounded-lg transition-colors font-medium border-2 ${
								formData.documentType === type
									? "bg-blue-600 text-white border-blue-600"
									: "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500"
							}`}
							onClick={() => handleDocumentTypeChange(type)}
						>
							{type === "id" ? "ID Card" : type === "passport" ? "Passport" : "Driver's License"}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					{/* Front Side Upload */}
					<div>
						<label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Front Side</label>
						<div
							className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
								errors.frontImage
									? "border-red-400 bg-red-50 dark:bg-red-900"
									: formData.frontImage
									? "border-green-400 bg-green-50 dark:bg-green-900"
									: "border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 bg-gray-50 dark:bg-gray-700"
							}`}
						>
							<input
								type="file"
								ref={frontImageRef}
								accept="image/*"
								onChange={(e) => handleFileChange(e, "frontImage")}
								className="hidden"
								id="front-image"
							/>
							<label
								htmlFor="front-image"
								className="flex flex-col items-center justify-center h-32 cursor-pointer"
							>
								<Camera size={32} className={`mb-2 ${formData.frontImage ? "text-green-500" : "text-gray-400"}`} />
								{formData.frontImage ? (
									<div className="text-center">
										<span className="text-green-600 dark:text-green-400 text-sm">{formData.frontImage.name}</span>
										<p className="text-xs text-gray-500 mt-1">Click to change</p>
									</div>
								) : (
									<div className="text-center">
										<div className="flex items-center justify-center mb-1">
											<Upload size={16} className="mr-1" />
											<span className="text-sm">Upload Front Side</span>
										</div>
										<p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
									</div>
								)}
							</label>
						</div>
						{errors.frontImage && <p className="mt-2 text-red-500 text-sm font-medium">{errors.frontImage}</p>}
					</div>

					{/* Back Side Upload */}
					<div>
						<label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Back Side</label>
						<div
							className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
								errors.backImage
									? "border-red-400 bg-red-50 dark:bg-red-900"
									: formData.backImage
									? "border-green-400 bg-green-50 dark:bg-green-900"
									: "border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 bg-gray-50 dark:bg-gray-700"
							}`}
						>
							<input
								type="file"
								ref={backImageRef}
								accept="image/*"
								onChange={(e) => handleFileChange(e, "backImage")}
								className="hidden"
								id="back-image"
							/>
							<label
								htmlFor="back-image"
								className="flex flex-col items-center justify-center h-32 cursor-pointer"
							>
								<Camera size={32} className={`mb-2 ${formData.backImage ? "text-green-500" : "text-gray-400"}`} />
								{formData.backImage ? (
									<div className="text-center">
										<span className="text-green-600 dark:text-green-400 text-sm">{formData.backImage.name}</span>
										<p className="text-xs text-gray-500 mt-1">Click to change</p>
									</div>
								) : (
									<div className="text-center">
										<div className="flex items-center justify-center mb-1">
											<Upload size={16} className="mr-1" />
											<span className="text-sm">Upload Back Side</span>
										</div>
										<p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
									</div>
								)}
							</label>
						</div>
						{errors.backImage && <p className="mt-2 text-red-500 text-sm font-medium">{errors.backImage}</p>}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					{/* Document Number */}
					<div>
						<label htmlFor="document-number" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
							Document Number
						</label>
						<input
							type="text"
							id="document-number"
							name="documentNumber"
							value={formData.documentNumber}
							onChange={handleInputChange}
							className={`w-full border rounded-lg py-3 px-4 transition-colors bg-white dark:bg-gray-800 ${
								errors.documentNumber
									? "border-red-400 focus:border-red-500"
									: "border-gray-300 dark:border-gray-600 focus:border-blue-500"
							} focus:outline-none`}
							placeholder="Enter document number"
						/>
						{errors.documentNumber && <p className="mt-2 text-red-500 text-sm">{errors.documentNumber}</p>}
					</div>

					{/* Expiry Date */}
					<div className="relative">
						<label htmlFor="expiry-date" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
							Expiry Date
						</label>
						<div className="relative">
							<input
								type="date"
								id="expiry-date"
								name="expiryDate"
								value={formData.expiryDate}
								onChange={handleInputChange}
								className={`w-full border rounded-lg py-3 px-4 pr-12 transition-colors bg-white dark:bg-gray-800 ${
									errors.expiryDate
										? "border-red-400 focus:border-red-500"
										: "border-gray-300 dark:border-gray-600 focus:border-blue-500"
								} focus:outline-none`}
							/>
							<Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-300 pointer-events-none" />
						</div>
						{errors.expiryDate && <p className="mt-2 text-red-500 text-sm">{errors.expiryDate}</p>}
					</div>
				</div>

				{alert && <Alert type={alert.type} message={alert.message} />}

				{/* Submit Button */}
				<div className="flex justify-center mt-8">
					<button
						type="submit"
						disabled={loading}
						className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto min-w-64"
					>
						{loading ? (
							<div className="flex items-center justify-center">
								<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
								Submitting...
							</div>
						) : (
							<div className="flex items-center justify-center">
								<Upload className="mr-2" size={16} />
								Submit Documents
							</div>
						)}
					</button>
				</div>
			</form>
		</div>
	);
}
