// src/app/api/save-data/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Define the path for the data.json file in the public/data directory
        const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');

        // Write the JSON data to the file
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), { encoding: 'utf8' });

        return NextResponse.json({ message: 'Data saved successfully!' });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}
