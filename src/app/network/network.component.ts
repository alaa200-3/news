import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  id:string ='';
  movieDetails:any[]=[];
 country:string='';

 constructor(private _ActivatedRoute:ActivatedRoute,private _MovieService:MovieService) {
  this.id=_ActivatedRoute.snapshot.params.id;

  this.country=_MovieService.country;
  _MovieService.getNews(this.id).subscribe((data)=>{
    this.movieDetails=data.articles.slice(0,10);
  })
}


  ngOnInit(): void {
  }

}
