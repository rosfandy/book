import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    if (req.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });

    try {
        const json = await req.json();
        if (!json.title || typeof json.title !== 'string') {
            throw new Error('Invalid or missing "title" field in request body');
        }

        const res = await getPredict(json.title);
        return new Response(JSON.stringify(res), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (e) {
        console.error('Error occurred:', e);
        const errorMessage = e instanceof Error ? e.message : 'Unknown Error';
        return new Response(JSON.stringify({ error: errorMessage }), { status: 400, statusText: errorMessage });
    }
}

const getPredict = async (title: string): Promise<string> => {
    try {
        const res = await axios.post(
            `${process.env.FLASK_APP_HOST}/recommend`,
            { user_input: title },
            { headers: { 'Content-Type': 'application/json' } }
        );
        return res.data;
    } catch (error) {
        const errorMessage = axios.isAxiosError(error) && error.response
            ? JSON.stringify(error.response.data)
            : error instanceof Error
                ? error.message
                : 'Unknown Error';
        throw new Error(errorMessage);
    }
}
