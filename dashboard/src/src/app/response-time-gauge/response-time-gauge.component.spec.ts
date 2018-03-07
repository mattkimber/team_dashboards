import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseTimeGaugeComponent } from './response-time-gauge.component';

describe('ResponseTimeGaugeComponent', () => {
  let component: ResponseTimeGaugeComponent;
  let fixture: ComponentFixture<ResponseTimeGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseTimeGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseTimeGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
