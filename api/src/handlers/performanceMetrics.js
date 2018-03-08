const data = require("../lib/data.js");

var getMetrics = (metrics) => ({
  median_response_time: metrics.percentiles.values["50.0"],
  response_time_percentiles: {
    labels: Object.keys(metrics.percentiles.values).map(k => Math.round(k) + "th"),
    values: Object.values(metrics.percentiles.values)
  },
  response_times_by_endpoint: metrics.response_times_by_endpoint.buckets.map(
    b => ({
      route: b.key,
      p_50: b.percentiles.values["50.0"],
      p_90: b.percentiles.values["90.0"],
      p_99: b.percentiles.values["99.0"]
    })
  )
});

module.exports = {
  get: (req, res) => data.getPerformance()
    .then((result) => res.json(getMetrics(result)))
};