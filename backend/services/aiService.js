const { OpenAIClient } = require('@langchain/openai');
require('dotenv').config();

const llm = new OpenAIClient({
    apiKey: process.env.OPENAI_API_KEY
});

const generateAnswer = async (question) => {
    try {
        const response = await llm.completions.create({
            model:'gpt-3.5-turbo',
            prompt: question,
            maxTokens: 150,
        });
        return response.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating answer:', error);
        throw new Error('Failed to generate answer');
    }
};

module.exports = {
    generateAnswer,
};








