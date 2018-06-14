import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart.component';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartComponent],
      imports: [ChartsModule]
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
