import { TestBed } from '@angular/core/testing';

import { RepairingService } from './repairing.service';

describe('RepairingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairingService = TestBed.get(RepairingService);
    expect(service).toBeTruthy();
  });
});
