import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-masterband',
  templateUrl: './masterband.component.html',
  styleUrls: ['./masterband.component.css']
})
export class MasterbandComponent implements OnInit {
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
    todayBtnTxt:'Hoy'
};
  constructor() { }

  ngOnInit() {

  }

}
