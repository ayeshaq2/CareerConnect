
import fs  from 'fs'
import OpenAI, {toFile} from 'openai'
import dotenv from 'dotenv';


dotenv.config({path:'server/.env'}); 

const api_key = process.env.API_KEY
const openai = new OpenAI({apiKey:api_key});

try{
    const response = await openai.files.create({file:fs.createReadStream(training_file),purpose:'fine-tune'})
    console.log(response)
}catch(error){
    console.log('error')
}
// const training_file = 'small_training_data.jsonl'

// const finetune = await openai.fineTuning.jobs.create({training_file:training_file, model:'gpt-3.5-turbo-1106'})
// let page = await openai.fineTuning.jobs.list({ limit: 10 });


async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo-1106",
  });

  console.log(completion.choices[0]);
}

main();

//console.log(page)