import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequiresGuard } from '../../auth/requires.guard';
import { PhotoAddComponent } from './photo-add/photo-add.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoAddComponent,
    canActivate: [RequiresGuard],
    children: [
      {
        path: '',
        redirectTo: 'add'
      },
      {
        path: 'add',
        component: PhotoAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CreateRoutingModule { }
