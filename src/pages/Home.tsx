import React from "react";
import HeroSection from "../components/home/HeroSection";
import MarketRatesSection from "../components/home/MarketRatesSection";
import StepsSection from "../components/home/StepsSection";
import BoardOfDirectors from "../components/BoardOfDirectors";
import ReportSection from "../components/home/ReportSection";
import GoldSection from "../components/home/GoldSection";
import InvestorCard from "../components/home/InvestorCard";

const Home: React.FC = () => {
	return (
		<div className="bg-white">
			<HeroSection />
			<MarketRatesSection />
			<StepsSection />
			<ReportSection />
			<BoardOfDirectors showAll={false} showCTA={true} />
			<InvestorCard />
			<GoldSection />
		</div>
	);
};

export default Home;
