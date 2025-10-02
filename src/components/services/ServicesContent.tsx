import React from 'react';
import ServicesAccordion from './ServicesAccordion';

const ServicesContent: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Description and Image */}
          <div>
            <div className="bg-cyan-600 text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-cyan-100 leading-relaxed mb-6">
                99Infinite has been at the forefront of commercial real estate capital 
                markets since 1992. We deliver comprehensive capital solutions through 
                structured debt and equity placements designed for optimal execution. 
                Our extensive network of institutional investors, lending partners, and 
                high net worth individuals enables us to secure exceptional terms for our clients. 
                We excel in arranging sophisticated financing structures for complex commercial 
                real estate ventures.
              </p>
            </div>

            {/* Lending Focus Video */}
            <div className="relative">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover rounded-lg"
              >
                <source 
                  src="https://www.gspartners.com/wp-content/uploads/2025/05/downtown-los-angeles-skyline-2023-11-27-05-36-45-utc-optimized.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded">
                <span className="text-sm font-semibold">Lending Focus</span>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <ServicesAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;