'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { FoodDetail } from '../../components/FoodDetail';

const FoodDetailPage: React.FC = () => {
  const { name } = useParams(); // Get the food name from the URL

  if (!name) {
    // Handle the case where name is not available
    return <div>Loading...</div>;
  }

  // Decode the URL-encoded food name
  const decodedName = typeof name === 'string' ? decodeURIComponent(name) : 'Unknown Food';

  // Dummy data for now, you can replace it with actual data fetching
  const foodData = {
    name: decodedName,
    img: "https://example.com/food-image.jpg", // Replace with real image data
    description: "Description of the food item.", // Replace with real description
  };

  return (
    <div>
      <FoodDetail
        name={foodData.name}
        img={foodData.img}
        description={foodData.description}
      />
    </div>
  );
};

export default FoodDetailPage;
