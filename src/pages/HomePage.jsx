import React from 'react';
import { Link } from 'react-router-dom';

const FeatureTile = ({ to, title, description, icon, color }) => (
  <Link to={to} className="block group">
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-b-4 ${color}`}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </Link>
);

const HomePage = () => {
  const features = [
    {
      to: '/first-aid',
      title: 'First Aid Guide',
      description: 'Step-by-step offline guides for emergencies.',
      icon: (
        <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      ),
      color: 'border-red-500'
    },
    {
      to: '/siren',
      title: 'Siren',
      description: 'Activate a loud siren to attract attention.',
      icon: (
        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
        </svg>
      ),
      color: 'border-blue-500'
    },
    {
      to: '/contacts',
      title: 'Emergency Contacts',
      description: 'Quickly access your saved emergency contacts.',
      icon: (
        <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      ),
      color: 'border-green-500'
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">No-Net Rescue</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">Your offline emergency assistant.</p>
      </header>
      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureTile key={index} {...feature} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;

