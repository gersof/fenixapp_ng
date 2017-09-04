import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { UUID } from 'angular2-uuid';
import {  EventModel} from "../models/event.model";


@Injectable()
export class EventsService {
events: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireAuth,private db: AngularFireDatabase) { }

  addEvents(eventinfo:EventModel)
  {
    var guid= UUID.UUID();
    console.log(eventinfo)
    this.db.object('/events/' + guid).set(eventinfo);
  }
}
