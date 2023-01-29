import React from 'react';
import ReactDOM from 'react-dom/client';
import './asset/css/styles.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'; 
import { AppProvider } from './context/AppContext'

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
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <AppProvider>
//         <App />
//       </AppProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

