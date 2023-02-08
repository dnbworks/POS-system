import React from 'react'
import { useGlobalContext } from '../../context/AppContext';
import Item from './Item';

const ItemsList = () => {
  const { state: { storeProducts, openModal } } = useGlobalContext();
  return (
    <div className="items_list_wrapper d-flex">
      <div className='items_list d-flex'></div>
      {storeProducts.map((item) => {
        return <Item {...item} openModal={openModal} key={item.id} />
      })}

    </div>
  )
}

export default ItemsList