import { ForecastModule } from './forecast.module';

describe('ForecastModule', () => {
  let forecastModule: ForecastModule;

  beforeEach(() => {
    forecastModule = new ForecastModule();
  });

  it('should create an instance', () => {
    expect(forecastModule).toBeTruthy();
  });
});
