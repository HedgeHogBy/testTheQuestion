import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SearchModule } from './search.module';

@Injectable({
  providedIn: SearchModule
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<object> {
    return this.http.get(`/api/search/complex?q=${query}`)
      .pipe(
        map(response => response['questions']),
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
