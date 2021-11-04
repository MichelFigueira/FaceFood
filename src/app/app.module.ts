import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { TimelineModule } from './timeline/timeline.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestInterceptor } from './core/token/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TimelineModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
