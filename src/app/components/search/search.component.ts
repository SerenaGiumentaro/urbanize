import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from 'primeng/api';
import { CityDataService } from 'src/app/services/city-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private cityDataService: CityDataService) {}
  searchCityForm!: FormGroup;
  suggestions!: any[];
  noResult : boolean = false
  message!: Message[]
  public startSearchData = new EventEmitter()
  ngOnInit(): void {
    this.message = [{severity: 'error', summary: 'No city data available:', detail: 'Please try with an other city'}]
    this.searchCityForm = new FormGroup({
      city: new FormControl(),
    });
  }

// autocomplete
  citySuggestion(event: any) {
    this.cityDataService.getAllCities(event.query).subscribe({
      next: (res) => {
        const allCities: string[] = res._embedded['city:search-results'].map(
          (city: { matching_full_name: string }) => city.matching_full_name
        );
        this.suggestions = [...allCities]
      },
      error: err => console.error(err.message)
    });
  }

  searchCity() {
    this.cityDataService.getCityData(this.searchCityForm.value.city).subscribe({
      next: res => {
        const result = res._embedded['city:search-results'][0]?._embedded?.['city:item']?._links?.['city:urban_area']
        if(result){
          this.startSearchData.emit()
          this.noResult = false
          this.cityDataService.urbanArea = result
          this.cityDataService.fillCityScore()
          this.cityDataService.fillCityImg()
        }else {
          this.noResult = true
        }
        this.searchCityForm.reset()
      },
      error: err => {
        console.error(err.message)}
    })
    }
}
