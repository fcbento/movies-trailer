import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';

export const home = './movies/movies.module#MoviesModule';

const routes: Routes = [
  { path: '', component: AuthComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
exports: [RouterModule]
})
export class AuthRoutingModule { }