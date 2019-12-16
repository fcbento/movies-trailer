import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../services/auth.service';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    ReactiveFormsModule,    
    SharedModule,
    FormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
