import { Box, TextField, Typography, InputAdornment, Button, Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Playfair_Display } from 'next/font/google'; // Import Playfair Display from next/font

// Import and configure Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  style: ['normal'], // Specify the styles you need
});


export const SearchBar: React.FC = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '320px' }}>
<Box
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('/img/bg3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'end',
    zIndex: -1, // Puts the background behind the content
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darkens the background
      zIndex: -1, // Ensure the overlay is behind the content
    },
  }}
/>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    gap: '30px',
                    height: '100%',
                    zIndex: 1 // Ensures the content is above the background
                }}
            >
                <Typography variant="h3" className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' sx={{
                    fontFamily: playfairDisplay.style.fontFamily,
                    fontWeight: '600',
                    color: 'white'
                    
                }}>Travel Global, Eat Local.</Typography>
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Search location of food"
                    sx={{
                        width: '600px',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        '& .MuiOutlinedInput-root': {
                            border: 'none', // Remove the border
                            '& fieldset': {
                                border: 'none', // Remove the border around the text field
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon sx={{ color: 'gray' }} /> {/* Search icon */}
                            </InputAdornment>
                        ),
                        sx: {
                            marginLeft: '15px',
                            color: 'gray',
                        }
                    }}
                />
                <Link href="/Favourite">
                    <div className="text-sm underline decoration-2 cursor-pointer text-[white] decoration-red-500">EXPLORE MAP</div>
                </Link>
                
            </Box>
        </Box>
    );
};
