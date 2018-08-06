import { Component, EventEmitter, Output } from '@angular/core';
//import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  //searchQuery = new Subject<string>();

  @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();

  startSearch(query: string) {
    this.searchInput.emit(query);
  }

}
