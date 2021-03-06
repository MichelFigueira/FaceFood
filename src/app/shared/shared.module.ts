import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { VMessageComponent } from './components/vmessage/vmessage.component';
import { CardComponent } from './components/card/card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GlobalErrorHandler } from './error/global-error-handler';

import { IsLoggedDirective } from './directives/islogged.directive';
import { LoadingInterceptor } from './components/loading/loading.interceptor';
import { IsOwnerDirective } from './directives/isowner.directive';
import { DarkenOnHoverDirective } from './directives/darken-on-hover.directive';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    CardComponent,
    VMessageComponent,
    AlertComponent,
    HeaderComponent,
    LoadingComponent,
    MenuComponent,
    GlobalErrorComponent,

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
    LoadingComponent,
    AlertComponent,
    MenuComponent,
    GlobalErrorComponent,

    DarkenOnHoverDirective,
    IsOwnerDirective,
    IsLoggedDirective
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class SharedModule { }
