import { PolarAreaChartComponent } from "./polar-area-chart.component";

describe('forecast component', () => {
  let component: PolarAreaChartComponent;

  beforeEach(() => {
    component = new PolarAreaChartComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
