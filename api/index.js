import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err)
})

app.listen(3000, ()=>{
    console.log('server running on port 3000!');
})