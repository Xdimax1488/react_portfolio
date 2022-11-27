import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Navbar.scss';
const Navbar = () => {
  const [navClick, setNavClick] = React.useState(false);
  const [navShadow, setNavShadow] = React.useState(false);

  const burgerClick = () => {
    setNavClick(!navClick);
  };
  const shadowSkrole = () => {
    if (window.scrollY >= 100) {
      setNavShadow(true);
    } else {
      setNavShadow(false);
    }
  };

  window.addEventListener('scroll',shadowSkrole)
  return (
    <div className={navShadow ? 'header active__shedow' : 'header'}>
      <h1>
        <Link to="/">Portfolio</Link>
      </h1>

      <ul className={navClick ? 'nav active' : 'nav'} onClick={burgerClick}>
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__link">
          <Link to="/project">Project</Link>
        </li>
        <li className="nav__link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="humburger" onClick={burgerClick}>
        {navClick ? (
          <FaTimes size={20} style={{ color: '#4db5ff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#4db5ff' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
