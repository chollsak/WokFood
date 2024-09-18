import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import ReactCountryFlag from "react-country-flag"

import { Playfair_Display } from 'next/font/google'; // Import Playfair Display from next/font

// Import and configure Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  style: ['normal'], // Specify the styles you need
});

// Define the type for card data
interface FoodCard {
  title: string;
  description: string;
  image: string;
  country: string;
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  

const foodMenu: FoodCard[] = [
  { 
    title: "Spaghetti Carbonara", 
    description: 'Creamy Alfredo sauce with grilled chicken served over fettuccine pasta.Creamy Alfredo sauce with grilled chicken served over fettuccine pasta.Creamy Alfredo sauce with grilled chicken served over fettuccine pasta.', 
    image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg"
    ,country:'Italy'
  },
  { 
    title: "Chicken Alfredo", 
    description: "Creamy Alfredo sauce with grilled chicken served over fettuccine pasta.", 
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Creamy-and-Saucy-Chicken-Alfredo-Pasta-500x375.jpg" 
    ,country:'Italy'
  },
  { 
    title: "Margherita Pizza", 
    description: "A simple pizza topped with fresh tomatoes, mozzarella cheese, and basil.", 
    image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg" 
    ,country:'Italy'
  },
  { 
    title: "Caesar Salad", 
    description: "Crisp romaine lettuce with Caesar dressing, croutons, ", 
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Creamy-and-Saucy-Chicken-Alfredo-Pasta-500x375.jpg" 
    ,country:'Italy'
  }
];

// Responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const FoodMenuCarousel: React.FC = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Carousel 
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        arrows
        keyBoardControl
      >
        {foodMenu.map((item, index) => (
            <Box className="p-2 cursor-pointer">
                <Box component={'img'} src={item.image} sx={{ width: '100%', height: 180, objectFit: 'cover' }}/>
                <div className='mt-4'>
                    <Typography variant='h5' sx={{fontFamily: playfairDisplay.style.fontFamily,
                                      fontWeight: '800',
                                      color: 'black',
                    }}>{item.title}</Typography>
                    <div className='flex items-start gap-2 mb-4'>
                         <ReactCountryFlag countryCode="IT" style={{marginTop:'1px'}} svg/>
                         <span className='text-sm text-gray-500'>{item.country.toUpperCase()}</span>
                    </div>
                    <p className='text-sm text-gray-500'>{truncateText(item.description, 80)}</p>
                </div>
            </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default FoodMenuCarousel;
