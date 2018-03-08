import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Plotly from "plotly.js";
import {Config, Data, Layout} from "plotly.js";
import {DataService} from "../data.service";
import {PerformanceMetrics} from "../performance-metrics";

@Component({
  selector: 'app-percentiles-chart',
  templateUrl: './percentiles-chart.component.html',
  styleUrls: ['./percentiles-chart.component.css']
})
export class PercentilesChartComponent implements OnInit {

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
      type: "bar",
      x: this.metrics.response_times_by_endpoint.map(r => r.p_50),
      y: this.metrics.response_times_by_endpoint.map(r => r.route),
      name: "50th percentile",
      marker: {
        color: "rgba(0,127,0,0.5)",
        width: 1
      },
      orientation: "h"
    },
    {
      type: "bar",
      x: this.metrics.response_times_by_endpoint.map(r => r.p_90 - r.p_50),
      y: this.metrics.response_times_by_endpoint.map(r => r.route),
      name: "50th-90th percentile",
      marker: {
        color: "rgba(255,255,0,0.5)",
        width: 1
      },
      orientation: "h"
    },
    {
      type: "bar",
      x: this.metrics.response_times_by_endpoint.map(r => r.p_99 - r.p_90),
      y: this.metrics.response_times_by_endpoint.map(r => r.route),
      name: "90th-99th percentile",
      marker: {
        color: "rgba(255,0,0,0.5)",
        width: 1
      },
      orientation: "h"
    }];
  }

  private getLayout() {
    return {
      title: "Response Times by Endpoint",
      barmode: "stack"
    };
  }

  private updateGraph() {
    const element = this.el.nativeElement;
    var response_time = this.metrics.median_response_time;
    Plotly.newPlot(element, this.getGraphData(), this.getLayout());
  }
}
