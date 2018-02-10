var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/secondpage", function(req, res) {
  res.sendFile("secondpage.html", { root: __dirname });
});

app.listen(5000, function() {
  console.log("server corriendo en el puerto 5000");
});
