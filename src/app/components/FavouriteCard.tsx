import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface FavouriteCardProps {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  onSelect: () => void;
  onUnSelect: () => void;
}

export const FavouriteCard: React.FC<FavouriteCardProps> = ({ title, price, description, imageUrl, onSelect, onUnSelect }) => {
    const [checked, setChecked] = React.useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        if (isChecked) {
            onSelect();
        } else {
            onUnSelect();
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
                            checked={checked}
                            onChange={handleCheckboxChange}
                        />
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Box className='flex justify-end p-[16px]'>
                    <IconButton aria-label="delete"  size="large" >
                        <ImportExportIcon fontSize="inherit" />
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