import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor( public af: AngularFireDatabase) {
    this.items = af.list('/bands');


   // this.user = this.afAuth.authState;

  }

  ngOnInit() {
  }

}
