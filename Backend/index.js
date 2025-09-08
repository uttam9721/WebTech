
import express from 'express'
const app = express();
import dotenv from 'dotenv'
const port =3000 || process.env.port;
dotenv.config();
// const backendUrl;



app.get('/',(req,res)=>{
    console.log("Hi shashi..");
    
})

app.listen(port,()=>{
    console.log("app is running on port 3000");
    
})