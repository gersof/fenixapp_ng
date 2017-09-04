import { Component, OnInit } from '@angular/core';
import { EventsService } from "../../services/events.service";
import { EventModel } from "../../models/event.model";
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-masterevents',
  templateUrl: './masterevents.component.html',
  styleUrls: ['./masterevents.component.css']
})

export class MastereventsComponent implements OnInit {
  public eventinfo: EventModel = new EventModel('', '', '', '', '', '', '')
  file: File;
  constructor(
    private _eventsService: EventsService
  ) {

  }
  addNewEvent() {
    this._eventsService.addEvents(this.eventinfo)
  }

  ngOnInit() {

  }
  keyupHandlerFunction($event) {
    this.eventinfo.DescriptionEvent = $event;

  }

  onChangePicture(event) {
    this.file = event.srcElement.files;
  }
}


