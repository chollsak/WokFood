import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface FoodCardProps {
    // Define any props here, for example:
    name?: string;
    img?: string;
    description?: string;
    country_name?: string;
    country_flag?: string;
  }

export const FoodCard: React.FC<FoodCardProps> = ({ name, img, description, country_name, country_flag }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardHeader
        className='text-bold'
        avatar={
            <Avatar
                variant="square"
                alt="Remy Sharp"
                src={country_flag}
                sx={{ width: 36, height: 30 }}
            >
            </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
        }
        title={
            <Typography variant="h4" fontSize={24} component="span">
                {name}
            </Typography>
        }
        subheader={country_name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}