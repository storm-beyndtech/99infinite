import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const OfficeLocations: React.FC = () => {
  const offices = [
    {
      city: "New York",
      address: "123 Finance Street, Suite 4500",
      zipcode: "New York, NY 10001",
      phone: "(555) 123-4567",
      email: "ny@99infinite.com",
      hours: "Monday - Friday: 8:00 AM - 7:00 PM EST"
    },
    {
      city: "Los Angeles", 
      address: "456 Wilshire Boulevard, Suite 2800",
      zipcode: "Los Angeles, CA 90010",
      phone: "(555) 987-6543",
      email: "la@99infinite.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM PST"
    },
    {
      city: "Chicago",
      address: "789 North Michigan Avenue, Suite 1200",
      zipcode: "Chicago, IL 60611",
      phone: "(555) 456-7890",
      email: "chicago@99infinite.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM CST"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Offices
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With locations across the country, we're positioned to serve clients nationwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{office.city}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-gray-600">{office.address}</div>
                    <div className="text-gray-600">{office.zipcode}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <a href={`tel:${office.phone}`} className="text-blue-600 hover:underline">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-gray-600 text-sm">{office.hours}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;