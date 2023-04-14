import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CityImage, CityScore, SearchCity } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class CityDataService {
  constructor(private http: HttpClient) {}

  cityScore: CityScore = {
    categories: [{
      color: '',
      name: '',
      score_out_of_10: 0
    }],
    summary: '',
    teleport_city_score: 0
  };

  
  getAllCities(query: string) {
    return this.http
      .get<SearchCity>(`https://api.teleport.org/api/cities/?search=${query}`)
      .pipe(catchError((err) => throwError(() => err)));
  }

  getCityData(city: string) {
    const params = new HttpParams().set('search', city);
    return this.http
      .get<SearchCity>(
        `https://api.teleport.org/api/cities?${params}&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurbanarea`
      )
      .pipe(catchError((err) => throwError(() => err)));
  }

  getCityScore(urbanAreaUrl: string){
    return this.http.get<CityScore>(`${urbanAreaUrl}scores`)
    .pipe(catchError((err) => throwError(() => err)));
  }

  getCityImage(urbanAreaUrl: string){
    return this.http.get<CityImage>(`${urbanAreaUrl}images`)
    .pipe(catchError((err) => throwError(() => err)));
  }
}
