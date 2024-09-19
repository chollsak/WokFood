'use client'

import React, { useState } from 'react';
import { Box } from '@mui/material';
import TitleBar from '../components/TitleBar';
import ManageFavBar from '../components/ManageFavBar';;
import { FavouriteCard } from '../components/FavouriteCard';

const Favourite: React.FC = () => {
    const [isSelect, setIsSelect] = useState(false);
    const [focusCount, setFocusCount] = useState(0);
    const [exportIdList, setExportIdList] = useState<number[]>([]);
    const [country, setCountry] = useState<string>("All");
    const [type, setType] = useState<string>("All");

    const foodList = [
        {
            "id": 1,
            "title": "Sushi",
            "description": "A traditional Japanese dish consisting of vinegared rice accompanied by a variety of ingredients such as seafood, vegetables, and sometimes tropical fruits.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Japan",
            "dishType": "Main"
          },
          {
            "id": 2,
            "title": "Pizza Margherita",
            "description": "A classic Italian pizza made with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Italy",
            "dishType": "Main"
          },
          {
            "id": 3,
            "title": "Tacos",
            "description": "Mexican dish consisting of small hand-sized tortillas filled with various ingredients such as meats, vegetables, and salsa.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Mexico",
            "dishType": "Main"
          },
          {
            "id": 4,
            "title": "Butter Chicken",
            "description": "A creamy and rich Indian dish made with chicken marinated in yogurt and spices, cooked in a tomato-based sauce.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "India",
            "dishType": "Main"
          },
          {
            "id": 5,
            "title": "Paella",
            "description": "A famous Spanish rice dish originally from Valencia, featuring seafood, chicken, and vegetables, cooked with saffron.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Spain",
            "dishType": "Main"
          },
          {
            "id": 6,
            "title": "Croissant",
            "description": "A buttery, flaky, and crescent-shaped French pastry, perfect for breakfast or a snack.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "France",
            "dishType": "Dessert"
          },
          {
            "id": 7,
            "title": "Peking Duck",
            "description": "A traditional Chinese dish known for its crispy skin, served with pancakes, scallions, and hoisin sauce.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "China",
            "dishType": "Main"
          },
          {
            "id": 8,
            "title": "Biryani",
            "description": "A mixed rice dish from India made with spices, rice, and meat (chicken, mutton, beef, or fish) or vegetables.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "India",
            "dishType": "Main"
          },
          {
            "id": 9,
            "title": "Cheeseburger",
            "description": "A popular American fast-food item consisting of a hamburger topped with melted cheese, served in a bun.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "USA",
            "dishType": "Main"
          },
          {
            "id": 10,
            "title": "Pho",
            "description": "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat, commonly made with beef or chicken.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Vietnam",
            "dishType": "Main"
          },
          {
            "id": 11,
            "title": "Lasagna",
            "description": "A classic Italian pasta dish made with layers of flat pasta, meat sauce, cheese, and béchamel sauce.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Italy",
            "dishType": "Main"
          },
          {
            "id": 12,
            "title": "Fried Chicken",
            "description": "A popular dish featuring chicken pieces coated with seasoned flour and deep-fried until crispy.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "USA",
            "dishType": "Main"
          },
          {
            "id": 13,
            "title": "Poutine",
            "description": "A Canadian dish made with french fries topped with cheese curds and gravy.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Canada",
            "dishType": "Snack"
          },
          {
            "id": 14,
            "title": "Shawarma",
            "description": "A Middle Eastern dish of thinly sliced marinated meat, usually served in a wrap or pita with vegetables and sauces.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Middle East",
            "dishType": "Main"
          },
          {
            "id": 15,
            "title": "Churros",
            "description": "A fried-dough pastry popular in Spain and Latin America, often sprinkled with sugar and served with chocolate sauce.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Spain",
            "dishType": "Dessert"
          },
          {
            "id": 16,
            "title": "Goulash",
            "description": "A traditional Hungarian stew made with meat, vegetables, and seasoned with paprika and other spices.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Hungary",
            "dishType": "Main"
          },
          {
            "id": 17,
            "title": "Falafel",
            "description": "A deep-fried ball or patty made from ground chickpeas or fava beans, popular in Middle Eastern cuisine.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Middle East",
            "dishType": "Snack"
          },
          {
            "id": 18,
            "title": "Kimchi",
            "description": "A staple Korean side dish made from fermented vegetables, typically Napa cabbage and Korean radishes, seasoned with chili pepper, garlic, and ginger.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "Korea",
            "dishType": "Side"
          },
          {
            "id": 19,
            "title": "Beef Wellington",
            "description": "An English dish consisting of beef fillet coated with pâté and duxelles, wrapped in puff pastry and baked.",
            "imgUrl": "https://www.tasteatlas.com/Images/Dishes/4dccb29bd2ee4ba1800699a4f6c23413.jpg?mw=1300",
            "country": "England",
            "dishType": "Main"
          }
    ]

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

    const handleFilter = () => {
        console.log(type);
        console.log(country);
    };

    const handleCountry = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.currentTarget.dataset.value)
            setCountry(event.currentTarget.dataset.value);
    }

    const handleType = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.currentTarget.dataset.value)
            setType(event.currentTarget.dataset.value);
    }

    return (
        <main>
            <Box className=' flex justify-center'>
                <Box className=' w-full  relative'>
                    <TitleBar isSelect={isSelect} type={type} country={country} handleType={handleType} handleCountry={handleCountry} handleFilter={handleFilter} onExport={handleExport} />
                    <Box className='flex flex-col gap-y-8 w-full mt-10 mb-24'>
                        { foodList.filter((item) => {
                            return (type.toLowerCase() === 'all' && country.toLowerCase() === 'all')
                            ? item
                            : (type.toLowerCase() === 'all' && country.toLowerCase() !== 'all') 
                            ? item.country.toLowerCase().includes(country.toLowerCase()) 
                            : (type.toLowerCase() !== 'all' && country.toLowerCase() === 'all')
                            ? item.dishType.toLowerCase().includes(type.toLowerCase())
                            : item.country.toLowerCase().includes(country.toLowerCase()) && item.dishType.toLowerCase().includes(type.toLowerCase());
                        }).map((item) => (
                            <FavouriteCard
                                key = {item.id}
                                id = {item.id}
                                title={item.title}
                                type={item.dishType}
                                country={item.country}
                                description={item.description}
                                imageUrl={item.imgUrl}
                                onSelect={handleSelect}
                                onUnSelect={handleBlur}
                            />
                        )) }
                    </Box>
                    { isSelect && <ManageFavBar selectCount={focusCount} totalCount={3} /> }
                </Box>
            </Box>
        </main>
    );
  };

export default Favourite;