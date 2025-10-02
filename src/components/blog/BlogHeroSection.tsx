import React from 'react';
import { TrendingUp, User, Calendar } from 'lucide-react';

interface BlogHeroSectionProps {
  totalArticles: number;
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ totalArticles }) => {
  return (
    <section 
      className="relative bg-cover bg-center py-20"
      style={{
        background: "linear-gradient(rgba(6, 78, 95, 0.95), rgba(6, 78, 95, 0.95)), url('https://gspartstage.wpengine.com/wp-content/uploads/2025/04/teambanner.png')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Market Insights & Analysis</h1>
          <p className="text-xl text-cyan-200 max-w-3xl">
            Stay informed with our expert analysis on commercial real estate finance, 
            market trends, and economic developments affecting the industry.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>{totalArticles}+ Articles</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>Expert Contributors</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Updated Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;