import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TopGaleryComponent } from './shared/components/top-galery/top-galery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopGaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    TopGaleryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
