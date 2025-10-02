import React from 'react';
import { Filter, Search } from 'lucide-react';

interface BlogFiltersProps {
  categories: string[];
  selectedCategory: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (term: string) => void;
  filteredCount: number;
  totalCount: number;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  selectedCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
  filteredCount,
  totalCount
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gsp-navy mb-2">All Articles</h2>
            <p className="text-gray-600">Browse our complete library of market insights</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select 
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-gsp-teal focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-gsp-teal focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-6">
          Showing {filteredCount} of {totalCount} articles
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;