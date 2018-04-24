import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { MyClass } from './api-interface';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map'
@Injectable()
export class WorldInfoService implements MyClass {
  public baseUrl = "https://restcountries.eu/rest/v2";
  constructor(private http: HttpClient) { }

  //Method to get all countries of given fields like region,language,currency
  public getAllCountries(entityName:string,entityValue:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${entityName}/${entityValue}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag`)

      .catch(this.handleError);

  }

  //Method to get single country information
  public getSingleCountry = (countryName): Observable<any> => {

    return this.http.get(`${this.baseUrl}/name/${countryName}?fullText=true`)

    .catch(this.handleError);

  }

  //Method to handle error
  public handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof Error) {

      errorMessage = `Client Side Error Occured`;

    } else {

      errorMessage = `Server Side Error Occured`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError
}
