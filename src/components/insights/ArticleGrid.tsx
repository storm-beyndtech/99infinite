import React from 'react';
import ArticleCard from './ArticleCard';

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

interface ArticleGridProps {
  articles: BlogPost[];
  formatDate: (dateString: string) => string;
  cleanContent: (htmlContent: string) => string;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, formatDate, cleanContent }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              formatDate={formatDate}
              cleanContent={cleanContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;