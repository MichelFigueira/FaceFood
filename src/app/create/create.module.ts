import { TimelineModule } from './../timeline/timeline.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { PhotoAddComponent } from './photo-add/photo-add.component';
import { CreateRoutingModule } from './create.routing.module';
import { CreateComponent } from './create.component';

@NgModule({
  declarations: [
    CreateComponent,
    PhotoAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CreateRoutingModule,
    TimelineModule
  ],
  exports: [],
  providers: []
})
export class CreateModule { }
