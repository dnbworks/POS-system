import React, { useState } from 'react'
import { useGlobalContext } from '../../context/AppContext';

const OrderByView = () => {
  const [active, setActive] = useState(0);
  const { state: { grid, list, changeDisplay } } = useGlobalContext();

  const ChangeToGrid = () => {
    changeDisplay("grid");
    setActive(0)
  }

  const ChangeToList = () => {
    changeDisplay("list");
    setActive(1)
  }

  return (
    <div className="toggleBtn">
        <button className={`${active === 0 && 'active'}`} onClick={() => ChangeToGrid() }>Grid</button>
        <button className={`${active === 1 && 'active'}`} onClick={() => ChangeToList() }>List</button>
    </div>
  )
}

export default OrderByView