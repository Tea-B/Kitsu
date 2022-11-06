
import { CategoryComponent } from './../../shared/components/category/category.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { TopGaleryComponent } from 'src/app/shared/components/top-galery/top-galery.component';


@NgModule({
  declarations: [
    HomePageComponent,
    TopGaleryComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ]
})
export class HomePageModule { }
