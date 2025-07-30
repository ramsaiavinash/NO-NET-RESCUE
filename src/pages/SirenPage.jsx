import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sirenSound from '../assets/siren.mp3';

const SirenPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize the Audio object once and set it to loop.
  // This useEffect runs only on component mount.
  useEffect(() => {
    audioRef.current = new Audio(sirenSound);
    audioRef.current.loop = true;

    // Cleanup function to pause audio when the component unmounts
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
      audioRef.current.play().catch(error => {
        // Autoplay can be blocked by the browser, handle error gracefully
        console.error("Audio play failed:", error);
        setIsPlaying(false); // Reset state if play fails
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-blue-500 dark:text-blue-400 hover:underline">&larr; Back to Home</Link>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Siren</h1>
        <button
          onClick={toggleSiren}
          className={`w-48 h-48 rounded-full text-white font-bold text-2xl flex items-center justify-center transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 ${
            isPlaying ? 'bg-red-600 hover:bg-red-700 focus:ring-red-400 animate-pulse' : 'bg-green-500 hover:bg-green-600 focus:ring-green-300'
          }`}
        >
          {isPlaying ? 'PAUSE' : 'ACTIVATE'}
        </button>
        <p className="text-gray-500 dark:text-gray-400 mt-8 h-6">{isPlaying ? 'Siren is active. Press to pause.' : 'Press the button to activate the siren.'}</p>
      </div>
    </div>
  );
};

export default SirenPage;
