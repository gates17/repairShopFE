import { TestBed } from '@angular/core/testing';

import { ConsultarService } from './consultar.service';

describe('ConsultarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultarService = TestBed.get(ConsultarService);
    expect(service).toBeTruthy();
  });
});
