const data = require("../lib/data.js");
const secrets = require("../lib/secrets.js");
const encryptEndpoints = require("../lib/endpoint_encrypter.js")(secrets.public_key);

module.exports = {
  //put: (req, res) =>

  //  .then((data) => res.json(data))
//    .catch((err) => res.status(500).json(err))
};