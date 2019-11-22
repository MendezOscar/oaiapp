import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewrequestdetail',
  templateUrl: './viewrequestdetail.page.html',
  styleUrls: ['./viewrequestdetail.page.scss'],
})
export class ViewrequestdetailPage implements OnInit {

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
