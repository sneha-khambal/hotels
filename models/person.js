const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number
        },
        work:{
            type:String,
            enum:['chief','waiter','manager'],
            required:true
        },
        email:{
            type:String,
            unique:true
        },
        mobile:{
            type:Number,
            required:true
        }
    }
);

const person = new mongoose.model('person',personSchema);
module.exports = person; 
