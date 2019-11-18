import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrequest',
  templateUrl: './createrequest.page.html',
  styleUrls: ['./createrequest.page.scss'],
})
export class CreaterequestPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  atras() {
    this.router.navigate(['/gestion/features/solicitud']);
  }

  saveandnext() {
    this.router.navigate(['/createrequestdetail']);
  }

}
