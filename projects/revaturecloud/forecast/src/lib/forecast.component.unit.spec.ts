import { HttpClient } from '@angular/common/http';
import { ForecastService } from './forecast.service';
import { ForecastComponent } from "../public_api";

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
