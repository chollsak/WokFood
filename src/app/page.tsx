'use client'
import React from 'react';
import { Box } from '@mui/material';
import { SearchBar } from './components/SearchBar';

export default function Home() {
  return (
    <main>
      <SearchBar />
      <Box sx={{height:'10000px'}}></Box>
    </main>
  );
}
