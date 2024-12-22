const express = require("express");
const R = express.Router();
const{models} = require("../models/models")
R.get("/",async (req,res)=>{
    const urrls = await models.find({});
    return res.render("home",{urls:urrls});
})

module.exports = {R};