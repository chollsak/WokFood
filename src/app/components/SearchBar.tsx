import { Box, TextField, Typography, InputAdornment, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar: React.FC = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '420px' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('/img/bg3.jpg')`,
                    backgroundSize: 'cover',
                    backgroundColor:'black',
                    backgroundPosition: 'end',
                    opacity: 1,
                    zIndex: -1, // Puts the background behind the content
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
                    gap: '70px',
                    height: '100%',
                    zIndex: 1 // Ensures the content is above the background
                }}
            >
                <Typography variant="h2" sx={{
                    fontFamily: 'Literata, serif',
                    fontWeight: '600',
                    color: 'white'
                }}>Travel Global, Eat Local.</Typography>
                <TextField
                    variant="outlined"
                    placeholder="Search location of food"
                    sx={{
                        width: '800px',
                        backgroundColor: 'white',
                        borderRadius: '50px',
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
                <div className="text-md underline decoration-2 decoration-red-500">EXPLORE MAP</div>
            </Box>
        </Box>
    );
};
