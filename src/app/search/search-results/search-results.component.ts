import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-the-question-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() searchResults: {items: Array<object>, total: number};
}
