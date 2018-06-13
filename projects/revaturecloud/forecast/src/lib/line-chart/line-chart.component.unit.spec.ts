import { LineChartComponent } from "./line-chart.component";

describe('forecast component', () => {
  let component: LineChartComponent;

  beforeEach(() => {
    component = new LineChartComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
