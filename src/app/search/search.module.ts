import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { SearchPageComponent } from './search-page/search-page.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ResultCardComponent } from './result-card/result-card.component';

import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule,
    SearchRoutingModule
  ],
  declarations: [SearchPageComponent, SearchInputComponent, SearchResultsComponent, ResultCardComponent],
  exports: [SearchPageComponent]
})
export class SearchModule { }
