import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Header from './layout/Header';

const Home = () => {

  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Home;