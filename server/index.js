const ResumeParser = require('resume-parser')
const fs = require('fs');
const express = require('express')
const cors = require('cors');
const pdf = require('pdf-parse')

const {CohereClient} = require('cohere-ai');

const dotenv = require('dotenv')
dotenv.config({path:'./.env'}); 
const cohere_key = process.env.COHERE_KEY

const cohere = new CohereClient({
    token: cohere_key,
});

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');  
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
});

const upload = multer({storage:storage})
const app= express()

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())


app.post('/parse', upload.single('resume'), async(request,response)=>{
    const resume = request.params;
    console.log('keu', cohere_key)
    console.log('Incoming request:', request.body);
    console.log("recieved resume")

    try{
        const file = request.file
        const addText = request.body.addText
        if(!file){
            return response.status(400).send("no File");
        }
        // const pdfBuffer = file.buffer
        // const pdfdata = await pdf(pdfBuffer)
        // const text = pdfdata.text

        const data = await fs.promises.readFile(file.path);
        const pdfData = await pdf(data)
        const resumeText = pdfData.text;
        const combinedpromopt = `optimize this resume:${resumeText} for this job description: ${addText}`;

        const generate = await cohere.generate({
            prompt: combinedpromopt,
            max_tokens:50
        
        });

        const optimizedText = generate.generations[0].text;
        response.json({ optimizedText });
        console.log("text: " ,optimizedText)

        // fs.readFile(file.path, (err,data)=>{
        //     if(err){
        //         console.error("error: ", err)
        //         return response.status(500).send('Error reading file');
        //     }

        //     pdf(data)
        //         .then(pdfData=>{
        //             const text = pdfData.text

                    



        //             //console.log("text",text)
        //             //const parsedData = await ResumeParser.parseResume(text)
        //             ResumeParser.parseResume(text)
        //                  .then(parsedData => {
        //                      response.json(parsedData);
        //                  })
        //                  .catch(error => {
        //                      console.error('Error parsing resume:', error);
        //                      response.status(500).json({ error: 'Error parsing resume' });
        //                  });
        //              //response.json(parsedData)
        //              //console.log(parsedData)
                    
        //         })
        // })
       
    }catch(err){
        console.log("an error ocurred", err )
        response.status(500).json({ error: 'Internal server error' });
    }
})
app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

