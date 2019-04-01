import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { BitcoinnedirComponent } from './bitcoinnedir/bitcoinnedir.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    BitcoinnedirComponent
  ]
})
export class HomeModule { }
