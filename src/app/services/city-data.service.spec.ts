import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CityDataService } from './city-data.service';
import { SearchCity } from '../interface';

describe('CityDataService', () => {
  let service: CityDataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CityDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCityData', ()=> {
    it(`should retyurn a SearchCity object`, ()=> {
      const query:string = 'milan'
      const mockResponse :SearchCity = {
        _embedded: {
          'city:search-results': [
            {
              matching_full_name: '',
              _embedded: {
                'city:item': {
                  population: 120,
                  _links: {
                    'city:urban_area': {
                      href: 'https://api.teleport.org/api/urban_areas/slug:milan/',
                      name: 'Milan',
                    },
                  },
                },
              },
              _links: {
                'city-items': {
                  href: '',
                },
              },
            },
          ],
        }
      };

      service.getCityData(query).subscribe(res => {
        expect(res).toEqual(mockResponse)
      })

      const req = httpMock.expectOne(`https://api.teleport.org/api/cities?search=${query}&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurbanarea`)
      expect(req.request.method).toBe('GET')
      req.flush(mockResponse)
    })
  })
});
