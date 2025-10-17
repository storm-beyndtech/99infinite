import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, ArrowRight, Home } from 'lucide-react';

const RegistrationSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden text-center">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
          <CheckCircle className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Registration Successful!</h1>
          <p className="text-green-100">Welcome to 99infinite</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thank you for joining 99infinite!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your account has been created successfully. We're excited to help you begin your precious metals investment journey.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-600" />
              What happens next?
            </h3>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Verification</h4>
                  <p className="text-gray-600 text-sm">Check your email for a verification link. Click it to activate your account.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Account Review</h4>
                  <p className="text-gray-600 text-sm">Our team will review your KYC information within 24-48 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Start Investing</h4>
                  <p className="text-gray-600 text-sm">Once approved, you can log in and make your first investment!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
            <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
            <p className="text-sm text-yellow-700">
              Please check your spam/junk folder if you don't receive the verification email within a few minutes. 
              If you still can't find it, contact our support team.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Return to Homepage
            </Link>
            
            <Link
              to="/auth/login"
              className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
            >
              Go to Login
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          {/* Support */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@99infinite.com" className="text-blue-600 hover:underline">
                support@99infinite.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;