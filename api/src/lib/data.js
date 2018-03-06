const elasticsearch = require("elasticsearch");

var client = new elasticsearch.Client({
	host: process.env.ES_HOST || "localhost:9200"
});

var getData = (index, type, id) => client
    .get({
        index: index,
        type: type,
        id: id
    })
    .then((data) => Promise.resolve(data._source))
    .catch((err) => err.status === 404 ? Promise.resolve(null) : Promise.reject(err));

var putData = (index, type, id, data) => client
    .index({
        index: index,
        type: type,
        id: id,
        body: data
    });

module.exports = {
    getConfig: () => getData("config", "configuration", "main"),
    setConfig: (config) => putData("config", "configuration", "main", config),
    getPasswordHash: () => getData("password", "passwordHash", "main"),
    setPasswordHash: (hash, salt) => putData("password", "passwordHash", "main", {hash: hash, salt: salt}),
    getEndpoint: (id) => getData("endpoints", "endpoint", id),
    putEndpoint: (id, endpoint) => putData("endpoints", "endpoint", id, endpoint)
}