import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './custom-page-with-id.html',

})
export class CustomPageWithId implements OnInit {
    constructor(private route: ActivatedRoute) { }
    id : any;
    ngOnInit(): void {
        
    
        this.id = this.route.snapshot.paramMap.get('id')
    }

}
