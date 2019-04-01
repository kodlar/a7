import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-admin',
  template: `<p class="alert alert-danger">
    This is the <strong>⚙ ADMIN</strong> component.
    It will not redirect you to the login server.
    (API Result: '{{item | async}}')
  </p>`,
})
export class Admin1Component implements OnInit {
  
  item: Observable<string>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    console.log("--admin1 component --") 

    this.item = this.apiService.getRandomItem();
    console.log(this.item)
  }
}
