const express = require("express");
const path = require("path");
const app = express();
const {connect} = require("./connections/connections");
connect("mongodb://127.0.0.1:27017/sr");
const {R} = require("./router/router");
const {Router} = require("./router/route");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use("/url",Router);
app.use("/",R);
app.listen(8000,() =>{console.log("connected")});