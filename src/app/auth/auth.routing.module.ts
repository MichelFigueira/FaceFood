import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'signin'
      },
      {
        path: 'signin',
        component: SignInComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
