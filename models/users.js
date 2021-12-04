const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please Provide Name'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        require: [true, 'Please Provide Email'],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
    },
    password: {
        type: String,
        require: [true, 'Please Provide Password'],
        minlength: 4,
    },
})

UserSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        res.status(401).json(error);
    }
})

UserSchema.methods.createJwt = function(){
    return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, { 
        expiresIn: process.env.JWT_LIFETIME, 
    })
}
UserSchema.methods.comparePassword = async function(canditatePassword){
    const isMatch = bcrypt.compare(canditatePassword, this.password)
    return isMatch;
}

module.exports = mongoose.model('User', UserSchema);