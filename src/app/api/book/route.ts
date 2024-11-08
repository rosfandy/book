import { NextResponse } from "next/server";
import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const category = url.searchParams.get('category');
        const endpoint = category
            ? `${process.env.FLASK_APP_HOST}/books?category=${encodeURIComponent(category)}`
            : `${process.env.FLASK_APP_HOST}/books`;
        const response = await axios.get(endpoint);
        
        return NextResponse.json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching data:', error.message);
            return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
        } else {
            console.error('An unknown error occurred:', error);
            return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }
}
