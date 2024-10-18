'use client';
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, CircularProgress, Button } from '@mui/material';
import { Playfair_Display } from 'next/font/google';
import InventoryIcon from '@mui/icons-material/Inventory';

// Define your interface
interface FoodDetailPageProps {
    params: {
        region: string;  // Specify type for region
        foodId: string;  // Specify type for foodId
    };
}

interface Food {
    FoodId: number;
    FoodImageUrl: string;
    FoodUrl: string;
    FoodName: string;
    FoodDescription: string;
}

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify the weights you need
    style: ['normal'], // Specify the styles you need
});

const countryToImageUrl = (regionName: string) => {
    const regionImages: { [key: string]: string } = {
        oceania: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJyYVK0P3AYZuiM-6sMQ4yOeEeJaRy3pt6n7MdtL1Tr-rYUi0ZAZ3I1xzd3eqRxFJvzM&usqp=CAU',
        asia: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e305603b-4629-4f4c-a6f8-3be3f0731120/deqbfaj-f1772157-becc-45c9-ae91-3b0c810c2ffe.jpg/v1/fill/w_1024,h_774,q_75,strp/asia_union_republic_s_flag_by_mueandukdahan_deqbfaj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc0IiwicGF0aCI6IlwvZlwvZTMwNTYwM2ItNDYyOS00ZjRjLWE2ZjgtM2JlM2YwNzMxMTIwXC9kZXFiZmFqLWYxNzcyMTU3LWJlY2MtNDVjOS1hZTkxLTNiMGM4MTBjMmZmZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wY4Dr_TIQicXGr7pcD83mLNkEIVyYk6muZHfHQ17mq8',
        "middle-east": 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb5f3e6e-a9f0-45d9-9dfc-a77a77ccaf7d/dgv8itb-fbb168e3-28a8-4163-a76a-a78cdca56945.png/v1/fill/w_1280,h_854,q_80,strp/flag_of_middle_eastern__flag_of_middle_east__by_weqrrwqw_dgv8itb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvYmI1ZjNlNmUtYTlmMC00NWQ5LTlkZmMtYTc3YTc3Y2NhZjdkXC9kZ3Y4aXRiLWZiYjE2OGUzLTI4YTgtNDE2My1hNzZhLWE3OGNkY2E1Njk0NS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.VaHXo3BVTeNEqpd5bYOmn0Soi4ZscW_rzaypM6GD0uI',
        africa: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_the_African_Union.svg',
        "south-america": 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_UNASUR.svg/640px-Flag_of_UNASUR.svg.png',
        europe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/810px-Flag_of_Europe.svg.png',
        "north-america": 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/833b8afb-0ba8-40d5-9817-acddffeef181/dg4jmy9-268ba4a7-7b0c-4913-a9fe-afe4d12c7117.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzM2I4YWZiLTBiYTgtNDBkNS05ODE3LWFjZGRmZmVlZjE4MVwvZGc0am15OS0yNjhiYTRhNy03YjBjLTQ5MTMtYTlmZS1hZmU0ZDEyYzcxMTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qVLEsjgaR8GJFVG0NEQLW_M_u8-LA0YI5Pe4sZig070',
    };

    return regionImages[regionName] || ''; // Return an empty string if the region is not in the map
};

// This function fetches data server-side based on params
async function fetchFoodDetails(region: string, foodId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000' /*|| 'https://wok-food.vercel.app/'*/}/data/data.json`); // Adjust the path to your data
    const data = await response.json();

    // Find the food details based on region and foodId
    const food = data.data[region]?.Foods.find((food: any) => food.FoodId.toString() === foodId);
    return food;
}

const addToCart = (food: Food, region: string) => {  // Accept region as a parameter
    // Get current cart from localStorage or initialize it
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the food is already in the cart
    const existingFoodIndex = cart.findIndex((item: Food) => item.FoodId === food.FoodId);
    if (existingFoodIndex === -1) {
        const cartItem = {
            FoodId: food.FoodId,
            FoodName: food.FoodName,
            FoodImageUrl: food.FoodImageUrl,
            FoodRegion: region, // Use region parameter
            FoodDescription: food.FoodDescription,
            Quantity: 1,
        };

        // Add the food to the cart
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${food.FoodName} is added to cart`)
    } else {
        // Increment the quantity if already in the cart
        cart[existingFoodIndex].Quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

// Component
const FoodDetailPage: React.FC<FoodDetailPageProps> = ({ params }) => {
    const [foodDetails, setFoodDetails] = React.useState<Food | null>(null);
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        const fetchData = async () => {
            const food = await fetchFoodDetails(params.region, params.foodId);
            setFoodDetails(food);
            setLoading(false);
        };
        
        fetchData();
    }, [params]);

    if (loading) return <CircularProgress />;

    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                padding: '40px',
                backgroundColor: '#f0f0f0' // Change the background color here
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '0px', // No border radius for the box
                    boxShadow: 3, // Shadow for the box
                    padding: '50px',
                    marginTop: '50px',
                    width: '100%', // Responsive width
                    maxWidth: '1200px', // Maximum width for the box
                }}
            >
                <Card
                    sx={{
                        textAlign: 'center',
                        borderRadius: '0px', // No border radius for the card
                        boxShadow: 'none' // No shadow for the card
                    }}
                >
                    <CardMedia
                        component="img"
                        alt={foodDetails?.FoodName}
                        height="200"
                        image={foodDetails?.FoodImageUrl}
                        sx={{
                            objectFit: 'cover', // Make the image cover the area
                            width: '100%', // Ensure the width is 100%
                            height: '500px', // Set a fixed height
                        }}
                    />
                    <CardContent className='flex flex-col justify-end items-start'>
                        <Typography gutterBottom variant="h4" className='mt-6' component="div" sx={{
                            fontFamily: playfairDisplay.style.fontFamily,
                            fontWeight: '800',
                            color: 'black',
                        }}>
                            {foodDetails?.FoodName}
                        </Typography>
                        <div className='flex items-start gap-2 mb-4'>
                            <img src={countryToImageUrl(params.region)} alt={`${params.region} flag`} style={{ marginTop: '1px', width: '40px', height: '26px' }} />
                            <span className='text-lg text-gray-500'>{params.region.toUpperCase()}</span>
                        </div>
                        <div className='flex-col justify-center items-center mb-4'>
                            <hr style={{ width: '200px', marginBottom: '3px', borderColor: 'black' }} />
                            <hr style={{ width: '140px', borderColor: 'black' }} />
                        </div>
                        <Typography className='text-lg text-start text-gray-500'>
                            {foodDetails?.FoodDescription}
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '0px', // No border radius
                                marginTop: '20px', // Margin on top for spacing
                                color: '#fbc800', // Text color
                                backgroundColor: 'white', // Background color
                                boxShadow: 'none', // No shadow
                                border: '1px solid', // Border style
                                borderColor: '#fbc800', // Border color
                                '&:hover': {
                                    color:'#f8533d',
                                    boxShadow: 'none', // Background color on hover
                                    borderColor:'#f8533d'
                                },
                            }}
                            onClick={() => addToCart(foodDetails!, params.region)} // Handle button click// Handle button click
                        >
                            Add to list <InventoryIcon className='ml-1'/>
                        </Button>



                    </CardContent>
                </Card>
            </Box>
        </main>
    );
};

export default FoodDetailPage;
