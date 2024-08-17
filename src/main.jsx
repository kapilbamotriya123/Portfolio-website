import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/modern-normalize/modern-normalize.css'
// import './modern-normalize/modern-normalize.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
