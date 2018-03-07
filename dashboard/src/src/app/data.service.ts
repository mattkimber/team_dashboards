import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private responseTimes = new BehaviorSubject<any>([100,200]);
  responseTime = this.responseTimes.asObservable();

  constructor() { }

  getMedianResponseTime() {
    this.responseTimes.next(100 + (Math.random() * 200));
  }

}
