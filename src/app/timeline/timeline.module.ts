import { SharedModule } from './../shared/shared.module';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

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
  exports: []
})
export class TimelineModule { }
