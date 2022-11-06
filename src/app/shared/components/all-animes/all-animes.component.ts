import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-animes',
  templateUrl: './all-animes.component.html',
  styleUrls: ['./all-animes.component.scss']
})
export class AllAnimesComponent implements OnInit {

  animes:any[]=[]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAnimes().subscribe((res:any)=>{
    console.log(res.data)
    const allAnime = res.data;
    for (const element of allAnime) {
      let { attributes } = element;
      let { "canonicalTitle": animeTitle, posterImage, synopsis, popularityRank, ratingRank, averageRating, startDate} = attributes;
      let { "large": animeImg } = posterImage;
      let mappedAnime = {
        title: animeTitle,
        image: animeImg,
        synopsis: synopsis,
        startDate: startDate,
        popularity: popularityRank,
        rating: ratingRank,
        averageRating: averageRating,
      }
      this.animes.push(mappedAnime)
      }
    })
    console.log(this.animes)
  }

}
