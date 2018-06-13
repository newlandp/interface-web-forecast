import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ForecastService } from './forecast.service';

describe('ForecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ForecastService, HttpClient]
    });
  });

  it('should be created', inject([ForecastService], (service: ForecastService) => {
    expect(service).toBeTruthy();
  }));
});
