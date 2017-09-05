import { Component, OnInit } from '@angular/core';
import { EventsService } from "../../services/events.service";
import { EventModel } from "../../models/event.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {
  public eventslist: Array<EventModel>;
  public eventmodel: EventModel;
  private item;
  private id;
  private sub: any;
  
  constructor(
    private _eventsService: EventsService,
    private route: ActivatedRoute
  ) { 


  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.getEventsList();
      // In a real app: dispatch action to load the details here.
   });
    
  }
  getEventsList()
  {
    
     this._eventsService.getEventInfo(this.id).subscribe(events=>{this.item=events});
  }

}
