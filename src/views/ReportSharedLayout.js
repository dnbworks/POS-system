import { Outlet } from 'react-router-dom';
import Navbar from '../components/report/Navbar';

const ReportSharedLayout = () => {

  return (
    <div className='wrapper'>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default ReportSharedLayout;