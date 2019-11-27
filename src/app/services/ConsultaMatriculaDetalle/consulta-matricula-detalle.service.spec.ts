import { TestBed } from '@angular/core/testing';

import { ConsultaMatriculaDetalleService } from './consulta-matricula-detalle.service';

describe('ConsultaMatriculaDetalleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaMatriculaDetalleService = TestBed.get(ConsultaMatriculaDetalleService);
    expect(service).toBeTruthy();
  });
});
