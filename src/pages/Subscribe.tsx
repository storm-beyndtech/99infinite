import React, { useState } from 'react';

const Subscribe: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gsp-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Stay Ahead with FINfacts
          </h1>
          <p className="text-lg opacity-90">
            Delivering trusted market insights in finance and real estate for over twenty years.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Newsletter Info */}
            <div className="bg-gsp-teal text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Inside Each Edition</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Market Analysis</h3>
                    <p className="text-sm opacity-90">
                      Our unique blend of real estate and capital analysis of the latest market trends and data
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M12 15v-3h3v3h-3zm-6-3h3v3H6v-3zm9-6v3h-3V6h3zM6 6h3v3H6V6z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Insider Access</h3>
                    <p className="text-sm opacity-90">
                      Get the inside scoop on market rate trends, direct from key retail strategy and debt trends
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Pascale's Perspective</h3>
                    <p className="text-sm opacity-90">
                      Insights from the industry experts on capital analysis of the latest market trends and data
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sign Up Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gsp-navy mb-6">Sign Up Today</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gsp-teal"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gsp-teal"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gsp-teal"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gsp-orange hover:bg-gsp-orange-light text-white px-6 py-3 font-semibold tracking-wide transition-colors duration-200 rounded-md"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                By submitting this form you are confirming to receive marketing emails from GSP. 
                George Smith Partners will hold the name and email that you supply on this form. You 
                can withdraw from our email list at any time by using the email found at the bottom of each 
                mailing, or for more information view terms and our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Editions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gsp-navy">Latest Editions</h2>
            <span className="text-gsp-orange text-sm">📧 Recent</span>
          </div>

          <div className="space-y-4">
            {[
              { issue: "FINfacts XXIV – No. 472", date: "September 18, 2025" },
              { issue: "FINfacts XXIV – No. 471", date: "September 11, 2025" },
              { issue: "FINfacts XXIV – No. 470", date: "September 9, 2025" },
              { issue: "FINfacts XXIV – No. 469", date: "August 21, 2025" },
              { issue: "FINfacts XXIV – No. 468", date: "August 14, 2025" },
              { issue: "FINfacts XXIV – No. 467", date: "August 8, 2025" },
              { issue: "FINfacts XXIV – No. 466", date: "July 30, 2025" },
              { issue: "FINfacts XXIV – No. 465", date: "July 23, 2025" },
              { issue: "FINfacts XXIV – No. 464", date: "July 11, 2025" }
            ].map((edition, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                  <h3 className="font-semibold text-gsp-navy">{edition.issue}</h3>
                  <p className="text-gray-600 text-sm">{edition.date}</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                  <span className="text-gray-600">→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="px-3 py-2 bg-gsp-teal text-white text-sm">1</button>
              <button className="px-3 py-2 text-gsp-navy hover:bg-gray-100 text-sm">2</button>
              <span className="px-3 py-2 text-gray-500 text-sm">...</span>
              <button className="px-3 py-2 text-gsp-navy hover:bg-gray-100 text-sm">33</button>
              <button className="px-3 py-2 text-gsp-navy hover:bg-gray-100 text-sm">→</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;