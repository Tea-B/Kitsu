import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categorias:any[]=[]

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getCategorias().subscribe((res:any)=>{

      console.log(res.data)
      for (const categoria of res.data) {
          let title = categoria.attributes.title
          this.categorias.push(title)
      }
    })
    console.log(this.categorias)
  }

}
