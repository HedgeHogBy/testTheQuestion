import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  searchQuery = new Subject<object>();

  @Output() onSearch: EventEmitter<object> = new EventEmitter<object>();

  search() {
    console.log(this.searchQuery)
    this.onSearch.emit(this.searchQuery);
  }

}
