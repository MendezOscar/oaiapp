import { TestBed } from '@angular/core/testing';

import { OfertaAcademicaService } from './oferta-academica.service';

describe('OfertaAcademicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaAcademicaService = TestBed.get(OfertaAcademicaService);
    expect(service).toBeTruthy();
  });
});
