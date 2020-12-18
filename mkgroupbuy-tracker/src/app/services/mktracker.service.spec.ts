import { TestBed } from '@angular/core/testing';

import { MktrackerService } from './mktracker.service';

describe('MktrackerService', () => {
  let service: MktrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MktrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
