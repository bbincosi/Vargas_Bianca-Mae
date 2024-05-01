import { Component, OnInit } from '@angular/core';


import { AuthorizationService } from '../authorization.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  username: string = '';
  constructor(private auth: AuthorizationService) { }

  ngOnInit() {
  }

  login() {
    this.auth.signup(this.email, this.password, this.confirmPassword);
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.username = '';
  }
}