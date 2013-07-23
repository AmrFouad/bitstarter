var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var inFile = "index.html";
buf = fs.readFileSync(inFile);
string = buf.toString();
app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
