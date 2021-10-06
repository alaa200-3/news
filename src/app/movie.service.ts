import { HttpClient } from '@angular/common/http';
import { rendererTypeName } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  newUrl:string="";
  cat:string="";

  specificnewUrl:any={};
  constructor(private _HttpClient:HttpClient) {

   }

   country:string='';

getspecificNew():Observable<any>{
  return this.specificnewUrl;

}

   getTrending():Observable<any>
   {
     return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cbab8b6d222b4c92959e7543b6554e90")
   }

  getNews(cat:string):Observable<any>{
     console.log(this.country);
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${cat}&apiKey=cbab8b6d222b4c92959e7543b6554e90`)
  }

   getTopHeadLines():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cbab8b6d222b4c92959e7543b6554e90`)

   }


}
