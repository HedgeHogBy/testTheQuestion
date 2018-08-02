import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchModule } from './search.module';

@Injectable({
  providedIn: SearchModule
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query) {
    return this.http.get(`https://thequestion.ru/search/complex?q=${query}`);
  }
}
