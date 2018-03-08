import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentilesChartComponent } from './percentiles-chart.component';

describe('PercentilesChartComponent', () => {
  let component: PercentilesChartComponent;
  let fixture: ComponentFixture<PercentilesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentilesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentilesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
