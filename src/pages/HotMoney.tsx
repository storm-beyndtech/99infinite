import React, { useState, useMemo } from 'react';
import InsightsHeroSection from '../components/insights/InsightsHeroSection';
import ArticleGrid from '../components/insights/ArticleGrid';
import InsightsPagination from '../components/insights/InsightsPagination';

// Import the blog data
import blogData from '../../../blog_posts_complete_data.json';

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

const HotMoney: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter for Hot Money posts (category ID 124)
  const allArticles = useMemo(() => {
    const data = blogData as BlogData;
    if (!data?.posts?.all) return [];
    return data.posts.all
      .filter((post: BlogPost) => post.categories?.includes(124))
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
        title="Hot Money"
        description="Market insights, lending opportunities, and real estate investment analysis from our expert team."
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

export default HotMoney;