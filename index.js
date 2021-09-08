const express = require('express');
const app = express();
const mary = { id: "289-787892"}
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/static/"))

app.get('/xml', (req, res) => {
  res.sendFile(__dirname + "/lol.xml")
})
app.get("/", (req, res) => {
  res.render("index")
})
app.post("/home", (req, res) => {
  
  res.render("home",{ID: req.body.ID})
})
app.listen(3000, () => {
});