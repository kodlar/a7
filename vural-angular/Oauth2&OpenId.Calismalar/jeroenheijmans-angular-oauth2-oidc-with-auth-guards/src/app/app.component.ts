import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BtcTurkOAuthService } from './services/BtcTurkOAuthService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  isAuthenticated: Observable<boolean>;
  isDoneLoading: Observable<boolean>;
  canActivateProtectedRoutes: Observable<boolean>;

  constructor (private btcturkoauthservice: BtcTurkOAuthService ) {    
    this.isAuthenticated = this.btcturkoauthservice.isAuthenticated$;
    this.isDoneLoading = this.btcturkoauthservice.isDoneLoading$;
    this.canActivateProtectedRoutes = this.btcturkoauthservice.canActivateProtectedRoutes$;    
    this.btcturkoauthservice.runInitialLoginSequence();
  }

  ngOnInit() {    
    console.log("--app component --")         
  }


  login() { this.btcturkoauthservice.login(); }
  logout() { this.btcturkoauthservice.logout(); }
  refresh() { this.btcturkoauthservice.refresh(); }
  reload() { window.location.reload(); }
  clearStorage() { localStorage.clear(); }
  logoutExternally() {
    window.open(this.btcturkoauthservice.logoutUrl);
  }
  get hasValidToken() { return this.btcturkoauthservice.hasValidToken(); }
  get accessToken() { return this.btcturkoauthservice.accessToken; }
  get accessTokenExpiration() { return this.btcturkoauthservice.accessTokenExpiration; }
  get identityClaims() { return this.btcturkoauthservice.identityClaims; }
  get idToken() { return this.btcturkoauthservice.idToken; }
  
}
