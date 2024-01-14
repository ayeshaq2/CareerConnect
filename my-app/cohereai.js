const {CohereClient} = require('cohere-ai');

const dotenv = require('dotenv')
dotenv.config({path:'server/.env'}); 
const cohere_key = process.env.COHERE_KEY

const cohere = new CohereClient({
    token: cohere_key,
});


(async () => {
    const generate = await cohere.generate({
        prompt: "generate a resume for a software engineering intern",
    });
  
    console.log(generate.generations[0].text);
  })();





