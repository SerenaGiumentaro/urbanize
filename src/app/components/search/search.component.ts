import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchCity } from 'src/app/interface';
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
  ngOnInit(): void {
    this.searchCityForm = new FormGroup({
      city: new FormControl(),
    });
  }

  citySuggestion(event: any) {
    this.cityDataService.getAllCities(event.query).subscribe({
      next: (res) => {
        const allCities: string[] = res._embedded['city:search-results'].map(
          (city: { matching_full_name: string }) => city.matching_full_name
        );
        this.suggestions = [...allCities]
      },
    });
  }

  searchCity() {
    
  }
}
