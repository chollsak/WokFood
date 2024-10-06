'use client';
import { Box, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State to track loading

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('https://yoyoheha.pythonanywhere.com/fetch-food-data/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Send data to your API to save in public/data/data.json
      const saveResponse = await fetch('/api/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!saveResponse.ok) {
        throw new Error('Failed to save data');
      }

      // Redirect to /home
      router.push('/home');
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false); // Stop loading when finished
    }
  };

  return (
    <main>
      <Box>
        <Box className="flex flex-col gap-28 justify-center items-center">
          <Box className="flex justify-center mt-10">
            <Box
              component="img"
              className="p-1"
              src="/img/logo.png"
              sx={{ width: '200px', marginRight: '-20px' }}
            />
            <Box
              component="img"
              className="p-1 mt-5"
              src="/img/wok4.png"
              sx={{ width: '300px', height: '80px' }}
            />
          </Box>
          
          {/* Button with Loading State */}
          <Button
            variant="contained"
            className="rounded-full"
            sx={{ backgroundColor: '#fbc800', display: 'flex', alignItems: 'center' }}
            onClick={fetchData}
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: 'black' }} />
            ) : (
              <span className="text-black">Get Started</span>
            )}
          </Button>
        </Box>
      </Box>
    </main>
  );
}
