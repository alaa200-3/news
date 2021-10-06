import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { BusiniessComponent } from './businiess/businiess.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechComponent } from './tech/tech.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [

  {path:''  ,redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'n/:id',component:NetworkComponent},
  {path:'g/:id',component:GeneralComponent},
  {path:'e/:id',component:EntertainmentComponent},
  {path:'h/:id',component:HealthComponent},
  {path:'s/:id',component:ScienceComponent},
  {path:'b/:id',component:BusiniessComponent},
  {path:'t/:id',component:TechComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'moviedetails',component:MoviedetailsComponent},
  {path:'moviedetails/:url/:cat',component:MoviedetailsComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
