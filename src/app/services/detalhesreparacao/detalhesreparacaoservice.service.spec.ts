import { TestBed } from '@angular/core/testing';

import { DetalhesreparacaoserviceService } from './detalhesreparacaoservice.service';

describe('DetalhesreparacaoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalhesreparacaoserviceService = TestBed.get(DetalhesreparacaoserviceService);
    expect(service).toBeTruthy();
  });
});
