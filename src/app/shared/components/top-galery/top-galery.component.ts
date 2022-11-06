
import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-galery',
  templateUrl: './top-galery.component.html',
  styleUrls: ['./top-galery.component.scss']
})
export class TopGaleryComponent implements OnInit {

  @Input() galeryType?: string

  animes: any [] = [];
  infoAnime:string = "d-none"

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    if (this.galeryType === "week") {
        this.apiService.getWeek().subscribe((res: any) => {
        // console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          let element = res.data[i];
          // console.log(element);
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

          this.animes.push(mappedAnime);
        }

        // console.log(this.animes);

      })
    } else if (this.galeryType === "emision") {
        this.apiService.getEmision().subscribe((res: any) => {
        // console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          let element = res.data[i];
          // console.log(element);
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

          this.animes.push(mappedAnime);
        }

        // console.log(this.animes);

      })
    } else if (this.galeryType === "esperados") {
        this.apiService.getEsperados().subscribe((res: any) => {
        // console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          let element = res.data[i];
          // console.log(element);
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

          this.animes.push(mappedAnime);
        }

        // console.log(this.animes);

      })
    } else if (this.galeryType === "evaluados") {
        this.apiService.getEvaluados().subscribe((res: any) => {
        // console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          let element = res.data[i];
          // console.log(element);
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

          this.animes.push(mappedAnime);
        }

        // console.log(this.animes);

      })
    } else if (this.galeryType === "populares") {
        this.apiService.getPopulares().subscribe((res: any) => {
        // console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          let element = res.data[i];
          // console.log(element);
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

          this.animes.push(mappedAnime);
        }

        // console.log(this.animes);

      })
    } else {
      return;
    }
  }


hover(){
  this.infoAnime = "d-flex"
}
hoverOut(){
  this.infoAnime = "d-none"
}


}
