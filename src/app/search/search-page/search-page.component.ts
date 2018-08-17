import { Component} from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  readonly resultsPerPage = 15;
  page = 1;
  results: {items: Array<object>, total: number};

  constructor(private searchService: SearchService) {}

  setResults($event: {items: Array<object>, total: number}): void {
    this.resetPagination();
    this.results = $event;
  }

  changePageResults($event: number): void {
    const currentOffset: number = (this.page - 1) * this.resultsPerPage;

    this.searchService.searchWithOffset(currentOffset).subscribe(
      (results: {items: Array<object>, total: number}) => {
        window.scrollTo(0, 0);
        this.results = results;
      }
    );
  }

  private resetPagination(): void {
    this.page = 1;
  }

}
