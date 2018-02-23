const elasticsearch = require("elasticsearch");
const request = require("request-promise-native");

var getEvent = (time, err, route) => {
	return {
		version: 1,
		type: "ping",
		error: err,
		time: time,
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
		return Promise.resolve(getEvent(duration, null, endpoint.request.uri));
	}).catch(err => {
		return Promise.resolve(getEvent(duration, err, endpoint.request.uri));
	})
}

var indexEvents = function(event) {
	return client.index({
		index: "pings",
		type: "event",
		body: event
	});
}

checkEndpoint({
	request: {
		uri: "http://www.google.com/",
		method: "GET"
	}
}).then(indexEvents)
.then(() => console.log("Done"))
