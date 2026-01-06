import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n';
import './index.css';
import { SettingProvider } from './providers/Settings.tsx';
import { ThemeProvider } from './providers/Theme.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <SettingProvider>
                <App />
            </SettingProvider>
        </ThemeProvider>
    </StrictMode>,
);
