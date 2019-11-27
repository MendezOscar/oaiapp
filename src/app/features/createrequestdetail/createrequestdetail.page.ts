import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';
import { Curso } from 'src/app/models/Curso';
import { Storage } from '@ionic/storage';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ConsultaMatriculaService } from 'src/app/services/ConsultaMatricula/consulta-matricula.service';
import { ConsultaMatriculaDetalle } from 'src/app/models/ConsultaMatriculaDetalle';
import { ConsultaMatriculaDetalleService } from 'src/app/services/ConsultaMatriculaDetalle/consulta-matricula-detalle.service';

@Component({
  selector: 'app-createrequestdetail',
  templateUrl: './createrequestdetail.page.html',
  styleUrls: ['./createrequestdetail.page.scss'],
})
export class CreaterequestdetailPage implements OnInit {
  cuenta: string;
  solicitudes: ConsultaMatricula[];
  cursos: Curso[];
  matriculaDetalle: ConsultaMatriculaDetalle;

  curso: string;
  dia: string;
  cuentaAlumno: string;
  hora: string;
  maticulaId: string;

  constructor(private router: Router, private consultaMatriculaService: ConsultaMatriculaService,
              private cursoService: CursoService,
              private solicitudMatriculaDetalle: ConsultaMatriculaDetalleService,
              private storage: Storage) { }

  ngOnInit() {
    this.cuenta = localStorage.getItem('user');
    this.getCusos();
    this.getSolicitudes();
  }

  getCusos() {
    this.cursoService.getCursos().subscribe ( data => {
      this.cursos = data;
    });
  }

  getSolicitudes() {
    this.consultaMatriculaService.getConsultaMatricula().subscribe(data => {
      this.solicitudes = data;
    });
  }

  atras() {
    this.storage.get('user').then((val) => {
      this.router.navigate(['/gestion/features/solicitud', val]);
    });
  }

  saveandnext() {
    console.log(this.maticulaId);
    console.log(this.curso);
    this.matriculaDetalle = new ConsultaMatriculaDetalle();
    // tslint:disable-next-line: radix
    this.matriculaDetalle.alumnoId = parseInt(this.cuentaAlumno);
    // tslint:disable-next-line: radix
    this.matriculaDetalle.consultaMatriculaId = parseInt(this.maticulaId);
    // tslint:disable-next-line: radix
    this.matriculaDetalle.cursoId = parseInt(this.curso);
    // tslint:disable-next-line: radix
    this.matriculaDetalle.dia = parseInt(this.dia);
    this.matriculaDetalle.hora = this.hora;
    if (this.matriculaDetalle) {
      this.solicitudMatriculaDetalle.createConsultaMatriculaDetalle(this.matriculaDetalle)
      .subscribe(() => {
        this.storage.get('user').then((val) => {
          this.router.navigate(['/gestion/features/solicitud', val]);
        });
      });
    }
  }

}
