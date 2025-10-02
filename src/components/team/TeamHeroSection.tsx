import React from 'react';

const TeamHeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-[1260px] w-[92%] sm:w-[98%] mx-auto rounded-xl overflow-hidden relative">
        <div 
          className="bg-cover bg-center"
          style={{
            background: "url(https://gspartstage.wpengine.com/wp-content/uploads/2025/04/teambanner.png)",
          }}
        >
          <div className="bg-gradient-to-r from-black/80 via-black/60 to-black/80 text-white py-16">
            <div className="max-w-7xl mx-auto px-5 sm:px-10">
              <h1 className="text-5xl font-bold">Our Team</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHeroSection;