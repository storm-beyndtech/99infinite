import React from 'react';
import ServicesHeroSection from '../components/services/ServicesHeroSection';
import ServicesList from '../components/services/ServicesList';
import ServicesCallToAction from '../components/services/ServicesCallToAction';
import ServicesStats from '../components/services/ServicesStats';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesHeroSection />
      <ServicesList />
      <ServicesCallToAction />
      <ServicesStats />
    </div>
  );
};

export default Services;