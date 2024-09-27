'use client'

import React from 'react';
import { Box, Typography } from '@mui/material';
import {FoodCard} from '../components/Card';
import {CountryBanner} from '../components/CountryBanner'
import CardFood from '../components/CardFood';
import { Playfair_Display } from 'next/font/google';

type JapanFoods = {
  name: string;
  description: string;
  image: string;
  country : string
};

// Mocked data for Japanese foods
const japanFoods: JapanFoods[] = [
  {
    name: "Sushi",
    description: "Vinegared rice accompanied by a variety of ingredients such as raw fish, vegetables, and seaweed.",
    image: "https://ik.imagekit.io/awwybhhmo/satellite_images/japanese/beyondmenu/hero/16.jpg?tr=w-3840,q-50",
    country: "Japan"
  },
  {
    name: "Ramen",
    description: "Wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso.",
    image: "https://www.pacificfoods.com/wp-content/uploads/2022/08/SP_Recipes_0002_Ramen.jpg",
    country: "Japan"
  },
  {
    name: "Tempura",
    description: "Seafood or vegetables that have been battered and deep-fried.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNfP7rIagqzSTTSxNSEfH-_zQtIItH7AeEA&s",
    country: "Japan"
  },
  {
    name: "Takoyaki",
    description: "Ball-shaped snack filled with diced octopus, tempura scraps, and pickled ginger.",
    image: "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/open_graph_image/public/2022-09/takoyaki-recipe%C2%A9iStock.jpg?itok=wQVSutbE",
    country: "Japan"
  },
  {
    name: "Sukiyaki",
    description: "Hot pot dish with thinly sliced beef, tofu, vegetables, and noodles cooked in a soy sauce-based broth.",
    image: "https://www.justonecookbook.com/wp-content/uploads/2023/01/Sukiyaki-4752-I.jpg",
    country: "Japan"
  },
  {
    name: "Okonomiyaki",
    description: "A savory pancake made with flour, eggs, shredded cabbage, and various toppings such as meat or seafood.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Okonomiyaki_001.jpg",
    country: "Japan"
  },
  {
    name: "Udon",
    description: "Thick wheat noodles served in a hot broth with toppings like tempura, green onions, and tofu.",
    image: "https://www.justonecookbook.com/wp-content/uploads/2021/11/Beef-Udon-4306-I.jpg",
    country: "Japan"
  },
  {
    name: "Mochi",
    description: "Sweet glutinous rice cake with various fillings like sweet red bean paste, ice cream, or fruit.",
    image: "https://www.allrecipes.com/thmb/R5cy23AxrgxUAAFdMbPEq3gI7Q4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/193307-easy-mochi-DDMFS-4x3-d68e2c5a886b42ce9c91f83a6abd9298.jpg",
    country: "Japan"
  }
];

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  style: ['normal'], // Specify the styles you need
});



const SearchResult: React.FC = () => {
  return (
    <Box >
      <CountryBanner
        countryName='Japan'
        bannerImage="https://cdn.tasteatlas.com/Images/Regions/86e06af9627b4023b3472086f1c7d624.jpg?mw=1900"
      />
      <Box className="flex justify-center flex-col items-center">
        <Box className='bg-white  w-4/5 p-7' >
        <Typography 
            variant='h5'
            sx={{
              fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
              fontWeight: '800',
              color: 'black',
              padding:'5px'
            }}
          >
            Explore Your {japanFoods[0].country} Dish!
          </Typography>
          <Box className="grid grid-cols-4 justify-items-center relative">
          {japanFoods.map((food, index) => (
              <CardFood
                key={index}
                name={food.name}
                description={food.description}
                image={food.image}
                country={food.country}
              />
            ))}
          </Box>
        </Box>
      </Box>  
    </Box>
  );
};

export default SearchResult;
