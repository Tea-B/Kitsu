import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
// import { TopGaleryComponent } from './shared/components/top-galery/top-galery.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './shared/components/category/category.component';
import { AllAnimesComponent } from './shared/components/all-animes/all-animes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AllAnimesComponent,
    // CategoryComponent,
    // TopGaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
