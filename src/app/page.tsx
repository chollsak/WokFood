'use client';
import { Box, Button, CircularProgress, List, ListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State to track loading
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    // Function to simulate the changing percentage
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const increment = Math.floor(Math.random() * 5) + 1; // Increment by a random value between 1 and 5
        const newPercentage = prevPercentage + increment;
        return newPercentage >= 100 ? 100 : newPercentage; // Stop at 100%
      });
    }, 100); // Update every 100ms

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

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
    <body style={{ marginTop: '-96px' }}>
      <main style={{ position: 'relative' }}>
        {/* Video Background */}
        <Box
          component="video"
          src="/img/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: -1, // Send the video behind all other elements
            filter: 'brightness(100%)', // Dim the video a bit for contrast
          }}
        />

        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
          }}
        >
          {/* Logo and Brand Name */}
          <div className=" border-white rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <Box className="flex justify-center items-center mr-5 p-5">
              <Box
                component="img"
                src="/img/logo.png"
                sx={{
                  width: '200px',
                  animation: 'fade-in 2s ease-in-out',
                  '@keyframes fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                  },
                }}
              />
              <Box
                component="img"
                src="/img/wok4.png"
                sx={{
                  width: '300px',
                  height: '80px',
                  animation: 'slide-up 1.5s ease-in-out',
                  '@keyframes slide-up': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                  marginLeft: '-30px',
                  marginTop: '10px',
                }}
              />


            </Box>
            <Box
              className="border-white rounded-lg mx-20 text-black"
              style={{
                backgroundColor: 'rgba(21, 27, 35, 1)', // Adjusted to rgba
                position: 'relative', // Needed for the pseudo-element
                overflow: 'hidden',   // To contain the inner shadow
              }}
            >
              {/* Inner shadow using a pseudo-element */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  borderRadius: '8px', // Match the border-radius of the outer box
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.4)', // Inner shadow
                  zIndex: 0, // Ensure it's behind the content
                }}
              />

              <Typography variant="h6" className='text-white px-4 pt-4' sx={{ position: 'relative', zIndex: 1 }}>
                <span style={{color:'#ff7b72'}}>WELCOME</span> <span style={{color:'#79c0ff'}}>to</span> WookFood
              </Typography>

              <p className='px-4 text-white' style={{ position: 'relative', zIndex: 1 }}>
                <span style={{color:'#ff7b72'}}>Please</span> read <span style={{color: '#d2a8ff'}}>the following</span> :
              </p>
              <p className='px-4 text-white' style={{ position: 'relative', zIndex: 1 }}>
                <span style={{color:'#79c0ff'}}>1.</span> When <span style={{color:'#79c0ff'}}>clicked the button</span> below, you might wait 
                <span style={{color:'#ff7b72'}}> at least 30 - 60 seconds</span> <br/><span style={{color: '#d2a8ff'}}>(fetching data from deployed API)</span>
              </p>
              <p className='px-4 text-white' style={{ position: 'relative', zIndex: 1 }}>
              <span style={{color:'#79c0ff'}}>2.</span> This is a <span style={{color:'#ff7b72'}}>Web Application</span>  that being as<span style={{color: '#d2a8ff'}}> Web crawler with Regular expression</span>  <br/> lib of <span style={{color:'#79c0ff'}}>Python.</span> 
              </p>
              <p className='px-4 pb-4 text-white' style={{ position: 'relative', zIndex: 1 }}>
                <span style={{color:'#79c0ff'}}>3.</span> This project was created for <span style={{color:'#79c0ff'}}>Theory of Computation,</span>  Computer Engineering,<span style={{color:'#ff7b72'}}> KMITL</span> 
              </p>
            </Box>
            {/* Glassmorphism Container */}
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                padding: '40px 40px',
                textAlign: 'center',
                boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Button with Loading State */}

              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: loading ? '#999' : '#fbc800',
                  color: 'black',
                  borderRadius: '30px',
                  padding: '10px 50px',
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(251, 200, 0, 0.5)',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: loading ? '#888' : '#fbbd00',
                  },
                }}
                onClick={fetchData}
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CircularProgress size={24} sx={{ color: 'white', marginRight: '10px' }} />
                    <Typography sx={{ color: 'white' }}>Loading... {percentage}%</Typography>
                  </div>
                ) : (
                  'Get Started'
                )}
              </Button>
            </Box>
          </div>
        </Box>
      </main>
    </body>

  );
}
