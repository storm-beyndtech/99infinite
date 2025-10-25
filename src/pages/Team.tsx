import TeamHeroSection from "../components/team/TeamHeroSection";
import BoardOfDirectors from "../components/BoardOfDirectors";


export default function GSPTeamPage() {
	return (
		<>
			<TeamHeroSection />
			<BoardOfDirectors showAll={true} showCTA={false} />
		</>
	);
}
