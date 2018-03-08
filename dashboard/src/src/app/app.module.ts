import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ResponseTimeGaugeComponent } from './response-time-gauge/response-time-gauge.component';
import { DataService } from "./data.service";
import { PercentilesChartComponent } from './percentiles-chart/percentiles-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponseTimeGaugeComponent,
    PercentilesChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
