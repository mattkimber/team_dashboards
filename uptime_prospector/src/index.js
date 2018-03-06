const request = require("request-promise-native");
const data = require("./lib/data.js");
const secrets = require("./lib/secrets.js");
const decrypter = require("./lib/decrypter.js");


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
		// Anonymise potentially sensitive information
		err.options.headers = null;
		
		var duration = new Date().getTime() - start_time;
		return Promise.resolve(getEvent(duration, err, endpoint.name));
	})
}

var indexEvents = function(events) {
	return Promise.all(events.map(e => data.putEvent(e)));
}

var getTimeoutLength = function(start_time) {
	var retval = (process.env.MIN_FINISH_TIME || 30000) - (new Date().getTime() - start_time);
	console.log("Finished early: waiting for " + retval + "ms");
	return retval < 0 ? 0 : retval;
}

var global_start_time = new Date().getTime();

data
	.getEndpoints()
	.then((data) => Promise.all(data.map(d => decrypter.decrypt(d, secrets.private_key, secrets.passphrase))))
	.then((data) => Promise.all(data.map(d => checkEndpoint(d))))	
	.then(indexEvents)
	.then(() => new Promise(resolve => setTimeout(resolve, getTimeoutLength(global_start_time))))
	.then(console.log("Done"))
	.catch(console.log);