const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name:{
        type: String, 
        maxLength: 50
    }, 
    email: {
        type: String, 
        trim:true, 
        unique: 1
    }, 
    password:{
        type: String, 
        minLength: 6,
    }, 
    lastname:{
        type: String, 
        maxLength: 50
    }, 
    role:{
        type: Number, 
        default: 0
    },
    token:{
        type: String
    }, 
    tokenExp:{
        type:Number
    }
})



module.exports = mongoose.model('User', UserSchema)