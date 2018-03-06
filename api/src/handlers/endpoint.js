const data = require("../lib/data.js");
const secrets = require("../lib/secrets.js");
const encrypter = require("../lib/endpoint_encrypter.js")(secrets.public_key);

module.exports = {
  get: (req, res) =>
  data
      .getEndpoint(req.params.id)
      .then(encrypter.strip)
      .then((result) => res.json(result))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      }),
  put: (req, res) =>
    encrypter
      .secure(req.body)
      .then((result) => data.putEndpoint(req.params.id, result))
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err))      
};