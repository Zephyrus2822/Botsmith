import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Botbuilder from './components/Botbuilder'
import './index.css'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Botbuilder/>
  </StrictMode>
)
