const elasticsearch = require("elasticsearch");

var data_client = new elasticsearch.Client({
	host: process.env.ES_DATA_HOST || "localhost:9200"
});

var config_client = new elasticsearch.Client({
	host: process.env.ES_CONFIG_HOST || "localhost:9200"
});


var getAllData = (index) => config_client
  .search({
    index: index,
    q: "*.*",
    size: 1024
  })
  .then((data) => Promise.resolve(data.hits.hits.map(h => h._source)))
  .catch((err) => err.status === 404 ? Promise.resolve([]) : Promise.reject(err));

var putData = (index, type, data) => data_client
    .index({
        index: index,
        type: type,
        body: data
    });

module.exports = {
    getEndpoints: () => getAllData("endpoints"),
    putEvent: (event) => putData("pings", "event", event)
}