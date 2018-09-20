import { TestBed } from '@angular/core/testing';

import { EliminarreparacaoserviceService } from './eliminarreparacaoservice.service';

describe('EliminarreparacaoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EliminarreparacaoserviceService = TestBed.get(EliminarreparacaoserviceService);
    expect(service).toBeTruthy();
  });
});
