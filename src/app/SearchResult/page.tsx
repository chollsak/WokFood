'use client'

import React from 'react';
import { Box } from '@mui/material';
import {FoodCard} from '../components/Card';
import {CountryBanner} from '../components/CountryBanner'

const SearchResult: React.FC = () => {
  return (
    <Box >
      <CountryBanner
        countryName='Japan'
        bannerImage="https://cdn.tasteatlas.com/Images/Regions/86e06af9627b4023b3472086f1c7d624.jpg?mw=1900"
      />
      <Box className="flex justify-center flex-col items-center">
        <Box className='bg-white  w-4/5 p-7' >
          <h1 className='text-black mb-5 text-xl font-semibold text-center'>
            Explore Your Favourite Dish!
          </h1>
          <Box className="grid grid-cols-3 justify-items-center gap-x-8 gap-y-8 relative">
            <FoodCard
              name="Ramen"
              description="Ramen is a noodle soup that first appeared in Japan..."
              img="https://th.bing.com/th/id/R.fd95719aa643338db5731aaaeaefe180?rik=3cKvpTwjvg5owQ&riu=http%3a%2f%2flooknoodles.com%2fwp-content%2fuploads%2f2017%2f05%2fKimchi-Ramen-Japanese.jpg&ehk=IfmBalY91qrrPSsDCJKlcJp104lZpSyh40DflMVwEO4%3d&risl=&pid=ImgRaw&r=0"
            />  

            <FoodCard
              name="Pad Thai"
              img="https://th.bing.com/th/id/OIP.kQYn_5oxDjqdLrB3wEc0xAHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"
              description="Pad Thai is a fire wok noodle that first appeared in ThaiLand..."
            />

            <FoodCard
              name="Ramen"
              description="Ramen is a noodle soup that first appeared in Japan..."
              img="https://th.bing.com/th/id/R.fd95719aa643338db5731aaaeaefe180?rik=3cKvpTwjvg5owQ&riu=http%3a%2f%2flooknoodles.com%2fwp-content%2fuploads%2f2017%2f05%2fKimchi-Ramen-Japanese.jpg&ehk=IfmBalY91qrrPSsDCJKlcJp104lZpSyh40DflMVwEO4%3d&risl=&pid=ImgRaw&r=0"
            />

            <FoodCard
              name="Ramen"
              description="Ramen is a noodle soup that first appeared in Japan..."
              img="https://th.bing.com/th/id/R.fd95719aa643338db5731aaaeaefe180?rik=3cKvpTwjvg5owQ&riu=http%3a%2f%2flooknoodles.com%2fwp-content%2fuploads%2f2017%2f05%2fKimchi-Ramen-Japanese.jpg&ehk=IfmBalY91qrrPSsDCJKlcJp104lZpSyh40DflMVwEO4%3d&risl=&pid=ImgRaw&r=0"
            />

            <FoodCard
              name="Ramen"
              description="Ramen is a noodle soup that first appeared in Japan..."
              img="https://th.bing.com/th/id/R.fd95719aa643338db5731aaaeaefe180?rik=3cKvpTwjvg5owQ&riu=http%3a%2f%2flooknoodles.com%2fwp-content%2fuploads%2f2017%2f05%2fKimchi-Ramen-Japanese.jpg&ehk=IfmBalY91qrrPSsDCJKlcJp104lZpSyh40DflMVwEO4%3d&risl=&pid=ImgRaw&r=0"
            />

            <FoodCard
              name="Ramen"
              description="Ramen is a noodle soup that first appeared in Japan..."
              img="https://th.bing.com/th/id/R.fd95719aa643338db5731aaaeaefe180?rik=3cKvpTwjvg5owQ&riu=http%3a%2f%2flooknoodles.com%2fwp-content%2fuploads%2f2017%2f05%2fKimchi-Ramen-Japanese.jpg&ehk=IfmBalY91qrrPSsDCJKlcJp104lZpSyh40DflMVwEO4%3d&risl=&pid=ImgRaw&r=0"
            />
          </Box>
        </Box>
      </Box>  
    </Box>
  );
};

export default SearchResult;
