import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

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