import React, { useState, useEffect } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import { ChevronLeft, ChevronRight, User, Mail, MapPin, Phone, Calendar } from 'lucide-react';

const Step2PersonalData: React.FC = () => {
  const { state, updatePersonalInfo, nextStep, prevStep, setStepValidity } = useRegistration();
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const { personalInfo } = state;

    if (!personalInfo.sponsorCode?.trim()) {
      newErrors.sponsorCode = 'Sponsor code is required';
    }
    if (!personalInfo.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!personalInfo.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!personalInfo.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(personalInfo.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!personalInfo.address?.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!personalInfo.zipCode?.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    }
    if (!personalInfo.location?.trim()) {
      newErrors.location = 'Location is required';
    }
    if (!personalInfo.country?.trim()) {
      newErrors.country = 'Country is required';
    }
    if (!personalInfo.mobileNumber?.number?.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    }

    // Birthday validation
    const today = new Date();
    const birthDate = new Date(
      personalInfo.birthday?.year || 0,
      (personalInfo.birthday?.month || 1) - 1,
      personalInfo.birthday?.day || 1
    );
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      // age--;
    }
    
    if (age < 18) {
      newErrors.birthday = 'You must be at least 18 years old';
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    setStepValidity('step2', isValid);
    return isValid;
  };

  useEffect(() => {
    validateForm();
  }, [state.personalInfo]);

  const handleInputChange = (field: string, value: any) => {
    updatePersonalInfo({ [field]: value });
  };

  const handleNestedInputChange = (parentField: string, childField: string, value: any) => {
    const currentValue = (state.personalInfo as any)[parentField] || {};
    updatePersonalInfo({
      [parentField]: {
        ...currentValue,
        [childField]: value,
      },
    });
  };

  const handleContinue = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 100 }, (_, i) => currentYear - 18 - i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Personal Information</h1>
              <p className="text-blue-100">Step 2 of 5</p>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-8 h-8" />
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-blue-500 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-300" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sponsor Code */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sponsor Code
              </label>
              <input
                type="text"
                value={state.personalInfo.sponsorCode || ''}
                onChange={(e) => handleInputChange('sponsorCode', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.sponsorCode ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter sponsor code"
              />
              {errors.sponsorCode && <p className="text-red-500 text-sm mt-1">{errors.sponsorCode}</p>}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <select
                value={state.personalInfo.title || 'Mr'}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
                <option value="Prof">Prof</option>
              </select>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                value={state.personalInfo.firstName || ''}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                value={state.personalInfo.lastName || ''}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address *
              </label>
              <input
                type="email"
                value={state.personalInfo.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Birthday */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Date of Birth *
              </label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  value={state.personalInfo.birthday?.day || 1}
                  onChange={(e) => handleNestedInputChange('birthday', 'day', parseInt(e.target.value))}
                  className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <select
                  value={state.personalInfo.birthday?.month || 1}
                  onChange={(e) => handleNestedInputChange('birthday', 'month', parseInt(e.target.value))}
                  className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {months.map((month, index) => (
                    <option key={index + 1} value={index + 1}>{month}</option>
                  ))}
                </select>
                <select
                  value={state.personalInfo.birthday?.year || currentYear - 18}
                  onChange={(e) => handleNestedInputChange('birthday', 'year', parseInt(e.target.value))}
                  className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              {errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday}</p>}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Address *
              </label>
              <input
                type="text"
                value={state.personalInfo.address || ''}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter street address"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code *
              </label>
              <input
                type="text"
                value={state.personalInfo.zipCode || ''}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.zipCode ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter ZIP code"
              />
              {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                value={state.personalInfo.location || ''}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter city/location"
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <input
                type="text"
                value={state.personalInfo.country || ''}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.country ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter country"
              />
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Mobile Number *
              </label>
              <div className="flex space-x-2">
                <select
                  value={state.personalInfo.mobileNumber?.countryCode || '+1'}
                  onChange={(e) => handleNestedInputChange('mobileNumber', 'countryCode', e.target.value)}
                  className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+49">+49</option>
                  <option value="+33">+33</option>
                  <option value="+39">+39</option>
                  <option value="+34">+34</option>
                </select>
                <input
                  type="tel"
                  value={state.personalInfo.mobileNumber?.number || ''}
                  onChange={(e) => handleNestedInputChange('mobileNumber', 'number', e.target.value)}
                  className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter mobile number"
                />
              </div>
              {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            
            <button
              onClick={handleContinue}
              disabled={Object.keys(errors).length > 0}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors duration-200"
            >
              Continue
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2PersonalData;