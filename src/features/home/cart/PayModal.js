import { useSelector, useDispatch } from "react-redux";
import { selectIsPayModalOpen, closeModal, openModal } from "../../system/systemSlice";
const PayModal = () => {
 const dispatch = useDispatch();
	const isPayModalOpen = useSelector(selectIsPayModalOpen);

	if(!isPayModalOpen){
		return null;
	}
  return (
			<div className="pay-wrapper">
			<div className='pay'>
			<div className='d-flex'>
							<div className="first">
								<div className="modal__header">
												<span className="modal__border"></span>
												<div className="modal__title">PAY</div>
								</div>
								<div className="total">
									<div>Cash</div>
									<div>
										<span>Total</span>
									</div>
									<div>
									<span>cash balance</span>
									</div>
						
									
								</div>
							</div>
							<div className="second">
									<table>
										<tbody>
											<tr>
												<td>$10.00</td>
												<td>$15.00</td>
												<td>$20.00</td>
												<td>$25.00</td>
											</tr>
											<tr>
												<td>$30.00</td>
												<td>$35.00</td>
												<td>$40.00</td>
												<td>$45.00</td>
											</tr>
											<tr>
												<td>$50.00</td>
												<td>$55.00</td>
												<td>$60.00</td>
												<td>$65.00</td>
											</tr>
											<tr>
												<td>$70.00</td>
												<td>$75.00</td>
												<td>$80.00</td>
												<td>$85.00</td>
											</tr>
											<tr>
												<td>$90.00</td>
												<td>$95.00</td>
												<td>$100.00</td>
												<td>$150.00</td>
											</tr>
										</tbody>
									</table>
							</div>
							
			</div>
			<div>
						<button onClick={() => dispatch(openModal({type: "invoice"})) }>Save & Print Invoice</button>
						<button onClick={() => dispatch(closeModal("pay"))}>Close</button>
					</div>
			</div>
			</div>
		
  )
}

export default PayModal