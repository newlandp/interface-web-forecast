import { ForecastService } from './forecast.service';
import { ForecastComponent } from "../public_api";

describe('forecast component', () => {
  let component: ForecastComponent;
  let service: ForecastService;

  beforeEach(() => {
    service = new ForecastService(null);
    component = new ForecastComponent(service);
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
