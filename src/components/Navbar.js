import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect( () => {
    showButton();
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
            <h1>JAM/SESH<i class="fas fa-headphones-alt"></i></h1>
          </Link>
            <div className="menu-icon" onClick={handleClick} >
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          <ul className={`nav-menu ${click ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu} >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu} >
                PRODUCTS
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
