import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { SignUpComponent } from './signup/signup.component';
import { SharedModule } from '../../shared/shared.module';
import { SignInComponent } from './signin/signin.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  declarations: [
    UserComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule
  ],
  exports: [],
  providers: []
})
export class UserModule { }
