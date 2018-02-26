const elasticsearch = require("elasticsearch");
const request = require("request-promise-native");
const config = require(process.env.SITE_CONFIG || "./config/sites.json");

var getEvent = (time, err, route) => {
	return {
		version: 1,
		type: "ping",
		error: err,
		duration: time,
		datestamp: new Date(),
		ucr: null,
		route: route
	};
}

var client = new elasticsearch.Client({
	host: process.env.ES_HOST || "localhost:9200"
})

var checkEndpoint = function(endpoint) {
	var start_time = new Date().getTime();

	return request({
		uri: endpoint.request.uri,
		method: endpoint.request.verb,
		headers: endpoint.request.headers || {},
		body: endpoint.request.body,
		timeout: 8000
	}).then(data => {
		var duration = new Date().getTime() - start_time;
		return Promise.resolve(getEvent(duration, null, endpoint.name));
	}).catch(err => {
		var duration = new Date().getTime() - start_time;
		return Promise.resolve(getEvent(duration, err, endpoint.name));
	})
}

var indexEvents = function(events) {
	var indexOperations = events.map(
		e => client.index({
			index: "pings",
			type: "event",
			body: e
		}));
	
	return Promise.all(indexOperations);
}

var getTimeoutLength = function(start_time) {
	var retval = (process.env.MIN_FINISH_TIME || 30000) - (new Date().getTime() - start_time);
	console.log("Finished early: waiting for " + retval + "ms");
	return retval < 0 ? 0 : retval;
}

var global_start_time = new Date().getTime();

Promise
	.all(config.map(c => checkEndpoint(c)))
	.then(indexEvents)
	.then(() => new Promise(resolve => setTimeout(resolve, getTimeoutLength(global_start_time))))
	.then(console.log("Done"))
	.catch(console.log);