import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { arrangeAsc, arrangeDes } from '../products/productSlice';

const OrderByAscDec = () => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();

  const handleArrangeAsc = () => {
    setActive(0);
    dispatch(arrangeAsc());
  }

  const handlearrangeDes = () => {
    dispatch(arrangeDes());
    setActive(1)
  }
  return (
    <div className="toggleBtn">
        <button className={`${active === 0 && 'active'}`} onClick={handleArrangeAsc}>Ascending</button>
        <button className={`${active === 1 && 'active'}`} onClick={handlearrangeDes}>Descending</button>
    </div>
  )
}

export default OrderByAscDec