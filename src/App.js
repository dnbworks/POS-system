import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Report from './views/Report';
import Settings from './views/Settings';
import Chart from './views/Chart';
import Statistic from './views/Statistic';
import Options from './views/Options';
import LoginPage from './views/LoginPage';
import ErrorPage from './views/404';
import SharedLayout from './views/SharedLayout';
import ReportSharedLayout from './views/ReportSharedLayout';
import All from './views/report/All';
import Customers from './views/report/Customers';
import Payment from './views/report/Payment';
import Salespersons from './views/report/Salespersons';
import Products from './views/report/Products';
import DailyReport from './views/report/DailyReport';
import ReturnItems from './views/report/ReturnItems';
import ZReport from './views/report/ZReport';


import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from './features/home/cart/cartSlice';
import { fetchProducts, selectStatus, fetchCategories } from './features/home/products/productSlice';



function App() {

  const cart = useSelector(selectCartItems);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
      dispatch(fetchCategories());
    }

  }, []);

  return (
    <div className='wrapper'>
      <div className="sub__wrapper">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="report" element={<ReportSharedLayout />} >
              <Route index element={<All />} />
              <Route path="all" element={<All />} />
              <Route path="customers" element={<Customers />} />
              <Route path="Payment" element={<Payment />} />
              <Route path="Salespersons" element={<Salespersons />} />
              <Route path="Products" element={<Products />} />
              <Route path="dailyReport" element={<DailyReport />} />
              <Route path="returnItems" element={<ReturnItems />} />
              <Route path="Zreport" element={<ZReport />} />
            </Route>
            <Route path="settings" element={<Settings />} />
            <Route path="charts" element={<Chart />} />
            <Route path="statistic" element={<Statistic />} />
            <Route path="options" element={<Options />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>

        </Routes>
      </div>

    </div>
  );
}

export default App;
