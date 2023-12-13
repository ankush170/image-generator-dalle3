export async function GET(request: Request){
    // Flow:
    // 1) On client interaction, our app will communicate to our API
    // 2) the API will then make a request to the azure function
    // 3) Azure function will communicate with GPT api and give back suggestions to azure, which will then return this to the app


    // This is to connect to our Microsoft Azure function endpoint
    const response = await fetch('http://127.0.0.1:7071/api/getChatGPTSuggestion', {
        cache: 'no-store' //every time we make a request, a new suggestion will be generated which is not cached to previous value
    })

    const textData = await response.text();

    return new Response(JSON.stringify(textData.trim()), {
        status : 200,
    });
}