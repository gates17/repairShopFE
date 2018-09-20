import { TestBed } from '@angular/core/testing';

import { CriarService } from './criar.service';

describe('CriarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriarService = TestBed.get(CriarService);
    expect(service).toBeTruthy();
  });
});
