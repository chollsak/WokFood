import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get('region'); // Get the region from query parameter

  if (!region) {
    return NextResponse.json({ error: 'Region not specified' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    if (!data.data[region]) {
      return NextResponse.json({ error: `Region '${region}' not found` }, { status: 404 });
    }

    return NextResponse.json(data.data[region]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
