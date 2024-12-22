const mongoose = require("mongoose");

const urlschema = new mongoose.Schema({
    Shortid:{type:String,
        required:true
    },
    reid:{
        type:String,
        required:true
    },
    visithistory:[{timestamp:{type:Number}}]
},{timestamps:true});

const models = mongoose.model("urls",urlschema);

module.exports = {models}
