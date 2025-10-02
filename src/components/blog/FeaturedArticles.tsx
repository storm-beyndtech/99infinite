import React from 'react';
import { User, Clock } from 'lucide-react';

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

interface FeaturedArticlesProps {
  featuredPosts: BlogPost[];
  formatDate: (dateString: string) => string;
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ featuredPosts, formatDate }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gsp-navy mb-4">Featured Articles</h2>
          <p className="text-gray-600">Our latest market insights and analysis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <article 
              key={post.id}
              className={`group cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`relative overflow-hidden ${index === 0 ? 'h-64 md:h-80' : 'h-48'}`}>
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
                      <span className="inline-block bg-gsp-teal text-white text-xs px-2 py-1 rounded-full font-semibold mb-2">
                        {post.enhanced_fields.category}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className={`p-6 ${index === 0 ? 'md:p-8' : ''}`}>
                  <h3 className={`font-bold text-gsp-navy mb-3 line-clamp-2 group-hover:text-gsp-teal transition-colors ${
                    index === 0 ? 'text-xl md:text-2xl' : 'text-lg'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 line-clamp-3 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {post.enhanced_fields?.summary || post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.enhanced_fields?.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.enhanced_fields?.readTime} min read</span>
                      </div>
                    </div>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;