import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FetchPro from './component/FetchPro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FetchPro/>
  </StrictMode>,
)
