import React from 'react';

interface InsightsHeroSectionProps {
  title: string;
  description: string;
}

const InsightsHeroSection: React.FC<InsightsHeroSectionProps> = ({ title, description }) => {
  return (
    <section 
      className="relative bg-cover bg-center py-20"
      style={{
        background: "linear-gradient(rgba(6, 78, 95, 0.95), rgba(6, 78, 95, 0.95)), url('https://gspartstage.wpengine.com/wp-content/uploads/2025/04/teambanner.png')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-cyan-200 max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsightsHeroSection;