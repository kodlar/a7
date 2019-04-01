import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private authService: OAuthService) { }

  getRandomItem(): Observable<string> {
    if (this.authService.hasValidAccessToken()) {
      console.log('ApiService - OK! Geçerli bir erişim jetonumuz var.');
    } else {
      console.error('ApiService - HATA! API yi çağırmak için geçerli erişim belirteci yok.');
    }
    
    return of<string>('Fake API result');
  }
}
