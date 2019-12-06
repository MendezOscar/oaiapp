import { Component } from '@angular/core';
import { OfertaGenerada } from '../models/OfertaGenerada';
import { Router } from '@angular/router';
import { OfertageneradaService } from '../services/ofertagenerada/ofertagenerada.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  oferta: OfertaGenerada[];

  constructor(private ofertaGeneradaService: OfertageneradaService,
              private router: Router) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.getOfertaGenerada();
  }

  getOfertaGenerada() {
    this.ofertaGeneradaService.getOfertaAcademica().subscribe(data => {
      this.oferta = data;
    });
  }

}
