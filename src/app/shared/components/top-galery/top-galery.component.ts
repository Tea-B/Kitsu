import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-galery',
  templateUrl: './top-galery.component.html',
  styleUrls: ['./top-galery.component.scss']
})
export class TopGaleryComponent implements OnInit {

  @Input() galeryType?:any
  animes:any[]=[]




  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

  }


}
