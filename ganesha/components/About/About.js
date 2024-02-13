

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
        Dive into a Whisker Wonderland of Interactive Play and Adorable Amusement!
        </div>
        <p className="paragraph">
        Step into a purr-ific universe with our enchanting Cat App! Immerse yourself in a world where feline charm meets technological marvel. Unleash the magic of playful paws, soothing purrs, and whisker wonders right at your fingertips. Our Cat App is your passport to a digital haven, offering a delightful blend of entertainment and education. From interactive games that engage your kitty instincts to heartwarming videos that celebrate the adorable antics of our whiskered friends, this app is a whisker-twitching delight. Join the feline frenzy, where every tap brings you closer to a virtual world filled with feline fun and friendship. Your daily dose of cat-tastic joy awaits – download now and let the whisker adventure begin!
        </p>
      </div>
      <div className="flex-container">
        <div className="left-section1">
          <h2 className="section-title">Cat App Delight</h2>
          <p className="section-paragraph">Unleash the charm in this digital nook, where cats take center stage in a world of play and joy!
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
