import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

const ServicesAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // First item expanded by default

  const accordionItems: AccordionItem[] = [
    {
      title: "Debt Capital",
      content: "99Infinite specializes in comprehensive debt financing solutions, including senior, subordinated, and mezzanine debt to fund acquisitions, development projects, refinancing, and cash-out refinancing opportunities."
    },
    {
      title: "Structured Finance", 
      content: "Our structured finance solutions include complex financing arrangements, joint venture partnerships, and innovative capital structures designed to optimize risk and return profiles for institutional and private investors."
    },
    {
      title: "Equity Placement",
      content: "We facilitate equity placements for real estate investments, connecting sponsors with institutional investors, family offices, and high-net-worth individuals seeking diversified real estate exposure."
    },
    {
      title: "Loan Restructuring",
      content: "Our loan restructuring services help property owners navigate financial challenges through workout solutions, debt modifications, and strategic restructuring to preserve asset value and investor returns."
    },
    {
      title: "Loan Sales",
      content: "We provide comprehensive loan sales services for performing, sub-performing, and non-performing commercial real estate loans, including portfolio transactions and individual asset dispositions."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {accordionItems.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full px-6 py-4 text-left transition-colors ${
              activeIndex === index 
                ? 'bg-cyan-600 text-white' 
                : 'bg-white text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </button>
          
          {activeIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesAccordion;