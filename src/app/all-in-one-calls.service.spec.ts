import { TestBed } from '@angular/core/testing';

import { AllInOneCallsService } from './all-in-one-calls.service';

describe('AllInOneCallsService', () => {
  let service: AllInOneCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllInOneCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
