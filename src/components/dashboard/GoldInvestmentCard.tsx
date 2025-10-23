import React from 'react';
import { Coins, TrendingUp, Calendar, Shield } from 'lucide-react';
import type { GoldInvestmentPlan } from '../../types/investment';

interface GoldInvestmentCardProps {
  plan: GoldInvestmentPlan;
  onSelect: (planId: string) => void;
  isPopular?: boolean;
}

const GoldInvestmentCard: React.FC<GoldInvestmentCardProps> = ({ plan, onSelect, isPopular = false }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={`relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group ${isPopular ? 'ring-2 ring-amber-400/50 scale-105' : ''}`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
      
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${plan.color.secondary} dark:from-amber-950/50 dark:to-yellow-900/30 rounded-2xl flex items-center justify-center shadow-inner`}>
            <Coins className={`w-8 h-8 text-${plan.color.accent} dark:text-amber-400`} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{plan.description}</p>
        </div>

        {/* Investment Range */}
        <div className="bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl p-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {formatCurrency(plan.minInvestment)} - {formatCurrency(plan.maxInvestment)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Investment Range
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-emerald-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{plan.dailyReturn}%</span>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Daily Return
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{plan.planDuration}</span>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Days
            </div>
          </div>
        </div>

        {/* Gold Backing */}
        <div className="bg-gradient-to-r from-amber-50/80 to-yellow-50/80 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-2xl p-4 mb-8">
          <div className="flex items-center justify-center">
            <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" />
            <span className="text-lg font-semibold text-amber-800 dark:text-amber-300">
              {plan.goldBacking}% Gold Backed
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-5 h-5 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onSelect(plan._id)}
          className={`w-full bg-gradient-to-r ${plan.color.primary} hover:shadow-lg hover:shadow-amber-500/25 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105`}
        >
          Invest in {plan.name}
        </button>
      </div>
    </div>
  );
};

export default GoldInvestmentCard;