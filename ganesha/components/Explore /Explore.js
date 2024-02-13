// components/NewComponent.js

import React from 'react';
import './Explore.css';
import Link from 'next/link';

const Explore = () => {
  return (
    <div className="new-component-container">
      <div className="center-section">
        {/* Square image section */}
        <div className="image-section">
          <img
            src="/i want it.jpg"  // Placeholder image, replace with your actual image source
            alt="Square Image"
            className="square-image"
          />
        </div>

        {/* Right section with title, paragraph, and button */}
        <div className="right-section">
          <h2 className="section-title1">Whisker Card Haven</h2>
          <p className="section-paragraph1">
          Explore our delightful collection of feline-themed cards 
          that capture the essence of purr-fection!</p>
          <Link href='/' className="go-back-button">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
