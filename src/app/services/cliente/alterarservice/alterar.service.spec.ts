import { TestBed } from '@angular/core/testing';

import { AlterarService } from './alterar.service';

describe('AlterarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlterarService = TestBed.get(AlterarService);
    expect(service).toBeTruthy();
  });
});
