import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

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

interface ArticleCardProps {
  article: BlogPost;
  formatDate: (dateString: string) => string;
  cleanContent: (htmlContent: string) => string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, formatDate, cleanContent }) => {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer block"
    >
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{formatDate(article.date)}</span>
          {article.readingTime && (
            <>
              <span className="mx-2">•</span>
              <span>{article.readingTime}</span>
            </>
          )}
        </div>
        
        <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {cleanContent(article.excerpt)}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <User className="w-4 h-4 mr-1" />
            <span>{article.author.name}</span>
          </div>
          
          <div className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center transition-colors">
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;