import React from 'react';
import { Link } from 'react-router-dom';

const FeatureTile = ({ to, title, description, icon }) => (
  <Link to={to} className="block group">
    <div className="flex items-center p-4 bg-white group-hover:bg-gray-100 transition-colors duration-150">
      <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
        {icon}
      </div>
      <div className="flex-grow ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="ml-4 text-gray-400">
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
      description: 'Step-by-step offline guides.',
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
        </svg>
      ),
    },
    {
      to: '/siren',
      title: 'Siren',
      description: 'Activate a loud siren for attention.',
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.518"></path>
        </svg>
      ),
    },
    {
      to: '/contacts',
      title: 'Emergency Contacts',
      description: 'Quickly access saved contacts.',
      icon: (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12a5.995 5.995 0 00-6.383-5.803M15 21a6 6 0 00-9-5.197"></path>
        </svg>
      ),
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-md mx-auto pt-12 px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">No-Net Rescue</h1>
          <p className="text-gray-600 mt-1">Your offline emergency assistant.</p>
        </header>
        <main>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden divide-y divide-gray-200">
            {features.map((feature, index) => (
              <FeatureTile key={index} {...feature} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
