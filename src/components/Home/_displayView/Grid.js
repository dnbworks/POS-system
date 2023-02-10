import Item from '../Item'
import { useGlobalContext } from '../../../context/AppContext';

const Grid = () => {
    const { state: { storeProducts, openModal, grid } } = useGlobalContext();
    if (!grid) {
        return null;
    }
    return (
        <div className='items_list d-flex'>
            {storeProducts.map((item) => {
                return <Item {...item} openModal={openModal} key={item.id} />
            })}
        </div>
    )
}

export default Grid