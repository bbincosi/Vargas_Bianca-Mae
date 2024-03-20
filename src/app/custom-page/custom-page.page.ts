import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.page.html',
  styleUrls: ['./custom-page.page.scss'],
})
export class CustomPagePage implements OnInit {

    constructor (private router : Router) {}
    goToCustomPage() {
        this.router.navigate(['custom-page/custom-page-with-id', 1])
    }

  ngOnInit() {}

}
