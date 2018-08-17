import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../app-config.module';

const EMPTY_RESULT = {
  items: [],
  total: 0
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private lastSearchQuery = '';

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
        this.lastSearchQuery = query;

        return this.getQuestions(query);
      })
    );
  }

  searchWithOffset(offset: number): Observable<object> {
    return this.getQuestions(
      this.lastSearchQuery,
      {
        ...this.config.searchParams,
        offset
      }
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
        retry(1),
        catchError(this.handleError('search', EMPTY_RESULT))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // in production should be handled with some specific notification service
      alert(`${operation} failed: ${error.message}`);

      // in production could be logged to some remote server like https://sentry.io/
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
