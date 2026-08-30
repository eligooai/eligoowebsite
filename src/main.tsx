import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// after a redeploy, previously-loaded pages reference old chunk hashes;
// reload once instead of crashing when a lazy import 404s
window.addEventListener('vite:preloadError', () => {
  const key = 'elg_chunk_reload';
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key, '1');
  window.location.reload();
});

const rootEl = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
// the prerendered markup is the landing page — only hydrate there;
// deep links (blog, legal pages) clear it and client-render
if (rootEl.hasChildNodes() && window.location.pathname === '/') {
  hydrateRoot(rootEl, app)
} else {
  rootEl.innerHTML = ''
  createRoot(rootEl).render(app)
}
