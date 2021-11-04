import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    LoadButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    PhotoComponent
  ]
})
export class TimelineModule { }
