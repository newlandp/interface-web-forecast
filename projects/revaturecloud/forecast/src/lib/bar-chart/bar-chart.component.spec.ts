import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';


import { BarChartComponent } from './bar-chart.component';


describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;
  let snapshots = [
    {"date":"10/27/2005","roomCount":6588,"userCount":1186,"location":"Tampa"},
    {"date":"10/29/2006","roomCount":7701,"userCount":6173,"location":"New York"},
    {"date":"7/10/2007","roomCount":4842,"userCount":3018,"location":"Reston"}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartComponent ],
      imports: [ChartsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    component.snapshots = snapshots;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call the chartClicked method when clicked', () => {
    let spy = spyOn(component, 'chartClicked');
    fixture.detectChanges();
    let chart = fixture.nativeElement.querySelector('canvas');
    chart.click();

    expect(spy).toHaveBeenCalled();
  });

  xit('should call the chartHovered method when hovered', () => {
    let spy = spyOn(component, 'chartHovered');
    fixture.detectChanges();
    let chart = fixture.nativeElement.querySelector('canvas');
    let event = new Event('chartHover');
    chart.dispatchEvent(event);
    expect(spy).toHaveBeenCalled();
  })
});
