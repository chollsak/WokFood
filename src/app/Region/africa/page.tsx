'use client'; // Ensures this is a Client Component

import { Box, Button, Typography } from '@mui/material';
import { Playfair_Display } from 'next/font/google';
import CardFood from 'src/app/components/CardFood';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useEffect, useState } from 'react';

// Define the font
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
});

interface Food {
  FoodId: number;
  FoodImageUrl: string;
  FoodUrl: string;
  FoodName: string;
  FoodDescription: string;
}

interface RegionData {
  Region: string;
  Foods: Food[];
}

const fetchAfricaData = async (): Promise<RegionData> => {
  const response = await fetch('/api/africa-data', { method: 'GET' });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
};

const addAllToCart = (regionData: RegionData, region: string) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  regionData.Foods.forEach((food: Food) => {
    const existingFoodIndex = cart.findIndex((item: Food) => item.FoodId === food.FoodId);
    if (existingFoodIndex === -1) {
      const cartItem = {
        FoodId: food.FoodId,
        FoodName: food.FoodName,
        FoodImageUrl: food.FoodImageUrl,
        FoodRegion: region,
        FoodDescription: food.FoodDescription,
        Quantity: 1,
      };
      cart.push(cartItem);
    } else {
      cart[existingFoodIndex].Quantity += 1;
    }
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`All region foods are added to cart`);
};

const SearchResult = () => {
  const [regionData, setRegionData] = useState<RegionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAfricaData();
        setRegionData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (!regionData || !regionData.Foods) {
    return <Typography variant="h6">No food data available.</Typography>;
  }

  return (
    <Box>
      <Box className="w-full h-80 relative flex justify-center items-center">
        <img
          src="https://www.exoticca.com/uk/magazine/wp-content/uploads/2021/05/Avenue-of-Baobabs-BLOG.png"
          className="w-full h-80 object-cover object-top absolute z-[-1] opacity-70"
          alt="banner"
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
            zIndex: -1, // Behind the content but in front of the image
          }}
        />
        <Box className="text-white">
          <Typography
            variant="h3"
            sx={{
              fontFamily: playfairDisplay.style.fontFamily,
              fontWeight: '800',
              color: 'white',
              textAlign: 'center',
            }}
          >
            {'AFRICA'}
          </Typography>
          <div className="flex justify-center ">
            <Button
              variant="contained"
              sx={{
                borderRadius: '0px',
                marginTop: '20px',
                color: 'gray',
                backgroundColor: 'white',
                textAlign: 'center',
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'gray',
                '&:hover': {
                  color: '#f8533d',
                  boxShadow: 'none',
                  borderColor: '#f8533d',
                },
              }}
              onClick={() => {
                addAllToCart(regionData, 'Africa');
              }}
            >
              Add all to cart <InventoryIcon className="ml-1" />
            </Button>
          </div>
        </Box>
      </Box>
      <Box className="flex justify-center flex-col items-center">
        <Box className="bg-white w-4/5 p-7">
          <Typography
            variant="h5"
            sx={{
              fontFamily: playfairDisplay.style.fontFamily,
              fontWeight: '800',
              color: 'black',
              padding: '5px',
            }}
          >
            Explore Your {'AFRICA'} Dishes!
          </Typography>
          <Box className="grid grid-cols-4 justify-items-center relative">
            {regionData.Foods.map((food) => (
              <CardFood
                key={food.FoodId}
                name={food.FoodName}
                description={food.FoodDescription}
                region={regionData.Region}
                image={food.FoodImageUrl}
                foodId={food.FoodId.toString()}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResult;
