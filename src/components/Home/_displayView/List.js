import { useGlobalContext } from '../../../context/AppContext';
const List = () => {
    const { state: { storeProducts, openModal, list } } = useGlobalContext();
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
                {storeProducts.map((item) => {
                    return (
                        <tr onClick={() => openModal({ type: item.id })} key={item.id}>
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