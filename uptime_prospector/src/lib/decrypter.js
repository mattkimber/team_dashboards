const crypto = require("crypto");

var decrypt = (text, key) => {
  var decipher = crypto.createDecipher("aes-256-ctr", key);
  var decrypted = decipher.update(text, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
};


var decryptHeaders = (data, private_key, passphrase) => {

  if(!data.request || !data.request.headers) return Promise.resolve(data);

  for(var h in data.request.headers) {

    if(data.request.headers[h].is_sensitive) {
      var encrypted_key = Buffer.from(data.request.headers[h].encrypted_key, "base64");
      var key = crypto.privateDecrypt({key: private_key, passphrase: passphrase}, encrypted_key);
      data.request.headers[h] = decrypt(data.request.headers[h].value, key);
    }
  }

  return Promise.resolve(data);
};

module.exports = {
  decrypt: decryptHeaders
}