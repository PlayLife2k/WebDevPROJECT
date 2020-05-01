import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './views/landing/landing.component';
import {LoginComponent} from './views/landing/login/login.component';
import {TodoComponent} from './views/todo/todo.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
