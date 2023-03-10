import React from 'react';
import ReactDOM from 'react-dom/client';
import './asset/css/styles.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'; 
import { AppProvider } from './context/AppContext'

// import { store } from './app/store';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);

