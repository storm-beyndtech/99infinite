import React, { useState, useMemo } from 'react';
import InsightsHeroSection from '../components/insights/InsightsHeroSection';
import ArticleGrid from '../components/insights/ArticleGrid';
import InsightsPagination from '../components/insights/InsightsPagination';

// Import the blog data
import blogData from '../data/blog_posts_complete_data.json';

interface BlogData {
  metadata: {
    totalPosts: number;
    extractedAt: string;
    categories: Record<string, number>;
  };
  posts: {
    all: BlogPost[];
  };
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  slug: string;
  link: string;
  categories: number[];
  author: {
    id: number;
    name: string;
    link: string;
  };
  featuredImage?: string;
  featuredMediaId?: number;
  readingTime?: string;
  wordCount?: number;
}

const PascalesPerspective: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter for Pascale's Perspective posts (category ID 127)
  const allArticles = useMemo(() => {
    const data = blogData as BlogData;
    if (!data?.posts?.all) return [];
    return data.posts.all
      .filter((post: BlogPost) => post.categories?.includes(127))
      .slice(0, 100); // Get first 100 for performance
  }, []); 

  const totalPages = Math.ceil(allArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = allArticles.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const cleanContent = (htmlContent: string) => {
    return htmlContent
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&#8230;/g, '...')
      .trim();
  };

  return (
    <div className="bg-white">
      <InsightsHeroSection 
        title="Pascale's Perspective"
        description="Economic analysis and Federal Reserve commentary by David R. Pascale, Jr., providing in-depth market insights and financial perspectives."
      />
      <ArticleGrid 
        articles={currentArticles}
        formatDate={formatDate}
        cleanContent={cleanContent}
      />
      <InsightsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PascalesPerspective;