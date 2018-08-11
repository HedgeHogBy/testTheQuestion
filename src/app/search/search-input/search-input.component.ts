import { Component, EventEmitter, Output} from '@angular/core';
import { Subject } from 'rxjs';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-the-question-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  searchQuery$ = new Subject<string>();

  @Output() searchInput: EventEmitter<object> = new EventEmitter<object>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchQuery$).subscribe(
      (results) => {
        console.log(results);
        this.searchInput.emit(results);
      }
    );
  }

  setQuery(query: string) {
    this.searchQuery$.next(query);
  }
}
