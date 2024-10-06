import { Box, Button, Typography } from '@mui/material'
import { Playfair_Display } from 'next/font/google';
import React from 'react'
import AsiaCarousel from '../components/AsiaCarousel';
import OceaniaCarousel from '../components/OceaniaCarousel';
import EuropeCarousel from '../components/EuropeCarousel';
import MiddleEastCarousel from '../components/MiddleEastCarousel';
import AfricaCarousel from '../components/AfricaCarousel';
import NorthAmericaCarousel from '../components/NorthAmericaCarousel';
import SouthAmericaCarousel from '../components/SouthAmericaCarousel';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify the weights you need
    style: ['normal'], // Specify the styles you need
});

const regionImages = {
    oceania: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJyYVK0P3AYZuiM-6sMQ4yOeEeJaRy3pt6n7MdtL1Tr-rYUi0ZAZ3I1xzd3eqRxFJvzM&usqp=CAU',
    asia: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e305603b-4629-4f4c-a6f8-3be3f0731120/deqbfaj-f1772157-becc-45c9-ae91-3b0c810c2ffe.jpg/v1/fill/w_1024,h_774,q_75,strp/asia_union_republic_s_flag_by_mueandukdahan_deqbfaj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc0IiwicGF0aCI6IlwvZlwvZTMwNTYwM2ItNDYyOS00ZjRjLWE2ZjgtM2JlM2YwNzMxMTIwXC9kZXFiZmFqLWYxNzcyMTU3LWJlY2MtNDVjOS1hZTkxLTNiMGM4MTBjMmZmZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wY4Dr_TIQicXGr7pcD83mLNkEIVyYk6muZHfHQ17mq8',
    "middle-east": 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb5f3e6e-a9f0-45d9-9dfc-a77a77ccaf7d/dgv8itb-fbb168e3-28a8-4163-a76a-a78cdca56945.png/v1/fill/w_1280,h_854,q_80,strp/flag_of_middle_eastern__flag_of_middle_east__by_weqrrwqw_dgv8itb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvYmI1ZjNlNmUtYTlmMC00NWQ5LTlkZmMtYTc3YTc3Y2NhZjdkXC9kZ3Y4aXRiLWZiYjE2OGUzLTI4YTgtNDE2My1hNzZhLWE3OGNkY2E1Njk0NS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.VaHXo3BVTeNEqpd5bYOmn0Soi4ZscW_rzaypM6GD0uI',
    africa: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_the_African_Union.svg',
    "south-america": 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_UNASUR.svg/640px-Flag_of_UNASUR.svg.png',
    europe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/810px-Flag_of_Europe.svg.png',
    "north-america": 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/833b8afb-0ba8-40d5-9817-acddffeef181/dg4jmy9-268ba4a7-7b0c-4913-a9fe-afe4d12c7117.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzM2I4YWZiLTBiYTgtNDBkNS05ODE3LWFjZGRmZmVlZjE4MVwvZGc0am15OS0yNjhiYTRhNy03YjBjLTQ5MTMtYTlmZS1hZmU0ZDEyYzcxMTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qVLEsjgaR8GJFVG0NEQLW_M_u8-LA0YI5Pe4sZig070',
};


