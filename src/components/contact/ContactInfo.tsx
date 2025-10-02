import React from 'react';
import { Phone, Mail, Building, DollarSign, CheckCircle } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <div className="text-center lg:text-left mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600">
          Prefer to speak with someone directly? Reach out to our team using the contact information below.
        </p>
      </div>

      {/* Quick Contact */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <div className="font-semibold text-gray-900">Main Line</div>
              <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                (555) 123-4567
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <div className="font-semibold text-gray-900">General Inquiries</div>
              <a href="mailto:info@99infinite.com" className="text-blue-600 hover:underline">
                info@99infinite.com
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Building className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <div className="font-semibold text-gray-900">New Transactions</div>
              <a href="mailto:transactions@99infinite.com" className="text-blue-600 hover:underline">
                transactions@99infinite.com
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <div className="font-semibold text-gray-900">Capital Markets</div>
              <a href="mailto:capital@99infinite.com" className="text-blue-600 hover:underline">
                capital@99infinite.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
          <div>
            <h4 className="font-semibold text-green-900">24-Hour Response Guarantee</h4>
            <p className="text-green-700 text-sm">
              We respond to all financing inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;