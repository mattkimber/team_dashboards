const bcrypt = require("bcrypt");
const crypto = require("crypto");

var validHash = RegExp("^\\\$2[ayb]\\\$.{56}$")

module.exports = {
    getHashedPassword: (password) => {
        var salt = crypto.randomBytes(32).toString("base64");
        return bcrypt.hash(salt + password, 10)
            .then((result) => Promise.resolve({hash: result, salt: salt}))
    },
    isValidPasswordHash: (hash) => hash.length === 60 && validHash.test(hash),
    passwordMatches: (password, hash, salt) => bcrypt.compare(salt + password, hash)
};