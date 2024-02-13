
import React, { useEffect, useState } from 'react';
import CatData from '@/components/CatData/CatData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '@/components/Navbar/Navbar';
import Explore from '@/components/Explore /Explore';

const ITEMS_PER_PAGE = 2;

const CatDataPage = () => {
  const [loadedCatData, setLoadedCatData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=${ITEMS_PER_PAGE}`);
        const data = await response.json();

        setLoadedCatData((prevData) => {
          const updatedCatData = data?.map((cat) => ({
            id: cat.id,
            imageUrl: cat?.url || 'fallbackImageUrl',
          }));

          return [...prevData, ...updatedCatData];
        });
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

 
    fetchData();
  }, []); 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div>
      <Navbar />
      <Explore />
      <Slider {...sliderSettings}>
        {loadedCatData.map((cat, index) => (
          <CatData key={index} catData={[cat]} />
        ))}
      </Slider>
    </div>
  );
};

export default CatDataPage;
