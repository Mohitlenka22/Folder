//Importing 
import express from "express";
import mongoose from "mongoose";
import router from './router/auth.js';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config({path: './config.env'});
//Instance of app

const app = express();
const port = process.env.PORT || 8000;



// Middlewares
// - are functions in b/w req & res to check req and allow to access that route 

app.use(express.json());
app.use(cors());

const middleware = (req, res, next) => {
     console.log('I am a Middleware');
     next();

};
//next() allows to go on next after checking


// DBConfig
const connectionUrl = process.env.DATABASE;

mongoose.connect(connectionUrl, {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => console.log('MongoDB successfully connected'))
     .catch((err) => console.log(`err name:${err.name} & err message :${err.message}`));



//Routes


// app.get('/', (req, res) => res.send("HELLO WORLD!!!"));

app.use(router);

app.get('/about', middleware, (req, res) => res.send("HELLO TO ABOUT PAGE!!!"));



//listener
app.listen(port, () => { console.log(`Application started Succesfully on http://localhost:${port}`) });



// xyCk1nJ8a3GzD8WG
