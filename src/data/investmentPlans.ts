import type { GoldInvestmentPlan } from '../types/investment';

export const goldInvestmentPlans: GoldInvestmentPlan[] = [
  {
    _id: 'gold-starter',
    name: 'Gold Starter',
    tier: 'starter',
    minInvestment: 100,
    maxInvestment: 999,
    dailyReturn: 2.5,
    planDuration: 30,
    description: 'Start your gold investment journey with our entry-level plan backed by physical gold reserves.',
    features: [
      '2.5% daily returns',
      '30-day investment period', 
      '15% real gold backing',
      '$50 daily withdrawal limit',
      'Basic portfolio tracking',
      'Email support'
    ],
    goldBacking: 15,
    withdrawalLimit: 50,
    color: {
      primary: 'from-amber-400 to-yellow-500',
      secondary: 'from-amber-50 to-yellow-100',
      accent: 'amber-500'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: 'gold-standard',
    name: 'Gold Standard',
    tier: 'standard',
    minInvestment: 1000,
    maxInvestment: 4999,
    dailyReturn: 3.5,
    planDuration: 45,
    description: 'Enhanced returns with substantial gold backing for serious investors seeking steady growth.',
    features: [
      '3.5% daily returns',
      '45-day investment period',
      '25% real gold backing',
      '$200 daily withdrawal limit',
      'Advanced portfolio analytics',
      'Priority support',
      'Market insights access'
    ],
    goldBacking: 25,
    withdrawalLimit: 200,
    color: {
      primary: 'from-yellow-500 to-amber-600',
      secondary: 'from-yellow-50 to-amber-100',
      accent: 'yellow-600'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: 'gold-elite',
    name: 'Gold Elite',
    tier: 'elite',
    minInvestment: 5000,
    maxInvestment: 19999,
    dailyReturn: 4.5,
    planDuration: 60,
    description: 'Premium gold investment with higher returns and extensive gold reserves backing your investment.',
    features: [
      '4.5% daily returns',
      '60-day investment period',
      '40% real gold backing',
      '$500 daily withdrawal limit',
      'Real-time gold price tracking',
      'Dedicated account manager',
      'VIP customer support',
      'Quarterly gold market reports'
    ],
    goldBacking: 40,
    withdrawalLimit: 500,
    color: {
      primary: 'from-amber-600 to-orange-600',
      secondary: 'from-amber-100 to-orange-100',
      accent: 'amber-700'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: 'gold-empire',
    name: 'Gold Empire',
    tier: 'empire',
    minInvestment: 20000,
    maxInvestment: 100000,
    dailyReturn: 6.0,
    planDuration: 90,
    description: 'Our flagship plan with maximum returns, extensive gold backing, and exclusive premium benefits.',
    features: [
      '6.0% daily returns',
      '90-day investment period',
      '60% real gold backing',
      '$2000 daily withdrawal limit',
      'Physical gold certificate',
      'Personal investment advisor',
      '24/7 VIP support',
      'Monthly strategy consultations',
      'Exclusive market intelligence',
      'Gold storage facility access'
    ],
    goldBacking: 60,
    withdrawalLimit: 2000,
    color: {
      primary: 'from-orange-600 to-red-600',
      secondary: 'from-orange-100 to-red-100',
      accent: 'orange-700'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const getCurrentGoldPrice = (): number => {
  // In a real app, this would fetch from a live API
  // For now, return a mock price per ounce
  return 2024.50;
};

export const calculateGoldOunces = (investmentAmount: number, goldBacking: number): number => {
  const goldPrice = getCurrentGoldPrice();
  const goldValue = (investmentAmount * goldBacking) / 100;
  return goldValue / goldPrice;
};