import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrequestdetail',
  templateUrl: './createrequestdetail.page.html',
  styleUrls: ['./createrequestdetail.page.scss'],
})
export class CreaterequestdetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  atras() {
    this.router.navigate(['/gestion/features/solicitud']);
  }

  saveandnext() {
    this.router.navigate(['/gestion/features/solicitud']);
  }

}
