import { registerRootComponent } from 'expo';
import { createRoot } from 'react-dom/client';
import App from './App';

// Konfigurasi React Native Web
const rootTag = document.getElementById('root');
const root = createRoot(rootTag);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mendaftarkan aplikasi untuk Expo
registerRootComponent(App);
