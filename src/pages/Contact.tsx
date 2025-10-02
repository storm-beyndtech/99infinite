import React from 'react';
import { Phone } from 'lucide-react';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import OfficeLocations from '../components/contact/OfficeLocations';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <ContactHeroSection />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <OfficeLocations />

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            For urgent financing needs or time-sensitive transactions, 
            contact our emergency line available 24/7.
          </p>
          <a
            href="tel:+15559876543"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <Phone className="h-5 w-5 mr-2" />
            Emergency Line: (555) 987-6543
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;