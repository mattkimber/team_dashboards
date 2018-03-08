const elasticsearch = require("elasticsearch");
const queries = require("./queries.js");

var config_client = new elasticsearch.Client({
	host: process.env.ES_CONFIG_HOST || "localhost:9200"
});

var data_client = new elasticsearch.Client({
	host: process.env.ES_DATA_HOST || "localhost:9200"
});


var getConfigData = (index, type, id) => config_client
    .get({
        index: index,
        type: type,
        id: id
    })
    .then((data) => Promise.resolve(data._source))
    .catch((err) => err.status === 404 ? Promise.resolve(null) : Promise.reject(err));

var putConfigData = (index, type, id, data) => config_client
    .index({
        index: index,
        type: type,
        id: id,
        body: data
    });

var searchData = (index, query) => data_client
    .search({
        index: index,
        body: query
    })
    .then((data) => Promise.resolve(data.aggregations))
    .catch((err) => err.status === 404 ? Promise.resolve(null) : Promise.reject(err));

module.exports = {
    getConfig: () => getConfigData("config", "configuration", "main"),
    setConfig: (config) => putConfigData("config", "configuration", "main", config),
    getPasswordHash: () => getConfigData("password", "passwordHash", "main"),
    setPasswordHash: (hash, salt) => putConfigData("password", "passwordHash", "main", {hash: hash, salt: salt}),
    getEndpoint: (id) => getConfigData("endpoints", "endpoint", id),
    putEndpoint: (id, endpoint) => putConfigData("endpoints", "endpoint", id, endpoint),
    getPerformance: () => searchData("pings", queries.performance)
}