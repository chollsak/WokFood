import React from 'react'
import { Box, TextField, Typography, InputAdornment, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import "@fontsource/literata";

interface TitleBarProps {
    isSelect: boolean;
}

const TitleBar: React.FC<TitleBarProps> = ({isSelect}) => {
    return (
        <Box sx={{ position: 'relative', width: '100%', padding: '80px 25px 0 25px' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    height: '100%',
                    zIndex: 1 // Ensures the content is above the background
                }}
            >
                <Typography variant="h2" sx={{
                    fontFamily: 'Literata, serif',
                    fontWeight: '600',
                    color: 'black',
                    marginBottom: '2.2rem'
                }}>My Favourite Foods</Typography>
                <TextField
                    variant="outlined"
                    placeholder="Search your favourite foods"
                    sx={{
                        width: '80%',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                        borderRadius: '50px',
                        marginBottom: '2rem',
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
                <Box className='flex flex-row gap-x-5 mb-8'>
                    <Button className='bg-yellow-400 text-black font-bold w-[180px] h-[50px]' variant="contained" startIcon={<SelectAllIcon />}>Select All</Button>
                    <Button className='bg-green-700 font-bold w-[180px] h-[50px]' variant="contained" endIcon={<FileDownloadIcon />} disabled={!isSelect}>Export CSV</Button>
                </Box>
                <hr className='w-4/5 mb-4 bg-black' />
                <hr className='w-3/5' />
            </Box>
        </Box>
    );
};
export default TitleBar;
