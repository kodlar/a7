import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';

//Register Component
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    AccountRoutingModule
  ],
  declarations: [
    LoginComponent,
    AccountComponent
  ]
})
export class AccountModule { }
