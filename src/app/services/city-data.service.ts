import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { CityImage, CityScore, SearchCity } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class CityDataService {
  constructor(private http: HttpClient) {}
  cityImg: CityImage = {
    photos: [
      {
        image: {
          mobile: '',
          web: '',
        },
        attribution: {
          license: '',
          photographer: '',
          site: '',
        },
      },
    ],
  };
  urbanArea: { href: string; name: string } = {
    href: '',
    name: '',
  };
  cityScore: CityScore = {
    categories: [
      {
        color: '',
        name: '',
        score_out_of_10: 0,
      },
    ],
    summary: '',
    teleport_city_score: 0,
  };
  dataSubject = new BehaviorSubject<CityScore>(this.cityScore);
  data$ = this.dataSubject.asObservable();

  dataImage = new BehaviorSubject<CityImage>(this.cityImg);
  dataImage$ = this.dataImage.asObservable();

  getCurrentUrbanArea() {
    return this.urbanArea;
  }

  getCurrentCityScore() {
    return this.cityScore;
  }

  getCurrentCityImg() {
    return this.cityImg;
  }

  getAllCities(query: string) {
    return this.http
      .get<SearchCity>(`https://api.teleport.org/api/cities/?search=${query}`)
      .pipe(catchError((err) => throwError(() => err)));
  }

  fillCityScore() {
    this.getCityScore(this.urbanArea.href).subscribe({
      next: (res) => {
        this.dataSubject.next(res);
        this.cityScore = res;
      },
    });
  }

  fillCityImg() {
    this.getCityImage(this.urbanArea.href).subscribe({
      next: (res) => {
        this.dataImage.next(res)
        this.cityImg = res;
      },
    });
  }

  getCityData(city: string) {
    const params = new HttpParams().set('search', city);
    return this.http
      .get<SearchCity>(
        `https://api.teleport.org/api/cities?${params}&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurbanarea`
      )
      .pipe(catchError((err) => throwError(() => err)));
  }

  getCityScore(urbanAreaUrl: string) {
    return this.http
      .get<CityScore>(`${urbanAreaUrl}scores`)
      .pipe(catchError((err) => throwError(() => err)));
  }

  getCityImage(urbanAreaUrl: string) {
    return this.http
      .get<CityImage>(`${urbanAreaUrl}images`)
      .pipe(catchError((err) => throwError(() => err)));
  }
}
