import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sirenSound from '../assets/siren.mp3';

const SirenPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize the Audio object and set it to loop.
    audioRef.current = new Audio(sirenSound);
    audioRef.current.loop = true;

    // Cleanup function to pause audio when the component unmounts.
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSiren = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // The play() method returns a Promise which can be rejected if autoplay is blocked.
      audioRef.current.play().catch(error => {
        console.error("Audio play failed:", error);
        // Ensure the UI state is correct if play() fails.
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      {/* Native-style Header */}
      <header className="bg-red-600 text-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
          <Link to="/" className="text-white" aria-label="Back to Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
            Emergency Siren
          </h1>
          <div /> {/* This div helps in centering the title */}
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center pt-20">
        <p className="text-gray-600 mb-8">
          In an emergency, press the button to activate a loud siren.
        </p>
        
        <button
          onClick={toggleSiren}
          className={`w-48 h-48 rounded-full text-white font-bold text-2xl flex items-center justify-center transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
            isPlaying 
              ? 'bg-red-700 hover:bg-red-800 focus:ring-red-500 animate-pulse' 
              : 'bg-red-500 hover:bg-red-600 focus:ring-red-300'
          }`}
          aria-live="polite"
        >
          {isPlaying ? 'PAUSE' : 'ACTIVATE'}
        </button>

        <p className="text-gray-500 mt-8 h-6">
          {isPlaying ? 'Siren is active. Press to pause.' : 'Siren is off. Press to activate.'}
        </p>
      </main>
    </div>
  );
};

export default SirenPage;
