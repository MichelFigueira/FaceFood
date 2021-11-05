import { IsLoggedDirective } from './directives/islogged.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { VMessageComponent } from './components/vmessage/vmessage.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { IsOwnerDirective } from './directives/isowner.directive';
import { DarkenOnHoverDirective } from './directives/darken-on-hover.directive';

@NgModule({
  declarations: [
    NotFoundComponent,
    CardComponent,
    VMessageComponent,
    AlertComponent,
    HeaderComponent,
    DarkenOnHoverDirective,
    IsOwnerDirective,
    IsLoggedDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    NotFoundComponent,
    CardComponent,
    VMessageComponent,
    HeaderComponent,
    AlertComponent,
    DarkenOnHoverDirective,
    IsOwnerDirective,
    IsLoggedDirective
  ]
})
export class SharedModule { }
