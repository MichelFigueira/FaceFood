import { AuthService } from 'src/app/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpService } from './signup/signup.service';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './signup/signup.component';
import { SharedModule } from './../shared/shared.module';
import { SignInComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AuthModule { }
