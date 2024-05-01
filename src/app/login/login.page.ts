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
  email: string = '';
  password: string = '';
  constructor(private auth: AuthorizationService) { }

  ngOnInit() {

  }

  async login() {
    this.auth.login(this.email, this.password);
  }
}