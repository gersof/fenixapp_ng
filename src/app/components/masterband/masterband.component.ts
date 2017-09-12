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
private NameAlbum:string='';
private YearAlbum:number=2000;
private discography: Array<any>=[];
  constructor() { }

  ngOnInit() {

  }

  addAlbumInfoToList(){
    this.discography.push({NameAlbum:this.NameAlbum,YearAlbum:this.YearAlbum});
  }

}
