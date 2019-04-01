import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';

import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BtcTurkOAuthService {

  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public  isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();
  private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  public  isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  constructor (private router: Router, private oauthService: OAuthService) {
    
    this.oauthService.events.subscribe(event => {
      if (event instanceof OAuthErrorEvent) {
        console.error(event);
      } else {
        console.log(event);
      }
    });

    window.addEventListener('storage', (event) => {
      console.log("--window.addEventListener storage--")      
      console.log(event.key)
      if (event.key !== 'access_token' && event.key !== null) {
        return;
      }

      console.warn('Access_token için yapılan değişiklikler (büyük olasılıkla başka bir sekmeden), güncelleme isAuthenticated');
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());

      if (!this.oauthService.hasValidAccessToken()) {
        this.navigateToLoginPage();
      }
    });

    this.oauthService.events
      .subscribe(_ => {
        this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
    });

    this.oauthService.events
      .pipe(filter(e => ['token_received'].includes(e.type)))
      .subscribe(e => this.oauthService.loadUserProfile());

    this.oauthService.events
      .pipe(filter(e => ['session_terminated', 'session_error'].includes(e.type)))
      .subscribe(e => this.navigateToLoginPage());

    this.oauthService.setupAutomaticSilentRefresh();
  }

  ngOnInit() {}
  
  public runInitialLoginSequence(): Promise<void> {
    // 0. LOAD CONFIG:
    // Önce IdServer’ın nasıl olduğunu görmek için kontrol etmeliyiz
    // şu anda yapılandırılmış:
    return this.oauthService.loadDiscoveryDocument()

      // Demo amaçlı olarak, önceki aramanın çok yavaş olduğunu varsayıyoruz
      .then(() => new Promise(resolve => setTimeout(() => resolve(), 1000)))

      // 1. HASH LOGIN:
      // Yeniden yönlendirme yaptıktan sonra karma bölümü ile giriş yapmayı deneyin
      // initImplicitFlow'dan IdServer'dan:
      .then(() => this.oauthService.tryLogin())

      .then(() => {
        if (this.oauthService.hasValidAccessToken()) {
          return Promise.resolve();
        }

        
        /* 
        // 2. SILENT LOGIN:
        // IdServer olduğu için sessiz yenileme ile giriş yapmayı deneyin
        // kullanıcıyı hatırlamak için bir çerez alabilir, bu yüzden
        // yönlendirmeyi yapmama:
        return this.oauthService.silentRefresh()
          .then(() => Promise.resolve())
          .catch(result => {
            // Subset of situations from https://openid.net/specs/openid-connect-core-1_0.html#AuthError
            // Sadece gönderilmesinin makul ölçüde emin olduğu yerler
            // IdServer'a kullanıcı yardımcı olacaktır.
            

            const errorResponsesRequiringUserInteraction = [
              'interaction_required',
              'login_required',
              'account_selection_required',
              'consent_required',
            ];
            console.log(result)    
            if (result
              && result.reason
              && errorResponsesRequiringUserInteraction.indexOf(result.reason.error) >= 0) {

              // 3. ASK FOR LOGIN:
              // Bu noktada, bizden sormak zorunda olduğumuzu kesin olarak biliyoruz.
              // kullanıcı giriş yapabilmemiz için onları IdServer'a yönlendiriyoruz
              // kimlik bilgilerini girin.
              //
              // Bunu, DAİMA kullanıcılara giriş yapmaya zorlar.
              // this.oauthService.initImplicitFlow();
              //
              // Bunun yerine şimdi yapacağız:
              console.warn('Kullanıcı etkileşimi giriş yapmak için gereklidir, kullanıcının manuel olarak giriş yapmasını bekleyeceğiz.');
              return Promise.resolve();
            }

            // Gerçeği ele alamayız, sadece problemi
            // sonraki işleyici.
            return Promise.reject(result);
        });
        */  
        
      })
      .then(() => {
        this.isDoneLoadingSubject$.next(true);
        
        if (this.oauthService.state && this.oauthService.state !== 'undefined' && this.oauthService.state !== 'null') {
          console.log(this.oauthService.state)
          console.log('state var, buraya yonlendiriyoruz : ' + this.oauthService.state);
          this.router.navigateByUrl(this.oauthService.state);
        }

      })
      .catch(() => this.isDoneLoadingSubject$.next(true));
  }

  public login(targetUrl?: string) {
    this.oauthService.initImplicitFlow(encodeURIComponent(targetUrl || this.router.url));
  }

  
  public fetchTokenUsingPasswordFlowAndLoadUserProfile(username : string, password : string): Promise<void> {
    
    console.log("[Starting fetchTokenUsingPasswordFlowAndLoadUserProfile]")
    
    console.log("username :" + username + " - password : " +  password);
    this.oauthService.oidc = false
    this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile("albert.einstein@btctrader.com", "Pa$$word123").then((resp) => {
            
      console.log(resp)
      let claims = this.oauthService.getIdentityClaims();
      if (claims) console.debug('given_name', claims);
    });
    this.isDoneLoadingSubject$.next(true);
    return Promise.resolve();
  }
 
  
  public canActivateProtectedRoutes$: Observable<boolean> = combineLatest(
    this.isAuthenticated$,
    this.isDoneLoading$
  ).pipe(map(values => values.every(b => b)));
  
  private navigateToLoginPage() {
    this.router.navigateByUrl('/should-login');
  }
  public logout() { this.oauthService.logOut(); }
  public refresh() { this.oauthService.silentRefresh(); }
  public hasValidToken() { return this.oauthService.hasValidAccessToken(); }
  public get accessToken() { return this.oauthService.getAccessToken(); }
  public get accessTokenExpiration() {return this.oauthService.getAccessTokenExpiration();}
  public get identityClaims() { return this.oauthService.getIdentityClaims(); }
  public get idToken() { return this.oauthService.getIdToken(); }
  public get logoutUrl() { return this.oauthService.logoutUrl; }
}
