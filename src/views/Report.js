import React from 'react'
import { NavLink } from 'react-router-dom'

const Report = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              ALL
            </NavLink>
          </li>
          <li>
            <NavLink to='/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              CUSTOMER
            </NavLink>
          </li>
          <li>
            <NavLink to='/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              PAYMENT
            </NavLink>
          </li>
          <li>
            <NavLink to='/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              SALESPERSONS
            </NavLink>
          </li>
          <li>
            <NavLink to='/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink to='/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              DAILY REPORT
            </NavLink>
          </li>
          <li>
            <NavLink to='/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              RETURN ITEM
            </NavLink>
          </li>
          <li>
            <NavLink to='/all' className={({ isActive }) => (isActive ? 'active' : '')}>
              Z REPORT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Report