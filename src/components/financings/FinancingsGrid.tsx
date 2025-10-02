import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Building, Calendar } from 'lucide-react';

interface Financing {
  id: number;
  title: string;
  content: string;
  slug: string;
  date: string;
  image?: string;
  enhanced_fields?: {
    amount: string;
    propertyType: string;
    location: string;
    transactionType: string;
    summary: string;
  };
  acf?: {
    financing_stats_list?: Array<{
      list_title: string;
      list_description: string;
    }>;
    property_details?: {
      property_type: string;
      location: string;
      transaction_type: string;
    };
  };
}

interface FinancingsGridProps {
  financings: Financing[];
}

const FinancingsGrid: React.FC<FinancingsGridProps> = ({ financings }) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleFinancingClick = (financing: Financing) => {
    navigate(`/financings/${financing.slug}`);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {financings.map((financing) => (
            <div 
              key={financing.id} 
              onClick={() => handleFinancingClick(financing)}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={financing.image || 'https://via.placeholder.com/400x300/f0f0f0/999999?text=Property+Image'}
                  alt={financing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300/f0f0f0/999999?text=Property+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-sm font-semibold">
                    {financing.enhanced_fields?.amount || 'View Details'}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="font-bold text-gsp-navy text-sm mb-2 leading-tight line-clamp-2">
                    {financing.title}
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  {financing.enhanced_fields?.propertyType && (
                    <div className="flex items-center">
                      <Building className="w-3 h-3 mr-2 text-gsp-teal" />
                      <span>{financing.enhanced_fields.propertyType}</span>
                    </div>
                  )}
                  
                  {financing.enhanced_fields?.location && (
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2 text-gsp-teal" />
                      <span>{financing.enhanced_fields.location}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-2 text-gsp-teal" />
                    <span>{formatDate(financing.date)}</span>
                  </div>
                </div>

                {financing.enhanced_fields?.transactionType && (
                  <div className="mt-3">
                    <span className="inline-block bg-gsp-teal/10 text-gsp-teal text-xs px-2 py-1 rounded-full font-semibold">
                      {financing.enhanced_fields.transactionType}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancingsGrid;