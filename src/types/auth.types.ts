// =============================================================================
// AUTHENTICATION TYPES FOR FRONTEND
// =============================================================================
// These types match the backend Zod schemas and interfaces

// Base Enums
export type UserRole = "user" | "admin" | "super_admin";

export type KYCStatus = "pending" | "approved" | "rejected" | "incomplete" | "expired";

export type AccountStatus = "active" | "suspended" | "deactivated" | "pending_verification";

export type InvestmentProductType =
	| "gold_bar"
	| "gold_coin"
	| "silver_bar"
	| "silver_coin"
	| "platinum"
	| "palladium";

export type DeliveryPeriod = "immediate" | "1_month" | "3_months" | "6_months";

// Personal Information Interface
export interface PersonalInfo {
	sponsorCode?: string;
	title: "Mr" | "Mrs" | "Ms" | "Dr" | "Prof";
	firstName: string;
	lastName: string;
	birthday: {
		day: number;
		month: number;
		year: number;
	};
	email: string;
	address: string;
	zipCode: string;
	location: string;
	country: string;
	mobileNumber: {
		countryCode: string;
		number: string;
	};
}

// Investment Product Interface
export interface InvestmentProduct {
	product: InvestmentProductType;
	weight: string;
	price: number;
	quantity: number;
	deliveryPeriod: DeliveryPeriod;
	percentage?: number;
	amount: number;
	totalSum: number;
}

// Portfolio Interface
export interface Portfolio {
	products: InvestmentProduct[];
	tempSum: number;
	finalSum: number;
	minimumOrderAmount: number;
	premiumBenefit?: {
		amount?: number;
		quantity?: number;
	};
}

// KYC Data Interface
export interface KYCData {
	buyingForSelf: boolean;
	politicallyExposed: boolean;
	termsAndConditions: boolean;
	privacyStatement: boolean;
	paymentMethod: "bank_transfer" | "credit_card" | "paypal";
	bankDetails?: {
		accountHolder?: string;
		bankName?: string;
		iban?: string;
		bic?: string;
	};
}

// Registration Request Interface
export interface RegistrationRequest {
	personalInfo: PersonalInfo;
	portfolio?: Portfolio;
	kyc?: KYCData;
	password: string;
	confirmPassword: string;
}

// Login Request Interface
export interface LoginRequest {
	email: string;
	password: string;
}

// User Interface
export interface User {
	_id: string;
	personalInfo: PersonalInfo;
	portfolio?: Portfolio;
	kyc?: KYCData;
	role: UserRole;
	accountStatus: AccountStatus;
	kycStatus: KYCStatus;
	isEmailVerified: boolean;
	lastLogin?: Date;
	createdAt: Date;
	updatedAt: Date;
	fullName: string;
}

// API Response Interfaces
export interface AuthResponse {
	success: boolean;
	message: string;
	user?: User;
	token?: string;
	refreshToken?: string;
}

export interface ErrorResponse {
	success: false;
	message: string;
	errors?: Record<string, string[]>;
	code?: string;
}

// Form State for Multi-Step Registration
export interface RegistrationFormState {
	step: number;
	personalInfo: Partial<PersonalInfo>;
	portfolio: Partial<Portfolio>;
	kyc: Partial<KYCData>;
	password: string;
	confirmPassword: string;
	isValid: {
		step1: boolean;
		step2: boolean;
		step3: boolean;
		step4: boolean;
		step5: boolean;
	};
	errors: any;
}

// Validation Errors
export interface ValidationErrors {
	[key: string]: string[];
}

export interface TeamMember {
	id: number;
	title: string;
	content: string;
	slug: string;
	image: string;
	location?: string;
	department?: string;
}
