import React from 'react';
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamPage from './pages/TeamPage';
import SupportPage from './pages/SupportPage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/download" element={<SupportPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
