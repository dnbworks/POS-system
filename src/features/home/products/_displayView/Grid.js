import Item from '../Item'
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../productSlice';

const Grid = ({ grid }) => {
    const { state: { openModal } } = useGlobalContext();
    const products = useSelector(selectAllProducts);
    if (!grid) {
        return null;
    }
    return (
        <div className='items_list d-flex'>
            {products.map((item) => {
                return <Item {...item} openModal={openModal} key={item.id} />
            })}
        </div>
    )
}

export default Grid