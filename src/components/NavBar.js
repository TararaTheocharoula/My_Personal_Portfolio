// NavBar.js
import React from 'react';
import './NavBar.css';

function NavBar({ setCurrentPage }) {
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><button onClick={() => handleClick('home')}>Home</button></li>
        <li><button onClick={() => handleClick('about')}>About me</button></li>
        <li><button onClick={() => handleClick('skills')}>Skills</button></li>
        <li><button onClick={() => handleClick('portfolio')}>Portfolio</button></li>
        <li><button onClick={() => handleClick('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
