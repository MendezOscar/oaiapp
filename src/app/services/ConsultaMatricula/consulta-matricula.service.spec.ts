import { TestBed } from '@angular/core/testing';

import { ConsultaMatriculaService } from './consulta-matricula.service';

describe('ConsultaMatriculaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaMatriculaService = TestBed.get(ConsultaMatriculaService);
    expect(service).toBeTruthy();
  });
});
