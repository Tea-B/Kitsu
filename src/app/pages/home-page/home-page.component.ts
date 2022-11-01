import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  galeryTypes: any [] = ["week", "emision", "esperados", "evaluados", "populares"];



  constructor() { }

  ngOnInit(): void {

  }
}

