const express = require ("express");
//const bodyparser = require('body-parser')
PORT = 2002;
const app = express();
const mongoose = require ("mongoose");
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config({path: './config.env'})


const startServer = async() =>
{
try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log("connected")
    app.listen (PORT,() =>{
        console.log( `app is running on ${PORT}`);
    })
}

catch (error) {
    console.log('error')
}
}
startServer();