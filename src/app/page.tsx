'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { SearchBar } from './components/SearchBar';
import Carousel from './components/Carousel';
import { Playfair_Display } from 'next/font/google'; // Import Playfair Display from next/font
import "./globals.css";
import src from 'node_modules/@emotion/styled/dist/declarations/src';

// Import and configure Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  style: ['normal'], // Specify the styles you need
});

export default function Home() {
  return (
    <main>
      <SearchBar />
      <div className='mb-12'/>
      <Box className="ml-40 mr-40">
        <Box>
          <Typography 
            variant='h5'
            sx={{
              fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
              fontWeight: '800',
              color: 'black',
              padding:'5px'
            }}
          >
            New Catologed
          </Typography>
          <Carousel />
          <hr style={{border: 'solid 0.5px #d8d8d8', marginTop:'40px'}}/>
          <Box>
            <Typography 
              variant='h5'
              className='mt-12'
              sx={{
                fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                fontWeight: '800',
                color: 'black',
                padding:'5px',
              
              }}
            >
              Greatest Food of All Time!
            </Typography>
          
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: '5000px' }}></Box>
    </main>
  );
}
