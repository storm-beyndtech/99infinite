import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Building, Calendar, DollarSign } from 'lucide-react';

// Import the compiled financings data
import financingsData from '../data/financings.json';

interface FinancingStats {
  list_title: string;
  list_description: string;
}

interface PropertyDetails {
  property_type: string;
  location: string;
  transaction_type: string;
}

interface Financing {
  id: number;
  title: string;
  content: string;
  slug: string;
  date: string;
  featured_media?: number;
  image?: string;
  acf?: {
    financing_stats_list?: FinancingStats[];
    financing_stats?: string;
    financing_team_members?: number[];
    property_details?: PropertyDetails;
  };
  enhanced_fields?: {
    amount: string;
    propertyType: string;
    location: string;
    transactionType: string;
    summary: string;
  };
}

const FinancingDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [financing, setFinancing] = useState<Financing | null>(null);
  const [relatedFinancings, setRelatedFinancings] = useState<Financing[]>([]);

  useEffect(() => {
    if (slug) {
      // Find the financing by slug
      const foundFinancing = (financingsData as Financing[]).find((f: Financing) => f.slug === slug);
      
      if (foundFinancing) {
        setFinancing(foundFinancing);
        
        // Find related financings (same property type or transaction type)
        const related = (financingsData as Financing[])
          .filter((f: Financing) => 
            f.id !== foundFinancing.id && (
              f.enhanced_fields?.propertyType === foundFinancing.enhanced_fields?.propertyType ||
              f.enhanced_fields?.transactionType === foundFinancing.enhanced_fields?.transactionType ||
              f.acf?.property_details?.property_type === foundFinancing.acf?.property_details?.property_type
            )
          )
          .slice(0, 3) as Financing[];
        
        setRelatedFinancings(related);
      }
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const cleanContent = (htmlContent: string) => {
    return htmlContent
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#038;/g, '&')
      .trim();
  };

  const extractAmount = (title: string, content: string) => {
    // Try to extract amount from title or content
    const amountRegex = /\$[\d,]+/;
    const titleMatch = title.match(amountRegex);
    const contentMatch = content.match(amountRegex);
    return titleMatch?.[0] || contentMatch?.[0] || 'Contact for Details';
  };

  if (!financing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Financing Not Found</h2>
          <button
            onClick={() => navigate('/financings')}
            className="text-cyan-600 hover:text-cyan-700 font-medium"
          >
            ← Back to Financings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div 
        className="relative bg-cover bg-center bg-cyan-900 text-white py-16"
        style={{
          background: financing.image 
            ? `linear-gradient(rgba(6, 78, 95, 0.8), rgba(6, 78, 95, 0.8)), url(${financing.image})`
            : 'linear-gradient(135deg, #164e63 0%, #0891b2 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate('/financings')}
            className="flex items-center text-orange-400 hover:text-orange-300 mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Financings
          </button>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {financing.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-cyan-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{formatDate(financing.date)}</span>
              </div>
              
              {(financing.enhanced_fields?.amount || extractAmount(financing.title, financing.content)) && (
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span className="font-semibold">
                    {financing.enhanced_fields?.amount || extractAmount(financing.title, financing.content)}
                  </span>
                </div>
              )}
              
              {(financing.enhanced_fields?.propertyType || financing.acf?.property_details?.property_type) && (
                <div className="flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  <span>{financing.enhanced_fields?.propertyType || financing.acf?.property_details?.property_type}</span>
                </div>
              )}
              
              {(financing.enhanced_fields?.location || financing.acf?.property_details?.location) && (
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{financing.enhanced_fields?.location || financing.acf?.property_details?.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Transaction Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {cleanContent(financing.content)}
                </p>
              </div>
            </div>

            {/* Transaction Details Stats */}
            {financing.acf?.financing_stats_list && financing.acf.financing_stats_list.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Transaction Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {financing.acf.financing_stats_list.map((stat, index) => (
                    <div key={index} className="border-l-4 border-cyan-500 pl-4">
                      <div className="font-semibold text-gray-900">{stat.list_title}</div>
                      <div className="text-lg text-cyan-600 font-medium">{stat.list_description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Stats Text */}
            {financing.acf?.financing_stats && (
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Terms</h3>
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: financing.acf.financing_stats.replace(/\r\n\r\n/g, '<br><br>').replace(/\r\n/g, '<br>') 
                  }} 
                />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Property Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Property Summary</h3>
              <div className="space-y-4">
                {(financing.enhanced_fields?.transactionType || financing.acf?.property_details?.transaction_type) && (
                  <div>
                    <div className="text-sm text-gray-600">Transaction Type</div>
                    <div className="font-semibold text-gray-900">
                      {financing.enhanced_fields?.transactionType || financing.acf?.property_details?.transaction_type}
                    </div>
                  </div>
                )}
                
                {(financing.enhanced_fields?.propertyType || financing.acf?.property_details?.property_type) && (
                  <div>
                    <div className="text-sm text-gray-600">Property Type</div>
                    <div className="font-semibold text-gray-900">
                      {financing.enhanced_fields?.propertyType || financing.acf?.property_details?.property_type}
                    </div>
                  </div>
                )}
                
                {(financing.enhanced_fields?.location || financing.acf?.property_details?.location) && (
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold text-gray-900">
                      {financing.enhanced_fields?.location || financing.acf?.property_details?.location}
                    </div>
                  </div>
                )}
                
                <div>
                  <div className="text-sm text-gray-600">Financing Amount</div>
                  <div className="font-semibold text-gray-900">
                    {financing.enhanced_fields?.amount || extractAmount(financing.title, financing.content)}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-cyan-900 text-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold mb-3">Interested in Similar Financing?</h3>
              <p className="text-cyan-200 mb-4 text-sm">
                Our experienced team can help structure financing solutions tailored to your needs.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>

        {/* Related Financings */}
        {relatedFinancings.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Transactions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedFinancings.map((related) => (
                <div
                  key={related.id}
                  onClick={() => navigate(`/financings/${related.slug}`)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={related.image || 'https://via.placeholder.com/400x300/f0f0f0/999999?text=Property+Image'}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-sm font-semibold">
                        {related.enhanced_fields?.amount || extractAmount(related.title, related.content)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm mb-2 leading-tight line-clamp-2">
                      {related.title}
                    </h3>
                    
                    <div className="space-y-1 text-xs text-gray-600">
                      {related.enhanced_fields?.propertyType && (
                        <div className="flex items-center">
                          <Building className="w-3 h-3 mr-2 text-cyan-500" />
                          <span>{related.enhanced_fields.propertyType}</span>
                        </div>
                      )}
                      
                      {related.enhanced_fields?.location && (
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-2 text-cyan-500" />
                          <span>{related.enhanced_fields.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancingDetail;