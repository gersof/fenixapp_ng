import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from "../environments/firebase.config";
import {NgPipesModule} from 'ngx-pipes';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from "./app.router";
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BandsComponent } from './components/bands/bands.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';
import { LocationsComponent } from './components/locations/locations.component';
import { MasternewsComponent } from './components/masternews/masternews.component';
import { MastereventsComponent } from './components/masterevents/masterevents.component';
import { SimpleTinyComponent } from "./common/editor";
import { EventsService } from "./services/events.service";
import { EventdetailComponent } from './components/eventdetail/eventdetail.component';
import { BanddetailComponent } from './components/banddetail/banddetail.component';
import { MasterbandComponent } from './components/masterband/masterband.component';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BandsComponent,
    NewsComponent,
    EventsComponent,
    LocationsComponent,
    MasternewsComponent,
    MastereventsComponent,
    SimpleTinyComponent,
    EventdetailComponent,
    BanddetailComponent,
    MasterbandComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgPipesModule,
    RoutingModule,
    FormsModule,
    MyDatePickerModule     
    ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
