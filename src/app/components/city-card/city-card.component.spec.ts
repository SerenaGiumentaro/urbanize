import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardComponent } from './city-card.component';
import { CardModule } from 'primeng/card';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCardComponent ],
      imports: [
        CardModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    component.cardCityData = {
      name: 'city test',
      score: 10,
      hrefImg: 'url',
      summary: 'summary test',
      imgLicense: 'licence test',
      imgPhotographer: 'photographer test',
      imgSite: 'web site test'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
