'use client';
import React from 'react';
import { Box, Card, CardContent, Typography, Button, List, ListItem, ListItemText, Divider, CircularProgress } from '@mui/material';
import { Playfair_Display } from 'next/font/google';

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

    if (loading) return <CircularProgress />; // Show loading spinner while fetching

    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                marginTop:'50px',
                height: '100vh',
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
                <Typography variant="h4" component="h2" sx={{
                    fontFamily: playfairDisplay.style.fontFamily,
                    fontWeight: '700',
                    marginBottom: '20px',
                }}>
                    CSV Export Cart
                </Typography>
                {cart.length === 0 ? (
                    <Typography variant="h6" color="gray">Your cart is empty</Typography>
                ) : (
                    <List>
                        {cart.map(item => (
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
                {cart.length > 0 && (
                    <Box sx={{ marginTop: '20px', textAlign: 'right' }}>
                        <Button variant="contained" sx={{ marginTop: '10px', borderRadius: '0px', backgroundColor:'#fbc800' }} onClick={() => exportCartToCSV()}>
                            Checkout
                        </Button>
                    </Box>
                )}
            </Box>
        </main>
    );
};

export default CartPage;
