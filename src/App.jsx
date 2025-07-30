import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FirstAidGuidePage from './pages/FirstAidGuidePage';
import SirenPage from './pages/SirenPage';
import EmergencyContactsPage from './pages/EmergencyContactsPage';
import './App.css'

function App() {
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

