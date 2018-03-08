import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { PerformanceMetrics } from "./performance-metrics";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {

  data: Observable<PerformanceMetrics>;
  private timer = Observable.timer(0, 15000);

  constructor(private http:HttpClient) {
    this.data = this.timer
      .flatMap((i) => this.http.get<PerformanceMetrics>("/api/metrics/performance"));
   }

  }
