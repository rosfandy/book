import { NextResponse } from "next/server";
import axios from 'axios';

export async function GET() {
    try {
        const response = await axios.get('https://brosf.pythonanywhere.com/books');

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
