import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotFoundComponent,
    CardComponent
  ],
  exports: [
    NotFoundComponent,
    CardComponent
  ]
})
export class SharedModule { }
