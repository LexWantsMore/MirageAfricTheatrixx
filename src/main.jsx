import React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/css/index.css';
import App from './App';


// Find the root element in your HTML
const container = document.getElementById('root');

// Create a root using the container element
const root = createRoot(container);

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




