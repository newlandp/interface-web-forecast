import { BarChartComponent } from "./bar-chart.component";

describe('forecast component', () => {
  let component: BarChartComponent;

  beforeEach(() => {
    component = new BarChartComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
