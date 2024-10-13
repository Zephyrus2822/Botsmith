import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Botbuilder from './components/BotBuilder'
// import App from './App.jsx'
import './index.css'
import LandingPage from './components/LandingPage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Botbuilder/> */}
    <LandingPage/>
  </StrictMode>,
)
