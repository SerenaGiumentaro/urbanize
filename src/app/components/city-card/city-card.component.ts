import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent {
  isLoading: boolean = true;
  haveData: boolean = true;
  @Input() cardCityData!: {
    name: string;
    score: number;
    hrefImg: string;
    summary: string;
    imgLicense: string;
    imgPhotographer: string;
    imgSite: string;
  };
}
