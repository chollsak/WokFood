"use client"
import React from 'react';
import { FoodDetail} from '../components/FoodDetail'; 

const FoodDatails: React.FC = () => {
  return (
    <div>
    <FoodDetail
      name="Fondue"
      img="https://falstaff.b-cdn.net/storage/2023/02/Kaesefondue-Rezeptheader2-c-Shutterstock-2640.jpg?aspect_ratio=4:3&crop_gravity=north&width=800"  
      description="Fondue is Switzerland's national dish, a melting pot of different flavors and aromas."
    />
    </div>
  );
};

export default FoodDatails;
