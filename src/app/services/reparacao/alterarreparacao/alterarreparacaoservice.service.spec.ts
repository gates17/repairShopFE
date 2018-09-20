import { TestBed } from '@angular/core/testing';

import { AlterarreparacaoserviceService } from './alterarreparacaoservice.service';

describe('AlterarreparacaoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlterarreparacaoserviceService = TestBed.get(AlterarreparacaoserviceService);
    expect(service).toBeTruthy();
  });
});
