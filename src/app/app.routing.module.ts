import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PhotoListComponent } from './timeline/photo-list/photo-list.component';

const routes: Routes = [
    { path: 'user/:userName', component: PhotoListComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
