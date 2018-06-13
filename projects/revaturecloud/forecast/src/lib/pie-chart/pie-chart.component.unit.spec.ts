import { PieChartComponent } from "./pie-chart.component";

describe('forecast component', () => {
  let component: PieChartComponent;

  beforeEach(() => {
    component = new PieChartComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
