import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AutoComplete, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CityDataService } from 'src/app/services/city-data.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { SearchCity } from 'src/app/interface';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let cityDataService: CityDataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        HttpClientTestingModule,
        AutoCompleteModule,
        ButtonModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    cityDataService = TestBed.inject(CityDataService);
    spyOn(cityDataService, 'getAllCities').and.returnValue(
      of({
        _embedded: {
          'city:search-results': [
            {
              matching_full_name: 'Milan, Lombardy',
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
        },
      })
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should give the urban area to service`, () => {
    spyOn(cityDataService, 'getCityData').and.returnValue(
      of({
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
        },
      })
    );
    component.searchCityForm.setValue({ city: 'Milan' });
    component.searchCity();
    expect(cityDataService.urbanArea.href).toEqual(
      'https://api.teleport.org/api/urban_areas/slug:milan/'
    );
  });

  it(`should get the suggestion when user type`, fakeAsync(() => {
    const autocomplete = fixture.debugElement.query(
      By.directive(AutoComplete)
    ).componentInstance;
    const inputEl = fixture.debugElement.query(
      By.css('.p-inputtext.p-component')
    );
    inputEl.nativeElement.value = 'm';
    inputEl.nativeElement.dispatchEvent(new Event('keydown'));
    inputEl.nativeElement.dispatchEvent(new Event('input'));
    inputEl.nativeElement.dispatchEvent(new Event('keyup'));

    tick(300);

    fixture.detectChanges();
    expect(autocomplete.suggestions.length).toBeGreaterThan(0);
    expect(autocomplete.suggestions[0]).toContain('Milan, Lombardy');

    flush();
  }));

  it(`should show a message, if there are no city data`, () => {
    const empyResponse = {
      _embedded: {
        'city:search-results': [
          {
            matching_full_name: '',
            _embedded: {
              'city:item': {
                population: 120,
                _links: {},
              },
            },
            _links: {
              'city-items': {
                href: '',
              },
            },
          },
        ],
      },
    } as SearchCity;
    spyOn(cityDataService, 'getCityData').and.returnValue(of(empyResponse));
    component.searchCityForm.setValue({ city: 'Milan' });
    component.searchCity();
    fixture.detectChanges();
    const message = fixture.debugElement.query(By.css('small.p-error'));
    expect(component.noResult).toBeTrue();
    expect(message.nativeElement.innerText).toContain(
      'No city data avalaible. Please try an other city'
    );
  });
});
