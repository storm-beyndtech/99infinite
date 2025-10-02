import React, { useState, useMemo } from 'react';
import BlogHeroSection from '../components/blog/BlogHeroSection';
import FeaturedArticles from '../components/blog/FeaturedArticles';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';
import BlogPagination from '../components/blog/BlogPagination';

// Import the compiled posts data
import postsData from '../../../GSP/compiled-json/posts.json';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  date: string;
  categories?: number[];
  tags?: number[];
  image?: string;
  enhanced_fields?: {
    category: string;
    readTime: number;
    summary: string;
    author: string;
    tags: number[];
  };
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const ITEMS_PER_PAGE = 12;

  // Get the first 50 posts for better performance
  const allPosts: BlogPost[] = useMemo(() => 
    postsData.slice(0, 50) as BlogPost[], []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(['All']);
    allPosts.forEach(post => {
      if (post.enhanced_fields?.category) {
        cats.add(post.enhanced_fields.category);
      }
    });
    return Array.from(cats);
  }, [allPosts]);

  // Filter and search functionality
  const filteredPosts = useMemo(() => {
    let filtered = allPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => 
        post.enhanced_fields?.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.enhanced_fields?.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.enhanced_fields?.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allPosts, selectedCategory, searchTerm]);

  // Pagination
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Get featured posts (first 3)
  const featuredPosts = useMemo(() => 
    allPosts.slice(0, 3), [allPosts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white">
      <BlogHeroSection totalArticles={allPosts.length} />
      <FeaturedArticles featuredPosts={featuredPosts} formatDate={formatDate} />
      <BlogFilters
        categories={categories}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        filteredCount={paginatedPosts.length}
        totalCount={filteredPosts.length}
      />
      <BlogGrid posts={paginatedPosts} formatDate={formatDate} />
      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Blog;