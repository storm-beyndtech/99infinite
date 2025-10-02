import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesCallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">Ready to Discuss Your Project?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Our experienced team is ready to help structure the optimal financing solution for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg inline-flex items-center justify-center"
          >
            Contact Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/financings"
            className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg inline-flex items-center justify-center"
          >
            View Our Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCallToAction;