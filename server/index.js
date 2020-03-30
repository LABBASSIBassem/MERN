const express = require('express');
const mongoose = require('mongoose'); 

const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser')
const app = express();

const config = require('./config/key')
const User = require('./Models/user')
const auth = require('./middleWare/auth')

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
         if(err)  return res.json({success: false, err});
         res.send("jawkbehi")
     })
})

app.post('/api/users/login', (req,res)=>{
  //find the email 
   User.findOne({email: req.body.email},(err, user)=>{
       if(!user)
       return res.json({
           loginSuccess: false, 
           message: "auth failed"

       })
       //compare the password
       user.comparePassword(req.body.password, (err, isMatch)=>{
           if(!isMatch){
           return res.json({
            loginSuccess: false, 
            message: "auth failed"
       })
    }
   })
   //generate token
    user.generateToken((err, user)=>{
        if(err) return res.status(400).send(err); 
        res.cookie('X_auth',user.token)
        .status(200).json({  loginSuccess: true })
})
   })

})

app.get('/api/user/auth', auth ,(req,res)=>{
    res.status(200).json({
  _id: req._id,
  isAuth: true, 
  email: req.user.email,
  name: req.user.firstname, 
  lastname: req.user.lastname,
  role: req.user.role
    })
    
})

app.get('/api/user/logout',auth, (req, res)=>{

    User.findOneAndUpdate({_id: req.user._id},{token: ''}, (err, user)=>{
        if(err) return res.json({
            success:false, err
        });
   res.cookie('X_auth','').json({success: true});
})
})




PORT= process.env.PORT || 5000; 

app.listen(PORT, ()=>{
    console.log("server is running")
})