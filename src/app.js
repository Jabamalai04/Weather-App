const express = require('express');
const app = express();

app.get('/about', function (req, res) {
  res.send('about page');
})

app.listen(4000, function() {
    console.log("The server is upon port 4000");
})