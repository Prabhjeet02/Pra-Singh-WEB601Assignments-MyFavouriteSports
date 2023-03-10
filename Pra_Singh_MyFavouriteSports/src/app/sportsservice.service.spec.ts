import { TestBed } from '@angular/core/testing';

import { SportsserviceService } from './sportsservice.service';

describe('SportsserviceService', () => {
  let service: SportsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
