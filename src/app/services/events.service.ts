import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { UUID } from 'angular2-uuid';
import {  EventModel} from "../models/event.model";
import { Upload } from "../models/upload.model";

@Injectable()
export class EventsService {
events: FirebaseListObservable<any[]>;
private basePath:string = '/uploads';
private uploadTask: firebase.storage.UploadTask;
uploads: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireAuth,private db: AngularFireDatabase) { }

  addEvents(eventinfo:EventModel,upload: Upload)
  {
    var guid= UUID.UUID();
    upload.guidkey=guid;
    console.log(eventinfo)
    this.db.object('/events/' + guid).set(eventinfo);    
    this.pushUpload(upload);
  }

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    debugger
    this.uploadTask = storageRef.child(`${upload.category}/${upload.file.name}`).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        //upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        console.log("subido")
        // upload success
        upload.url = this.uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.object(`${upload.category}/${upload.guidkey}`).update({PictureURL:upload.url});
  }

  getEventsList()
  {
    this.events= this.db.list('/events/') as FirebaseListObservable<any[]>;
    return  this.events;
  }

  getEventInfo(id)
  {
    return this.db.object('/events/'+id);
   // return  this.events;
  }
}
