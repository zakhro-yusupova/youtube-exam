import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { TokenProvider } from './context/TokenContext';
import { ThemeProvider } from './context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <ThemeProvider>
  <TokenProvider>
  <App />
  </TokenProvider>
  </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>
  );
