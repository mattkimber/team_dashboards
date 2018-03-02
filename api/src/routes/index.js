const status = require("../handlers/status.js");
const config = require("../handlers/config.js");
const password = require("../handlers/password.js");
const token = require("../handlers/token.js");

module.exports = function(app) {
    app.get("/", status.get);
    app.get("/config", config.get);
    app.put("/config", config.put);
    app.put("/password", password.put);
    app.post("/token", token.post);
}