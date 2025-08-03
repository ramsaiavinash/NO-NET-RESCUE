import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { App as CapacitorApp } from '@capacitor/app';
import HomePage from './pages/HomePage';
import FirstAidGuidePage from './pages/FirstAidGuidePage';
import SirenPage from './pages/SirenPage';
import EmergencyContactsPage from './pages/EmergencyContactsPage';
import './App.css'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) {
        navigate(-1);
      } else {
        CapacitorApp.exitApp();
      }
    });

    return () => {
      CapacitorApp.removeAllListeners('backButton');
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/first-aid" element={<FirstAidGuidePage />} />
      <Route path="/siren" element={<SirenPage />} />
      <Route path="/contacts" element={<EmergencyContactsPage />} />
    </Routes>
  )
}

export default App

