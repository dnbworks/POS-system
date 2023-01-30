import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Report from './views/Report';
import Settings from './views/Settings';
import Chart from './views/Chart';
import Statistic from './views/Statistic';
import Options from './views/Options';
import LoginPage from './views/LoginPage';
import ErrorPage from './views/404';
import { useGlobalContext } from './context/AppContext';
import SharedLayout from './views/SharedLayout';

function App() {
  const { state } = useGlobalContext();
  
  return (
    <div className='wrapper'>
      <div className="sub__wrapper">
      <Routes>
        <Route path="/" element={<SharedLayout state={state}/>}>
          <Route index element={<Home />} />
          <Route path="report" element={<Report />} />
          <Route path="settings" element={<Settings/>} />
          <Route path="charts" element={<Chart/>} />
          <Route path="statistic" element={<Statistic/>} />
          <Route path="options" element={<Options/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Route>
   
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
