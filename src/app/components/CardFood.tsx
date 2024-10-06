'use client'
import React from 'react';
import { Playfair_Display } from 'next/font/google'; // Import Playfair Display from next/font
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Make sure to import useRouter
import ReactCountryFlag from 'react-country-flag';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify the weights you need
    style: ['normal'], // Specify the styles you need
});

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

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

type CardProps = {
    image: string;
    name: string;
    region: string;
    description: string;
    foodId: string; 
};

export default function CardFood(props: CardProps) {
    const router = useRouter(); // Get router instance
    const regionImageUrl = countryToImageUrl(props.region);

    const handleFoodClick = () => {
        router.push(`/foodDetail/${props.region}/${props.foodId}`); // Adjust the path as necessary
    };

    return (
        <Box className="p-2 cursor-pointer" onClick={handleFoodClick}>
            <Box component={'img'} src={props.image} sx={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <div className='mt-4'>
                <Typography variant='h5' sx={{
                    fontFamily: playfairDisplay.style.fontFamily,
                    fontWeight: '800',
                    color: 'black',
                }}>
                    {truncateText(props.name, 30)} {/* Limit name to 30 characters */}
                </Typography>
                <div className='flex items-start gap-2 mb-4'>
                    <img src={regionImageUrl} alt={`${props.region} flag`} style={{ marginTop: '1px', width: '24px', height: '16px' }} />
                    <span className='text-sm text-gray-500'>{props.region.toUpperCase()}</span>
                </div>
                <p className='text-sm text-gray-500'>{truncateText(props.description, 80)}</p>
            </div>
        </Box>
    );
}
