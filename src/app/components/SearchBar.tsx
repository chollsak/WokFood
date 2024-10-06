// src/app/SearchBar.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, InputAdornment, Link, Menu, MenuItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Playfair_Display } from 'next/font/google';
import { useRouter } from 'next/navigation'; // Import useRouter

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
});

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export const SearchBar: React.FC = () => {
    const [searchInput, setSearchInput] = useState('');
    const [foodData, setFoodData] = useState<any>(null);
    const [filteredFoods, setFilteredFoods] = useState<any[]>([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter(); // Initialize useRouter

    const debouncedSearchInput = useDebounce(searchInput, 300);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data/data.json');
            const data = await response.json();
            setFoodData(data.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (debouncedSearchInput) {
            setAnchorEl(document.getElementById('search-input'));

            if (foodData) {
                const lowerCaseValue = debouncedSearchInput.toLowerCase();
                const results: any[] = [];

                Object.keys(foodData).forEach(regionKey => {
                    const region = foodData[regionKey];
                    const matchingFoods = region.Foods.filter((food: any) => 
                        food.FoodName.toLowerCase().includes(lowerCaseValue) || 
                        region.Region.toLowerCase().includes(lowerCaseValue)
                    );

                    if (matchingFoods.length > 0) {
                        results.push({ region: region.Region, foods: matchingFoods });
                    }
                });

                setFilteredFoods(results);
            } else {
                setFilteredFoods([]);
            }
        } else {
            setAnchorEl(null);
            setFilteredFoods([]);
        }
    }, [debouncedSearchInput, foodData]);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleFoodClick = (region: string, foodId: string) => {
        router.push(`/foodDetail/${region}/${foodId}`); // Adjust the path as necessary
        handleMenuClose(); // Close the dropdown menu
    };

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
                    zIndex: -1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        zIndex: -1,
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
                    zIndex: 1
                }}
            >
                <Typography variant="h3" className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' sx={{
                    fontFamily: playfairDisplay.style.fontFamily,
                    fontWeight: '600',
                    color: 'white'
                }}>
                    Travel Global, Eat Local.
                </Typography>
                <TextField
                    id="search-input"
                    size="small"
                    variant="outlined"
                    placeholder="Search by name or region"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    sx={{
                        width: '600px',
                        backgroundColor: 'white',
                        borderRadius: '20px',
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
                <Link href="/Favourite">
                    <div className="text-sm underline decoration-2 cursor-pointer text-[white] decoration-red-500">EXPLORE MAP</div>
                </Link>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        maxHeight: '300px',
                        width: '550px',
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                    },
                }}
            >
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((item, index) => (
                        <Box key={index}>
                            <MenuItem disabled>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.region}</Typography>
                            </MenuItem>
                            {item.foods.map((food: any) => (
                                <MenuItem key={food.FoodId} onClick={() => handleFoodClick(item.region, food.FoodId)}> {/* Pass FoodId and region here */}
                                    <Typography variant="body1">{food.FoodName}</Typography>
                                </MenuItem>
                            ))}
                        </Box>
                    ))
                ) : (
                    <MenuItem disabled>
                        <Typography variant="body1">No results found</Typography>
                    </MenuItem>
                )}
            </Menu>
        </Box>
    );
};
