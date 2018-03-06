const assert = require("assert");
const fs = require("fs");
const decrypter = require("../lib/decrypter.js");

describe("Decrypter", function() {
  it("Should decrypt an encrypted key", function(done) {
    var data = {
      request: {
        headers: {
          "Test": {value: "f4354230", is_sensitive: true, encrypted_key: "N5ov1L4DW1PyEzF2zoyxC1cwqSHJjQk5KrQe/N1Z84TAGKR382A4vTe2aCmc2N0CDQcXBRQXFrYugx25aPZ+EnwtapJjyLgWImXC/4ZUkXZ8jqlbZymFl7ZOtT7ltWyjs/oRtNlQK8Z4P8cDd3kzByjIafF6SOIggAJEweuc6d6Y1rVPweyESo4QbyZgrmGuqzr1HxHkjJjIPlI46D9bxX+OqyggjD5tRi34A3qVfpMmUk9flto7gGnC1vYCO1nZie2BgEPOOhSxu/E1E4bE/3LsLoDj9W34dqm0qrysqFIDK2jWls17oBLuptntNwV0med3DmZlXkfMH6AMId/xTg==" }
        }
      }
    }

    var private_key = fs.readFileSync("./test/private_key.pem");

    decrypter
      .decrypt(data, private_key, "my phrase")
      .then((data) => assert.equal(data.request.headers.Test, "test"))
      .then(done());
  });
})