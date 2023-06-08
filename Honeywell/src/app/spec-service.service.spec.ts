import { TestBed } from '@angular/core/testing';

import { SpecServiceService } from './spec-service.service';

describe('SpecServiceService', () => {
  let service: SpecServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
