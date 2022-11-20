import { TestBed } from '@angular/core/testing';

import { DirectivasService } from './directivas.service';

describe('DirectivasService', () => {
  let service: DirectivasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectivasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
