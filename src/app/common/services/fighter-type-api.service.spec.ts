import { TestBed } from '@angular/core/testing';

import { FighterTypeApiService } from './fighter-type-api.service';

describe('FighterTypeApiService', () => {
  let service: FighterTypeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FighterTypeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
