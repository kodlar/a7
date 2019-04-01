import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BtcTurkOAuthService } from './services/BtcTurkOAuthService.service';

@Component({
  selector: 'app-menu',
  template: `<nav class="navbar navbar-expand-sm navbar-light bg-light">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" routerLinkActive="active" routerLink="/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLinkActive="active" routerLink="/acount/login">Üye Girişi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLinkActive="active" routerLink="/public">Public</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLinkActive="active" routerLink="/admin1">
          <span *ngIf="!(isAuthenticated | async)">🔒</span>
          Admin-1
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLinkActive="active" routerLink="/admin2">
          <span *ngIf="!(isAuthenticated | async)">🔒</span>
          Admin-2
        </a>
      </li>
    </ul>
    <button class="btn btn-sm btn-default" (click)="login()" *ngIf="!(isAuthenticated | async)">Log in</button>
    <span *ngIf="isAuthenticated | async">{{email}} / {{phone_number}}</span>
    <button *ngIf="isAuthenticated | async" href="#" (click)="logout()" class="btn btn-link">(log out)</button>
  </nav>`,
})
export class MenuComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private btcturkoauthservice: BtcTurkOAuthService) {
    this.isAuthenticated = btcturkoauthservice.isAuthenticated$;
  }

  ngOnInit() {
    
  }

  get email() {
    return this.btcturkoauthservice.identityClaims
    ? this.btcturkoauthservice.identityClaims['email']
    : '-';
  }
  get phone_number() {
    return this.btcturkoauthservice.identityClaims
    ? this.btcturkoauthservice.identityClaims['phone_number']
    : '-';
  }

  login() { this.btcturkoauthservice.login(); }
  logout() { this.btcturkoauthservice.logout(); }

}
