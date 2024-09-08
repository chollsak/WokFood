'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface FoodDetail {
    name: string;
    img: string;
    description: string;
}

export const FoodDetail: React.FC<FoodDetail> = ({ name, img, description }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: '20px auto' }}>
      {/* Image Section */}
      <CardMedia
        component="img"
        height="400"
        image={img}
        alt={name}
      />

      {/* Food Details Section */}
      <CardContent>
        <Typography variant="h4" component="div" fontWeight="bold" marginBottom="16px">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
