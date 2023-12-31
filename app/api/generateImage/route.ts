import { NextResponse } from "next/server";

export async function POST(request: Request){
    const res = await request.json(); //res now contains body
    const prompt = res.prompt;

    // This is to connect to our Microsoft Azure function endpoint
    try {
        const response = await fetch("http://127.0.0.1:7071/api/generateImage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });
    
        const textData = await response.text();
        return NextResponse.json(textData);
    } catch (error) {
        console.error("Error fetching from Azure Functions:", error);
        return NextResponse.error();
    }        
}