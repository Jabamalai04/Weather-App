const express = require('express');
const path = require('path');

const app = express();
const viewPath = path.join(__dirname, '../templates/views');
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirectoryPath));

app.get('/about', function(req, res) {
    res.render('about');
})

app.get('/help', function(req, res) {
    res.render('help');
})

app.get('/', function(req, res) {
    res.render('home');
})

app.listen(8000, function() {
    console.log("The server is upon port 8000");
})