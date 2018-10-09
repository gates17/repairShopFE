import { TestBed } from '@angular/core/testing';

import { PrintReparacaoService } from './print-reparacao.service';

describe('PrintReparacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrintReparacaoService = TestBed.get(PrintReparacaoService);
    expect(service).toBeTruthy();
  });
});
