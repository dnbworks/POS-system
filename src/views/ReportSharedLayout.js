import { Outlet } from 'react-router-dom';
import Navbar from '../features/report/Navbar';

const ReportSharedLayout = () => {

  return (
    <div className='wrapper'>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default ReportSharedLayout;