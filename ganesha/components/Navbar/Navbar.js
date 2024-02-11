// components/Navbar.js

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Meow</div>
      <ul className="nav-list">
        <li className="nav-item"><Link href="/">Home</Link></li>
        <li className="nav-item"><Link href="/about">About</Link></li>
        <li className="nav-item"><Link href="/catdata">Explore</Link></li>
        <li className="nav-item"><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
