import { RadarChartComponent } from "./radar-chart.component";

describe('forecast component', () => {
  let component: RadarChartComponent;

  beforeEach(() => {
    component = new RadarChartComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
