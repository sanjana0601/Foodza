import '../styles/Navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> Food Zaa</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        {/* <Link to="/services">Services</Link> */}
        <Link to="/Profile">Profile</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;