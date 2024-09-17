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
    const [exportIdList, setExportIdList] = useState<number[]>([]);

    const handleSelect = (id: number) => {
        setFocusCount((prevCount) => prevCount + 1);
        setIsSelect(true);
        setExportIdList([...exportIdList, id].sort())
    };

    const handleBlur = (id: number) => {
        setFocusCount((prevCount) => {
        const newCount = prevCount - 1;
        if (newCount === 0) {
            setIsSelect(false);
        }
        setExportIdList([...exportIdList.filter(num => num !== id)]);
        return newCount;
        });
    };

    const handleExport = () => {
        console.log(exportIdList);
    };

    return (
        <main>
            <Box className=' flex justify-center'>
                <Box className=' w-full  relative'>
                    <TitleBar isSelect={isSelect} onExport={handleExport} />
                    <Box className='flex flex-col gap-y-8 w-full mt-10 mb-24'>
                        <FavouriteCard
                            id = {1}
                            title="Pesto Pasta"
                            price={15}
                            description="Made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request."
                            imageUrl="https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300"
                            onSelect={handleSelect}
                            onUnSelect={handleBlur}
                        />
                        <FavouriteCard
                            id = {2}
                            title="Pesto Pasta"
                            price={15}
                            description="Made with our homemade basil pine nuts pesto sauce. Gluten free pasta available upon request."
                            imageUrl="https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300"
                            onSelect={handleSelect}
                            onUnSelect={handleBlur}
                        />
                        <FavouriteCard
                            id = {3}
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