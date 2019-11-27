import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-viewrequestdetail',
  templateUrl: './viewrequestdetail.page.html',
  styleUrls: ['./viewrequestdetail.page.scss'],
})
export class ViewrequestdetailPage implements OnInit {
  cuenta: string;
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.cuenta = localStorage.getItem('user');
  }

  atras() {
    this.storage.get('user').then((val) => {
      this.router.navigate(['/gestion/features/solicitud', val]);
    });
  }

  saveandnext() {
    this.storage.get('user').then((val) => {
      this.router.navigate(['/gestion/features/solicitud', val]);
    });
  }

}
