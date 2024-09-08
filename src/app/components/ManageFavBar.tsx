import React, { useState } from 'react'
import { Box, Button, Typography } from "@mui/material";
import { Poppins } from "next/font/google";
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

interface ManageFavBarProps {
    selectCount: number;
    totalCount: number;
}

const ManageFavBar: React.FC<ManageFavBarProps> = ({selectCount, totalCount}) => {
    return (
        <Box
            className={`flex justify-center w-full h-fit p-0 m-0 fixed bottom-0 left-0 transition-transform duration-1000 bg-black bg-opacity-80 ${poppins.className}`}
            sx={{
                background: "gray",
                zIndex:'5'
            }}
        >
            <Box className='flex flex-row gap-x-5 p-5'>
                <Button className='bg-yellow-400 text-black font-bold w-[180px] h-[50px]' variant="contained" startIcon={ <ReplayIcon /> }>Deselect All</Button>
                <Button className='border-red-500 bg-white font-bold text-red-500 w-[180px] h-[50px]' variant="outlined" endIcon={ <DeleteIcon /> }>Delete</Button>
            </Box>
            <Box className='flex justify-items-end'>
                <Typography color='white'>
                    {selectCount} / {totalCount}
                </Typography>
            </Box>
        </Box>
    );
};

export default ManageFavBar;
