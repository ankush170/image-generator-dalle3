const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getChatGPTSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt:
        "Write a random text prompt for DALL-E to generate an image, this prompt will be shown to the user, include details such as genre and what type of painting it should be. Do not wrap the painting in quotes.",
      max_tokens: 100,
      temperature: 0.8,
    });

    context.log(`Http function processed request for url "${request.url}"`);

    const responseText = response.choices[0].text;

    return { body: responseText };
  },
});
