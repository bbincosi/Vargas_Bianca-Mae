import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { vehicle } from '../model';
import { APIService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  vehicle : vehicle[] = [];
  constructor(private router: Router, 
    private authenticate: AuthorizationService, 
    private api: APIService, 
    private modalController: ModalController) { }
  
  ngOnInit(): void {
    this.api.getvehicle().subscribe(item => {
      this.vehicle = item;
      console.log(item);
    });
  }
  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }


  logOut() {
    this.authenticate.authenticated = false;
    this.router.navigate(['login']);
  }

}