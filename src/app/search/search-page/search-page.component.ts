import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  results: object;

  constructor(private searchService: SearchService) { }

  search($event: string): void {
    console.log($event);

    this.searchService.search($event).subscribe(
      results => this.results = results
    );
  }

  ngOnInit() {
  }

}
