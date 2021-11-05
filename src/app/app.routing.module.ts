import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PhotoListComponent } from './pages/timeline/photo-list/photo-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'FaceFood - Home' }
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
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    data: { title: 'FaceFood - Timeline' }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { title: 'FaceFood - Not Found' }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
