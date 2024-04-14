import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modalController: ModalController, 
    private alertController: AlertController,
    private toastController: ToastController) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalController.dismiss();
  }

  sendMessage() {
    this.showAlert();
    this.closeModal();
  }
  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  async showAlert() {
    const alert = await this.alertController.create(
      {
        header: ' ',
        subHeader: 'Status',
        message: 'Save Successfully!',
        buttons: ['Continue']
      }
    );
    alert.present();
  }
  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Your Toast Message is Here',
      duration: 2000
    });
    toast.present();
  }

  Enter() {
    
  }

}
