import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaAlignJustify } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";

const Products = () => {
  return (
    <div className='d-flex justify-content-between'>
    <div className='table-data'>
      <header className='d-flex'>
        <span><RiDeleteBin5Line /></span>
        <p>Total (3)</p>
        <span> <FaPrint/> </span>
      </header>
      <table>

        <thead>
          <tr>
            <th>Customer</th>
            <th>Qty</th>
            <th>Order date</th>
            <th>Salesperson</th>
            <th>Payment Method</th>
            <th>Discount</th>
            <th>Total Discount</th>
            <th>Total Tax</th>
            <th>Total amount</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>None</td>
            <td>1</td>
            <td>1/23/2023 9:35pm</td>
            <td>Admin</td>
            <td>cash</td>
            <td>$0.00</td>
            <td>$0.00</td>
            <td>$0.00</td>
            <td>$0.00</td>
            <td><FaAlignJustify/></td>
          </tr>
          <tr>
            <td>None</td>
            <td>1</td>
            <td>1/23/2023 9:35pm</td>
            <td>Admin</td>
            <td>cash</td>
            <td>$0.00</td>
            <td>$0.00</td>
            <td>$0.00</td>
            <td>$0.00</td>
            <td><FaAlignJustify/></td>
          </tr>
        </tbody>
      </table>
      <div className='d-flex'>
        <div>
          <span className='block'>Quantity</span>
          <span className='block'>Tax</span>
          <span className='block'>Discount</span>
          <span className='block'>Total</span>
        </div>
        <div>
          <span className='block'>4</span>
          <span className='block'>$3.59</span>
          <span className='block'>$3.59</span>
          <span className='block'>$3.59</span>
        </div>
      </div>
    </div>
    <div className='sidebar-filter' style={{width: "200px", border: "1px solid #333"}}>
      <table>
        <tr>
          <td>Show all</td>
        </tr>
        <tr>
          <label>Product name</label>
          <input type="text" />
          <label>Category</label>
          <select>
            <option>books</option>
            <option>tools</option>
          </select>
          <label>Customer</label>
          <input type="text" />
          <label>Salesperson</label>
          <input type="text" />
          <input type="text"/>
          <input type="date"/>
          <label>Year</label>
          <select>
            <option>2023</option>
          </select>
          <label>Month</label>
          <select>
            <option>January</option>
          </select>
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>
          
        </tr>
      </table>
    </div>
  </div>
  )
}

export default Products