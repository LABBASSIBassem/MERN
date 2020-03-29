const express = require('express');
const mongoose = require('mongoose'); 
require('dotenv/config')

const app = express();

mongoose.connect(process.env.MONGO,
{ useNewUrlParser: true, useUnifiedTopology: true},
(err)=>{
    if(err) throw err; 
    console.log("successfully connected to the database")
})
PORT= process.env.PORT || 5000; 

app.get('/', (req, res)=>{
    res.send("hello world")
})


app.listen(PORT, ()=>{
    console.log("server is running")
})