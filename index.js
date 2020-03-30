const express = require('express');
const mongoose = require('mongoose'); 

const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser')
const app = express();

const config = require('./config/key')
const User = require('./Models/user')

mongoose.connect(config.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
        if(err) throw err; 
        console.log("successfully connected to the database")
    })


app.use(cookieParser())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/users/register', (req, res) =>{
  
     const user = new User(req.body);
     user.save((err, userData)=>{
         if(err)  return res.json({success: false, err})
         res.send("jawkbehi")
     })
   


})





PORT= process.env.PORT || 5000; 

app.listen(PORT, ()=>{
    console.log("server is running")
})