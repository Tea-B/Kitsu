import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url_week:string="https://kitsu.io/api/edge/trending/anime?limit=5"
  url_emision:string="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count"
  url_masEsperados:string="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count"
  url_evaluados:string="https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating"
  url_pupulares:string="https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count"
  url_categorias:string="https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count"
  url_animes:string="https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count"

  constructor(private http: HttpClient) { }

  getWeek(){
    return this.http.get(this.url_week)
  }
  getEmision(){
    return this.http.get(this.url_emision)
  }
  getEsperados(){
    return this.http.get(this.url_masEsperados)
  }
  getPopulares(){
    return this.http.get(this.url_pupulares)
  }
  getCategorias(){
    return this.http.get(this.url_categorias)
  }
  getEvaluados(){
    return this.http.get(this.url_evaluados)
  }
  getAnimes(){
    return this.http.get(this.url_animes)
  }



}
