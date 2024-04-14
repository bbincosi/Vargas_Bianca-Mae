import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-slider',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SliderPage  implements OnInit {

  volume = 100;
  constructor() { }

  ngOnInit() {}

}