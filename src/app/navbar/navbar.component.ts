import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  country:string='';
  constructor(private _MovieService:MovieService) {

    console.log(this.country);
  }

getcountry(value:string){
  this._MovieService.country=value;

}



  ngOnInit(): void { }

}
