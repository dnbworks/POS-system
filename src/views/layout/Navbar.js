import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='container px'>
      <ul className="main__nav d-flex">
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='report' className={({ isActive }) => (isActive ? 'active' : '')}>
            Report
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings' className={({ isActive }) => (isActive ? 'active' : '')}>
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to='/charts' className={({ isActive }) => (isActive ? 'active' : '')}>
            Charts
          </NavLink>
        </li>
        <li>
          <NavLink to='/statistic' className={({ isActive }) => (isActive ? 'active' : '')}>
            Statistic
          </NavLink>
        </li>
        <li>
          <NavLink to='/options' className={({ isActive }) => (isActive ? 'active' : '')}>
            Options
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;
