import React, { useState } from 'react'
import { Box, TextField, Typography, InputAdornment, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import "@fontsource/literata";

interface TitleBarProps {
    isSelect: boolean;
    handleType: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    handleCountry: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onExport: () => void;
    handleFilter: () => void;
}

const TitleBar: React.FC<TitleBarProps> = ({ isSelect, handleType, handleCountry, onExport, handleFilter }) => {
    const [showCountryFilterMenu, setShowCountryFilterMenu] = useState(false);
    const [showTypeFilterMenu, setShowTypeFilterMenu] = useState(false);

    const countryList = [
        "Japan",
        "Italy",
        "Mexico",
        "India",
        "Spain",
        "France",
        "China",
        "USA",
        "Vietnam",
        "Canada",
        "Middle East",
        "Hungary",
        "Korea",
        "England",
        "Greece"
    ]

    const typeList = [
        "Main",
        "Dessert",
        "Snack",
        "Side",
        "Beverage"
    ]

    const handleCountryFilterMenu = () => {
        setShowCountryFilterMenu(!showCountryFilterMenu);
    }

    const handleTypeFilterMenu = () => {
        setShowTypeFilterMenu(!showTypeFilterMenu);
    }

    const handleCloseMenu = () => {
        setShowTypeFilterMenu(false);
        setShowCountryFilterMenu(false);
    }

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
                        marginBottom: '1rem',
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
                <Box className='flex gap-x-10 text-white'>
                    <Box className='relative'>
                        <Typography onClick={handleTypeFilterMenu}
                        sx={{
                            fontFamily: 'Literata, serif',
                            fontWeight: '200',
                            color: 'white',
                            marginBottom: '1rem',
                            zIndex: 2,
                            textDecoration: "underline",
                            textDecorationColor: "#ef4444",
                            textDecorationThickness: "2px",
                            cursor: "pointer",
                        }}>
                            By Food Type
                        </Typography>
                        { showTypeFilterMenu && 
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            position: "absolute",
                            right: 0,
                            backgroundColor: "#f1f1f1",
                            minWidth: "100px",
                            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                            zIndex: 1,
                        }}>
                            <a key="All" data-value="all" className='text-black py-[10px] px-[12px] no-underline cursor-pointer text-base' onClick={handleType}>All</a>
                            { typeList.map((item) => (
                                <a 
                                    key={item}
                                    data-value={item.toLowerCase()}
                                    className='text-black py-[10px] px-[12px] no-underline cursor-pointer text-base' 
                                    onClick={handleType}
                                >
                                    {item}
                                </a>
                            )) }
                            
                        </Box> }
                    </Box>
                    <Box className='relative'>
                    <Typography onClick={handleCountryFilterMenu}
                    sx={{
                        fontFamily: 'Literata, serif',
                        fontWeight: '200',
                        color: 'white',
                        marginBottom: '1rem',
                        zIndex: 2,
                        textDecoration: "underline",
                        textDecorationColor: "#ef4444",
                        textDecorationThickness: "2px",
                        cursor: "pointer",
                    }}>
                        By Country
                    </Typography>
                    { showCountryFilterMenu && 
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            position: "absolute",
                            left: 0,
                            backgroundColor: "#f1f1f1",
                            minWidth: "100px",
                            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                            zIndex: 1,
                        }}>
                            <a key="All" data-value="all" className='text-black py-[10px] px-[12px] no-underline cursor-pointer text-base' onClick={handleCountry}>All</a>
                            { countryList.map((item) => (
                                <a 
                                    key={item}
                                    data-value={item.toLowerCase()}
                                    className='text-black py-[10px] px-[12px] no-underline cursor-pointer text-base' 
                                    onClick={handleCountry}
                                >
                                    {item}
                                </a>
                            )) }
                        </Box> }
                    </Box>
                </Box>
                <Box className='flex flex-row gap-x-5 mb-8'>
                    <Button className='bg-yellow-400 text-black font-bold w-[180px] h-[50px]' variant="contained" startIcon={<SelectAllIcon />} onClick={handleFilter}>Select All</Button>
                    <Button className='bg-green-700 font-bold w-[180px] h-[50px]' variant="contained" endIcon={<FileDownloadIcon />} disabled={!isSelect} onClick={onExport} >Export CSV</Button>
                </Box>
                <hr className='w-4/5 mb-4 bg-black' />
                <hr className='w-3/5' />
            </Box>
        </Box>
    );
};
export default TitleBar;
