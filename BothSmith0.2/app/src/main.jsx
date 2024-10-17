import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import BotBuilder from './component/BotBuilder';
import Home from './component/Home';  
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
  
      <Routes>
        
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/home" element={<Home />} />     
        <Route path="/botbuilder" element={<BotBuilder />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);