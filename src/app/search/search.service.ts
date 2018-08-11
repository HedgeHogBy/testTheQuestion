import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
//import { SearchModule } from './search.module';

const MINIMAL_QUERY_LENGTH = 3;
const SEARCH_API_URL = '/api/search/complex?sort=popularity&tab=questions&q=';

@Injectable({
  providedIn: 'root'//SearchModule
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query$: Observable<string>): Observable<object> {

    return query$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter((query: string) => query.length >= MINIMAL_QUERY_LENGTH),
      switchMap((query: string): Observable<object> => {
        return this.getQuestions(query);
      })
    );
  }

  private getQuestions(query: string): Observable<object> {
    return this.http.get(`${SEARCH_API_URL}${query}`)
      .pipe(
        //map(response => response['questions']),
        catchError(this.handleError('search', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
