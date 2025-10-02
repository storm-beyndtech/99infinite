import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Building } from 'lucide-react';

interface FinancingCardProps {
  id: number;
  title: string;
  slug: string;
  amount?: string;
  location?: string;
  propertyType?: string;
  image?: string;
  className?: string;
}

const FinancingCard: React.FC<FinancingCardProps> = ({
  title,
  slug,
  amount,
  location,
  propertyType,
  image,
  className = ''
}) => {
  const formatAmount = (titleStr: string) => {
    const match = titleStr.match(/\$([0-9,]+)/);
    if (match) {
      return `$${match[1]}`;
    }
    return amount || 'Contact for Details';
  };

  const getLocationFromTitle = (titleStr: string) => {
    const locationMatch = titleStr.match(/ in ([^,]+(?:, [A-Z]{2})?)/);
    if (locationMatch) {
      return locationMatch[1];
    }
    return location || 'Multiple Locations';
  };

  const getPropertyTypeFromTitle = (titleStr: string) => {
    const lowerTitle = titleStr.toLowerCase();
    if (lowerTitle.includes('multi-family') || lowerTitle.includes('multifamily')) return 'Multi-Family';
    if (lowerTitle.includes('office')) return 'Office';
    if (lowerTitle.includes('retail')) return 'Retail';
    if (lowerTitle.includes('industrial')) return 'Industrial';
    if (lowerTitle.includes('hotel')) return 'Hotel';
    if (lowerTitle.includes('mixed-use')) return 'Mixed-Use';
    return propertyType || 'Commercial';
  };

  return (
    <Link
      to={`/financings/${slug}`}
      className={`group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || `https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-white text-sm mb-2">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="font-semibold">{formatAmount(title)}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-cyan-700 transition-colors">
          {title.length > 80 ? `${title.substring(0, 80)}...` : title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            <span>{getLocationFromTitle(title)}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Building className="w-4 h-4 mr-2 text-gray-400" />
            <span>{getPropertyTypeFromTitle(title)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-cyan-600 font-semibold text-sm group-hover:text-cyan-700 transition-colors">
            View Details
          </span>
          <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center group-hover:bg-cyan-700 transition-colors">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FinancingCard;