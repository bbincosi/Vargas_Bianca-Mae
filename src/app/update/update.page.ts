import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {  
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
  id:any;
  isLoading: boolean = false;
  constructor(private router: Router, private homeService: HomeService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.synch(this.homeService.newList);
  }
  async updateMusic() {
    this.isLoading = true;
    if (this.isLoading == true) {
      if (this.users.id) {
        await this.homeService.tryUpdate(this.users);
        this.homeService.presentAlert('SUCCESS', 'UPDATED SUCCESSFULLY');
      }
    }
    this.users = new User();
    this.router.navigate(['home']);
    this.isLoading = false;
  }
  synch(users: iUser[]) {
    users.forEach(user => {
      if (this.id == user.id) {
        this.users.id = user.id;
        this.users.title = user.title;
        this.users.artist = user.artist;
        this.users.musicGenre = user.musicGenre;
        this.users.age = user.age;
        this.users.isActive = user.isActive;
        this.users.started = user.started;
      }
    });
  }

}
