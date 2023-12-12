import { NextResponse } from "next/server";

export async function POST(request: Request){
    const res = await request.json(); //res now contains body
    const prompt = res.prompt;

    // This is to connect to our Microsoft Azure function endpoint
    const response = await fetch('/api/generateImage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({ prompt })
    })

    const textData = await response.text();

    return NextResponse.json(textData);
}