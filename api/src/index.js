const Express = require("express");
const BodyParser = require("body-parser");
const Jwt = require("express-jwt");
const secrets = require("./lib/secrets.js");

var app = Express();

app.set("port", process.env.PORT || 3000);

app.use(BodyParser.json());

if (!process.env.NO_JWT) {
    app.use(Jwt({
        secret: secrets.jwt_signing_key,
        credentialsRequired: false
    }));
} else {
    console.log("Starting in INSECURE mode");
}

require("./routes")(app);

app.listen(app.get("port"), function() {
    console.log("Web server started")
});