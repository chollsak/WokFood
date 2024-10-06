
import React from 'react';
import { Box, Typography } from '@mui/material';

import { Playfair_Display } from 'next/font/google'; // Import Playfair Display from next/font
import "../globals.css";
import src from 'node_modules/@emotion/styled/dist/declarations/src';
import { Description, Star, StarBorder } from '@mui/icons-material';
import ReactCountryFlag from 'react-country-flag';
import Carousel from '../components/Carousel';
import { SearchBar } from '../components/SearchBar';
import AsiaCarousel from '../components/AsiaCarousel';
import EuropeCarousel from '../components/EuropeCarousel';
import OceaniaCarousel from '../components/OceaniaCarousel';
import AfricaCarousel from '../components/AfricaCarousel';
import MiddleEastCarousel from '../components/MiddleEastCarousel';
import SouthAmericaCarousel from '../components/SouthAmericaCarousel';
import NorthAmericaCarousel from '../components/NorthAmericaCarousel';

// Import and configure Playfair Display font
const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify the weights you need
    style: ['normal'], // Specify the styles you need
});

export default function Home() {

    return (
        <main>
            <SearchBar />
            <div className='mb-12' />
            <Box className="ml-40 mr-40">
                <Box>
                    <Typography
                        variant='h5'
                        sx={{
                            fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                            fontWeight: '800',
                            color: 'black',
                            padding: '5px'
                        }}
                    >
                        Asia Catologed
                    </Typography>
                    <AsiaCarousel />
                    <hr style={{ border: 'solid 0.5px #d8d8d8', marginTop: '40px' }} />
                    <Box>
                        <Typography
                            variant='h5'
                            className='mt-12'
                            sx={{
                                fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                                fontWeight: '800',
                                color: 'black',
                                padding: '5px',

                            }}
                        >
                            Europe Catologed
                        </Typography>
                        <EuropeCarousel />

                    </Box>
                </Box>

                <Typography
                    variant='h5'
                    className='mt-20'
                    sx={{
                        fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                        fontWeight: '800',
                        color: 'black',
                        padding: '5px',

                    }}
                >
                    Recommended Dish for you!
                </Typography>

                <Box display="flex" alignItems="flex-start" className="mt-18">
                    <Box
                        component="img"
                        src="./img/foodeffect2.png"
                        alt="Food Effect"
                        width={800} // Increased width for a larger image
                        sx={{
                            marginRight: 2,
                            borderRadius: '8px',
                            objectFit: 'cover',
                        }}
                    />
                    <Box>

                        <Box className="p-2">
                            <div className='mt-12 flex flex-col'>
                                <div className='flex justify-between'>
                                    <Typography variant='h4' sx={{
                                        fontFamily: playfairDisplay.style.fontFamily,
                                        fontWeight: '800',
                                        color: 'black',

                                    }}>Fish and Chips</Typography>
                                    <Box className='flex items-start gap-2 mb-6'>
                                        <ReactCountryFlag
                                            countryCode="GB" // Correct attribute name
                                            style={{ width: '30px', height: '30px' }} // Unique attribute name for style
                                            svg
                                        />
                                        <span className='text-lg text-gray-500'>{'ENGLAND'}</span>
                                    </Box>
                                </div>

                                <div className='flex-col justify-center items-center mb-8'>
                                    <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                    <hr style={{ width: '70px', borderColor: 'black' }} />
                                </div>

                                <p className='text-md mb-3 text-gray-500'>Fish and chips is a hot dish consisting of fried fish in batter, served with chips. The dish originated in England, where these two components had been introduced from separate immigrant cultures; it is not known who combined them.</p>



                                <div className='flex gap-2 items-center'>
                                    <div className='flex items-center'>
                                        <Typography variant='h5' sx={{
                                            fontWeight: '600',
                                            color: 'black',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            4.0
                                            <div className='flex ml-2'>
                                                {[...Array(5)].map((_, index) => (
                                                    index < 4 ? (
                                                        <Star key={index} sx={{ color: '#f8533d', fontSize: '1.5rem' }} />
                                                    ) : (
                                                        <StarBorder key={index} sx={{ color: '#f8533d', fontSize: '1.5rem' }} />
                                                    )
                                                ))}
                                            </div>
                                        </Typography>
                                    </div>
                                    <Typography variant='body2' sx={{
                                        color: 'gray',
                                    }}>
                                        tasteatlas.com
                                    </Typography>

                                </div>
                                <div className='flex items-center'>
                                    <Typography variant='h6' sx={{
                                        fontWeight: '600',
                                        color: 'black',
                                        alignItems: 'center',
                                    }}>
                                        <span>Ranked at</span>
                                        <span className='text-[#f8533d] mx-2'>33</span>
                                        <span>on</span>
                                        <span className='text-[#f8533d] mx-2'>The world’s best</span>
                                        <span style={{
                                            fontSize: '15px',
                                            fontWeight: '100', color: 'gray',
                                        }}>edition.cnn.com</span>
                                    </Typography>
                                </div>




                            </div>
                        </Box>



                    </Box>
                </Box>
                <Box className="p-2">
                    <div className='mt-28 mb-10 flex flex-col-reverse md:flex-row'>
                        <div className='flex-1 md:mr-6'>
                            <div className='flex justify-between mb-4'>
                                <Typography variant='h4' sx={{
                                    fontFamily: playfairDisplay.style.fontFamily,
                                    fontWeight: '800',
                                    color: 'black',
                                }}>
                                    Hainanese Chicken Rice
                                </Typography>
                                <Box className='flex items-start gap-2 mb-6'>
                                    <ReactCountryFlag
                                        countryCode="SG"
                                        style={{ width: '30px', height: '30px' }}
                                        svg
                                    />
                                    <span className='text-lg text-gray-500'>{'SINGAPORE'}</span>
                                </Box>
                            </div>

                            <div className='flex-col justify-center items-center mb-8'>
                                <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                <hr style={{ width: '70px', borderColor: 'black' }} />
                            </div>

                            <p className='text-md mb-3 text-gray-500'>
                                Hainanese chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes. It was created by immigrants from Hainan in southern China and adapted from the Hainanese dishes of Wenchang chicken and Wenchang chicken rice.
                            </p>

                            <div className='flex gap-2 items-center'>
                                <div className='flex items-center'>
                                    <Typography variant='h5' sx={{
                                        fontWeight: '600',
                                        color: 'black',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        4.9
                                        <div className='flex ml-2'>
                                            {[...Array(5)].map((_, index) => (
                                                index < 5 ? (
                                                    <Star key={index} sx={{ color: '#f8533d', fontSize: '1.5rem' }} />
                                                ) : (
                                                    <StarBorder key={index} sx={{ color: '#f8533d', fontSize: '1.5rem' }} />
                                                )
                                            ))}
                                        </div>
                                    </Typography>
                                </div>
                                <Typography variant='body2' sx={{
                                    color: 'gray',
                                }}>
                                    tasteatlas.com
                                </Typography>
                            </div>

                            <div className='flex items-center'>
                                <Typography variant='h6' sx={{
                                    fontWeight: '600',
                                    color: 'black',
                                    alignItems: 'center',
                                }}>
                                    <span>Ranked at</span>
                                    <span className='text-[#f8533d] mx-2'>45</span>
                                    <span>on</span>
                                    <span className='text-[#f8533d] mx-2'>The world’s best</span>
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: '100', color: 'gray',
                                    }}>edition.cnn.com</span>
                                </Typography>

                            </div>
                        </div>
                        <div className='flex-shrink-0'>
                            {/* Replace this with your picture */}
                            <img src='./img/foodeffect3.png' alt='Dish' width={700} style={{ marginTop: '-100px' }} />
                        </div>
                    </div>
                </Box>

                <Box>
                    <Typography
                        variant='h5'
                        className='mt-5'
                        sx={{
                            fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                            fontWeight: '800',
                            color: 'black',
                            padding: '5px'
                        }}
                    >
                        Oceania Catologed
                    </Typography>
                    <OceaniaCarousel />
                    <hr style={{ border: 'solid 0.5px #d8d8d8', marginTop: '40px' }} />
                    <Box>
                        <Typography
                            variant='h5'
                            className='mt-12'
                            sx={{
                                fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                                fontWeight: '800',
                                color: 'black',
                                padding: '5px',

                            }}
                        >
                            Africa Catologed
                        </Typography>
                        <AfricaCarousel />
                        <hr style={{ border: 'solid 0.5px #d8d8d8', marginTop: '40px' }} />
                    </Box>
                </Box>

                <Box>
                    <Typography
                        variant='h5'
                        className='mt-12'
                        sx={{
                            fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                            fontWeight: '800',
                            color: 'black',
                            padding: '5px'
                        }}
                    >
                        Middle East Catologed
                    </Typography>
                    <MiddleEastCarousel />


                    <Typography
                        variant='h5'
                        className='mt-20'
                        sx={{
                            fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                            fontWeight: '800',
                            color: 'black',
                            padding: '5px',

                        }}
                    >
                        Recommended Dish for you!
                    </Typography>

                    <Box display="flex" alignItems="flex-start" className="mt-18">
                        <Box
                            component="img"
                            className='mr-14'
                            src="./img/gillchick.png"
                            alt="Food Effect"
                            width={500} // Increased width for a larger image
                            sx={{
                                marginRight: 2,
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        />
                        <Box>

                            <Box className="p-2">
                                <div className='mt-12 flex flex-col'>
                                    <div className='flex justify-between'>
                                        <Typography variant='h4' sx={{
                                            fontFamily: playfairDisplay.style.fontFamily,
                                            fontWeight: '800',
                                            color: 'black',

                                        }}>Grilled Chicken Tacos</Typography>
                                        <Box className='flex items-start gap-2 mb-6'>
                                            <ReactCountryFlag
                                                countryCode="MX" // Correct attribute name
                                                style={{ width: '30px', height: '30px' }} // Unique attribute name for style
                                                svg
                                            />
                                            <span className='text-lg text-gray-500'>{'MAXICO'}</span>
                                        </Box>
                                    </div>

                                    <div className='flex-col justify-center items-center mb-8'>
                                        <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                        <hr style={{ width: '70px', borderColor: 'black' }} />
                                    </div>

                                    <p className='text-md mb-3 text-gray-500'>Mexican street tacos are smaller tacos, typically served on corn tortillas.  They are small in size, making it easier for a “street traveler” to enjoy a quick meal. The filling is served on two small corn tortillas so that they don’t rip or tear when piled high with toppings.</p>



                                    <div className='flex gap-2 items-center'>
                                        <div className='flex items-center'>
                                            <Typography variant='h5' sx={{
                                                fontWeight: '600',
                                                color: 'black',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                                4.6
                                                <div className='flex ml-2'>
                                                    {[...Array(5)].map((_, index) => (
                                                        index < 5 ? (
                                                            <Star key={index} sx={{ color: '#f8533d', fontSize: '1.5rem' }} />
                                                        ) : (
                                                            <StarBorder key={index} sx={{ color: '#f8533d', fontSize: '1.5rem' }} />
                                                        )
                                                    ))}
                                                </div>
                                            </Typography>
                                        </div>
                                        <Typography variant='body2' sx={{
                                            color: 'gray',
                                        }}>
                                            tasteatlas.com
                                        </Typography>

                                    </div>
                                    <div className='flex items-center'>
                                        <Typography variant='h6' sx={{
                                            fontWeight: '600',
                                            color: 'black',
                                            alignItems: 'center',
                                        }}>
                                            <span>Ranked at</span>
                                            <span className='text-[#f8533d] mx-2'>27</span>
                                            <span>on</span>
                                            <span className='text-[#f8533d] mx-2'>The world’s best</span>
                                            <span style={{
                                                fontSize: '15px',
                                                fontWeight: '100', color: 'gray',
                                            }}>edition.cnn.com</span>
                                        </Typography>
                                    </div>




                                </div>

                            </Box>



                        </Box>

                    </Box>

                </Box>
                <Box className="p-2">
                    <div className='mt-28 flex flex-col-reverse gap-18 md:flex-row'>
                        <div className='flex-1 md:mr-6'>
                            <div className='flex justify-between mb-4'>
                                <Typography variant='h4' sx={{
                                    fontFamily: playfairDisplay.style.fontFamily,
                                    fontWeight: '800',
                                    color: 'black',
                                }}>
                                    Kushary
                                </Typography>
                                <Box className='flex items-start gap-2 mb-6'>
                                    <ReactCountryFlag
                                        countryCode="EG"
                                        style={{ width: '30px', height: '30px' }}
                                        svg
                                    />
                                    <span className='text-lg text-gray-500'>{'EGYPT'}</span>
                                </Box>
                            </div>

                            <div className='flex-col justify-center items-center mb-8'>
                                <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                <hr style={{ width: '70px', borderColor: 'black' }} />
                            </div>

                            <p className='text-md mb-3 text-gray-500'>
                            Kushary is a classic Egyptian comfort food. It is a popular street food in Cairo and throughout Egypt. Kushary is a delicious combination of common pantry grains, chickpeas, crispy onions, garlic, and savory-tangy vinegar and tomato sauces!
                            </p>

                            <div className='flex gap-2 items-center'>
                                <div className='flex items-center'>
                                    <Typography variant='h5' sx={{
                                        fontWeight: '600',
                                        color: 'black',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        3.8
                                        <div className='flex ml-2'>
                                            {[...Array(5)].map((_, index) => (
                                                index < 4 ? (
                                                    <Star key={index} sx={{ color: '#f8533d', fontSize: '1.5rem' }} />
                                                ) : (
                                                    <StarBorder key={index} sx={{ color: '#f8533d', fontSize: '1.5rem' }} />
                                                )
                                            ))}
                                        </div>
                                    </Typography>
                                </div>
                                <Typography variant='body2' sx={{
                                    color: 'gray',
                                }}>
                                    tasteatlas.com
                                </Typography>
                            </div>

                            <div className='flex items-center'>
                                <Typography variant='h6' sx={{
                                    fontWeight: '600',
                                    color: 'black',
                                    alignItems: 'center',
                                }}>
                                    <span>Ranked at</span>
                                    <span className='text-[#f8533d] mx-2'>87</span>
                                    <span>on</span>
                                    <span className='text-[#f8533d] mx-2'>The world’s best</span>
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: '100', color: 'gray',
                                    }}>edition.cnn.com</span>
                                </Typography>

                            </div>
                        </div>
                        <div className='flex-shrink-0 '>
                            {/* Replace this with your picture */}
                            <img src='./img/kushary.png' alt='Dish' width={700} style={{ marginTop: '-100px', marginRight:'-150px' }} />
                        </div>
                    </div>
                </Box>
                <Box>
                    <Typography
                        variant='h5'
                        className='mt-12'
                        sx={{
                            fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                            fontWeight: '800',
                            color: 'black',
                            padding: '5px',

                        }}
                    >
                        South America Catologed
                    </Typography>
                    <SouthAmericaCarousel />

                </Box>
                <hr style={{ border: 'solid 0.5px #d8d8d8', marginTop: '40px' }} />
                <Box>
                    <Typography
                        variant='h5'
                        className='mt-12'
                        sx={{
                            fontFamily: playfairDisplay.style.fontFamily, // Apply the Playfair Display font
                            fontWeight: '800',
                            color: 'black',
                            padding: '5px',

                        }}
                    >
                        North America Catologed
                    </Typography>
                    <NorthAmericaCarousel />

                </Box>




            </Box>








            <Box sx={{ height: '500px' }}></Box>

        </main>
    );
}