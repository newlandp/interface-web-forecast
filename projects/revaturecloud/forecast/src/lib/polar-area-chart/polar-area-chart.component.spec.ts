import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarAreaChartComponent } from './polar-area-chart.component';
import { ChartsModule } from 'ng2-charts';


describe('PolarAreaChartComponent', () => {
  let component: PolarAreaChartComponent;
  let fixture: ComponentFixture<PolarAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarAreaChartComponent ],
      imports: [ChartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call chartClicked method when clicked', () => {
    let spy = spyOn(component, 'chartClicked');
    fixture.detectChanges();
    let chart = fixture.nativeElement.querySelector('canvas');

    chart.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should call chartHovered when hovered over', () => {
    let spy = spyOn(component, 'chartHovered');
    fixture.detectChanges();
    let chart = fixture.nativeElement.querySelector('canvas');
    let event = new Event('chartHover');
    
    chart.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
  });

});
