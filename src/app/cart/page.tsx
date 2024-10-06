'use client';
import React from 'react';
import { Box, Card, CardContent, Typography, Button, List, ListItem, ListItemText, Divider, CircularProgress, TextField } from '@mui/material';
import { Playfair_Display } from 'next/font/google';
import IosShareIcon from '@mui/icons-material/IosShare';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

interface CartItem {
    FoodId: number;
    FoodName: string;
    FoodImageUrl: string;
    FoodRegion: string;
}

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
});

const CartPage: React.FC = () => {
    const [cart, setCart] = React.useState<CartItem[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [searchQuery, setSearchQuery] = React.useState(''); // State to track search query

    // Fetch the cart items from localStorage
    React.useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
        setLoading(false);
    }, []);

    const removeFromCart = (foodId: number) => {
        const updatedCart = cart.filter(item => item.FoodId !== foodId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    };

    const exportCartToCSV = async () => {
        try {
          // Get the cart from localStorage
          const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      
          const response = await fetch('/api/export-csv', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart }),
          });
      
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
      
          const csvContent = await response.text();  // Get CSV as text
      
          // Create a blob from the CSV data
          const blob = new Blob([csvContent], { type: 'text/csv' });
      
          // Create a temporary download link and trigger it
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'cart.csv';  // Filename for download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Failed to export CSV:', error);
        }
    };

    const getTotalItems = () => {
        return cart.length;
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredCart = cart.filter(item =>
        item.FoodName.toLowerCase().includes(searchQuery)
    );

    const removeAllFromCart = () => {
        setCart([]); // Clear the cart state
        localStorage.removeItem('cart'); // Remove cart from localStorage
    };


    if (loading) return <CircularProgress />; // Show loading spinner while fetching

    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                marginTop:'50px',
                height:'100%',
                padding: '40px',
                backgroundColor: '#f0f0f0'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '0px',
                    boxShadow: 3,
                    padding: '50px',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                <div className='flex justify-between'>
                    <Typography variant="h4" component="h2" sx={{
                    fontFamily: playfairDisplay.style.fontFamily,
                    fontWeight: '700',
                    marginBottom: '20px',
                }}>
                    CSV Export Cart ({getTotalItems()} foods selected)
                </Typography>
                {cart.length > 0 && (

                    <Box sx={{ textAlign: 'right' }}>
                        <Button variant="contained"  color='error' sx={{ borderRadius: '0px',marginRight:'10px' }} onClick={() => removeAllFromCart()}>
                            Delete All <RemoveShoppingCartIcon/>
                        </Button>
                        <Button variant="contained" sx={{ borderRadius: '0px', backgroundColor:'#fbc800' }} onClick={() => exportCartToCSV()}>
                            Checkout <IosShareIcon/>
                        </Button>
                    </Box> 
                )}
                </div>

                {/* Search Bar */}
                {cart.length > 0 && (
                    <TextField
                        label="Search food by name"
                        variant="outlined"
                        size='small'
                        sx={{ marginBottom: '20px', width:'50%' }}
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                )}

                {filteredCart.length === 0 ? (
                    <Typography variant="h6" color="gray">No food items match your search</Typography>
                ) : (
                    <List>
                        {filteredCart.map(item => (
                            <React.Fragment key={item.FoodId}>
                                <ListItem>
                                    <img src={item.FoodImageUrl} alt={item.FoodName} style={{ width: '50px', height: '50px', marginRight: '16px' }} />
                                    <ListItemText
                                        primary={item.FoodName}
                                        secondary={`ID: ${item.FoodId} | Region: ${item.FoodRegion}`} // Display the region
                                    />
                                    <Button variant="outlined"  color='error' sx={{ borderRadius: '0px' }} onClick={() => removeFromCart(item.FoodId)}>
                                        Remove
                                    </Button>
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                )}
            </Box>
        </main>
    );
};

export default CartPage;
