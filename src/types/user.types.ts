// =============================================================================
// CLIENT USER TYPES
// =============================================================================

export type UserRole = "user" | "admin";
export type KYCStatus = "pending" | "approved" | "rejected" | "incomplete" | "expired" | "notSubmitted";
export type AccountStatus = "active" | "suspended" | "deactivated" | "pending_verification";

// Personal Information
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

// User Interface for client-side usage
export interface User {
  _id: string;
  personalInfo: PersonalInfo;
  role: UserRole;
  accountStatus: AccountStatus;
  kycStatus: KYCStatus;
  isEmailVerified: boolean;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  
  // Financial fields for backward compatibility
  deposit: number;
  interest: number;
  withdraw: number;
  bonus: number;
  
  // Legacy fields for backward compatibility
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  address: string;
  streetAddress: string;
  profileImage: string;
  profilePicture?: string;
  isAdmin: boolean;
  isApproved: boolean;
  mfa: boolean;
}

// Authentication Request/Response Types
export interface LoginRequest {
  email: string;
  password: string;
}

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