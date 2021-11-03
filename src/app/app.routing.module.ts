import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { SignInComponent } from './auth/signin/signin.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PhotoListComponent } from './timeline/photo-list/photo-list.component';

const routes: Routes = [

  { path: '', component: AuthComponent, canActivate: [AuthGuard],
    children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent },
      { path: '', component: SignInComponent }
    ]
  },
  { path: 'user/:userName', component: PhotoListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
