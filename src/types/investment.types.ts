// =============================================================================
// CLIENT INVESTMENT TYPES
// =============================================================================

export type InvestmentProductType =
  | "gold_bar"
  | "gold_coin"
  | "silver_bar"
  | "silver_coin"
  | "platinum"
  | "palladium";

export type DeliveryPeriod = "immediate" | "1_month" | "3_months" | "6_months";

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

// Investment Plan Interface
export interface InvestmentPlan {
  _id: string;
  name: string;
  tier: string;
  description: string;
  minInvestment: number;
  maxInvestment: number;
  dailyReturn: number;
  planDuration: number;
  goldBacking: number;
  withdrawalLimit: number;
  features: string[];
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
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

// Dashboard Stats Interface
export interface DashboardStats {
  totalInvested: number;
  totalEarnings: number;
  dailyEarnings: number;
  activeInvestments: number;
  goldOunces: number;
  portfolioValue: number;
}

// Legacy alias for backward compatibility
export type GoldInvestmentPlan = InvestmentPlan;