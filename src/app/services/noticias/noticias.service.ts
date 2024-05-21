import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private _http: HttpClient) {}

  public getNoticias(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '474f0f4b4amshc639a3fb3856c2fp195014jsnb949f3f5bd98',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
      }),
    };
    return this._http.get('https://livescore6.p.rapidapi.com/news/v2/list', httpOptions);
  }
}
