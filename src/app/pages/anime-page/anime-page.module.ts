import { AllAnimesComponent } from './../../shared/components/all-animes/all-animes.component';
import { AppModule } from './../../app.module';
import { TopGaleryComponent } from 'src/app/shared/components/top-galery/top-galery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimePageRoutingModule } from './anime-page-routing.module';
import { AnimePageComponent } from './anime-page.component';


@NgModule({
  declarations: [
    AnimePageComponent,
    AllAnimesComponent

  ],
  imports: [
    CommonModule,
    AnimePageRoutingModule,

  ]
})
export class AnimePageModule { }
