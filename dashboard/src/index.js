var Express = require("express");
var app = Express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req,res) => {
    res.type("text/plain");
    res.send("Hello");
});

app.listen(app.get("port"), function() {
    console.log("Web server started")
});