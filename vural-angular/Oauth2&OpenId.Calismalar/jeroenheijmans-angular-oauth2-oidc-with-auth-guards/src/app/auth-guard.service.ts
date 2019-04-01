import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BtcTurkOAuthService } from './services/BtcTurkOAuthService.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: BtcTurkOAuthService) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
    
    return this.authService.canActivateProtectedRoutes$
      .pipe(tap(x => console.log(state.url + ' gitmeyi denediniz ve bu guard said')));

  }
}

