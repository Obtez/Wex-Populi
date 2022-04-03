import { TestBed } from '@angular/core/testing';

import { FactionsApiService } from './factions-api.service';

describe('FactionsApiService', () => {
  let service: FactionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
