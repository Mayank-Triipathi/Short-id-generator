const express = require("express");
const Router = express.Router();
const{postdata,getdata} = require("./routes");

Router.route("/post").post(postdata);
Router.route("/get/:id").get(getdata);

module.exports = {Router};
