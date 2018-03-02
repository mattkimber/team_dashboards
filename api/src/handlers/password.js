const data = require("../lib/data.js");
const passwordHash = require("../lib/password_hash.js");

module.exports = {
    put: (req, res) =>
        data
            .getPasswordHash()
            .then((data) => {
                if(!passwordHash.isValidPasswordHash(req.body.passwordHash)) {
                    return Promise.reject({status: 400, reason: "input is not a valid bcrypt hash"})
                }

                if(data && !req.user) {
                    return Promise.reject({status: 403, reason: "not authorised"});
                }
                
                return Promise.resolve();                
            })
            .then(() => passwordHash.getHashedPassword(req.body.passwordHash))
            .then(data.setPasswordHash)
            .then((data) => res.json(data))
            .catch((err) => res.status(err.status || 500).json(err))
}