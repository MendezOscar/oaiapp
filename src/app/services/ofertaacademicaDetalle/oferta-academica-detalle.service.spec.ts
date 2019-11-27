import { TestBed } from '@angular/core/testing';

import { OfertaAcademicaDetalleService } from './oferta-academica-detalle.service';

describe('OfertaAcademicaDetalleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaAcademicaDetalleService = TestBed.get(OfertaAcademicaDetalleService);
    expect(service).toBeTruthy();
  });
});
