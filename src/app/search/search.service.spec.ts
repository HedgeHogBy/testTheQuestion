import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import {APP_CONFIG, APP_DI_CONFIG} from '../app-config.module';
import { SearchService } from './search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchService,
        {
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        }
      ],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
