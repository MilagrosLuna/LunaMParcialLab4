import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private selectedCountrySource = new BehaviorSubject<any>(null);

  selectedCountry$ = this.selectedCountrySource.asObservable();

  constructor(private http: HttpClient) {}

  setSelectedCountry(country: any) {
    this.selectedCountrySource.next(country);
  }

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.com/v2/all');
  }

  getCountryByName(name: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v2/name/${name}`);
  }
}
