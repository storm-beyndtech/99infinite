// =============================================================================
// AUTHENTICATION TYPES FOR FRONTEND
// =============================================================================

// Re-export types from local files
export * from './user.types';
export * from './investment.types';
import type { PersonalInfo, Portfolio, KYCData } from './index';

// Registration Request Interface (client-specific)
export interface RegistrationRequest {
	personalInfo: PersonalInfo;
	portfolio?: Portfolio;
	kyc?: KYCData;
	password: string;
	confirmPassword: string;
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

// TeamMember is now imported from shared types
