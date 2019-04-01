import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AuthConfig, JwksValidationHandler, OAuthModule, OAuthModuleConfig, OAuthStorage, ValidationHandler } from 'angular-oauth2-oidc';


import { BASE_URL } from './app.tokens';

import { ApiService } from './services/api.service';
import { BtcTurkOAuthService } from './services/BtcTurkOAuthService.service';

//AuthConfig Module
import { authModuleConfig } from './app-module-config';
import { authConfig } from './auth-config';

//AuthGuard Module
import { AuthGuardWithForcedLogin } from './auth-guard-with-forced-login.service';
import { AuthGuard } from './auth-guard.service';

//Component Module
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';

/*
import { Admin2Component } from './admin2.component';
import { FallbackComponent } from './fallback.component';
import { HomeComponent } from './home.component';

import { PublicComponent } from './public.component';
import { ShouldLoginComponent } from './should-login.component';
*/

import { Admin1Component } from './admin1.component';

//Rooting Module
import { AppRoutingModule } from './app-routing.module';



//Shared Module
import { SharedModule } from './shared/shared.module';


@NgModule({ 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    
    SharedModule,
    OAuthModule.forRoot(authModuleConfig),
    AppRoutingModule,
    /*RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'acount/login', component: AcountLoginComponent },
      { path: 'admin1', component: Admin1Component, canActivate: [AuthGuard] },
      { path: 'admin2', component: Admin2Component, canActivate: [AuthGuardWithForcedLogin] },
      { path: 'public', component: PublicComponent },
      { path: 'should-login', component: ShouldLoginComponent },
      { path: '**', component: FallbackComponent },
    ]),*/
  ],
  declarations: [
    AppComponent,
    MenuComponent,    
    Admin1Component
  ],
  providers: [
    { provide: AuthConfig, useValue: authConfig },
    { provide: OAuthModuleConfig, useValue: authModuleConfig },
    { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: OAuthStorage, useValue: localStorage },
    { provide: BASE_URL, useValue: 'http://www.angular.at' },
    BtcTurkOAuthService,
    AuthGuard,
    AuthGuardWithForcedLogin,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
