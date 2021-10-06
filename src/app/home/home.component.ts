import { analyzeAndValidateNgModules, ThrowStmt } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit ,OnDestroy} from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{

  imgePrefix:string='https://image.tmdb.org/t/p/w500';
  trendingMovies:any[]=[];
  title:string='';

  specificURl:any={};


  headLines:any=[]=[];
    constructor(private _MovieService:MovieService) {

      _MovieService.getTrending().subscribe((data)=>{
     this.trendingMovies=data.articles.slice(0,10);
    });


    _MovieService.getTopHeadLines().subscribe((data)=>{
      this.headLines=data.articles.slice(0,10);
    });



  }
  getNews(url:string,cat:string){
    console.log(url);
    this._MovieService.getTrending().subscribe((data)=>{
      this.trendingMovies=data.articles;
      for(let i=0;i<this.trendingMovies.length;i++){
        if(this.trendingMovies[i]?.url===url){
           this._MovieService.specificnewUrl=this.trendingMovies[i];
           console.log(this.trendingMovies[i])
           break;
        }
      }
      console.log(this._MovieService.specificnewUrl);

    })
  }



  ngOnInit(): void {

  }

  ngOnDestroy():void{

  }
}
