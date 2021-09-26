const express = require('express');

require('events').setMaxListeners = 1000;
const { v4: uuidv4 } = require('uuid');
const app = express();
const uuid = uuidv4();
console.log(uuid)
const mary = { id: 12781, name: "mary"}



const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/static/"))
app.get(`/${uuid}`, (req, res) => {
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

app.listen(3000, () => {
});
