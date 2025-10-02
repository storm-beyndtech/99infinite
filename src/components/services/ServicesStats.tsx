import React from 'react';

const ServicesStats: React.FC = () => {
  return (
    <section className="py-16 bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-orange-400 mb-2">$100B+</div>
            <div className="text-cyan-200">Capital Placed Since 1992</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-orange-400 mb-2">$5B+</div>
            <div className="text-cyan-200">Annual Capital Placements</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-orange-400 mb-2">30+</div>
            <div className="text-cyan-200">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesStats;