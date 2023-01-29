import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="app__top--header">
      <div className='d-flex justify-content-between'>
        <span><Link to="/">Cash Register</Link></span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Header