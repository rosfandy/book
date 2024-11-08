import axios from "axios";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const slug = req.nextUrl.pathname.split('/').pop();
    if (!slug) {
        return NextResponse.json({ error: "Category slug is required." }, { status: 400 });
    }

    try {
        const response = await axios.get(`${process.env.FLASK_APP_HOST}/books/${slug}`);
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