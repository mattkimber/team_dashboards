const crypto = require("crypto");

var copy = (source) => {
  var dest, v, k;
  dest = Array.isArray(source) ? [] : {};
  for (k in source) {
    v = source[k];
    dest[k] = (typeof v === "object") ? copy(v) : v;
  }
  return dest;
};

var encrypt = (text, key) => {
  var cipher = crypto.createCipher("aes-256-ctr", key);
  var crypted = cipher.update(text, "utf-8", "hex");
  crypted += cipher.final("hex");
  return crypted;
};

var secureData = (data, public_key) => {
  var clone = copy(data);

  for(var h in clone.request.headers) {
    if(clone.request.headers[h].is_sensitive) {
      var key = crypto.randomBytes(64);

      var encrypted_key = crypto.publicEncrypt(public_key, key, "utf-8");

      clone.request.headers[h].value = encrypt(clone.request.headers[h].value, encrypted_key);
      clone.request.headers[h].encrypted_key = encrypted_key.toString("base64");
    }
  }

  return Promise.resolve(clone);
};

module.exports = (public_key) => ({
  secure: (data) => secureData(data, public_key)
});