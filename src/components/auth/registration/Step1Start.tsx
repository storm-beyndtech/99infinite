import React, { useEffect } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import { Play, Shield, Award, Users } from 'lucide-react';

const Step1Start: React.FC = () => {
  const { nextStep, setStepValidity } = useRegistration();

  useEffect(() => {
    // Step 1 is always valid (just a welcome screen)
    setStepValidity('step1', true);
  }, [setStepValidity]);

  const handleStart = () => {
    nextStep();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">99infinite</h1>
            <p className="text-xl text-gray-600">Your Gateway to Precious Metal Investments</p>
          </div>

          {/* Hero Image/Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
              <Award className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Welcome Message */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Your Investment Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust 99infinite for their precious metal investments. 
            Our simple 5-step process will get you started in just a few minutes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Trusted</h3>
            <p className="text-gray-600">Bank-level security with comprehensive insurance coverage</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Certified precious metals from world-renowned refineries</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Dedicated advisors to guide your investment decisions</p>
          </div>
        </div>

        {/* Process Steps Preview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Simple 5-Step Process</h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: 1, title: 'Start', description: 'Begin your journey', active: true },
              { step: 2, title: 'Personal Data', description: 'Your information', active: false },
              { step: 3, title: 'Investment', description: 'Choose products', active: false },
              { step: 4, title: 'Overview', description: 'Review details', active: false },
              { step: 5, title: 'Verification', description: 'Complete setup', active: false },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold ${
                  item.active ? 'bg-blue-600' : 'bg-gray-300'
                }`}>
                  {item.step}
                </div>
                <h4 className={`font-semibold mb-1 ${item.active ? 'text-blue-600' : 'text-gray-600'}`}>
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={handleStart}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <Play className="w-6 h-6 mr-3" />
            Start Your Investment Journey
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            ✓ Free registration • ✓ No hidden fees • ✓ Cancel anytime
          </p>
        </div>

        {/* Legal Notice */}
        <div className="text-center mt-8 text-xs text-gray-400">
          <p>
            By proceeding, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1Start;