import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-the-question-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResults: {items: Array<object>, total: number};

  constructor() { }

  ngOnInit() {
  }

}
