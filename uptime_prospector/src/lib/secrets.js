const crypto = require("crypto");
const fs = require("fs");

var getPrivateKey = () => {
    var key = ""

    try {
        key = fs.readFileSync("/run/secrets/dashboard_private_key");
        return key;
    } catch(err) {
        if(process.env.DASHBOARD_PRIVATE_KEY) {
            return process.env.DASHBOARD_PRIVATE_KEY;
        }
        throw("No private key found in Docker secrets or DASHBOARD_PRIVATE_KEY environment variable");
    }
};

var getPassphrase = () => {
  var passphrase = ""

  try {
    // Docker Secret will have a trailing newline, so we remove it.
    passphrase = fs.readFileSync("/run/secrets/dashboard_passphrase").toString().replace("\n","");
    return passphrase;
  } catch(err) {
    return process.env.DASHBOARD_PASSPHRASE || "";
  }
};

module.exports = {
    private_key: getPrivateKey(),
    passphrase: getPassphrase()
};
