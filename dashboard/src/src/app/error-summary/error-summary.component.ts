import { Component, OnInit } from '@angular/core';
import { MetricByKey } from '../metric-by-key';
import {DataService} from "../data.service";
import {PerformanceMetrics} from "../performance-metrics";

@Component({
  selector: 'app-error-summary',
  templateUrl: './error-summary.component.html',
  styleUrls: ['./error-summary.component.css']
})
export class ErrorSummaryComponent implements OnInit {

  leastReliableEndpoint: MetricByKey = { name: "", amount: 0 };
  mostReliableEndpoint: MetricByKey = { name: "", amount: 0 };
  mostCommonError: MetricByKey = { name: "", amount: 0 };
  totalErrors: number = 0;

  constructor(private _data: DataService) { }
  
  ngOnInit() {
    this._data.data.subscribe(result => { 
      this.update(result);
    });
  }

  private update(data: PerformanceMetrics) {
    if(data.errors) {
      this.totalErrors = data.errors.reduce((acc, cur) => acc + cur.total, 0);
      
      var errorsByRoute = [];

      for(let e of data.errors) {
        for(let r of e.routes) {
          if(!errorsByRoute[r.route]) {
            errorsByRoute[r.route] = { route: r.route, errors: r.errors };
          } else {
            errorsByRoute[r.route].errors = errorsByRoute[r.route].errors + r.errors;
          }
        }
      }

      var mostErrors = -1;
      var leastErrors = 2147483647;

      var failureFreeEndpoint = data.response_times_by_endpoint.filter((x) => !errorsByRoute[x.route])[0];
      if(failureFreeEndpoint) {
        leastErrors = 0;
        this.mostReliableEndpoint = new MetricByKey(failureFreeEndpoint.route, 0);
      }

      // Typescript `of` doesn't work on associative arrays
      for(let r in errorsByRoute) {

        if(errorsByRoute[r].errors > mostErrors) {
          this.leastReliableEndpoint = new MetricByKey(errorsByRoute[r].route, errorsByRoute[r].errors);
          mostErrors = errorsByRoute[r].errors;
        }

        if(errorsByRoute[r].errors < leastErrors) {
          this.mostReliableEndpoint = new MetricByKey(errorsByRoute[r].route, errorsByRoute[r].errors);
          leastErrors = errorsByRoute[r].errors;
        }
      }

      var mostCommonError = data.errors.sort((a,b) => b.total - a.total)[0];

      if(mostCommonError) {
        this.mostCommonError = new MetricByKey(mostCommonError.error, mostCommonError.total);
      }

    }
  }

}
