import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PhotoListComponent } from './pages/timeline/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './pages/timeline/photo-details/photo-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
  },
  {
    path: 'details/:photoId',
    component: PhotoDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
