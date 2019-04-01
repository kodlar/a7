import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

//OAuthService Service
import { BtcTurkOAuthService } from '../../services/BtcTurkOAuthService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  isAuthenticated: Observable<boolean>;
  isDoneLoading: Observable<boolean>;
  canActivateProtectedRoutes: Observable<boolean>;
  item: Observable<string>;

  constructor (private router: Router, private authService: BtcTurkOAuthService ) {}

  ngOnInit() {
    console.log("--Login Component ngOnInit--")
  }


  public login() {    
    this.authService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.userName, this.password);
  }
  logout() {
    this.authService.logout();
    //this.router.navigateByUrl('/');
  }

}
