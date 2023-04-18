import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeItem } from  './cartSlice';
import { openModal } from "../../system/systemSlice";

const SelectedItem = ({ id, name, price, qty, discount, total, totalDisc }) => {
  const dispatch = useDispatch();
  return (
    <ul className="item d-flex justify-content-between">
        <li style={{ width: "150px"}}>{ name }</li>
        <li>${ price }</li>
        <li><span className="edit-btn" onClick={ () => dispatch(openModal({ type: "qty", id })) } >{ qty }</span></li>
        <li><span className="edit-btn" onClick={ () => dispatch(openModal({ type: "discount", id })) } >${ discount }</span></li>
        <li>${totalDisc}</li>
        <li>${ total }</li>
        <li onClick={() => dispatch(removeItem(id)) }><RiDeleteBin5Line/></li>
    </ul>
  )
}

export default SelectedItem