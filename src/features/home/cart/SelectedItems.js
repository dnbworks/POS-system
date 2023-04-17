import { useSelector } from 'react-redux';
import { selectCartItems } from './cartSlice';
import SelectedItem from './SelectedItem';

const SelectedItems = () => {
  const cart = useSelector(selectCartItems);
  // console.log(cart);
  return (
    <div className="table-wrapper__selected--items">
       { cart.map(item => {
            return <SelectedItem {...item} key={item.id}/>
        })}
    </div>
  )
}

export default SelectedItems
