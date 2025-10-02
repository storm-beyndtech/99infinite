import React, { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
  id: number;
  title: string;
  content: string;
  slug: string;
  image: string;
  location?: string;
  department?: string;
}

interface TeamMemberGridProps {
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const TeamMemberGrid: React.FC<TeamMemberGridProps> = ({
  members,
  onMemberClick,
  currentPage,
  totalPages,
  onPageChange
}) => {
  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  }, [currentPage, onPageChange]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  }, [currentPage, totalPages, onPageChange]);

  const handlePageClick = useCallback(
    (page: number) => {
      onPageChange(page);
    },
    [onPageChange],
  );

  const generatePageNumbers = React.useMemo(() => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} onClick={onMemberClick} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>

          <div className="flex space-x-1">
            {generatePageNumbers.map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && handlePageClick(page)}
                disabled={typeof page === "string"}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  page === currentPage
                    ? "bg-cyan-600 text-white"
                    : typeof page === "number"
                    ? "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    : "bg-transparent text-gray-400 cursor-default"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamMemberGrid;