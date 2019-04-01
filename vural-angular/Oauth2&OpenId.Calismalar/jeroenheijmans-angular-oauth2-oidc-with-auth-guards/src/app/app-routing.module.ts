import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Admin1Component } from './admin1.component';
import { Admin2Component } from './admin2.component';
import { PublicComponent } from './public.component';
import { ShouldLoginComponent } from './should-login.component';
import { FallbackComponent } from './fallback.component';

//AuthGuard Module
import { AuthGuardWithForcedLogin } from './auth-guard-with-forced-login.service';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [  
    /*{ path: '', redirectTo: 'home', pathMatch: 'full' },*/
    { 
      path: '', 
      loadChildren: './home/home.module#HomeModule' 
    },
    {
      path: 'account',
      loadChildren: './account/account.module#AccountModule'
    },    
    { path: 'admin1', component: Admin1Component, canActivate: [AuthGuard] },
   /* { path: 'admin2', component: Admin2Component, canActivate: [AuthGuardWithForcedLogin] },
    { path: 'public', component: PublicComponent },
    { path: 'should-login', component: ShouldLoginComponent },
    { path: '**', component: FallbackComponent }
    { path: 'error404', component: NotFoundComponent },
    { path: '**', redirectTo: '/error404' }
    */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
