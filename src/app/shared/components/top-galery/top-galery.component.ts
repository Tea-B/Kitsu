import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-galery',
  templateUrl: './top-galery.component.html',
  styleUrls: ['./top-galery.component.scss']
})
export class TopGaleryComponent implements OnInit {

  @Input galerytype

  animes: any [] = []

  constructor() { }

  ngOnInit(): void {
    if (galerytype = "week") {
      this.animes = apiservice.get()
    } else if (galerytype = "emision") {
      this.animes = apiservice.getemision()
    }
  }

}
