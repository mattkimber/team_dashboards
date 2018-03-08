export class PerformanceMetrics {
  constructor(
    public median_response_time: number,
    public response_times_by_endpoint: [{
      route: string,
      p_50: number,
      p_90: number,
      p_99: number
    }],
    public response_time_history: [{
      timestamp: string,
      average_duration: number
    }]
  ) {}
}
