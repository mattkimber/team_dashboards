const Express = require("express");

var app = Express();

app.set("port", process.env.PORT || 3000);

app.get("/behave", function(req, res) {
  res.status(200).send("OK");
});

app.get("/timeout", function(req,res) {
  setTimeout(() => { res.status(200).send("OK") }, 15000);
});

app.get("/", function(req, res) {
  var path = Math.floor(Math.random() * 5);
  console.log("Taking path " + path);
  switch(path) {
    case 1:
      res.status(503).send();
      break;
    case 2:
      res.status(503).send("CUSTOM_ERROR");
      break;
    case 3:
      res.status(403).send("NOT_ALLOWED");
      break;
    case 4:
      setTimeout(() => { res.status(200).send("OK") }, 5000 + (Math.random() * 10000) );
      break;      
    default:
      res.status(200).send("OK");
  }
});

app.listen(app.get("port"), function() {
  console.log("Web server started")
});