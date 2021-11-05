import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { LoginGuard } from '../../auth/login.guard';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        redirectTo: 'signin'
      },
      {
        path: 'signin',
        component: SignInComponent,
        data: { title: 'FaceFood - Sign In' }
      },
      {
        path: 'signup',
        component: SignUpComponent,
        data: { title: 'FaceFood - Sign Up' }
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
