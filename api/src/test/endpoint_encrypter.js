const test_key = "-----BEGIN RSA PUBLIC KEY-----\n" +
"MIIBCgKCAQEAp3azdKM0akMEkLQO94UJQQW6PYLg15UGUD8bNH8afFmgnwgrGTfwmD+H8O5Mphd4dh+0V2aQMVJCNj7vAIHS8BgVYsw6Qptu09fFTob8WbleJKuXU2NT" +
"WJQCyluQoELQJBTtMVskz6NvinCfhRfYuC0MVBCdLKUhPPu/6prajtL7gKYVtvwy/M3nJNneAoJFmw2Xn0rr2YbsI+meaX3S4SZ32yuyOhvYg+GsGTn/e5ZRRsjJFJLu" +
"XF14t8hfXAyJrzCYoUYba0875HcsrmsuSmLuS/6bjk+cct2VOuQeh+NyFudQDVpKdD8WXq5Z1qSuJhuYBm2OhbHCdq/lh0g1BwIDAQAB\n" +
"-----END RSA PUBLIC KEY-----"

const test_data = {
  name: "test",
  request: {
    verb: "GET",
    uri: "http://www.test.com/",
    headers: {
      "sensitive": { value: "foobarquux", is_sensitive: true },
      "public": { value: "quuxbarfoo", is_sensitive: false }
    }
  }
}

const assert = require("assert");
const encrypter = require("../lib/endpoint_encrypter.js")(test_key);

describe("Endpoint encrypter", function() {
  it("Should encrypt sensitive header values using a public key", function(done) {
    encrypter
      .secure(test_data)
      .then((data) => {
        assert.ok(data.request.headers["sensitive"].value);
        assert.ok(data.request.headers["sensitive"].value != test_data.request.headers["sensitive"].value);
        done();
      });
  });

  it("Should not encrypt non-sensitive header values", function(done) {
    encrypter
      .secure(test_data)
      .then((data) => {
        assert.ok(data.request.headers["public"].value);
        assert.ok(data.request.headers["public"].value === test_data.request.headers["public"].value);
        done();
      });
  });

  it("Should strip sensitive header values", function(done) {
    encrypter
      .secure(test_data)
      .then(encrypter.strip)
      .then((data) => {
        assert.ok(data.request.headers["public"].value);
        assert.ok(data.request.headers["public"].value === test_data.request.headers["public"].value);
        assert.ok(!data.request.headers["sensitive"].value);
        assert.ok(!data.request.headers["sensitive"].encrypted_key);
        done();
      });    
  })
})