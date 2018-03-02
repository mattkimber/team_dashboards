const bcrypt = require("bcrypt");

var validHash = RegExp("^\\\$2[ayb]\\\$.{56}$")

module.exports = {
    getHashedPassword: (password) => bcrypt.hash(password, 10),
    isValidPasswordHash: (hash) => hash.length === 60 && validHash.test(hash),
    passwordMatches: (password, hash) => bcrypt.compare(password, hash)
};