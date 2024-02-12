// components/AboutPage.js

import React from 'react';
import './About.css';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="curve-container">
          <div className="sections-container">
            <div className="section">Features</div>
            <div className="section">Feline</div>
            <div className="section">Fun</div>
          </div>
        </div>
      </div>
      <div className="work-with-me">Work with Me</div>
      <div className="big-box">
        <div className="title">
          kjhghjjb yhhvwbbw wuwhgvbwb s qwuhwsvsbbs wiwbwbwbwsb
        </div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex-container">
        <div className="left-section1">
          <h2 className="section-title">Your Section Title</h2>
          <p className="section-paragraph">
            Your paragraph content goes here. It can include details or information
            about this section.
          </p>
          
          <Link href='/catdata' className="section-button">Explore</Link>
          <div className="button-line"></div>
        </div>
        <div className="center-section1">
          <div className="image-box">
            <img
              src="/long-ma-hxEAE88Onv0-unsplash.jpg"  
              alt="Centered Image"
              className="centered-image"
            />
          </div>
        </div>
        <div className="right-section1">
         
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
