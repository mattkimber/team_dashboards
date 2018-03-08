import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Plotly from "plotly.js";
import {Config, Data, Layout} from "plotly.js";
import {DataService} from "../data.service";
import {PerformanceMetrics} from "../performance-metrics";


@Component({
  selector: 'app-response-histogram',
  templateUrl: './response-histogram.component.html',
  styleUrls: ['./response-histogram.component.css']
})
export class ResponseHistogramComponent implements OnInit {


  @ViewChild("chart") el: ElementRef;
  private metrics: PerformanceMetrics;

  constructor(private _data: DataService) { }
  
  ngOnInit() {
    this._data.data.subscribe(result => { 
      this.metrics = result; 
      this.updateGraph();
    });
  }

  private getGraphData() {
    return [{
      type: "scatter",
      mode: "lines",
      name: "Average Duration (ms)",
      x: this.metrics.response_time_history.map(m => m.timestamp),
      y: this.metrics.response_time_history.map(m => m.average_duration),
      line: { color: "#7F7F7F" }
    }];
  }

  private getLayout() {
    return {
      title: "Response Time History"
    };
  }

  private updateGraph() {
    const element = this.el.nativeElement;
    var response_time = this.metrics.median_response_time;
    Plotly.newPlot(element, this.getGraphData(), this.getLayout());
  }

}
