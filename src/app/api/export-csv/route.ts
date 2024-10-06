import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

const json2csv = require('json2csv').parse;

export async function POST(req: Request) {
    try {
      // Parse the request body to get the cart data
      const { cart } = await req.json();
  
      const fields = ['FoodId', 'FoodName', 'FoodRegion', 'FoodDescription', 'FoodImageUrl'];
      const csv = json2csv(cart, { fields });
  
      // Return CSV content as a response
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': 'attachment; filename="cart.csv"',
        },
      });
    } catch (error) {
      console.error('Error generating CSV:', error);
      return NextResponse.json({ message: 'Error generating CSV' }, { status: 500 });
    }
  }