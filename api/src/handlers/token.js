const jwt = require("jsonwebtoken");
const data = require("../lib/data.js");
const passwordHash = require("../lib/password_hash.js");
const secrets = require("../lib/secrets.js");

module.exports = {
    post: (req, res) =>
        data
            .getPasswordHash()
            .then((data) => {
                if(!data) {
                    return Promise.reject({status: 400, reason: "initial setup not performed"});
                }

                if(!passwordHash.isValidPasswordHash(req.body.passwordHash)) {
                    return Promise.reject({status: 400, reason: "input is not a valid bcrypt hash"});
                }

                return passwordHash.passwordMatches(req.body.passwordHash, data.hash, data.salt);
            })
            .then((result) => {
                if(!result) {
                    return Promise.reject({status: 403, reason: "incorrect credentials"});
                }

                var options = {
                    admin: true,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60)
                }

                res.json({
                    token: jwt.sign(options, secrets.jwt_signing_key)
                });
            })
            .catch((err) => res.status(err.status || 500).json(err))
}