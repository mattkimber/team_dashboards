

var getEvent = (time, err, route) => {
	return {
		version: 1,
		type: "ping",
		error: err,
		time: time,
		ucr: null,
		route: route
	};
}

console.log(JSON.stringify(getEvent(100, null, "/test")));
