
import React, { useEffect, useRef } from 'react';
import './Sidebar.css'
import Link from 'next/link';
import { useReactToPrint } from 'react-to-print';

const CatSidebar = ({ catDetails, imageUrl , isOpen, onClose}) => {

    

    const targetRef = useRef();
 const handlePrint = useReactToPrint({
  content: () => targetRef.current,
  documentTitle: 'Visitor Pass',
  onAfterPrint: () => console.log('Printed PDF successfully!'),
 });
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (targetRef.current && !targetRef.current.contains(event.target)) {
          onClose();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);
  return (
    <div  ref={targetRef} className={`cat-sidebar ${isOpen ? 'open' : ''}`}>
     
      

      <button  className = "download-button"onClick={handlePrint}>Download PDF</button>
      <img className="cat-image" src={imageUrl} alt={catDetails.name} />
      <div className="cat-name">{catDetails.name}</div>
    
      <div className="cat-origin">{catDetails.origin} {catDetails.country_code}</div>
    <div className="cat-name">{catDetails.temperament}</div>
      <div className="cat-details-grid">

    <div className="grid-item">Weight: {catDetails.weight.imperial}</div>
    <div className="grid-item">Intelligence: {catDetails.intelligence}</div>
    <div className="grid-item">Adaptability: {catDetails.adaptability}</div>
    <div className="grid-item">Affection Level: {catDetails.affection_level}</div>
    <div className="grid-item">Child Friendly: {catDetails.child_friendly}</div>
    <div className="grid-item">Energy Level: {catDetails.energy_level}</div>
    <div className="grid-item">Experimental: {catDetails.experimental}</div>
    <div className="grid-item">Grooming: {catDetails.grooming}</div>
    <div className="grid-item">Hairless: {catDetails.hairless}</div>
    <div className="grid-item">Health Issues: {catDetails.health_issues}</div>
    <div className="grid-item">Hypoallergenic: {catDetails.hypoallergenic}</div>
    <div className="grid-item">Indoor: {catDetails.indoor}</div>
    <div className="grid-item">Lap: {catDetails.lap}</div>
    <div className="grid-item">Life Span: {catDetails.life_span}</div>
    <div className="grid-item">Natural: {catDetails.natural}</div>
    <div className="grid-item">Rare: {catDetails.rare}</div>
    <div className="grid-item">Rex: {catDetails.rex}</div>
    <div className="grid-item">Shedding Level: {catDetails.shedding_level}</div>
    <div className="grid-item">Short Legs: {catDetails.short_legs}</div>
    <div className="grid-item">Social Needs: {catDetails.social_needs}</div>
    <div className="grid-item">Stranger Friendly: {catDetails.stranger_friendly}</div>
    <div className="grid-item">Suppressed Tail: {catDetails.suppressed_tail}</div>
    <div className="grid-item">Vocalisation: {catDetails.vocalisation}</div>
      </div>
    <div className="cat-name"> 
      <Link href={catDetails.wikipedia_url} style={{color:"black", textDecoration:"none"}}>
    {catDetails.wikipedia_url}
      </Link>
    </div>
      </div>
      
    
  );
};

export default CatSidebar;
