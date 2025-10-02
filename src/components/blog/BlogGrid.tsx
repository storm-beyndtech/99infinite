import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt?: string;
  date: string;
  image?: string;
  enhanced_fields?: {
    category: string;
    readTime: number;
    summary: string;
    author: string;
    tags: number[];
  };
}

interface BlogGridProps {
  posts: BlogPost[];
  formatDate: (dateString: string) => string;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, formatDate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={post.image || 'https://www.gspartners.com/wp-content/uploads/2024/02/stock-market-bg.jpg'}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://www.gspartners.com/wp-content/uploads/2024/02/stock-market-bg.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  {post.enhanced_fields?.category && (
                    <span className="inline-block bg-gsp-teal text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {post.enhanced_fields.category}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-gsp-navy text-lg mb-3 line-clamp-2 group-hover:text-gsp-teal transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.enhanced_fields?.summary || post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.enhanced_fields?.readTime} min</span>
                    </div>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;