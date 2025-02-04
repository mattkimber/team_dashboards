const data = require("../lib/data.js");

var getMetrics = (metrics) => metrics ? ({
  median_response_time: metrics.percentiles.values["50.0"],
  response_times_by_endpoint: metrics.response_times_by_endpoint.buckets
    .map(b => ({
      route: b.key,
      p_50: b.percentiles.values["50.0"],
      p_90: b.percentiles.values["90.0"],
      p_99: b.percentiles.values["99.0"]
    })
  ),
  response_time_history: metrics.response_time_history.buckets
    .filter(b => b.doc_count != 0)
    .map(b => ({
      timestamp: b.key_as_string,
      average_duration: b.average_duration.value
    })),
  errors: metrics.errors.buckets.map(b => ({
    error: b.key,
    total: b.route.buckets.reduce((acc, cur) => acc + cur.doc_count, 0),
    routes: b.route.buckets.map((r) => ({
      route: r.key,
      errors: r.doc_count
    }))
  }))
}) : null;

module.exports = {
  get: (req, res) => data
    .getPerformance()
    .then((result) => res.json(getMetrics(result)))
};