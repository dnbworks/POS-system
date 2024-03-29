import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../system/systemSlice';

const DiscountModal = ({ selectedItem }) => {
 
    const [discount, setDiscount] = useState(selectedItem ? selectedItem.discount : "0.00");
    const [error, setError ] = useState("");
    const [cashOptionEntity, setcashOptionEntity] = useState("amount");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const editDiscount = () => {
      
    }

    const regex = /^[0-9]+\.[0-9]{2}$/;

    const handleChange = ( e ) => {

        if(regex.test(e.target.value)){
          setDiscount(e.target.value)
          setError("");
        } 
    
        if(!regex.test(e.target.value)){
          setDiscount(undefined)
          setError("Please no zero and negative number");
        }
       
        if(e.target.value === ""){
          setDiscount(undefined)
          setError("Please enter a number");
        }
    
    }

    const handleEdit = (e ) => {
        e.preventDefault();
        if(selectedItem && discount){
          editDiscount(selectedItem, discount);
        }
        setDiscount(0)
    }

    useEffect(() => {
      // inputRef.current?.setSelectionRange(0, 0); // fix
      inputRef.current?.focus();
      

    });

  return (
    <div className='fixed'>
    <div className='modal__input--Qty'>
        <div className="modal__header">
            <span className="modal__border"></span>
            <div className="modal__title">DISCOUNT DETAILS</div>
        </div>
        <div className="choose">
            <p>Please choose one the the following options</p>
            <div className='d-flex tab-btns justify-content-between'>
                <button onClick={ () => setcashOptionEntity("amount") } className={`${cashOptionEntity === "amount" ? "active-btn" : ""}`}>Amount</button>
                <button  onClick={ () => setcashOptionEntity("percent") } className={`${cashOptionEntity === "percent" ? "active-btn" : ""}`}>Percent</button>
            </div>
        </div>
        <form className="modal__form d-flex justify-content-between">
            <div style={{ width: "200px"}}>
              <label htmlFor="discount">Enter the amount</label>
              <span className='symbol'>{ cashOptionEntity === "amount" ? "$" : "%"}</span>
              <input type="text" id='discount' value={discount} ref={inputRef} onChange={(e) => handleChange(e)}/>
              { error && (<p>{error}</p>)}
            </div>
            <div className="modal__footer">
                <button onClick={handleEdit}>OK</button>
                <button onClick={() => {
                  dispatch(closeModal("discount"));
                  setDiscount(0)
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
//         width:400px;
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

//         .tab-btns button {
//           text-align:center;
//           padding: 10px;
//           width:180px;
//           background: rgb(199, 119, 199);
//           font-weight: bold;
//           color: #fff;
//           outline:none;
//           border:none;
//         }
      
//       .tab-btns button.active-btn {
//           background: rgb(202, 53, 202);
//       }
        
  
//     }
//     .button-container {
//       display:flex;
//       justify-content:space-between;
//     }
// `;

export default DiscountModal