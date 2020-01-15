// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// get api endpoint to get client info
app.get('/api/getclientinfo', (req, res) => {
  let ipaddress = req.ip;
  let language = req.acceptsLanguages();
  let software = req.get('User-Agent');
  // send as json
  res.json({
    ipaddress: ipaddress, 
    language: language[0], 
    software: software});
    });

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
