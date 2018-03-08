const status = require("../handlers/status.js");
const config = require("../handlers/config.js");
const password = require("../handlers/password.js");
const token = require("../handlers/token.js");
const endpoint = require("../handlers/endpoint.js");
const performanceMetrics = require("../handlers/performanceMetrics.js");

module.exports = function(app) {
    app.get("/", status.get);
    app.get("/config", config.get);
    app.put("/config", config.put);
    app.put("/password", password.put);
    app.post("/token", token.post);
    app.get("/endpoint/:id", endpoint.get);
    app.put("/endpoint/:id", endpoint.put);
    app.get("/metrics/performance", performanceMetrics.get);
}