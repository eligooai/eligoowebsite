import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined
// affiliate landing: ?ref=CODE is remembered for 90 days and sent to the platform at sign-up / checkout
try {
  const ref = new URLSearchParams(window.location.search).get('ref')
  if (ref) document.cookie = `elg_ref=${encodeURIComponent(ref)}; path=/; max-age=${90 * 86400}; samesite=lax; secure`
} catch { /* ignore */ }

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
      {CLERK_KEY ? (
        <ClerkProvider publishableKey={CLERK_KEY} signInUrl="/app/sign-in" signUpUrl="/app/sign-up" signInFallbackRedirectUrl="/app/home" signUpFallbackRedirectUrl="/app/home" afterSignOutUrl="/">
          <App />
        </ClerkProvider>
      ) : <App />}
    </BrowserRouter>
  </StrictMode>
)
// every registry route is prerendered → hydrate; API-backed pages (blog posts, legal)
// load the empty shell (app.html) and client-render
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
