import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-masterband',
  templateUrl: './masterband.component.html',
  styleUrls: ['./masterband.component.css']
})
export class MasterbandComponent implements OnInit {
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
    todayBtnTxt: 'Hoy'
  };
  private urlimgclient = '';
  private NameAlbum: string = '';
  private YearAlbum: number;
  private NameIntegrant: string = ''
  private Instrument: string = ''
  private Status: boolean = false;
  private discography: Array<any> = [];
  private integrants: Array<any> = [];
  private instruments: Array<any> = [
    { 'IdInstrument': '1', 'NameInstrument': 'Voz' }
    , { 'IdInstrument': '2', 'NameInstrument': 'Guitarra' }
    , { 'IdInstrument': '3', 'NameInstrument': 'Bajo' }
    , { 'IdInstrument': '4', 'NameInstrument': 'Batería' }
    , { 'IdInstrument': '5', 'NameInstrument': 'Teclado' }
    , { 'IdInstrument': '6', 'NameInstrument': 'Otros' }
  ];

  private status: Array<any> = [
    { 'IdStatus': true, 'NameStatus': 'Activo' }
    , { 'IdStatus': false, 'NameStatus': 'Inactivo' }
  ];

  selectedFiles: FileList;

  constructor() { }

  ngOnInit() {

  }

  addAlbumInfoToList() {
    var result = this.validateAlbumInfo();        
    

    if(result.Isvalid===true)
      {
        this.discography.push({ NameAlbum: this.NameAlbum, YearAlbum: this.YearAlbum });
        
      }else{
        alert(result.Msg);
      }
  }

  validateAlbumInfo() {
    console.log(this.NameAlbum +"|"+this.YearAlbum)
    var result = { Isvalid: false, Msg: '' };
    if (this.NameAlbum == '' && (this.YearAlbum === 0 || this.YearAlbum === null)) {
      result.Isvalid = false; result.Msg = "El nombre del Album y el año"
    } else {
      result.Isvalid = true; result.Msg = "OK"
    }

    return result;
  }

  addIntegrantInfoToList() {

    this.integrants.push({ NameIntegrant: this.NameIntegrant, Instrument: this.Instrument, Status: this.Status });
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
