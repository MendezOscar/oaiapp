import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';
import { ConsultaMatriculaService } from 'src/app/services/ConsultaMatricula/consulta-matricula.service';

@Component({
  selector: 'app-createrequest',
  templateUrl: './createrequest.page.html',
  styleUrls: ['./createrequest.page.scss'],
})
export class CreaterequestPage implements OnInit {
  cuenta: any;
  consultaMatricula: ConsultaMatricula;
  cuentaAlumno: string;
  periodo: string;
  anio: string;
  constructor(private router: Router, private storage: Storage,
              private consultaMatriculaService: ConsultaMatriculaService) { }

  ngOnInit() {
  }

  saveandnext() {
    this.consultaMatricula = new ConsultaMatricula();
    // tslint:disable-next-line: radix
    this.consultaMatricula.periodo = parseInt(this.periodo);
    // tslint:disable-next-line: radix
    this.consultaMatricula.anio = parseInt(this.anio);
    this.consultaMatricula.estado = 0;
    this.consultaMatricula.cuentaalumno = this.cuentaAlumno;

    if (this.consultaMatricula) {
      this.consultaMatriculaService.createConsultaMatricula(this.consultaMatricula).subscribe (() => {
        this.router.navigate(['/createrequestdetail']);
      });
    }
  }

  atras() {
    this.storage.get('user').then((val) => {
      this.router.navigate(['/gestion/features/solicitud', val]);
    });
  }

}
