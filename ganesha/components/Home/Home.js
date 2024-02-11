
import React from 'react';
import styles from './Home.css'; // Use CSS Modules
import Navbar from '../Navbar/Navbar';
import Link from 'next/link';
const Home = () => {
  return (
    <>
      <Navbar />
      
      <div className="homeContainer">
        <div className="leftSection">
          <div className="attractiveLines" style={{ fontSize: "30px" }}> 
          <span className="lightText">LET'S</span>
  <span className="darkText"> MEET </span>
  <span className="lightText">OUR FRIENDS</span> 
 
  </div>
          <div className="descriptiveLine">
  
  <span className="darkText1"> This  descriptive, informative, and attractive.</span>
</div>          <Link href='/about' className="stylishButton">Click me</Link>
        </div>
        <div className="rightSection">
        
        </div>
      </div>
    </>
  );
};


export default Home;