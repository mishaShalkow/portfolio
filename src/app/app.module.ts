import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { HeaderComponent } from './components/header/header.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainWindowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /*   RouterModule.forRoot(routes{
      anchorScrolling: 'enabled',
    }), */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
