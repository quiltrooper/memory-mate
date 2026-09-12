import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    if (import.meta.env.PROD) {
      navigator.serviceWorker.register('/sw.js').catch(() => console.warn('Offline installation was not completed.'));
    } else {
      // Clear only this app's old cache during local development.
      for (const registration of await navigator.serviceWorker.getRegistrations()) {
        if (registration.active?.scriptURL === `${location.origin}/sw.js`) await registration.unregister();
      }
      for (const name of await caches.keys()) if (name.startsWith('memory-mate-')) await caches.delete(name);
    }
  });
}
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
