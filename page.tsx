import React from 'react';

const SubscriptionPage = () => {
  const services = [
    {
      name: 'Spotify',
      color: '#1DB954',
      logo: '/images/spotify-logo.png',
      price: '$9.99/month'
    },
    {
      name: 'Netflix',
      color: '#E50914',
      logo: '/images/netflix-logo.png',
      price: '$15.99/month'
    },
    {
      name: 'Amazon Prime',
      color: '#00A8E1',
      logo: '/images/amazon-logo.png',
      price: '$12.99/month'
    },
    {
      name: 'JioHotstar',
      color: '#0A1F5C',
      logo: '/images/hotstar-logo.png',
      price: '₹299/year'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Streaming Service Subscriptions
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105"
            style={{ borderTop: `4px solid ${service.color}` }}
          >
            <div className="flex items-center mb-4">
              <div 
                className="w-12 h-12 rounded-lg mr-4"
                style={{ backgroundColor: service.color }}
              >
                {/* Replace div with actual logo image if available */}
                {/* <img src={service.logo} alt={`${service.name} logo`} className="w-full h-full object-contain" /> */}
              </div>
              <h2 className="text-2xl font-semibold text-gray-700">
                {service.name}
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Premium subscription plan with full access to all features
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold" style={{ color: service.color }}>
                {service.price}
              </span>
              <button
                className="px-4 py-2 rounded-lg text-white font-medium transition-colors"
                style={{ backgroundColor: service.color }}
                onClick={() => handleSubscription(service.name)}
              >
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const handleSubscription = (serviceName: string) => {
  // Implement subscription logic here
  console.log(`Subscribing to ${serviceName}`);
};

export default SubscriptionPage;
