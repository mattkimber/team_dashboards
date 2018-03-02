const Express = require("express");
const BodyParser = require("body-parser");
const Jwt = require("express-jwt");
const secret = require("./lib/secret.js");

var app = Express();

app.set("port", process.env.PORT || 3000);

app.use(BodyParser.json());
app.use(Jwt({
    secret: secret,
    credentialsRequired: false
}));

require("./routes")(app);

app.listen(app.get("port"), function() {
    console.log("Web server started")
});