import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaMatriculaDetalle } from '../models/ConsultaMatriculaDetalle';
import { ConsultaMatriculaService } from '../services/ConsultaMatricula/consulta-matricula.service';
import { ConsultaMatricula } from '../models/ConsultaMatricula';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  consultaMatricula: ConsultaMatricula[];

  constructor(private router: Router, private route: ActivatedRoute,
              private consultaMatriculaService: ConsultaMatriculaService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    // tslint:disable-next-line: radix
    const cuenta = this.route.snapshot.paramMap.get('cuenta');
    this.getConsultaMatricula(cuenta);
  }

  crear() {
    this.router.navigate(['createrequest']);
  }

  verDetalle() {
    this.router.navigate(['viewrequestdetail']);
  }

  getConsultaMatricula(cuenta: string) {
    this.consultaMatriculaService.getConsultaMatriculaByAlumno(cuenta).subscribe(data => {
      this.consultaMatricula = data;
    });
  }

}
