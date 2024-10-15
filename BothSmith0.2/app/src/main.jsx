import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BotBuilder from './components/BotBuilder';
import Home from './components/Home';  // Import Home component
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
  
      <Routes>
        {/* Define routes for components */}
        <Route path="/" element={<LandingPage />} /> {/* Landing Page as the default route */}
        <Route path="/home" element={<Home />} />     {/* Route for Home page */}
        <Route path="/botbuilder" element={<BotBuilder />} /> {/* Route for Bot Builder */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);