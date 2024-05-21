import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private _http: HttpClient) { }
  public getLanguages(): Observable <any> {
    const httpOptions = {
      headers: new HttpHeaders ({
        'X-RapidAPI-Key': '474f0f4b4amshc639a3fb3856c2fp195014jsnb949f3f5bd98',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      }),
    }
    return this._http.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', httpOptions);
  }
  public translateText(source: string, target: string, text: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders ({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '474f0f4b4amshc639a3fb3856c2fp195014jsnb949f3f5bd98',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      }),
    }
    const body = new HttpParams()
    .set("q", text)
    .set("target", target)
    .set("source", source)
    return this._http.post('https://google-translate1.p.rapidapi.com/language/translate/v2', body, httpOptions);
  }
}
