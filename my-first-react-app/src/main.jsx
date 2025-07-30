import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Chicken from './Chicken.jsx'
import Mathy from './Mathy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mathy />
    <App />
    <Greeting />
    <Chicken />
  </StrictMode>,
)
