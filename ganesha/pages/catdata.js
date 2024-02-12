// // pages/catdata.js

// import CatData from '@/components/CatData/CatData';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Navbar from '@/components/Navbar/Navbar';
// import About from '@/components/About/About';
// import Explore from '@/components/Explore /Explore';

// const ITEMS_PER_PAGE = 2;
// export const getServerSideProps = async () => {
//   try {
//     const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=${ITEMS_PER_PAGE}`);
//     const data = await response.json();

    
//     const catData = data?.map((cat) => ({
//         id: cat.id,
//       imageUrl: cat?.url || 'fallbackImageUrl',
     
//     }));

//     return {
//       props: {
//         catData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching cat data:', error);
//     return {
//       props: {
//         catData: [],
//       },
//     };
//   }
// };
// const CatDataPage = ({ catData }) => {
//   // Settings for the slider
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Adjust as needed
//     slidesToScroll: 1,
//   };
//   console.log('catData:', catData);

//   return (
    
//       <div>
//           <Navbar/>
//     <Explore/>
//       <Slider {...sliderSettings} >
//         {catData.map((cat, index) => (
//             <CatData key={index} catData={[cat]} />
//             ))}
//       </Slider>
//     </div>
            
//   );
// };



// export default CatDataPage;
import { useEffect, useState } from 'react';
import CatData from '@/components/CatData/CatData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '@/components/Navbar/Navbar';
import Explore from '@/components/Explore /Explore';

const ITEMS_PER_PAGE = 2;

export const getServerSideProps = async () => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=${ITEMS_PER_PAGE}`);
    const data = await response.json();

    const catData = data?.map((cat) => ({
      id: cat.id,
      imageUrl: cat?.url || 'fallbackImageUrl',
    }));

    return {
      props: {
        catData,
      },
    };
  } catch (error) {
    console.error('Error fetching cat data:', error);
    return {
      props: {
        catData: [],
      },
    };
  }
};

const CatDataPage = ({ catData }) => {
  const [loadedCatData, setLoadedCatData] = useState(catData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=${ITEMS_PER_PAGE}`);
        const data = await response.json();

        const updatedCatData = data?.map((cat) => ({
          id: cat.id,
          imageUrl: cat?.url || 'fallbackImageUrl',
        }));

        setLoadedCatData(updatedCatData);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

    if (!catData.length) {
      fetchData();
    }
  }, [catData]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
