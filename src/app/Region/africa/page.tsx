
import { Box, Button, Typography } from '@mui/material';
import { Playfair_Display } from 'next/font/google';
import CardFood from 'src/app/components/CardFood';
import { CountryBanner } from 'src/app/components/CountryBanner';
import { RegionData } from '../../types/type';
import path from 'path';
import { promises as fs } from 'fs';
import InventoryIcon from '@mui/icons-material/Inventory';


// Define the font
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
});

async function fetchAsiaData(): Promise<RegionData> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  
  console.log("Fetched data:", data); // Log the entire data
  return data.data.africa; // Corrected access to nested asia data
}

const SearchResult = async () => {
  const regionData = await fetchAsiaData();

  if (!regionData || !regionData.Foods) {
    return <Typography variant="h6">No food data available.</Typography>;
  }

  return (
    <Box>
      <Box className="w-full h-80 relative flex justify-center items-center">
        <img
          src={"https://www.exoticca.com/uk/magazine/wp-content/uploads/2021/05/Avenue-of-Baobabs-BLOG.png"}
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
        <Box className='text-white'>
          <Typography
            variant='h3'
            sx={{
              fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
              fontWeight: '800',
              color: 'white',
              textAlign: 'center'
            }}
          >
            {'AFRICA'}
          </Typography>

          <div className='flex justify-center '>
            <Button
              variant="contained"
              sx={{
                borderRadius: '0px', // No border radius
                marginTop: '20px', // Margin on top for spacing
                color: 'gray', // Text color
                backgroundColor: 'white',
                textAlign: 'center',
                boxShadow: 'none', // No shadow
                border: '1px solid', // Border style
                borderColor: 'gray', // Border color
                '&:hover': {
                  color: '#f8533d',
                  boxShadow: 'none', // Background color on hover
                  borderColor: '#f8533d'
                },
              }}
              // Handle button click
            >
              Add all to cart <InventoryIcon className='ml-1' />
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
