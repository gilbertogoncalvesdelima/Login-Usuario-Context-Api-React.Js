import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/global.css';

// Cria um root para renderização assíncrona
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderiza o componente App dentro de um StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
