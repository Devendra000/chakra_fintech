import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Metrics', path: '/metrics' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">CHAKRA</div>

      <div className="menu-icon" onClick={toggleNav}>
        {isOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
      </div>

      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'active-link' : ''
              }
              onClick={closeNav}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
