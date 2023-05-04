import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CityDataService } from './city-data.service';

describe('CityDataService', () => {
  let service: CityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(CityDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
