import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

interface FeaturedPodcastProps {
  title?: string;
  description?: string;
  image?: string;
  episodeNumber?: number;
  duration?: string;
  guests?: string[];
  className?: string;
}

const FeaturedPodcast: React.FC<FeaturedPodcastProps> = ({
  title = "The Landscape",
  description = "Elevate your knowledge with our insightful podcast with industry news and analysis.",
  image = "https://www.gspartners.com/wp-content/uploads/2025/01/Group-480.png",
  episodeNumber,
  duration,
  guests,
  className = ''
}) => {
  return (
    <div className={`bg-gradient-to-br from-cyan-800 to-cyan-900 rounded-xl p-8 text-white ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-orange-400">Featured Podcast</h3>
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer group">
          <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform ml-1" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-20 h-20 rounded-xl object-cover shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/80x80/0891b2/ffffff?text=Podcast";
            }}
          />
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-xl mb-2">{title}</h4>
          {episodeNumber && (
            <p className="text-cyan-200 text-sm mb-2">Episode {episodeNumber}</p>
          )}
          <p className="text-cyan-100 text-sm mb-4 leading-relaxed">{description}</p>
          
          {guests && guests.length > 0 && (
            <p className="text-cyan-200 text-xs mb-3">
              <span className="font-semibold">Guests: </span>
              {guests.join(', ')}
            </p>
          )}

          {duration && (
            <p className="text-cyan-200 text-xs mb-4">
              <span className="font-semibold">Duration: </span>
              {duration}
            </p>
          )}

          <Link 
            to="/podcast" 
            className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors group"
          >
            View All Episodes
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPodcast;