const express = require ("express");
PORT = 2002;
const first = require("./First.js");
const app = express();
const mongoose = require ("mongoose");
app.use(express.json());
const dotenv = require("dotenv");
const First = require("./First.js");
dotenv.config({path: './config.env'})



app.post('/signup', async(req,res) => {
const reqBody = req.body;
//console.log(reqBody, req.body);
const first = new First(reqBody);
//console.log(first);
await first.save();
return res.status(200).send(first);
})



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