import { Injectable } from '@angular/core';
import { ConsultaMatriculaDetalle } from 'src/app/models/ConsultaMatriculaDetalle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaMatriculaDetalleService {

  apiUrl = 'https://localhost:5001/api/ConsultaMatriculadetalle';

  constructor(private http: HttpClient) { }

  getConsultaMatriculaDetalle() {
    return this.http.get<ConsultaMatriculaDetalle[]>(this.apiUrl);
  }

  getConsultaMatriculaDetalleByMatriculaByMatriculaId(id: number) {
    // tslint:disable-next-line: radix
    return this.http.get<ConsultaMatriculaDetalle[]>(this.apiUrl + '/bymatricula/' + id);
  }

  getConsultaMatriculaDetalleByMatricula(matricula: string, alumno: string) {
    // tslint:disable-next-line: radix
    return this.http.get<ConsultaMatriculaDetalle[]>(this.apiUrl + '/' + parseInt(matricula) + '/' + parseInt(alumno));
  }

  getConsultaMatriculaDetalleById(id: number ) {
    return this.http.get<ConsultaMatriculaDetalle>(this.apiUrl + '/' + id);
  }

  deleteConsultaMatriculaDetalle(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createConsultaMatriculaDetalle(obj: ConsultaMatriculaDetalle) {
    return this.http.post<ConsultaMatriculaDetalle>(this.apiUrl, obj);
  }

  editConsultaMatriculaDetalle(obj: ConsultaMatriculaDetalle) {
    return this.http.put<ConsultaMatriculaDetalle>(this.apiUrl + '/' + obj.consultaMatriculaDetalleId, obj);
  }
}
