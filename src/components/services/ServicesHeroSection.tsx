import React from 'react';

const ServicesHeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-20"
      style={{
        background: "linear-gradient(rgba(6, 78, 95, 0.95), rgba(6, 78, 95, 0.95)), url('https://gspartstage.wpengine.com/wp-content/uploads/2025/04/teambanner.png')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Services</h1>
          <p className="text-xl text-cyan-200">
            Comprehensive capital solutions tailored to your commercial real estate needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;