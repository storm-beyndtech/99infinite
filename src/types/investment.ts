export interface GoldInvestmentPlan {
  id: string;
  name: string;
  tier: 'starter' | 'standard' | 'elite' | 'empire';
  minInvestment: number;
  maxInvestment: number;
  dailyReturn: number;
  planDuration: number; // in days
  description: string;
  features: string[];
  goldBacking: number; // percentage of real gold backing
  withdrawalLimit: number; // daily withdrawal limit
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface UserInvestment {
  id: string;
  planId: string;
  amount: number;
  startDate: Date;
  endDate: Date;
  dailyEarnings: number;
  totalEarnings: number;
  status: 'active' | 'completed' | 'paused';
  goldOunces: number; // equivalent gold ounces
}

export interface DashboardStats {
  totalInvested: number;
  totalEarnings: number;
  dailyEarnings: number;
  activeInvestments: number;
  goldOunces: number;
  portfolioValue: number;
}