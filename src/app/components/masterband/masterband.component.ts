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
private urlimgclient='';
private NameAlbum:string='';
private YearAlbum:number=2000;
private discography: Array<any>=[];
selectedFiles: FileList;

  constructor() { }

  ngOnInit() {

  }

  addAlbumInfoToList(){
    this.discography.push({NameAlbum:this.NameAlbum,YearAlbum:this.YearAlbum});
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
  _handleReaderLoaded(e) {
    var reader = e.target;
    this.urlimgclient = reader.result;
  }
  
  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    email: 'muk@gmail.com'
  };

  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    this.isCompleted = true;
  }

  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }

}
