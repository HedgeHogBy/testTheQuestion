import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import {APP_CONFIG, APP_DI_CONFIG} from '../../app-config.module';
import { SearchPageComponent } from './search-page.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { ResultCardComponent } from '../result-card/result-card.component';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        }
      ],
      declarations: [ SearchPageComponent, SearchInputComponent, SearchResultsComponent, ResultCardComponent ],
      imports: [HttpClientTestingModule, NgbPaginationModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
