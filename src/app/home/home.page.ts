import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { User, iUser } from './home.model';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userList: iUser[] = [];
  users: User = new User();
  isLoading: boolean = false;

  constructor(private router: Router, private homeService: HomeService) {
    this.user();
  }

  ionViewWillEnter() {
    this.user();
  }
  update(user: User) {
    this.router.navigate(['update', user.id]);
    this.homeService.newList = this.userList;
    
  }
  async user() {
    
    this.userList = await this.homeService.getUsers();
    this.homeService.newList = this.userList;
    
  }
  async delete(user: User) {
    const confirmDelete = confirm('Are you sure you want to delete this music?');

    if (!confirmDelete) {
      return; 
    }

    this.isLoading = true;
    await this.homeService.tryDelete(user);
    this.homeService.presentAlert('SUCCESS', 'DELETED SUCCESSFULLY');
    this.user();
    this.users = new User();
    this.isLoading = false;
  }
  addMusic() {
    this.router.navigate(['create']);
  }
  logout() {
    this.router.navigate(['login']);
  }



}
