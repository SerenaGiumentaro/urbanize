import { Component, DoCheck, Input } from '@angular/core';
import { CityScore } from 'src/app/interface';
import { CityDataService } from 'src/app/services/city-data.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements DoCheck {
  constructor(private cityDataService: CityDataService) {}

  haveData: boolean = false;
  @Input() cardCityData: {
    name: string;
    score: number;
    hrefImg: string;
    summary: string;
    imgLicense: string;
    imgPhotographer: string;
    imgSite: string
  } = {
    name: '',
    score: 0,
    hrefImg: '',
    summary: '',
    imgLicense: '',
    imgPhotographer: '',
    imgSite: ''
  };

  ngDoCheck(): void {
    if (this.cityDataService.cityScore.teleport_city_score !== 0) {
      this.haveData = true;
      const cityData: CityScore = this.cityDataService.getCurrentCityScore();
      const urbanArea = this.cityDataService.getCurrentUrbanArea();
      const cityImg = this.cityDataService.getCurrentCityImg();
      this.cardCityData.score = cityData.teleport_city_score;
      this.cardCityData.name = urbanArea.name;
      this.cardCityData.summary = cityData.summary;
      this.cardCityData.hrefImg = cityImg.photos[0].image.mobile;
      this.cardCityData.imgLicense = cityImg.photos[0].attribution.license
      this.cardCityData.imgPhotographer = cityImg.photos[0].attribution.photographer
      this.cardCityData.imgSite = cityImg.photos[0].attribution.site
    }
  }
}
