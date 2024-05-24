import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrGeneratorService {
  constructor(private _http: HttpClient) {}

  public getQr(data: string): Observable<any> {
    console.log(data)
    const params = new HttpParams().set('data', data).set('size', '500');
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '474f0f4b4amshc639a3fb3856c2fp195014jsnb949f3f5bd98',
      'X-RapidAPI-Host': 'qr-code-generator20.p.rapidapi.com',
    });
    const httpOptions = {
      headers: headers,
      params: params,
    };
    return this._http.get(
      'https://qr-code-generator20.p.rapidapi.com/generatebasicbase64',
      httpOptions
    );
  }
}
