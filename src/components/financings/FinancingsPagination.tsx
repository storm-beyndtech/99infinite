import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FinancingsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const FinancingsPagination: React.FC<FinancingsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </button>

      <div className="flex space-x-1">
        {Array.from({ length: Math.min(totalPages, 7) }, (_, index) => {
          let pageNumber;
          if (totalPages <= 7) {
            pageNumber = index + 1;
          } else {
            if (currentPage <= 4) {
              pageNumber = index + 1;
            } else if (currentPage >= totalPages - 3) {
              pageNumber = totalPages - 6 + index;
            } else {
              pageNumber = currentPage - 3 + index;
            }
          }

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pageNumber === currentPage
                  ? "bg-gsp-teal text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

export default FinancingsPagination;