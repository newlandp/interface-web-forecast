import { DoughnutChartComponent } from "./doughnut-chart.component";

describe('forecast component', () => {
  let component: DoughnutChartComponent;

  beforeEach(() => {
    component = new DoughnutChartComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
