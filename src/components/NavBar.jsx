// NavbarComponent.js

import React from 'react';
import './NavBar.css'; // Assuming you have a CSS file for the Navbar

const NavbarComponent = ({ switchView, handleCreatePostToggle }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#" onClick={() => switchView('home')}>Home</a></li>
        <li><a href="#" onClick={() => switchView('about')}>About</a></li>
        <li><a href="#" onClick={() => switchView('contact')}>Contact</a></li>
      </ul>
      <button className="create-post-button" onClick={handleCreatePostToggle}>
        Create Post
      </button>
    </nav>
  );
};

export default NavbarComponent;
