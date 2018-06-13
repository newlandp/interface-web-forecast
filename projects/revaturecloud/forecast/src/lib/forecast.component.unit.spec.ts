import { ForecastService } from './forecast.service';
import { ForecastComponent } from "./forecast.component";

describe('forecast component', () => {
  let service: ForecastService;
  let component: ForecastComponent;

  beforeEach(() => {
    service = new ForecastService(null);
    component = new ForecastComponent(service);
  })

  it('exists', () => {
    expect(component).toBeTruthy();
  });
});
