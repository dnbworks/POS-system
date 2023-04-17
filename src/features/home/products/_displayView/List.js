import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts } from '../productSlice';
import { openModal } from '../../../system/systemSlice';

const List = ({list}) => {
    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    // console.log(products);
    if (!list) {
        return null;
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>img</th>
                    <th>product name</th>
                    <th>quantity</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item) => {
                    return (
                        <tr onClick={() => dispatch(openModal({type: "item", item})) } key={item.id}>
                            <td className='img-cont'><img src={item.img} alt="" /></td>
                            <td><span className="">{item.name}</span></td>
                            <td><span className="">{item.inventory_count}</span></td>
                            <td><span className="">${item.price}</span></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default List