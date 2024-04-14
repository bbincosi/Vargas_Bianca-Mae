import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthorizationService } from '../authorization.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string = '';
  pass: string = '';

  userName = ['bbin', 'admin', 'user'];
  password = ['4641', '978', '5432'];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authenticate: AuthorizationService,
    private toast: ToastController,
  ) {}

  ngOnInit() {
  }


  async login() {

    const index = this.userName.indexOf(this.user);

    if (index !== -1 && this.password[index] === this.pass) {
      localStorage.setItem('username', this.user);
      localStorage.setItem('password', this.pass);

      const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Welcome!',
      message: 'Welcome, ' + this.user,
      buttons: ['OK'],
    });
    await alert.present();
    this.authenticate.authenticated = true;
    this.router.navigate(['tabs/dashboard']);
  } else {
    const toast = await this.toast.create({
      message: 'Login Failed',
      duration: 4000,
    });
    toast.present();
  }
}
}

