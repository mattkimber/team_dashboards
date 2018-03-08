import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseHistogramComponent } from './response-histogram.component';

describe('ResponseHistogramComponent', () => {
  let component: ResponseHistogramComponent;
  let fixture: ComponentFixture<ResponseHistogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseHistogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
