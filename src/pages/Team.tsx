import { useState, useMemo, useCallback } from "react";
import { teamMembers } from "../utils/team-members";
import TeamHeroSection from "../components/team/TeamHeroSection";
import TeamFilterButton from "../components/team/TeamFilterButton";
import TeamMemberGrid from "../components/team/TeamMemberGrid";
import TeamMemberProfile from "../components/team/TeamMemberProfile";
import FilterModal from "../components/team/FilterModal";
import BoardOfDirectors from "../components/BoardOfDirectors";

// Types
interface TeamMember {
	id: number;
	title: string;
	content: string;
	slug: string;
	image: string;
	location?: string;
	department?: string;
}

// Main component
export default function GSPTeamPage() {
	const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
	const [showFilterModal, setShowFilterModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [filters, setFilters] = useState<{ locations: string[]; departments: string[] }>({
		locations: [],
		departments: [],
	});

	const ITEMS_PER_PAGE = 9; // 3x3 grid

	const filteredMembers = useMemo(() => {
		return teamMembers.filter((member) => {
			const locationMatch =
				filters.locations.length === 0 || filters.locations.includes(member.location || "");
			const departmentMatch =
				filters.departments.length === 0 || filters.departments.includes(member.department || "");

			return locationMatch && departmentMatch;
		});
	}, [filters]);

	const paginatedMembers = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		return filteredMembers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
	}, [filteredMembers, currentPage]);

	const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);

	const handleMemberClick = useCallback((member: TeamMember) => {
		setSelectedMember(member);
	}, []);

	const handleBackToGrid = useCallback(() => {
		setSelectedMember(null);
	}, []);

	const handleFilterClick = useCallback(() => {
		setShowFilterModal(true);
	}, []);

	const handleFiltersChange = useCallback((newFilters: { locations: string[]; departments: string[] }) => {
		setFilters(newFilters);
		setCurrentPage(1); // Reset to first page when filters change
	}, []);

	const handlePageChange = useCallback((page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	if (selectedMember) {
		return <TeamMemberProfile member={selectedMember} onBack={handleBackToGrid} />;
	}

	return (
		<>
			<TeamHeroSection />
			<BoardOfDirectors showAll={true} showCTA={false} />
			<TeamFilterButton onFilterClick={handleFilterClick} />
			<TeamMemberGrid
				members={paginatedMembers}
				onMemberClick={handleMemberClick}
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			<FilterModal
				isOpen={showFilterModal}
				onClose={() => setShowFilterModal(false)}
				filters={filters}
				onFiltersChange={handleFiltersChange}
			/>
		</>
	);
}
