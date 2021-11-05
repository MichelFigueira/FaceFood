import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details.component';

const routes: Routes = [
  {
    path: ':photoId',
    component: DetailsComponent,
    data: { title: 'FaceFood - Photo Details' }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DetailsRoutingModule { }
