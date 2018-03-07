import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ResponseTimeGaugeComponent } from './response-time-gauge/response-time-gauge.component';
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    ResponseTimeGaugeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
