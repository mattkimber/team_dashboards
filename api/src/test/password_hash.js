var assert = require("assert");
var passwordHash = require("../lib/password_hash.js");

describe("Password Hasher", function() {
    it("Should reject invalid hashes", function() {
        assert.ok(!passwordHash.isValidPasswordHash("invalidhash"));
    });

    it("Should return a valid hash", function(done) {
        passwordHash
            .getHashedPassword("foo").then(
                (hash) => {
                    assert.ok(passwordHash.isValidPasswordHash(hash));
                    done();
                });        
    });

    it("Should allow authenticating a correct password", function(done) {
        passwordHash
            .getHashedPassword("foo")
            .then((hash) => {
                assert.ok(passwordHash.passwordMatches("foo", hash));
                done();
            });
    });

    it("Should not allow authenticating an incorrect password", function(done) {
        passwordHash
            .getHashedPassword("foo")
            .then((hash) => passwordHash.passwordMatches("bar", hash))
            .then((result) => {
                assert.ok(!result);
                done();
            });
    });

})