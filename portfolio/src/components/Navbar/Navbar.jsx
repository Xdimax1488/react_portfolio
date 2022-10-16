import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarModul.module.scss';
const Navbar = () => {
  return <div className={styles.header}>
    <div className="heder-logo">
      <Link to='/'>
      Portfolio
      </Link>
    </div>
    <nav className="header-nav">
      <ul className="nav">
        <li className="nav-link">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-link">
          <Link to='/about'>About</Link>
        </li>
        <li className="nav-link">
          <Link to='/project'>Project</Link>
        </li>
        <li className="nav-link">
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>

  </div>;
};

export default Navbar;
