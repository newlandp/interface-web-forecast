import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartComponent } from './line-chart.component';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(async(() => {
    // test bed is the angular module environment
    TestBed.configureTestingModule({
      declarations: [ LineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the chartClicked method when clicked', () => {
    let chart = fixture.nativeElement.querySelector('canvas');
    chart.click();
    expect(component.chartClicked).toHaveBeenCalled();
  });
});
