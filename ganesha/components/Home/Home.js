
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
          <span className="lightText">Meet </span>
  <span className="darkText"> Our </span>
  <span className="lightText"> Furry Friends! </span> 
 
  </div>
          <div className="descriptiveLine">
  
  <span className="darkText1"> Discover and Delight in Our Fabulous Feline Friends!</span>
</div>          <Link href='/about' className="stylishButton">Purr Click</Link>
        </div>
        <div className="rightSection">
        
        </div>
      </div>
    </>
  );
};


export default Home;