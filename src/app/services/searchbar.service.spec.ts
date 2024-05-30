import { TestBed } from '@angular/core/testing';

import { SearchbarService } from './searchbar.service';

describe('SearchBarService', () => {
  let service: SearchbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