export default function Region() {

    return (
        <main className='ml-40 mr-40 mt-10 mb-52'>
            <Box>
                <Box display="flex" alignItems="flex-start" className="mt-18">
                    <Box
                        component="img"
                        src="./img/asia.gif"
                        alt="Food Effect"
                        width={400} // Increased width for a larger image
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

                                    }}>ASIA</Typography>
                                    <img src={regionImages.asia} alt={`${'params.region'} flag`} style={{ marginTop: '10px', marginLeft: '10px', width: '54px', height: '36px' }} />
                                </div>

                                <div className='flex-col justify-center items-center mb-8 mt-6'>
                                    <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                    <hr style={{ width: '70px', borderColor: 'black' }} />
                                </div>

                                <p className='text-md mb-3 text-gray-500'>Asia, the world’s largest and most diverse continent. It occupies the eastern four-fifths of the giant Eurasian landmass. Asia is more a geographic term than a homogeneous continent, and the use of the term to describe such a vast area always carries the potential of obscuring the enormous diversity among the regions it encompasses. Asia has both the highest and the lowest points on the surface of Earth, has the longest coastline of any continent, is subject overall to the world’s widest climatic extremes, and, consequently, produces the most varied forms of vegetation and animal life on Earth. In addition, the peoples of Asia have established the broadest variety of human adaptation found on any of the continents.</p>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '200px',
                                        borderRadius: '0px', // No border radius
                                        marginTop: '10px', // Margin on top for spacing
                                        color: '#fbc800', // Text color
                                        backgroundColor: 'white', // Background color
                                        boxShadow: 'none', // No shadow
                                        border: '1px solid', // Border style
                                        borderColor: '#fbc800', // Border color
                                        '&:hover': {
                                            color: '#f8533d',
                                            boxShadow: 'none', // Background color on hover
                                            borderColor: '#f8533d'
                                        },
                                    }}
                                // Handle button click
                                >
                                    <Link href="/Region/asia">
                                        View more
                                    </Link>
                                </Button>

                            </div>
                        </Box>
                    </Box>
                </Box>
                <div className='mt-6'>
                    <AsiaCarousel />
                </div>
            </Box>


            <Box>
                <Box className="p-2">
                    <div className='mt-28 flex flex-col-reverse md:flex-row'>
                        <div className='flex-1 md:mr-6'>
                            <div className='flex justify-between mb-4'>
                            <Typography variant='h4' sx={{
                                        fontFamily: playfairDisplay.style.fontFamily,
                                        fontWeight: '800',
                                        color: 'black',

                                    }}>OCEANIA</Typography>
                                <Box className='flex items-start gap-2 mb-6'>

                                <img src={regionImages.oceania} alt={`${'params.region'} flag`} style={{ marginTop: '10px', marginLeft: '10px', width: '54px', height: '36px' }} />

                                </Box>
                            </div>

                            <div className='flex-col justify-center items-center mb-8 mt-6'>
                                    <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                    <hr style={{ width: '70px', borderColor: 'black' }} />
                                </div>

                                <p className='text-md mb-3 text-gray-500'>Oceania, collective name for the islands scattered throughout most of the Pacific Ocean. The term, in its widest sense, embraces the entire insular region between Asia and the Americas. A more common definition excludes the Ryukyu, Kuril, and Aleutian islands and the Japan archipelago. The most popular usage delimits Oceania further by eliminating Indonesia, Taiwan, and the Philippines, because the peoples and cultures of those islands are more closely related historically to the Asian mainland. Oceania then, in its most restricted meaning, includes more than 10,000 islands, with a total land area (excluding Australia, but including Papua New Guinea and New Zealand) of approximately 317,700 square miles (822,800 square km).</p>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '200px',
                                        borderRadius: '0px', // No border radius
                                        marginTop: '10px', // Margin on top for spacing
                                        color: '#fbc800', // Text color
                                        backgroundColor: 'white', // Background color
                                        boxShadow: 'none', // No shadow
                                        border: '1px solid', // Border style
                                        borderColor: '#fbc800', // Border color
                                        '&:hover': {
                                            color: '#f8533d',
                                            boxShadow: 'none', // Background color on hover
                                            borderColor: '#f8533d'
                                        },
                                    }}
                                // Handle button click
                                >
                                <Link href="/Region/oceania">
                                        View more
                                    </Link>
                                </Button>

                            </div>
                        <div className='flex-shrink-0'>
                            {/* Replace this with your picture */}
                            <Box
                        component="img"
                        src="./img/oceania.png"
                        alt="Food Effect"
                        width={400} // Increased width for a larger image
                        sx={{
                            marginRight: 2,
                            borderRadius: '8px',
                            objectFit: 'cover',
                        }}
                    />
                        </div>
                    </div>
                </Box>
                <div className='mt-6'>
                    <OceaniaCarousel />
                </div>

            </Box>


            <Box>
                <Box display="flex" alignItems="flex-start" className="mt-28">
                    <Box
                        component="img"
                        src="./img/europe.png"
                        alt="Food Effect"
                        width={450} // Increased width for a larger image
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

                                    }}>EUROPE</Typography>
                                    <img src={regionImages.europe} alt={`${'params.region'} flag`} style={{ marginTop: '10px', marginLeft: '10px', width: '54px', height: '36px' }} />
                                </div>

                                <div className='flex-col justify-center items-center mb-8 mt-6'>
                                    <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                    <hr style={{ width: '70px', borderColor: 'black' }} />
                                </div>

                                <p className='text-md mb-3 text-gray-500'>Europe, second smallest of the world’s continents, composed of the westward-projecting peninsulas of Eurasia (the great landmass that it shares with Asia) and occupying nearly one-fifteenth of the world’s total land area. It is bordered on the north by the Arctic Ocean, on the west by the Atlantic Ocean, and on the south (west to east) by the Mediterranean Sea, the Black Sea, the Kuma-Manych Depression, and the Caspian Sea. The continent’s eastern boundary (north to south) runs along the Ural Mountains and then roughly southwest along the Emba (Zhem) River, terminating at the northern Caspian coast.</p>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '200px',
                                        borderRadius: '0px', // No border radius
                                        marginTop: '10px', // Margin on top for spacing
                                        color: '#fbc800', // Text color
                                        backgroundColor: 'white', // Background color
                                        boxShadow: 'none', // No shadow
                                        border: '1px solid', // Border style
                                        borderColor: '#fbc800', // Border color
                                        '&:hover': {
                                            color: '#f8533d',
                                            boxShadow: 'none', // Background color on hover
                                            borderColor: '#f8533d'
                                        },
                                    }}
                                // Handle button click
                                >
                                    <Link href="/Region/europe">
                                        View more
                                    </Link>
                                </Button>

                            </div>
                        </Box>
                    </Box>
                </Box>
                <div className='mt-6'>
                    <EuropeCarousel />
                </div>
            </Box>



            <Box>
                <Box className="p-2">
                    <div className='mt-28 flex flex-col-reverse md:flex-row'>
                        <div className='flex-1 md:mr-6'>
                            <div className='flex justify-between mb-4'>
                            <Typography variant='h4' sx={{
                                        fontFamily: playfairDisplay.style.fontFamily,
                                        fontWeight: '800',
                                        color: 'black',

                                    }}>AFRICA</Typography>
                                <Box className='flex items-start gap-2 mb-6'>

                                <img src={regionImages.africa} alt={`${'params.region'} flag`} style={{ marginTop: '10px', marginLeft: '10px', width: '54px', height: '36px' }} />

                                </Box>
                            </div>

                            <div className='flex-col justify-center items-center mb-8 mt-6'>
                                    <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                    <hr style={{ width: '70px', borderColor: 'black' }} />
                                </div>

                                <p className='text-md mb-3 text-gray-500'>Africa is the worlds second-largest and second-most populous continent after Asia. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 20% of Earths land area and 6% of its total surface area.[9] With nearly 1.4 billion people as of 2021, it accounts for about 18% of the worlds human population. Africas population is the youngest among all the continents;[10][11] the median age in 2012 was 19.7, when the worldwide median age was 30.4.[12] Despite a wide range of natural resources, Africa is the least wealthy continent per capita and second-least wealthy by total wealth, ahead of Oceania. Scholars have attributed this to different factors including geography, climate,[13] corruption,[13] colonialism, the Cold War,[14][15] and neocolonialism. Despite this low concentration of wealth, recent economic expansion and a large and young population make Africa an important economic market in the broader global context. Africa has a large quantity of natural resources and food resources, including diamonds, sugar, salt, gold, iron, cobalt, uranium, copper, bauxite, silver, petroleum, natural gas, cocoa beans, and tropical fruit.</p>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '200px',
                                        borderRadius: '0px', // No border radius
                                        marginTop: '10px', // Margin on top for spacing
                                        color: '#fbc800', // Text color
                                        backgroundColor: 'white', // Background color
                                        boxShadow: 'none', // No shadow
                                        border: '1px solid', // Border style
                                        borderColor: '#fbc800', // Border color
                                        '&:hover': {
                                            color: '#f8533d',
                                            boxShadow: 'none', // Background color on hover
                                            borderColor: '#f8533d'
                                        },
                                    }}
                                // Handle button click
                                >
                                    <Link href="/Region/africa">
                                        View more
                                    </Link>
                                </Button>

                            </div>
                        <div className='flex-shrink-0'>
                            {/* Replace this with your picture */}
                            <Box
                        component="img"
                        src="./img/africa.png"
                        alt="Food Effect"
                        width={400} // Increased width for a larger image
                        sx={{
                            marginRight: 2,
                            borderRadius: '8px',
                            objectFit: 'cover',
                            marginTop:'-50px'
                        }}
                    />
                        </div>
                    </div>
                </Box>
                <div className='mt-6'>
                    <AfricaCarousel />
                </div>

            </Box>


            <Box>
                <Box display="flex" alignItems="flex-start" className="mt-28">
                    <Box
                        component="img"
                        src="./img/middle.png"
                        alt="Food Effect"
                        width={400} // Increased width for a larger image
                        sx={{
                            marginRight: 2,
                            marginTop:'-20px',
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

                                    }}>MIDDLE-EAST</Typography>
                                    <img src={regionImages['middle-east']} alt={`${'params.region'} flag`} style={{ marginTop: '10px', marginLeft: '10px', width: '54px', height: '36px' }} />
                                </div>

                                <div className='flex-col justify-center items-center mb-8 mt-6'>
                                    <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                    <hr style={{ width: '70px', borderColor: 'black' }} />
                                </div>

                                <p className='text-md mb-3 text-gray-500'>The Middle East (term originally coined in English [see § Terminology][note 1]) is a geopolitical region encompassing the Arabian Peninsula, the Levant, Turkey, Egypt, Iran, and Iraq. The term came into widespread usage as a replacement of the term Near East (as opposed to the Far East) beginning in the early 20th century. The term Middle East has led to some confusion over its changing definitions,[2] and being seen as too Eurocentric.[3] The region includes the vast majority of the territories included in the closely associated definition of West Asia, but without the South Caucasus, and additionally includes all of Egypt (not just the Sinai) and all of Turkey (including East Thrace).</p>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '200px',
                                        borderRadius: '0px', // No border radius
                                        marginTop: '10px', // Margin on top for spacing
                                        color: '#fbc800', // Text color
                                        backgroundColor: 'white', // Background color
                                        boxShadow: 'none', // No shadow
                                        border: '1px solid', // Border style
                                        borderColor: '#fbc800', // Border color
                                        '&:hover': {
                                            color: '#f8533d',
                                            boxShadow: 'none', // Background color on hover
                                            borderColor: '#f8533d'
                                        },
                                    }}
                                // Handle button click
                                >
                                    <Link href="/Region/middleEast">
                                        View more
                                    </Link>
                                </Button>

                            </div>
                        </Box>
                    </Box>
                </Box>
                <div className='mt-6'>
                    <MiddleEastCarousel />
                </div>
            </Box>


            <Box>
                <Box className="p-2">
                    <div className='mt-28 flex flex-col-reverse md:flex-row'>
                        <div className='flex-1 md:mr-6'>
                            <div className='flex justify-between mb-4'>
                            <Typography variant='h4' sx={{
                                        fontFamily: playfairDisplay.style.fontFamily,
                                        fontWeight: '800',
                                        color: 'black',

                                    }}>NORTH AMERICA</Typography>
                                <Box className='flex items-start gap-2 mb-6'>

                                <img src={regionImages['north-america']} alt={`${'params.region'} flag`} style={{ marginTop: '10px', marginLeft: '10px', width: '54px', height: '36px' }} />

                                </Box>
                            </div>

                            <div className='flex-col justify-center items-center mb-8 mt-6'>
                                    <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                    <hr style={{ width: '70px', borderColor: 'black' }} />
                                </div>

                                <p className='text-md mb-3 text-gray-500'>North America is a continent[b] in the Northern and Western Hemispheres.[c] North America is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean. The region includes the Bahamas, Bermuda, Canada, the Caribbean, Central America, Clipperton Island, Greenland, Mexico, Saint Pierre and Miquelon, Turks and Caicos Islands, and the United States.

