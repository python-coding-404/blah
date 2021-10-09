const express = require('express');
"use strict";
require('events').setMaxListeners = 1000;
const { v4: uuidv4 } = require('uuid');
const app = express();
const uuid = uuidv4();
console.log(uuid)
const mary = { id: 12781, name: "mary"}
const pid = 19678

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/static/"))
app.get(`/room/${uuid}`, (req, res) => {
res.send("lol")
})
app.get('/xml', (req, res) => {
  res.sendFile(__dirname + "/lol.xml")
})

app.get("/", (req, res) => {
  res.render("index")
})
app.get("/admin", (req, res) => {
  res.render("admin")
})

app.post("/home", (req, res) => {
  
  res.render("home",{ID: req.body.ID, Name:req.body.name, res:res})
})
app.get("/api/users", (req,res) => {
  res.json(mary);
})
app.get("/user/profile", (req,res) => {
   
   res.render("profile", {Name: req.query.Name, ID: req.query.ID})
})
app.post("/pid/validcheck", (req,res) => {
  if(req.body.pid == pid) {
    res.redirect("/user/pid/")

  } else {
    res.redirect("/pid/wrong")
  }
  
})
app.get("/pid/validcheck", (req,res) => {
  res.status(403).send("403 Forrbien")
})
app.get("/user/pid", (req,res) => {
  if(req.query.lol == undefined) {
    
  }
  res.send("hello world" + req.query.lol)
})
app.get("/pid/wrong", (req,res) => {
  res.redirect("/user/profile")
})
app.listen(3000, () => {
});
