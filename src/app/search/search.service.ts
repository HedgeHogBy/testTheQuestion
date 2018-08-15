import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, map, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../app-config.module';
//import { SearchModule } from './search.module';

@Injectable({
  providedIn: 'root'//SearchModule
})
export class SearchService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  search(query$: Observable<string>): Observable<object> {

    return query$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter((query: string) => query.length >= this.config.minimalQueryLength),
      switchMap((query: string): Observable<object> => {
        return this.getQuestions(query);
      })
    );
  }

  private getQuestions(query: string, params: object = this.config.searchParams): Observable<object> {

    return this.http.get(
      `${this.config.searchApiUrl}`,
      {
        params: {
          ...params,
          'q': query
        }
      })
      .pipe(
        //map(response => response['questions']),
        retry(1),
        catchError(this.handleError('search', {items: [], total: 0}))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
