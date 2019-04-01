import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-admin',
  template: `<p class="alert alert-danger">
    This is the <strong>⚙ ADMIN 2</strong> component.
    It will redirect you to login if needed.
    (API Result: '{{item | async}}')
  </p>`,
})
export class Admin2Component implements OnInit {
  
  item: Observable<string>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    console.log("--admin2 component --")     
   
    this.item = this.apiService.getRandomItem();
  }
}
