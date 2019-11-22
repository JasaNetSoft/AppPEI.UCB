import { TestBed } from '@angular/core/testing';

import { DtcCareersService } from './dtc-careers.service';

describe('DtcCareersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DtcCareersService = TestBed.get(DtcCareersService);
    expect(service).toBeTruthy();
  });
});
