import { Component, OnInit } from '@angular/core';
import { User } from '../home/home.model';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  users: User = new User();
  musics: string[] = [
    "Pop",
    "Rock",
    "Hip Hop/Rap",
    "Electronic/Dance",
    "R&B/Soul",
    "Jazz",
    "Country",
    "Classical",
    "Reggae",
    "Blues",
    "Folk",
    "Metal",
    "Punk",
    "Gospel",
    "Funk"
  ];
  isLoading: boolean = false;
  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
  }
  async createUser() {
    this.isLoading = true;
    if (this.isLoading == true) {
      if (!this.users.id) {
        await this.homeService.tryAdd(this.users);
        this.homeService.presentAlert('SUCCESS', 'CREATED SUCCESSFULLY');
      }
    }
    this.users = new User();
    this.router.navigate(['home']);
    this.isLoading = false;
  }

}
