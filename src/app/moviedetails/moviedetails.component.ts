import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  imgePrefix:string='https://image.tmdb.org/t/p/w500';
  url:string ='';
  cat:string='';
  movieDetails:any[]=[];

  specificURL:any=[];

  specificNew:any={};

  constructor(private _ActivatedRoute:ActivatedRoute,private _MovieService:MovieService) {
    // this.url=_ActivatedRoute.snapshot.params.url;
    // this.cat=_ActivatedRoute.snapshot.params.cat;


    //   this._MovieService.country="us";
    // this._MovieService.getNews(this.cat).subscribe((data)=>{

    //   this.movieDetails=data.articles.slice;
    //   for(let i=0;i<this.movieDetails.length;i++){
    //     if(this.movieDetails[i]?.url===this.url){
    //        this.specificURL=this.movieDetails[i];
    //        break;
    //     }
    //   }
    //   console.log(this.specificURL.url);
    //   console.log(this.specificURL)

    // })




  }

  ngOnInit(): void {
  }

}
