import { TestBed } from '@angular/core/testing';

import { MmgService } from './mmg.service';

describe('MmgService', () => {
  let service: MmgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
