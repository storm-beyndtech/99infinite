// =============================================================================
// AUTHENTICATION TYPES FOR FRONTEND
// =============================================================================

// Re-export types from local files
export * from './user.types';
import type { PersonalInfo } from './index';

// Privacy Settings Interface
export interface PrivacySettings {
	termsAndConditions: boolean;
	privacyStatement: boolean;
}

// Registration Request Interface (client-specific)
export interface RegistrationRequest {
	personalInfo: PersonalInfo;
	password: string;
	confirmPassword: string;
}

// Form State for Multi-Step Registration
export interface RegistrationFormState {
	step: number;
	personalInfo: Partial<PersonalInfo>;
	password: string;
	confirmPassword: string;
	privacy: PrivacySettings;
	isValid: {
		step1: boolean;
		step2: boolean;
	};
	errors: any;
}

// Validation Errors
export interface ValidationErrors {
	[key: string]: string[];
}

// TeamMember is now imported from shared types
