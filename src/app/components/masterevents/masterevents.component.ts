import { Component, OnInit } from '@angular/core';
import { EventsService } from "../../services/events.service";
import { EventModel } from "../../models/event.model";
import { Upload } from "../../models/upload.model";
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-masterevents',
  templateUrl: './masterevents.component.html',
  styleUrls: ['./masterevents.component.css']
})

export class MastereventsComponent implements OnInit {
  public eventinfo: EventModel = new EventModel('', '', '', '', '', '', '', '')
  public eventslist: Array<EventModel>;
  selectedFiles: FileList;
  currentUpload: Upload;
  urlimgclient: string = "";
  constructor(
    private _eventsService: EventsService
  ) {

  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  addNewEvent() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.currentUpload.category = "events";
    this._eventsService.addEvents(this.eventinfo, this.currentUpload)
  }

  ngOnInit() {
    this.getEventsList();
  }
  keyupHandlerFunction($event) {
    this.eventinfo.DescriptionEvent = $event;

  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }


  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.urlimgclient = reader.result;
  }

  getEventsList()
  {
     this._eventsService.getEventsList().subscribe(events=>{this.eventslist=  events; console.log(this.eventslist)});
  }

  

}


