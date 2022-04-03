import { TestBed } from '@angular/core/testing';

import { RecruitmentApiService } from './recruitment-api.service';

describe('RecruitmentApiService', () => {
  let service: RecruitmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
