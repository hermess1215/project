import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import colors from './util/color.js'

const root = document.documentElement;

Object.entries(colors).forEach(([key, value]) => {
  // camelCase → kebab-case 변환
  const cssVar = "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();
  root.style.setProperty(cssVar, value);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
