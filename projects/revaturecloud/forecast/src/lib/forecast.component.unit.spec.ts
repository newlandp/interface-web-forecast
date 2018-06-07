import { ForecastComponent } from "../public_api";

describe('forecast component', () => {
  let component: ForecastComponent;

  beforeEach(() => {
    component = new ForecastComponent();
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
