import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiUrl = 'https://localhost:5001/api/Curso';

  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get<Curso[]>(this.apiUrl);
  }

}
