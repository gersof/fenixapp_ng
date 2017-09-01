import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-masterevents',
  templateUrl: './masterevents.component.html',
  styleUrls: ['./masterevents.component.css']
})

export class MastereventsComponent implements OnInit {

  constructor(){

  }

  ngOnInit() {
   $('#datetimepicker').datetimepicker({
    format: 'YYYY-MM-DD HH:mm', sideBySide: true
});
  }
}


