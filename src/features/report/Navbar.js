import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='report-nav'>
        <ul>
          <li>
            <NavLink to='/report/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              ALL
            </NavLink>
          </li>
          <li>
            <NavLink to='customers' className={({ isActive }) => (isActive ? 'active' : '')}>
              CUSTOMER
            </NavLink>
          </li>
          <li>
            <NavLink to='payment' className={({ isActive }) => (isActive ? 'active' : '')}>
              PAYMENT
            </NavLink>
          </li>
          <li>
            <NavLink to='salespersons' className={({ isActive }) => (isActive ? 'active' : '')}>
              SALESPERSONS
            </NavLink>
          </li>
          <li>
            <NavLink to='products' className={({ isActive }) => (isActive ? 'active' : '')}>
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink to='dailyReport' className={({ isActive }) => (isActive ? 'active' : '')}>
              DAILY REPORT
            </NavLink>
          </li>
          <li>
            <NavLink to='returnItems' className={({ isActive }) => (isActive ? 'active' : '')}>
              RETURN ITEM
            </NavLink>
          </li>
          <li>
            <NavLink to='Zreport' className={({ isActive }) => (isActive ? 'active' : '')}>
              Z REPORT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar