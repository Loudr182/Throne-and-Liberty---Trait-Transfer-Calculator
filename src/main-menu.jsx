import React from 'react';
import { createRoot } from 'react-dom/client';
import MainMenu from './components/MainMenu.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainMenu />
  </React.StrictMode>
);
