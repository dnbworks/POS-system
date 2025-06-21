import './assets/css/styles.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import DashboardPage from './features/dashboard/DashboardPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />}> 
            <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
);
