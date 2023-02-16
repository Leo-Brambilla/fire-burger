import { HomeComponent } from './views/home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'', component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
