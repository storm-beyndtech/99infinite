import React from 'react';
import { TrendingUp, BarChart, DollarSign } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Exact match to GSP design */}
      <section className="relative bg-gsp-navy text-white overflow-hidden">
        {/* Background city silhouette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gsp-navy via-gsp-navy/95 to-gsp-navy/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-gsp-teal/10 to-gsp-teal/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              More Than Advisors,<br />
              <span className="text-gsp-orange">We're Your Partners</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We provide tailored financing strategies that evolve with market conditions. Structured debt and equity placement to advisory services, our expertise ensures every transaction is optimized for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Cards Section - Three teal cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gsp-teal text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-2">
                $100B<span className="text-gsp-orange">+</span>
              </div>
              <div className="text-sm">
                Capitalizations Since<br />
                Our Inception in 1992
              </div>
            </div>
            <div className="bg-gsp-teal text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-2">
                $5B<span className="text-gsp-orange">+</span>
              </div>
              <div className="text-sm">
                In Annual Capital<br />
                Placements per Year
              </div>
            </div>
            <div className="bg-gsp-teal text-white p-8 rounded-lg">
              <div className="text-4xl font-bold mb-2">
                30<span className="text-gsp-orange">+</span>
              </div>
              <div className="text-sm">
                Years of Industry<br />
                Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Presence Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gsp-navy text-center mb-12">
            Nationwide Presence
          </h2>
          {/* GSP Nationwide Presence Map */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://www.gspartners.com/wp-content/uploads/2025/03/gsp-map-1536x743.png"
              alt="GSP Nationwide Presence Map showing office locations across the United States"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Service Feature Boxes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Creative Financing Box */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <TrendingUp className="h-12 w-12 text-gsp-teal" />
              </div>
              <h3 className="text-xl font-bold text-gsp-navy mb-4">
                Creative Financing for Complex Projects
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With integrity and transparency at our core, we structure flexible financing solutions for complex projects, including construction, land, and bridge loans.
              </p>
            </div>

            {/* Market Insights Box */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <BarChart className="h-12 w-12 text-gsp-teal" />
              </div>
              <h3 className="text-xl font-bold text-gsp-navy mb-4">
                Market Insights That Drive Results
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Leveraging proprietary software, real-time data, and industry expertise, our team navigates market shifts and optimizes capital strategies with confidence.
              </p>
            </div>

            {/* Tailored Solutions Box */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <DollarSign className="h-12 w-12 text-gsp-teal" />
              </div>
              <h3 className="text-xl font-bold text-gsp-navy mb-4">
                Tailored Capital Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From bridge and construction financing for acquisitions, refinance/recapitalizations, development and historic adaptive reuse, we're committed to delivering the best result.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;