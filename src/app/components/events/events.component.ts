import { Component, OnInit } from '@angular/core';
import { EventsService } from "../../services/events.service";
import { EventModel } from "../../models/event.model"

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public eventslist: Array<EventModel>;
  
  constructor(
    private _eventsService: EventsService
  ) { }

  ngOnInit() {
  }

}
