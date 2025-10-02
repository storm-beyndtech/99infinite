import React, { useState, useMemo } from 'react';
import FinancingsHeroSection from '../components/financings/FinancingsHeroSection';
import FinancingsFilters from '../components/financings/FinancingsFilters';
import FinancingsGrid from '../components/financings/FinancingsGrid';
import FinancingsPagination from '../components/financings/FinancingsPagination';
import financingsData from '../../../GSP/compiled-json/financings.json';

interface Financing {
  id: number;
  title: string;
  content: string;
  slug: string;
  date: string;
  image?: string;
  enhanced_fields?: {
    amount: string;
    propertyType: string;
    location: string;
    transactionType: string;
    summary: string;
  };
  acf?: {
    financing_stats_list?: Array<{
      list_title: string;
      list_description: string;
    }>;
    property_details?: {
      property_type: string;
      location: string;
      transaction_type: string;
    };
  };
}

const Financings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
  const ITEMS_PER_PAGE = 12;

  const allFinancings: Financing[] = useMemo(() => 
    financingsData.slice(0, 100) as Financing[], []);

  const filteredFinancings = useMemo(() => {
    let filtered = allFinancings;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(financing => 
        financing.enhanced_fields?.transactionType?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        financing.title.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(financing =>
        financing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        financing.enhanced_fields?.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        financing.enhanced_fields?.propertyType?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allFinancings, selectedCategory, searchTerm]);

  const paginatedFinancings = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFinancings.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredFinancings, currentPage]);

  const totalPages = Math.ceil(filteredFinancings.length / ITEMS_PER_PAGE);

  return (
    <div className="bg-white">
      <FinancingsHeroSection />
      
      <FinancingsFilters 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalShowing={paginatedFinancings.length}
        totalFiltered={filteredFinancings.length}
      />
      
      <FinancingsGrid financings={paginatedFinancings} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FinancingsPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Financings;