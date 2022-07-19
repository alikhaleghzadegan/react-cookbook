import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);