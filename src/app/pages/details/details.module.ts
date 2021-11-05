import { CommentsComponent } from './comments/comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { TimelineModule } from '../timeline/timeline.module';
import { DetailsRoutingModule } from './details.routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [
    DetailsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DetailsRoutingModule,
    TimelineModule
  ],
  exports: [],
  providers: []
})
export class DetailsModule { }
