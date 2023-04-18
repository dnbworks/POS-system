import { BiSearchAlt2 } from "react-icons/bi";
import { openModal, closeModal } from "../../system/systemSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSearchModalOpen } from "../../system/systemSlice";

const AddPersonModal = () => {
  const isSearchModalOpen = useSelector(selectIsSearchModalOpen);
  const dispatch = useDispatch();

  if(!isSearchModalOpen){
    return null;
  }

  return (
    <div className='parent__fixed'>
        <div className='container modal'>
          <div className="modal__header">
            <span className="modal__border"></span>
            <div className="modal__title">CUSTOMER</div>
          </div>
          <form className="modal__form d-flex justify-content-between">
            <div style={{ width: "200px"}}>
              <label htmlFor="customerName">Customer Name</label>
              <input type="text" id='customerName'/>
            </div>
            <div style={{ width: "200px"}}>
              <label htmlFor="phone">Phone</label>
              <input type="text" id='phone'/>
            </div>
            <button type='submit'><BiSearchAlt2 /></button>
          </form>
          <div className="modal__body">
            <ul>
              <li>John Smith    ?</li>
            </ul>
          </div>
          <div className="modal__footer">
            <button onClick={() => dispatch(openModal({ type: "add_customer" }))}>Add</button> 
            <button onClick={() => dispatch(closeModal("customer"))}>Close</button>
          </div>
        </div>
    </div>
   
  );
};



export default AddPersonModal;