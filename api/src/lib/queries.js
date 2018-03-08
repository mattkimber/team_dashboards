module.exports = {
  performance: {
    size: 0,
    query: {
      range: {
        datestamp: {
          gte: "now-15m",
          lt: "now"
        }
      }
    },
    aggregations: {
      percentiles: {
        percentiles: {
          field: "duration",
          percents: [50]
        }
      },
      response_times_by_endpoint: {
        terms: {
          field: "route.keyword",
          size: 20,
          order: { "average_duration": "desc" }
        },
        aggregations: {
          percentiles: {
            percentiles: {
              field: "duration",
              percents: [50,90,99]
            }
          },
          average_duration: {
            avg : {
              field: "duration"
            }
          }
        }
      },
      response_time_history: {
        date_histogram: {
          field: "datestamp",
          interval: "30s"
        },
        aggregations: {
          average_duration: {
            avg: {
              field: "duration"
            }
          }
        }
      }
    }
  }
};