var express = require('express')
var app = express();
var fs = require('fs');
var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));
const engines = require('consolidate');
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');
//localhost:3000
app.get('/', function (req, res) {
    res.render('index');
})
app.get('/register', function (req, res) {
    res.render('register');
})
app.get('/allUser', function (req, res) {
    res.render('allUser');
})
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running in 3000 port");
});