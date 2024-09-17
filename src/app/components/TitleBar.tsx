import React from 'react'
import { Box, TextField, Typography, InputAdornment, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import "@fontsource/literata";

interface TitleBarProps {
    isSelect: boolean;
    onExport: () => void;
}

const TitleBar: React.FC<TitleBarProps> = ({ isSelect, onExport }) => {
    return (
        <Box sx={{ position: 'relative', width: '100%', padding: '80px 25px 0 25px' }}>
            {/* Background image and overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(https://www.tasteatlas.com/Content/layout/images/home-page/home-map.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0, // Background is below the content
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with opacity
                        zIndex: -2 // Ensure overlay is above background but below content
                    }
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
                    height: '100%',
                    zIndex: 1 // Ensures the content is above both background and overlay
                }}
            >
                <Typography variant="h2" sx={{
                    fontFamily: 'Literata, serif',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '2.2rem',
                    zIndex: 2
                }}>My Favourite Foods</Typography>
                <TextField
                    variant="outlined"
                    placeholder="Search your favourite foods"
                    sx={{
                        width: '50%',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                        borderRadius: '50px',
                        marginBottom: '2rem',
                        '& .MuiOutlinedInput-root': {
                            border: 'none',
                            '& fieldset': {
                                border: 'none',
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon sx={{ color: 'gray' }} />
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
                    <Button className='bg-green-700 font-bold w-[180px] h-[50px]' variant="contained" endIcon={<FileDownloadIcon />} disabled={!isSelect} onClick={onExport} >Export CSV</Button>
                </Box>
                <hr className='w-4/5 mb-4 bg-black' />
                <hr className='w-3/5' />
            </Box>
        </Box>
    );
};
export default TitleBar;
