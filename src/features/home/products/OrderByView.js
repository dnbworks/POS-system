import { useState } from 'react'

const OrderByView = ({changeDisplay}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="toggleBtn">
        <button className={`${active === 0 && 'active'}`} onClick={() => {
          changeDisplay("grid");
          setActive(0)
        }}>Grid</button>
        <button className={`${active === 1 && 'active'}`} onClick={() => {
          changeDisplay("list");
          setActive(1)
        }}>list</button>
    </div>
  )
}

export default OrderByView