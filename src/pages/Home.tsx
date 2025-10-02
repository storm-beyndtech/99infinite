import React from "react";
import HeroSection from "../components/home/HeroSection";
import MarketRatesSection from "../components/home/MarketRatesSection";
import ExpertiseSection from "../components/home/ExpertiseSection";
import StatisticsSection from "../components/home/StatisticsSection";
import RecentFinancingsSection from "../components/home/RecentFinancingsSection";

const Home: React.FC = () => {
	return (
		<div className="bg-white">
			<HeroSection />
			<MarketRatesSection />
			<ExpertiseSection />
			<StatisticsSection />
			<RecentFinancingsSection />
		</div>
	);
};

export default Home;
