import { TestBed } from '@angular/core/testing';

import { RecruitmentService } from './recruitment.service';

describe('RecruitmentService', () => {
  let service: RecruitmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an instance of fighterType "grunt"', () => {
    const result = service.recruitNewFighter('grunt');
    expect(result.fighterType).toEqual('Grunt');
  })

  it('should create an instance of fighterType "Specialist"', () => {
    const result = service.recruitNewFighter('specialist');
    expect(result.fighterType).toEqual('Specialist');
  })

  it('should create an instance of fighterType "Commander"', () => {
    const result = service.recruitNewFighter('commander');
    expect(result.fighterType).toEqual('Commander');
  })
});
