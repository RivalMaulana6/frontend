import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// Konfigurasi React Native Web
import { createRoot } from 'react-dom/client';
import { registerRootComponent } from 'expo';

const rootTag = document.getElementById('root');
const root = createRoot(rootTag);
root.render(<App />);

registerRootComponent(App);

// Render aplikasi ke dalam root element di index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
