import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandsComponent } from './components/bands/bands.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';
import { LocationsComponent } from './components/locations/locations.component';
import { HomeComponent } from './components/home/home.component';
import { MasternewsComponent } from './components/masternews/masternews.component';
import { MastereventsComponent } from './components/masterevents/masterevents.component';
import { EventdetailComponent } from "./components/eventdetail/eventdetail.component";
import { MasterbandComponent } from "./components/masterband/masterband.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },  {
    path: 'home', component: HomeComponent
  }, {
    path: 'bands', component: BandsComponent
  }, {
    path: 'news', component: NewsComponent
  }, {
    path: 'events', component: EventsComponent
  },{
    path: 'locations',component: LocationsComponent
  },{
    path: 'masterbands',component: MasterbandComponent
  }
  ,{
    path: 'masternews',component: MasternewsComponent
  },{
    path: 'masterevents',component: MastereventsComponent
  },{
    path: 'eventdetail/:id',component: EventdetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports:[RouterModule]
})
export class RoutingModule { }
