'use client'; // Ensure this line is at the very top
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardFood from './CardFood'; // Adjust the import path based on your file structure
import { Food, RootObject } from '../types/type'; // Adjust the import path based on your file structure

// Responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SouthAmericaCarousel: React.FC = () => {
  const [southAmericaFoods, setSouthAmericaFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSouthAmericaData = () => {
      fetch('/data/data.json') // Adjust the path based on your public folder structure
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then((data: RootObject) => {
          setSouthAmericaFoods(data.data['south-america'].Foods); // Access the South America food data
        })
        .catch((err: any) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchSouthAmericaData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        {southAmericaFoods.map((food) => (
          <CardFood 
            key={food.FoodId} 
            image={food.FoodImageUrl} 
            name={food.FoodName} 
            region={'south-america'} // Assuming the country description is used here
            description={food.FoodDescription} 
            foodId={food.FoodId.toString()}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SouthAmericaCarousel;
