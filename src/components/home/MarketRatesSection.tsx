import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, User } from "lucide-react";
import type { MarketRate } from "../../types";

const MarketRatesSection: React.FC = () => {
	const [marketRates, setMarketRates] = useState<MarketRate[]>([]);
	const [loading, setLoading] = useState(true);

	// Mock data for now - will be replaced with API call
	useEffect(() => {
		// Simulate API call
		setTimeout(() => {
			setMarketRates([
				{
					_id: "1",
					rateName: "prime_rate",
					displayName: "Prime Rate",
					currentRate: 7.25,
					previousRate: 7.0,
					change: 0.25,
					changePercent: 3.57,
					lastUpdated: new Date().toISOString(),
					source: "TheFinancials.com",
					category: "Prime",
					order: 1,
					isActive: true,
					historicalData: [],
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
				},
				{
					_id: "2",
					rateName: "sofr_30_day",
					displayName: "SOFR 30-DAY",
					currentRate: 4.13,
					previousRate: 4.08,
					change: 0.05,
					changePercent: 1.23,
					lastUpdated: new Date().toISOString(),
					source: "TheFinancials.com",
					category: "SOFR",
					order: 2,
					isActive: true,
					historicalData: [],
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
				},
				{
					_id: "3",
					rateName: "5_yr_treasury",
					displayName: "5 YR TR",
					currentRate: 3.67,
					previousRate: 3.72,
					change: -0.05,
					changePercent: -1.34,
					lastUpdated: new Date().toISOString(),
					source: "TheFinancials.com",
					category: "Treasury",
					order: 3,
					isActive: true,
					historicalData: [],
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
				},
				{
					_id: "4",
					rateName: "10_yr_treasury",
					displayName: "10 YR TR",
					currentRate: 4.11,
					previousRate: 4.15,
					change: -0.04,
					changePercent: -0.96,
					lastUpdated: new Date().toISOString(),
					source: "TheFinancials.com",
					category: "Treasury",
					order: 4,
					isActive: true,
					historicalData: [],
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
				},
			]);
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<section className="py-12 bg-gradient-to-b from-cyan-900 to-gray-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<p className="text-cyan-400 text-sm font-semibold">
						{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
					</p>
					<h2 className="text-2xl font-bold text-white mb-2">Today's Market Rates</h2>
				</div>

				{loading ? (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{[...Array(6)].map((_, index) => (
							<div key={index} className="bg-white/5 rounded-xl p-6 animate-pulse">
								<div className="h-4 bg-white/10 rounded mb-3"></div>
								<div className="h-8 bg-white/10 rounded mb-2"></div>
								<div className="h-3 bg-white/10 rounded w-2/3 mx-auto"></div>
							</div>
						))}
					</div>
				) : (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{marketRates.map((rate, index) => (
							<div
								key={rate._id}
								className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className="text-xs font-semibold mb-3 tracking-wider uppercase text-slate-300 group-hover:text-white transition-colors text-center">
									{rate.displayName}
								</div>
								<div className="text-4xl font-serif text-gray-300 mb-8 mt-3 group-hover:text-cyan-300 transition-colors text-center">
									{rate.currentRate}%
								</div>
								{rate.change !== undefined && rate.change !== 0 && (
									<div
										className={`flex items-center justify-center text-sm font-medium ${
											rate.change > 0 ? "text-emerald-400" : "text-red-400"
										}`}
									>
										{rate.change > 0 ? (
											<TrendingUp className="w-4 h-4 mr-1" />
										) : (
											<TrendingDown className="w-4 h-4 mr-1" />
										)}
										{rate.change > 0 ? "+" : ""}
										{rate.change.toFixed(2)}%
									</div>
								)}
							</div>
						))}

						{/* Static rates for remaining slots if needed */}
						{marketRates.length < 6 && (
							<>
								<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl">
									<div className="text-xs font-semibold mb-3 tracking-wider uppercase text-slate-300 group-hover:text-white transition-colors text-center">
										5 YR SOFR SWAP
									</div>
									<div className="text-4xl font-serif text-gray-300 mb-8 mt-3 group-hover:text-cyan-300 transition-colors text-center">
										3.32%
									</div>
									<div className="flex items-center justify-center text-sm font-medium text-emerald-400">
										<TrendingUp className="w-4 h-4 mr-1" />
										+0.02%
									</div>
								</div>
								<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl">
									<div className="text-xs font-semibold mb-3 tracking-wider uppercase text-slate-300 group-hover:text-white transition-colors text-center">
										10 YR SOFR SWAP
									</div>
									<div className="text-4xl font-serif text-gray-300 mb-8 mt-3 group-hover:text-cyan-300 transition-colors text-center">
										3.62%
									</div>
									<div className="flex items-center justify-center text-sm font-medium text-red-400">
										<TrendingDown className="w-4 h-4 mr-1" />
										-0.08%
									</div>
								</div>
							</>
						)}
					</div>
				)}

				<div className="mt-10 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-lg mx-auto">
					<p className="text-xs text-slate-300/50 leading-relaxed">
						Market rates shown are for informational purposes. While we strive for accuracy.
					</p>
				</div>
				{/* CTA Button */}
				<a href="/profile.pdf" target="_blank" rel="noopener noreferrer" className="block w-fit mx-auto mt-4">
					<button className="inline-flex items-center border border-cyan-600 hover:border-cyan-700 bg-sky-500/10 hover:bg-sky-600/20 text-white px-8 py-2 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
						<User className="w-5 h-5 mr-2" strokeWidth={1.5} />
						View Company Profile
					</button>
				</a>
			</div>
		</section>
	);
};

export default MarketRatesSection;
