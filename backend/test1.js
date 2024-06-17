
const { generateAnswer } = require('./services/aiService'); 

async function test() {
    try {
        
        const question = "What is the capital of India";
        const answer = await generateAnswer(question);
        
        console.log(`Question: ${question}`);
        console.log(`Answer: ${answer}`);
    } catch (error) {
        console.error('Error:', error);
    }
}


test();









