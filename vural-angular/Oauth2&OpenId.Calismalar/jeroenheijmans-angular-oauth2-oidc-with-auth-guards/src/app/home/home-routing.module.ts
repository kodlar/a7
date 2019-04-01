import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { BitcoinnedirComponent } from './bitcoinnedir/bitcoinnedir.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'bitcoin-nedir',
    component : BitcoinnedirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
