import { TestBed } from '@angular/core/testing';

import { RepairedService } from './repaired.service';

describe('RepairedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairedService = TestBed.get(RepairedService);
    expect(service).toBeTruthy();
  });
});
