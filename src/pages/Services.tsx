import React from 'react';
import ServicesHeroSection from '../components/services/ServicesHeroSection';
import ServicesContent from '../components/services/ServicesContent';
import ServicesCallToAction from '../components/services/ServicesCallToAction';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesHeroSection />
      <ServicesContent />
      <ServicesCallToAction />
    </div>
  );
};

export default Services;