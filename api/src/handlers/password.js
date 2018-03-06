const data = require("../lib/data.js");
const passwordHash = require("../lib/password_hash.js");

module.exports = {
    put: (req, res) =>
        data
            .getPasswordHash()
            .then((result) => {
                if(!passwordHash.isValidPasswordHash(req.body.passwordHash)) {
                    return Promise.reject({status: 400, reason: "input is not a valid bcrypt hash"})
                }

                if(result && !req.user) {
                    return Promise.reject({status: 403, reason: "not authorised"});
                }
                
                return Promise.resolve();                
            })
            .then(() => passwordHash.getHashedPassword(req.body.passwordHash))
            .then((result) => data.setPasswordHash(result.hash, result.salt))
            .then((result) => res.json(result))
            .catch((err) => res.status(err.status || 500).json(err))
}