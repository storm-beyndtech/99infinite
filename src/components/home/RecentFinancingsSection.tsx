import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, MapPin, DollarSign } from 'lucide-react';
import financingsData from '../../../../GSP/compiled-json/financings.json';

interface Financing {
  id: number;
  title: string;
  slug: string;
  image?: string;
  enhanced_fields?: {
    amount: string;
    propertyType: string;
    location: string;
  };
}

const RecentFinancingsSection: React.FC = () => {
  const financingImages = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  ];

  const formatAmount = (titleStr: string) => {
    const match = titleStr.match(/\$([0-9,]+)/);
    if (match) {
      return `$${match[1]}`;
    }
    return 'Contact for Details';
  };

  const getLocationFromTitle = (titleStr: string) => {
    const locationMatch = titleStr.match(/ in ([^,]+(?:, [A-Z]{2})?)/);
    if (locationMatch) {
      return locationMatch[1];
    }
    return 'Multiple Locations';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Financings</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Since 1992, 99Infinite on average, has closed $5 billion in capital placements annually.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {(financingsData as Financing[]).slice(0, 3).map((financing: Financing, index: number) => (
            <Link
              key={financing.id}
              to={`/financings/${financing.slug}`}
              className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={financingImages[index]}
                  alt={financing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm mb-2">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{formatAmount(financing.title)}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-cyan-700 transition-colors">
                  {financing.title.length > 80 ? `${financing.title.substring(0, 80)}...` : financing.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{getLocationFromTitle(financing.title)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-600 font-semibold text-sm group-hover:text-cyan-700 transition-colors">
                    View Details
                  </span>
                  <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center group-hover:bg-cyan-700 transition-colors">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/financings"
            className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-xl"
          >
            <Building2 className="w-6 h-6 mr-3" />
            View All Financings
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentFinancingsSection;