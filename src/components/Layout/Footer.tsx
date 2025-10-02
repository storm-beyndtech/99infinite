import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const offices = [
    {
      address: "1900 Avenue of the Stars",
      suite: "Suite 250", 
      city: "Los Angeles, CA 90067"
    },
    {
      address: "650 Fifth Avenue",
      suite: "Suite 1100",
      city: "New York, NY 10019"
    },
    {
      address: "2550 Pacific Avenue",
      suite: "Suite 826",
      city: "Dallas, TX 75226"
    },
    {
      address: "3120 139th Ave SE",
      suite: "Suite 500",
      city: "Bellevue, WA 98005"
    },
    {
      address: "8000 Avalon Blvd, Suite 200",
      suite: "",
      city: "Alpharetta, GA 30009"
    }
  ];

  return (
    <footer className="bg-gsp-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Logo */}
          <div>
            <div className="text-3xl font-bold text-white mb-4 tracking-tight">
              <span className="text-4xl">9</span>9
            </div>
            <div className="text-xs text-gray-300 leading-tight mb-6">
              INFINITE<br />CAPITAL
            </div>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 text-gsp-teal mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <div>{office.address}</div>
                    {office.suite && <div>{office.suite}</div>}
                    <div>{office.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="border-t border-gsp-teal/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-gsp-teal" />
              <span className="text-sm text-gray-300">(310) 557-8336</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-gsp-teal" />
              <a 
                href="mailto:contact@99infinite.com" 
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/company/99infinite" 
              className="text-gsp-teal hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/99infinite" 
              className="text-gsp-teal hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zm5.062 7.988c-.789-.115-1.1-.144-3.239-.144s-2.45.029-3.238.144c-.789.115-1.789.894-1.789 1.789v4.475c0 .895 1 1.674 1.789 1.789.788.115 1.099.144 3.238.144s2.45-.029 3.239-.144c.789-.115 1.789-.894 1.789-1.789V9.777c0-.895-1-1.674-1.789-1.789zm-5.062 7.477c-1.894 0-3.427-1.533-3.427-3.427s1.533-3.427 3.427-3.427 3.427 1.534 3.427 3.427-1.533 3.427-3.427 3.427zm3.564-6.177c-.442 0-.8-.357-.8-.8s.358-.8.8-.8.8.357.8.8-.358.8-.8.8z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/99infinite" 
              className="text-gsp-teal hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            © {currentYear} 99Infinite Capital, Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;