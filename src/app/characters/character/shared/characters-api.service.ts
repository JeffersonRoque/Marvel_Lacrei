import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = '38aefd7265cd36074cff28e62c950ad7';
  HASH = 'c227bd2250d93c9d7abc5848993eaa0b';
  URL_API = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=' + this.PUBLIC_KEY + '&hash=' + this.HASH;
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any>{
    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data.data.results))
  }
}
