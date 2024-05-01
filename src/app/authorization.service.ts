import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

 
@Injectable({ providedIn: 'root' })
export class AuthorizationService {

 
canProceed = false;
  constructor(private alertController: AlertController, 
    private router: Router, 
    private toastController: ToastController) { }

  canActivate() {
    if (localStorage.getItem("loggedIn") == "true") {
      return true;
    }
    this.router.navigate(['login']);
    return false
  }

  setAuthentication(auth: boolean) {
    if (auth == true) {
      localStorage.setItem("loggedIn", "true");
    } else (
      localStorage.setItem("loggedIn", "false")
    )
  }
  
  async signup(email: string, password: string, confirmPassword: string) {
    if (!email || !password || !confirmPassword) {
      this.presentAlert('ERROR', 'PLEASE FILL ALL THE FIELDS.');
      return; 
    }

    if (password !== confirmPassword) {
      this.presentAlert('ERROR', 'PASSWORD DOES NOT MATCH.');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;                              
      this.presentAlert('SUCCESS', 'SIGN UP SUCCESSFULLY.');
      this.router.navigate(['login']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage.includes("Error (auth/email-already-in-use)")) {
        this.presentAlert('ERROR', 'EMAIL IS ALREADY USED.');
      } else if (errorMessage.includes("Error (auth/invalid-email).")) {
        this.presentAlert('ERROR', 'EMAIL IS INVALID');
      }
    })
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.setAuthentication(true);
      this.presentAlert('SUCCESS', 'LOGIN SUCCESSFULLY.');
      this.router.navigate(['home']);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    })
  }
}