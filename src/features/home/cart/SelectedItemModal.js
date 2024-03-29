import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../system/systemSlice';
import { add_to_cart, editQty, selectEdit } from './cartSlice';


const SelectedItemModal = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.system.selectedItem);
  const edit = useSelector(selectEdit);

  const [quantity, setQuantity ] = useState(selectedItem ? selectedItem.qty : 0);
  const [error, setError ] = useState("");

  const inputRef = useRef(null);

  const regex = /^[1-9][0-9]*$/;
  

  useEffect(() => {
    // inputRef.current?.setSelectionRange(0, 0);
    inputRef.current?.focus();
  });

  const handleChange = ( e ) => {

    if(regex.test(e.target.value)){
      setQuantity(e.target.value)
      setError("");
    } 

    if(!regex.test(e.target.value)){
      setQuantity("");
      setError("Please no zero and negative number");
    }
   
    if(e.target.value === ""){
      setQuantity("");
      setError("Please enter a number");
    }

  }

  const handleAddToCartBtn = ( e ) => {
    e.preventDefault();
    // checking stock
    if (error === "" && quantity >= 1) {
      if(edit){
        dispatch(editQty(selectedItem, quantity));
      } else {
        dispatch(add_to_cart({item: selectedItem, quantity}));
      }
      setQuantity("");
      dispatch(closeModal("item"));
    } else {
      setError("please fill in quantity");
    }
  }

  return (
    <div className='fixed'>
    <div className='modal__input--Qty'>
        <div className="modal__header">
            <span className="modal__border"></span>
            <div className="modal__title">INPUT QTY</div>
        </div>
        <form className="modal__form d-flex justify-content-between" >
            <div style={{ width: "200px"}}>
              <span>Price:</span>
              <span>$ {selectedItem.price}/kg</span>
            </div>
            <div style={{ width: "200px"}}>
              <label htmlFor="quantity">Quantity</label>
              <input type="text" id='quantity' value={quantity} ref={inputRef} onChange={ (e) => handleChange(e)}/>
              { error && (<p>{error}</p>)}
            </div>
            <div className="modal__footer">
                <button onClick={handleAddToCartBtn}>OK</button>
                <button onClick={() => {
                  dispatch(closeModal("item"));
                  setQuantity("")
                }}>Cancel</button>
            </div>
        </form>
    </div>
    </div>
  )
}

// const ModalContainer = styled.div`
//     position:fixed;
//     top:0;
//     left:0;
//     bottom:0;
//     right:0;
//     z-index:10;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     .modal__input--Qty {
//         background:#fff;
//         width:300px;
//         min-height:300px;
//         border:1px solid #111;
//         position:relative;
//         padding: 0.25rem 1rem;
//         label {
//             width: 150px;
//             font-weight: 500;
//         }
       
//         input[type=number]::-webkit-inner-spin-button,
//         input[type=number]::-webkit-outer-spin-button {
//             -webkit-appearance: none;
//             margin: 0;
//         }

        
//     }
//     .button-container {
//       display:flex;
//       justify-content:space-between;
//     }
// `;

export default SelectedItemModal