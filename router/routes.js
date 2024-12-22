const {models} = require("../models/models")
const Shortid = require("shortid");
const postdata = async(req,res)=>{
const id = req.body.reid;
const url = await models.create({
Shortid:Shortid.generate(),
reid:id,
})
res.render("home",({id:url.Shortid}));
}

const getdata = async(req,res) =>{
    const Shortid = req.params.id;
    const url = await models.findOneAndUpdate({Shortid,},{$push:{visithistory:{timestamp:Date.now()}}})
    
    return res.redirect(url.reid);
};
module.exports = {postdata,getdata};