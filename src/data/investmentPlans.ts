import type { InvestmentProduct, InvestmentProductType } from '../types/auth.types';

// Product configurations matching the registration system
export const productConfigs = {
  gold_bar: {
    name: "Gold Bar",
    weights: ["1g", "2.5g", "5g", "10g", "20g", "50g", "100g"],
    basePrice: 65, // per gram
    color: "from-yellow-400 to-yellow-600",
    icon: "🥇",
    description: "Pure gold bars with guaranteed authenticity certificates",
  },
  gold_coin: {
    name: "Gold Coin",
    weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
    basePrice: 2050, // per oz
    color: "from-amber-400 to-amber-600",
    icon: "🪙",
    description: "Collectible gold coins from renowned mints worldwide",
  },
  silver_bar: {
    name: "Silver Bar",
    weights: ["1oz", "5oz", "10oz", "100oz", "1000oz"],
    basePrice: 25, // per oz
    color: "from-gray-300 to-gray-500",
    icon: "⚪",
    description: "High-purity silver bars for diversified precious metals portfolio",
  },
  silver_coin: {
    name: "Silver Coin",
    weights: ["1/2 oz", "1 oz", "5 oz"],
    basePrice: 27, // per oz
    color: "from-slate-300 to-slate-500",
    icon: "🥈",
    description: "Silver coins with numismatic and investment value",
  },
  platinum: {
    name: "Platinum",
    weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
    basePrice: 980, // per oz
    color: "from-blue-400 to-blue-600",
    icon: "💎",
    description: "Rare platinum metals for premium investment portfolios",
  },
  palladium: {
    name: "Palladium",
    weights: ["1/10 oz", "1/4 oz", "1/2 oz", "1 oz"],
    basePrice: 2000, // per oz
    color: "from-purple-400 to-purple-600",
    icon: "✨",
    description: "Industrial and investment-grade palladium metals",
  },
};

export const deliveryOptions = [
  { value: "immediate", label: "Immediate Delivery", extra: "+€50", days: 0 },
  { value: "1_month", label: "1 Month", extra: "+€25", days: 30 },
  { value: "3_months", label: "3 Months", extra: "Standard", days: 90 },
  { value: "6_months", label: "6 Months", extra: "-€25", days: 180 },
];

// Sample user portfolio for demonstration
export const sampleUserPortfolio: InvestmentProduct[] = [
  {
    product: 'gold_bar' as InvestmentProductType,
    weight: '10g',
    price: 65,
    quantity: 2,
    deliveryPeriod: '3_months',
    amount: 1300,
    totalSum: 1300,
  },
  {
    product: 'gold_coin' as InvestmentProductType,
    weight: '1 oz',
    price: 2050,
    quantity: 1,
    deliveryPeriod: '1_month',
    amount: 2075,
    totalSum: 2075,
  },
  {
    product: 'silver_bar' as InvestmentProductType,
    weight: '10oz',
    price: 25,
    quantity: 4,
    deliveryPeriod: '3_months',
    amount: 1000,
    totalSum: 1000,
  },
];

export const getCurrentGoldPrice = (): number => {
  // In a real app, this would fetch from a live API
  return 2024.50;
};

export const getCurrentSilverPrice = (): number => {
  return 25.30;
};

export const getCurrentPlatinumPrice = (): number => {
  return 980.50;
};

export const getCurrentPalladiumPrice = (): number => {
  return 2000.75;
};

export const calculatePortfolioValue = (portfolio: InvestmentProduct[]): number => {
  return portfolio.reduce((total, product) => total + product.totalSum, 0);
};

export const calculateMetalOunces = (portfolio: InvestmentProduct[]): {
  gold: number;
  silver: number;
  platinum: number;
  palladium: number;
} => {
  const totals = { gold: 0, silver: 0, platinum: 0, palladium: 0 };
  
  portfolio.forEach(product => {
    let ounces = 0;
    
    if (product.product.includes('gold')) {
      // Convert grams to ounces for gold bars, or use oz directly for coins
      if (product.weight.includes('g')) {
        ounces = (parseFloat(product.weight) / 31.1035) * product.quantity;
      } else {
        ounces = parseFloat(product.weight.split(' ')[0]) * product.quantity;
      }
      totals.gold += ounces;
    } else if (product.product.includes('silver')) {
      ounces = parseFloat(product.weight.split('oz')[0]) * product.quantity;
      totals.silver += ounces;
    } else if (product.product === 'platinum') {
      ounces = parseFloat(product.weight.split(' ')[0]) * product.quantity;
      totals.platinum += ounces;
    } else if (product.product === 'palladium') {
      ounces = parseFloat(product.weight.split(' ')[0]) * product.quantity;
      totals.palladium += ounces;
    }
  });
  
  return totals;
};

export const getDeliveryStatus = (deliveryPeriod: string, purchaseDate: Date): {
  status: 'delivered' | 'in_transit' | 'processing';
  estimatedDelivery: Date;
  daysRemaining: number;
} => {
  const option = deliveryOptions.find(opt => opt.value === deliveryPeriod);
  const deliveryDays = option?.days || 90;
  
  const estimatedDelivery = new Date(purchaseDate);
  estimatedDelivery.setDate(estimatedDelivery.getDate() + deliveryDays);
  
  const now = new Date();
  const daysRemaining = Math.max(0, Math.ceil((estimatedDelivery.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  
  let status: 'delivered' | 'in_transit' | 'processing' = 'processing';
  if (daysRemaining === 0) {
    status = 'delivered';
  } else if (daysRemaining <= deliveryDays / 2) {
    status = 'in_transit';
  }
  
  return { status, estimatedDelivery, daysRemaining };
};