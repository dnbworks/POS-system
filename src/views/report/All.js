import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaAlignJustify } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const All = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='d-flex justify-content-between'>
      <div className='table-data'>
        <header className='d-flex'>
          <span><RiDeleteBin5Line /></span>
          <p>Total (3)</p>
          <span> <FaPrint /> </span>
        </header>
        <table>

          <thead>
            <tr>
              <th></th>
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
              <td><input type="checkbox" /></td>
              <td>None</td>
              <td>1</td>
              <td>1/23/2023 9:35pm</td>
              <td>Admin</td>
              <td>cash</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td><FaAlignJustify /></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>None</td>
              <td>1</td>
              <td>1/23/2023 9:35pm</td>
              <td>Admin</td>
              <td>cash</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td><FaAlignJustify /></td>
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
      <div className='sidebar-filter' style={{ width: "200px", border: "1px solid #333" }}>
        <table>
          <tr>
            <td>Show all</td>
          </tr>
          <tr>
            <select>
              <option>order Id</option>
              <option>customer name</option>
              <option>salesperson name</option>
              <option>payment method</option>
            </select>
            <input type="text" />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <select>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
            </select>
            <select>
              <option>2023</option>
            </select>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default All