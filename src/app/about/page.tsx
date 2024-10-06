import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Playfair_Display } from 'next/font/google';
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify the weights you need
    style: ['normal'], // Specify the styles you need
});

const data = [
    { id: '65010195', name: 'Chollasak Anuwareepong' },
    { id: '65010385', name: 'Trai Prapamonthon' },
    { id: '65010395', name: 'Thanakrit Jaiprasong' },
    { id: '65010409', name: 'Thanathat Phinthu' },
    { id: '65010421', name: 'Thanapat Sombun' },
    { id: '65010427', name: 'Thanawat La-ong' },
    { id: '65010431', name: 'Thanapat Phongpattanarat' },
    { id: '65010054', name: 'Kasidit Samad' },
    { id: '65010536', name: 'Nantipat Mangsiri' },
    { id: '65010836', name: 'Phinyo Thechanthuek' },
    { id: '6301414', name: 'Abdulhakim Mamu' },
];

export default function page() {
    return (
        <main
            style={{
                marginTop: '50px',
                height: 'fit-content',
                padding: '40px',
                backgroundColor: '#f0f0f0'
            }}
        >
            <Typography variant='h3' className='ml-40 mb-6' sx={{
                fontFamily: playfairDisplay.style.fontFamily,
                fontWeight: '800',
            }}>SOURCE CODE</Typography>
            <Box className="flex gap-16 ml-40 mr-40">
                <Box component={'img'} width={650} height={500} src='./img/frontgithub.png' />
                <Box className="mt-20">
                    <Typography variant='h3' className='items-start' sx={{
                        fontFamily: playfairDisplay.style.fontFamily,
                        fontWeight: '800',
                        color: 'black',
                    }} >Web Application Repository <GitHubIcon sx={{ width: '60px', height: '60px' }} /></Typography>
                    <div className='flex-col justify-center items-center mb-10 mt-4'>
                        <hr style={{ width: '200px', marginBottom: '3px', borderColor: 'black' }} />
                        <hr style={{ width: '140px', borderColor: 'black' }} />
                    </div>

                    <Typography variant='h5' className='items-start' sx={{

                    }} ><span className='text-[#3178c6]'>Tech Stacks</span> : Next.js React TypeScript</Typography>

                    <Button className='mt-6' variant='contained' sx={{ backgroundColor: '#3178c6' }} href='https://github.com/chollsak/WokFood'>Visit Repository</Button>

                </Box>


            </Box>


            <Box className="flex justify-evenly ml-40 mr-40 mb-10 mt-16">

                <Box className="mt-20">
                    <Typography variant='h3' className='items-start' sx={{
                        fontFamily: playfairDisplay.style.fontFamily,
                        fontWeight: '800',
                        color: 'black',
                    }} >Web Crawler Repository <GitHubIcon sx={{ width: '60px', height: '60px' }} /></Typography>
                    <div className='flex-col justify-center items-center mb-10 mt-4'>
                        <hr style={{ width: '200px', marginBottom: '3px', borderColor: 'black' }} />
                        <hr style={{ width: '140px', borderColor: 'black' }} />
                    </div>

                    <Typography variant='h5' className='items-start' sx={{

                    }} ><span className='text-[#3178c6]'>Tech Stacks</span> : Django Python</Typography>

                    <Button className='mt-6' variant='contained' sx={{ backgroundColor: '#3178c6' }} href='https://github.com/tuatang55/food-crawler'>Visit Repository</Button>

                </Box>
                <Box component={'img'} width={650} height={500} src='./img/foodcrawler.png' />

            </Box>

            <Box sx={{ padding: 2, color: 'white' }} className="mt-4 rounded-xl">
                <Typography variant="h4" align="center" gutterBottom
                    sx={{
                        fontFamily: playfairDisplay.style.fontFamily,
                        fontWeight: '800',
                        color: 'black',
                    }}
                >
                    Developers
                </Typography>
                <Grid container spacing={2}>
                    {data.map((student) => (
                        <Grid item xs={12} sm={6} md={4} key={student.id}>
                            <Card sx={{ backgroundColor: 'rgba(fff, fff, fff, 1)', borderRadius: 1 }}>
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{ color: '#3178c6' }}>
                                        {student.id}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'black' }}>
                                        {student.name.toUpperCase()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>




        </main>
    )
}
