import { useSelector } from "react-redux";
import Document from './Document';
import Page from './Page';
import View from './View'; 
import Text from './Text' ;
import { Font } from '@react-pdf/renderer';
import Download from './DownloadPDF';

const Invoice = () => { 
	 const { purchased_items, total, subtotal } = useSelector();
	return (
		<Document pdfMode={pdfMode}>
		 <Page className="invoice-wrapper" pdfMode={pdfMode}>
			<header>
				<div>
					<h3>MiniStop</h3>
			   <p>Cor. Eastwood ave Bagumbayan Quezon City ph.</p>
			   <p>+999999999 </p>
				</div>
				<div>
			   <p>Order ID: 8</p>
			   <p>Date: 4/18/2023 11:53am</p>
				</div>
			</header>
			<div>Receipt</div>
			<section className="customer-details">
			  <span>Customer: <p>name</p></span>
			  <span>Payment: <p>method</p></span>
			</section>
			<section className="customer-details">
			  <table>
			    <tr>
			      <th>No.</th>
			      <th>Name</th>
			      <th>Price</th>
			      <th>Quantity</th>
			      <th>SubTotal.</th>
			    </tr>
			    { purchased_items.map((item, index) => {
			        return (
			            <tr>
			              <td>{ index + 1 }</td>
			              <td>{ item.name }</td>
			              <td>${ item.price }</td>
			              <td>{ item.quantity }</td>
			              <td>{ item.subtotal }</td>
			            </tr>
			        )
			    })}
			  </table>
			  <table>
			    <tr>
			      <th>SubTotal.</th>
			      <th>Discount</th>
			      <th>Tax(10.00%)</th>
			      <th>Total</th>
			    </tr>
			    <tr>
			      <th>$ 100.00</th>
			      <th>$ 00.00</th>
			      <th>$ 50.68</th>
			      <th>$ 130.68</th>
			    </tr>
			  </table>
			  
			</section>
			</Page>
		</Document>
	)
} 

export default Invoice;