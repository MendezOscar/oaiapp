import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnoService } from 'src/app/services/alumno/alumno.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  alumno: Alumno;
  clave: string;
  cuenta: string;

  constructor(private router: Router, private alumnoService: AlumnoService,
              private storage: Storage, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Inicio',
      message: 'Usuario o clave incorrecra.',
      buttons: ['OK']
    });

    await alert.present();
  }

  getAlumno() {
    this.alumnoService.getAlumnoByCuenta(this.cuenta, this.clave).subscribe(data => {
      this.alumno = data;
    });
  }


  login() {
    this.getAlumno();
    if (this.alumno) {
      this.storage.set('user', this.cuenta);
      console.log(this.storage.get('user'));
      this.router.navigate(['/gestion/features/solicitud', this.cuenta]);
    } else {
      this.presentAlert();
    }
  }

}
