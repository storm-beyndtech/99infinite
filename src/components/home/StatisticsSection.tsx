import React from 'react';
import { Link } from 'react-router-dom';

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-16 bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Since 1992, 99Infinite on average, has closed $5 billion in capital placements
              annually.
            </h2>
            <Link
              to="/financings"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold tracking-wide transition-colors duration-200 rounded-lg"
            >
              View Financings
            </Link>
          </div>
          <div className="bg-cyan-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-orange-400 mb-4">Featured Podcast</h3>
            <div className="flex items-center space-x-4">
              <img
                src="https://www.gspartners.com/wp-content/uploads/2025/01/Group-480.png"
                alt="The Landscape Podcast"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-bold text-white mb-1">The Landscape</h4>
                <p className="text-cyan-200 text-sm mb-2">Create your knowledge with our insights...</p>
                <Link to="/podcast" className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
                  View Episodes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;