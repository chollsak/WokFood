import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Checkbox from '@mui/material/Checkbox';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FlagIcon from '@mui/icons-material/Flag';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface FavouriteCardProps {
  id: number;
  title: string;
  type: string;
  country: string;
  description: string;
  imageUrl: string;
  onSelect: (id: number) => void;
  onUnSelect: (id: number) => void;
}

export const FavouriteCard: React.FC<FavouriteCardProps> = ({ id, title, type, country, description, imageUrl, onSelect, onUnSelect }) => {
    const [checked, setChecked] = React.useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        const id = event.target.value;
        setChecked(isChecked);
        if (isChecked) {
            onSelect(Number(id));
        } else {
            onUnSelect(Number(id));
        }
    };

  return (
    <Box className="flex justify-center">
        <Card sx={{ display: 'flex', borderRadius: 2, boxShadow: 3, maxWidth: 900, height: 250 }}>
            <CardMedia
                component="img"
                sx={{ height: 250, width: 300 }}
                image={imageUrl}
                alt={title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                    <Box className='flex justify-between'>
                        <Typography component="h3" variant="h5">
                            {title}
                        </Typography>
                        <Checkbox
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, paddingLeft: 0, paddingBottom: 0 }}
                            value={id}
                            checked={checked}
                            onChange={handleCheckboxChange}
                        />
                    </Box>
                    <Box className='flex justify-between mb-2 mr-[10px]'>
                        <Typography variant="body1" color="text.secondary">
                            <LocalDiningIcon className='mr-1'/>{type}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            <FlagIcon className='mr-1'/>{country}
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Box className='flex justify-end p-[16px]'>
                    <IconButton aria-label="up"  size="large" >
                        <KeyboardDoubleArrowUpIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="up"  size="large" >
                        <KeyboardDoubleArrowDownIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete"  size="large" >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    </Box>
    
  );
};