'use client'

import React, { useState } from 'react';
import { Box } from '@mui/material';
import TitleBar from '../components/TitleBar';
import ManageFavBar from '../components/ManageFavBar';;
import { FoodCard } from '../components/FoodCard';
import { FavouriteCard } from '../components/FavouriteCard';

const Favourite: React.FC = () => {
    const [isSelect, setIsSelect] = useState(false);
    const [focusCount, setFocusCount] = useState(0);

    const handleSelect = () => {
        setFocusCount((prevCount) => prevCount + 1);
        setIsSelect(true);
    };

    const handleBlur = () => {
        setFocusCount((prevCount) => {
        const newCount = prevCount - 1;
        if (newCount === 0) {
            setIsSelect(false);
        }
        return newCount;
        });
    };

    return (
        <main>
            <Box className='my-40 flex justify-center'>
                <Box className='bg-white w-full lg:w-3/5 relative'>
                    <TitleBar isSelect={isSelect} />
                    <Box className='flex flex-col gap-y-8 w-full mt-10 mb-24'>
                        <FavouriteCard
                            title="Pesto Pasta"
                            price={15}
                            description="Made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request."
                            imageUrl="https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300"
                            onSelect={handleSelect}
                            onUnSelect={handleBlur}
                        />
                        <FavouriteCard
                            title="Pesto Pasta"
                            price={15}
                            description="Made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request."
                            imageUrl="https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300"
                            onSelect={handleSelect}
                            onUnSelect={handleBlur}
                        />
                        <FavouriteCard
                            title="Pesto Pasta"
                            price={15}
                            description="Made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request."
                            imageUrl="https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300"
                            onSelect={handleSelect}
                            onUnSelect={handleBlur}
                        />
                    </Box>
                    { isSelect && <ManageFavBar selectCount={focusCount} totalCount={3} /> }
                </Box>
            </Box>
        </main>
    );
  };

export default Favourite;
