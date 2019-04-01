import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Register Components
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';

const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: '', 
    component: AccountComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ACCOUNT_ROUTES)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
