import { TestBed } from '@angular/core/testing';

import { TracingService } from './tracing.service';

describe('TracingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TracingService = TestBed.get(TracingService);
    expect(service).toBeTruthy();
  });
});