North America covers an area of about 24,709,000 square kilometers (9,540,000 square miles), representing approximately 16.5% of the Earths land area and 4.8% of its total surface area. It is the third-largest continent by size after Asia and Africa, and the fourth-largest continent by population after Asia, Africa, and Europe.</p>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '200px',
                                        borderRadius: '0px', // No border radius
                                        marginTop: '10px', // Margin on top for spacing
                                        color: '#fbc800', // Text color
                                        backgroundColor: 'white', // Background color
                                        boxShadow: 'none', // No shadow
                                        border: '1px solid', // Border style
                                        borderColor: '#fbc800', // Border color
                                        '&:hover': {
                                            color: '#f8533d',
                                            boxShadow: 'none', // Background color on hover
                                            borderColor: '#f8533d'
                                        },
                                    }}
                                // Handle button click
                                >
                                    <Link href="/Region/northAmerica">
                                        View more
                                    </Link>
                                </Button>

                            </div>
                        <div className='flex-shrink-0'>
                            {/* Replace this with your picture */}
                            <Box
                        component="img"
                        src="./img/north.png"
                        alt="Food Effect"
                        width={380} // Increased width for a larger image
                        sx={{
                            marginRight: 2,
                            borderRadius: '8px',
                            objectFit: 'cover',
                            marginTop:'-90px'
                        }}
                    />
                        </div>
                    </div>
                </Box>
                <div className='mt-6'>
                    <NorthAmericaCarousel />
                </div>

            </Box>



            <Box>
                <Box display="flex" alignItems="flex-start" className="mt-28">
                    <Box
                        component="img"
                        src="./img/south.png"
                        alt="Food Effect"
                        width={350} // Increased width for a larger image
                        sx={{
                            marginRight: 2,
                            marginTop:'-40px',
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

                                    }}>SOUTH AMERICA</Typography>
                                    <img src={regionImages['south-america']} alt={`${'params.region'} flag`} style={{ marginTop: '10px', marginLeft: '10px', width: '54px', height: '36px' }} />
                                </div>

                                <div className='flex-col justify-center items-center mb-8 mt-6'>
                                    <hr style={{ width: '100px', marginBottom: '3px', borderColor: 'black' }} />
                                    <hr style={{ width: '70px', borderColor: 'black' }} />
                                </div>

                                <p className='text-md mb-3 text-gray-500'>South America is a continent[h] entirely in the Western Hemisphere[i] and mostly in the Southern Hemisphere, with a considerably smaller portion in the Northern Hemisphere. It can also be described as the southern subregion of the Americas.

South America is bordered on the west by the Pacific Ocean and on the north and east by the Atlantic Ocean; North America and the Caribbean Sea lie to the northwest.

The continent includes twelve sovereign states: Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela; two dependent territories: the Falkland Islands and South Georgia and the South Sandwich Islands;[j] and one internal territory: French Guiana.[k]</p>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '200px',
                                        borderRadius: '0px', // No border radius
                                        marginTop: '10px', // Margin on top for spacing
                                        color: '#fbc800', // Text color
                                        backgroundColor: 'white', // Background color
                                        boxShadow: 'none', // No shadow
                                        border: '1px solid', // Border style
                                        borderColor: '#fbc800', // Border color
                                        '&:hover': {
                                            color: '#f8533d',
                                            boxShadow: 'none', // Background color on hover
                                            borderColor: '#f8533d'
                                        },
                                    }}
                                // Handle button click
                                >
                                    <Link href="/Region/southAmerica">
                                        View more
                                    </Link>
                                </Button>

                            </div>
                        </Box>
                    </Box>
                </Box>
                <div className='mt-6'>
                    <SouthAmericaCarousel />
                </div>
            </Box>

        </main>
    )
}
