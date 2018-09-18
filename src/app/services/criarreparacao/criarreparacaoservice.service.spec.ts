import { TestBed } from '@angular/core/testing';

import { CriarreparacaoserviceService } from './criarreparacaoservice.service';

describe('CriarreparacaoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriarreparacaoserviceService = TestBed.get(CriarreparacaoserviceService);
    expect(service).toBeTruthy();
  });
});
