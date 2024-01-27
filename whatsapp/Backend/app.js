import express from 'express';
import mongoose from 'mongoose';
import router from './router/auth.js';
import dotenv from "dotenv";
import cookieparser from 'cookie-parser';
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const connectionUrl = 'mongodb+srv://Web3:AyBndBObFClQ26bq@cluster0.1x8ryso.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("Successfully connected")).catch((err)=>console.log(err));

// cookie.parse("mernie"); 
app.use(express.json());
app.use(cookieparser());
app.use(cors());
app.use(router);
app.get("/",(req,res)=>{
    res.send("Hello");
});


app.listen(PORT,()=>console.log(`Successfully started on http://localhost:${PORT}`));