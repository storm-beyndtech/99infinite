import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Let's Discuss Your Deal
        </h2>
        <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
          Ready to explore financing options for your commercial real estate project? 
          Our experienced team is here to structure the optimal solution.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
};

export default ServicesCallToAction;