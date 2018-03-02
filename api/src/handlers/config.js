const data = require("../lib/data.js");

module.exports = {
    get: (req, res) =>
        data
            .getConfig()
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err)),
    put: (req, res) =>
        data
            .setConfig(req.body)
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err))
}