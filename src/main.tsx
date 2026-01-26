import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/*解決子節點404問題*/ 
const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");

if (redirect) {
  const base = "/my-react-app";
  window.history.replaceState(null, "", base + redirect);
}

/* */ 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
