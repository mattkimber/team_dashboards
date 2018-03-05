const Uuid = require("uuid/v4");
const fs = require("fs");

var getPublicKey = () => {
    var key = ""
    
    try {
        fs.readFileSync("/run/secrets/dashboard_public_key");
        return key;
    } catch(err) {
        if(process.env.DASHBOARD_PUBLIC_KEY) {
            return process.env.DASHBOARD_PUBLIC_KEY;
        }
        throw("No public key found in Docker secrets or environment");
    }
};

module.exports = {
    jwt_signing_key: Uuid(),
    public_key: getPublicKey()
};
