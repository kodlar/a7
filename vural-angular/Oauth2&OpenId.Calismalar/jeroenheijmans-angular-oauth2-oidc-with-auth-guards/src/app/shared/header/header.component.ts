import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

//OAuthService Service
import { BtcTurkOAuthService } from '../../services/BtcTurkOAuthService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: Observable<boolean>;

  constructor (private router: Router, private btcturkoauthservice: BtcTurkOAuthService ) {
    this.isAuthenticated = this.btcturkoauthservice.isAuthenticated$;
  }

  ngOnInit() {
    console.log(this.isAuthenticated)
  }

}
