import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutosService {
  constructor(private _http: HttpClient) {}
  
  public getMakes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '474f0f4b4amshc639a3fb3856c2fp195014jsnb949f3f5bd98',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      }),
    };
    return this._http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', httpOptions);
  }

  public getModels(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '474f0f4b4amshc639a3fb3856c2fp195014jsnb949f3f5bd98',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      }),
    };
    return this._http.get('https://car-specs.p.rapidapi.com/v2/cars/makes/%7BmakeId%7D/models', httpOptions);
  }
}
