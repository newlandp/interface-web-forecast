import { ChartsModule } from 'ng2-charts';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartComponent } from './doughnut-chart.component';

describe('DoughnutChartComponent', () => {
  let component: DoughnutChartComponent;
  let fixture: ComponentFixture<DoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoughnutChartComponent],
      imports: [ChartsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the chartClicked method when clicked', () => {
    let spy = spyOn(component, 'chartClicked');
    fixture.detectChanges();
    let chart = fixture.nativeElement.querySelector('canvas');
    chart.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the chartHovered method when hovered', () => {
    let spy = spyOn(component, 'chartHovered');
    fixture.detectChanges();
    let chart = fixture.nativeElement.querySelector('canvas');
    let event = new Event('chartHover');
    chart.dispatchEvent(event);
    expect(spy).toHaveBeenCalled();
  })
});
