import React from 'react';
import { DollarSign, TrendingUp, Building, Users, Check } from 'lucide-react';

const ServicesList: React.FC = () => {
  const services = [
    {
      title: "CAPITAL RAISING",
      icon: <DollarSign className="w-8 h-8" />,
      items: [
        "First Mortgage Financing",
        "Permanent, Bridge, Construction",
        "Joint Venture Equity",
        "Preferred Equity",
        "Mezzanine Financing"
      ]
    },
    {
      title: "LOAN SALES",
      icon: <TrendingUp className="w-8 h-8" />,
      items: [
        "Performing, Sub-Performing, Non-Performing, Whole Loans",
        "Mezzanine Debt",
        "A-Note Bifurcation",
        "Residential and Commercial"
      ]
    },
    {
      title: "DEBT FACILITIES",
      icon: <Building className="w-8 h-8" />,
      items: [
        "Bridge Lenders",
        "Note Buyers",
        "Acquisition Funds",
        "Portfolio Financing"
      ]
    },
    {
      title: "RESTRUCTURING ADVISORY",
      icon: <Users className="w-8 h-8" />,
      items: [
        "Advisory services for real estate owners in need of restructuring & workout solutions with their existing lender"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cyan-900 text-white p-8 rounded-lg text-center mb-16">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            99Infinite's Debt, Joint Venture, Structured Capital & Loan Sales Platform
          </h2>
          <p className="text-lg text-cyan-100">
            focuses on the following four lines of business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-cyan-500 transition-colors">
              <div className="flex items-center mb-6">
                <div className="text-cyan-600 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-cyan-900">{service.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;