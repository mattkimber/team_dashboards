import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Plotly from "plotly.js";
import {Config, Data, Layout} from "plotly.js";
import {DataService} from "../data.service";
import {PerformanceMetrics} from "../performance-metrics";

@Component({
  selector: 'app-response-time-gauge',
  templateUrl: './response-time-gauge.component.html',
  styleUrls: ['./response-time-gauge.component.css']
})
export class ResponseTimeGaugeComponent implements OnInit {

  @ViewChild("chart") el: ElementRef;
  private chart_degrees = 220;

  private metrics: PerformanceMetrics;

  constructor(private _data: DataService) { }

  ngOnInit() {    
    this._data.data.subscribe(result => { 
      this.metrics = result; 
      this.updateGraph();
    })
  }

  private getPath(response_time) {
    var degrees = ((this.chart_degrees / 2) + 90) - ((response_time * this.chart_degrees) / 1000);
    var radius = 0.5;

    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    var mainPath = "M -.0 -0.025 L .0 0.025 L ";
    var path = mainPath.concat(String(x), " ", String(y), " Z");

    return path;
  }

  private getGraphData(response_time) {
    return [
      { 
        type: "scatter",
        x: [0],
        y: [0],
        marker: {size: 28, color: "333333" },
        showlegend: false,
        name: "ms",
        text: response_time,
        hoverinfo: "text+name"
      },
      {
        type: "pie",        
        values: [(this.chart_degrees / 3), (this.chart_degrees / 24), (this.chart_degrees / 3) - ((this.chart_degrees / 12)), (this.chart_degrees / 24), (this.chart_degrees / 3), 360 - this.chart_degrees],
        rotation: -(this.chart_degrees / 2),
        sort: false,
        direction: "clockwise",
        text: [ "Good", "", "Average", "", "Poor", ""],
        textinfo: "text",
        textposition: "inside",
        marker: {colors: [
          "rgba(0,127,0,.5)", 
          "rgba(127,192,0,.5)",
          "rgba(255,255,0,.5)", 
          "rgba(255,127,0,.5)",
          "rgba(255,0,0,.5)", 
          "rgba(255,255,255,1)"]},
        labels: ["0-333","","333-667","","667-1000",""],
        hoverinfo: "label",
        hole: 0.5,
        showlegend: false
      }];
  }

  private getLayout(response_time) {
    var path = this.getPath(response_time);

    return {
      shapes: [{
        type: "path",
        path: path,
        fillcolor: "555555",
        line: {
          color: "444444"
        }
      }],
      title: "Median Response Time: " + Math.round(response_time) + "ms",
      height: 600,
      width: 600,
      xaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1,1]},
      yaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1,1]}
    };
  }

  private updateGraph() {
    const element = this.el.nativeElement;
    if(this.metrics) {
      var response_time = this.metrics.median_response_time;
      Plotly.newPlot(element, this.getGraphData(response_time), this.getLayout(response_time));
    } else {
      element.text = "No data";
    }
  }

}
