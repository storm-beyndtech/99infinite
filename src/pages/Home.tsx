import React from "react";
import HeroSection from "../components/home/HeroSection";
import MarketRatesSection from "../components/home/MarketRatesSection";
import ExpertiseSection from "../components/home/ExpertiseSection";
import StepsSection from "../components/home/StepsSection";
import BoardOfDirectors from "../components/BoardOfDirectors";
import gold from "../assets/Gold-2.png";
import ReportSection from "../components/home/ReportSection";
import GoldSection from "../components/home/GoldSection";

const Home: React.FC = () => {
	return (
		<div className="bg-white">
			<HeroSection />
			<MarketRatesSection />
			<ExpertiseSection />
			<BoardOfDirectors showAll={false} showCTA={true} />
			<ReportSection />
			<StepsSection />
			<img src={gold} alt="gold" />
			<GoldSection />
		</div>
	);
};

export default Home;
