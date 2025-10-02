import React from 'react';

interface TeamFilterButtonProps {
  onFilterClick: () => void;
}

const TeamFilterButton: React.FC<TeamFilterButtonProps> = ({ onFilterClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={onFilterClick}
        className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
      >
        FILTER +
      </button>
    </div>
  );
};

export default TeamFilterButton;