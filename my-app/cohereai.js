const {CohereClient} = require('cohere-ai');

const dotenv = require('dotenv')
dotenv.config({path:'server/.env'}); 
const cohere_key = process.env.COHERE_KEY

const cohere = new CohereClient({
    token: cohere_key,
});


//Training Data is taken from a 
//public data set avaialable on Kaggle: https://www.kaggle.com/datasets/gauravduttakiit/resume-dataset 

(async () => {
    const generate = await cohere.generate({
        prompt: "optimize this resume",
    });
  
    console.log(generate.generations[0].text);
  })();





