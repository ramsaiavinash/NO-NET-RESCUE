import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ to, title, description, icon }) => (
  <Link 
    to={to} 
    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-5 group border border-gray-200"
  >
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 bg-red-100 rounded-lg p-3">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-red-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="text-gray-300 group-hover:text-red-500 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  </Link>
);

const HomePage = () => {
  const features = [
    {
      to: '/first-aid',
      title: 'First Aid Guide',
      description: 'Offline step-by-step guides.',
      icon: <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>,
    },
    {
      to: '/siren',
      title: 'Emergency Siren',
      description: 'Activate a loud alert for help.',
      icon: <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.518"></path></svg>,
    },
    {
      to: '/contacts',
      title: 'Emergency Contacts',
      description: 'Quickly call saved contacts.',
      icon: <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12a5.995 5.995 0 00-6.383-5.803M15 21a6 6 0 00-9-5.197"></path></svg>,
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white p-6 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold">No-Net Rescue</h1>
          <p className="mt-1 text-red-100">Your offline emergency assistant.</p>
        </div>
      </header>
      
      {/* Content Area */}
      <main className="p-6 pt-28">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
