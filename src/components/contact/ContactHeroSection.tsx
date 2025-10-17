import React from 'react';
import teambanner from '../../assets/teambanner.png';

const ContactHeroSection: React.FC = () => {
  return (
    <section className="">
      <div className="bg-cyan-950 max-w-[1260px] w-[92%] sm:w-[98%] mx-auto rounded-xl overflow-hidden relative">
        <div
          className="text-white py-16 bg-cover bg-center"
          style={{
            backgroundImage: `url(${teambanner})`,
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-10">
            <h1 className="text-6xl font-bold">Contact Us</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;