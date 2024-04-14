import { Component, OnInit } from '@angular/core';
import { vehicle } from '../model';
import { APIService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  vehicle: vehicle[] = [];
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.api.getvehicle().subscribe(item => {
      this.vehicle = item;
    })
  }

}