import React from 'react';
import { Filter } from 'lucide-react';

interface FinancingsFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalShowing: number;
  totalFiltered: number;
}

const FinancingsFilters: React.FC<FinancingsFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  totalShowing,
  totalFiltered
}) => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filter by:</span>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-gsp-teal focus:border-transparent"
              >
                <option>All</option>
                <option>Acquisition</option>
                <option>Bridge</option>
                <option>Permanent</option>
                <option>Construction</option>
                <option>Refinance</option>
                <option>Cash-Out</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search by location, property type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-gsp-teal focus:border-transparent w-64"
              />
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Showing {totalShowing} of {totalFiltered} transactions
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingsFilters;