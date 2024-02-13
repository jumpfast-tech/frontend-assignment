
import React from 'react';
import CatCard from '../CatCard/CatCard';
import './CatData.css';

const CatData = ({ catData }) => {
  return (
    <div>
     
      <div className="catCardContainer">
        {catData.map((cat, index) => (
          <CatCard key={index} imageUrl={cat.imageUrl} id = {cat.id}  />
        ))}
      </div>
      
    </div>
  );
};

export default CatData;
