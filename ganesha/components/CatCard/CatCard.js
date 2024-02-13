
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import './CatCard.css';
import CatSidebar from '../Sidebar/Sidebar';

const CatCard = ({ imageUrl, id }) => {
  const [catDetails, setCatDetails] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchCatDetails = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
        const data = await response.json();
        setCatDetails(data.breeds[0]);
      } catch (error) {
        console.error('Error fetching cat details:', error);
      }
    };

    fetchCatDetails();
  }, [id]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
 
    const [isDialogOpen, setDialogOpen] = useState(false);
  
    const openDialog = () => {
      setDialogOpen(true);
    };
  
    const closeDialog = () => {
      setDialogOpen(false);
    };
  return (
    <div className="catCard">
      <img className="catImage" src={imageUrl} alt="Cat" />
      <div className="catInfo">
        <div className={`description ${isExpanded ? 'expanded' : ''}`}>
          {catDetails?.description}
        </div>
        {!isExpanded && (
          <button className="readMoreButton" onClick={toggleExpansion}>
            Read More
          </button>
        )}
        
        <button className="knowMoreButton" onClick={openDialog}>
        Know More
          </button>
        
    
      </div>
      {isDialogOpen && (
       <CatSidebar catDetails={catDetails} imageUrl ={imageUrl} isOpen={isDialogOpen} onClose={closeDialog}/>
      )}
    </div>

    
  );
};

export default CatCard;
