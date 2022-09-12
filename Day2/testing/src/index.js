import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  // import 'app' vào
  <React.StrictMode>
    <App />                 
  </React.StrictMode>
);
