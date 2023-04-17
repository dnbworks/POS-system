import { BiSearchAlt2 } from "react-icons/bi";

const AddPersonModal = ({isSearchModalOpen}) => {

  const openModal = () => {
    
  }
  const closeModal = () => {

  }

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
            <button onClick={() => openModal({ type: "add_customer" })}>Add</button> 
            <button onClick={() => closeModal("customer")}>Close</button>
          </div>
        </div>
    </div>
   
  );
};



export default AddPersonModal;