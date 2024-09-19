'use client'

import React from 'react';
import { Box, Typography } from '@mui/material';
import {Button} from '@mui/material';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  style: ['normal'], // Specify the styles you need
});

interface CountryBannerProps {
  countryName: string;
  bannerImage: string;
}

export const CountryBanner: React.FC<CountryBannerProps> = ({
  countryName,
  bannerImage,
}) => {
  return (
    <Box className="w-full h-80 relative flex justify-center items-center">
<img 
    src={bannerImage}
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
              textAlign:'center'
            }}
          >
            {countryName}
          </Typography>
        <Button className="w-full mt-7 bg-yellow-400 text-black" variant="contained">Add All</Button>
      </Box>
    </Box>
  );
};
