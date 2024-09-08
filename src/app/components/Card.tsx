'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Link from 'next/link';

interface FoodCardProps {
    // Define any props here, for example:
    name?: string;
    img?: string;
    description?: string;
  }

export const FoodCard: React.FC<FoodCardProps> = ({ name, img, description }) => {
  return (
    <Link className="w-fit" href='/'>
    <Card className='hover:opacity-80 transition duration-150 ease-out' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardHeader
        className='text-bold'
        action={
          <IconButton aria-label="settings">
            <PostAddIcon />
          </IconButton>
        }
        title={
            <Typography variant="h4" fontSize={24} component="span">
                {name}
            </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Link>
    
  );
}