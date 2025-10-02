import React from 'react';

const ServicesHeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-32 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}
    >
      {/* Enhanced gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Glassmorphism container */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Customized
              <br />
              <span className="text-orange-400 drop-shadow-md">Capital Solutions</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed drop-shadow-sm">
              We provide tailored financing strategies designed to align
              with market conditions, structured debt and equity
              placements to optimize execution. Our expansive network of
              investors allows us to provide optimal terms for our clients.
            </p>
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default ServicesHeroSection;