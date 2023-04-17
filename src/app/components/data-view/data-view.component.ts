import { Component, DoCheck, OnInit } from '@angular/core';
import { CityDataService } from 'src/app/services/city-data.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
})
export class DataViewComponent implements OnInit {
  constructor(private cityDataService: CityDataService) {}
  cardCityData: {
    name: string;
    score: number;
    hrefImg: string;
    summary: string;
    imgLicense: string;
    imgPhotographer: string;
    imgSite: string;
  } = {
    name: '',
    score: 0,
    hrefImg: '',
    summary: '',
    imgLicense: '',
    imgPhotographer: '',
    imgSite: '',
  };

  categories!: [
    {
      color: string;
      name: string;
      score_out_of_10: number;
    }
  ];

  ngOnInit(): void {
    this.cityDataService.data$.subscribe({
      next: (res) => {
        this.categories = [...res.categories];
      },
    });
  }
}
