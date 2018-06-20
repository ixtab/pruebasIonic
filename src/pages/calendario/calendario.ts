import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {

  fecha = new Date();
  hora: any;
  minutos: any;
  array : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hora  = this.fecha.getHours();
    this.minutos  = this.fecha.getMinutes();
    for (var i = 0; i < 2000; i++){
    this.array.push(i);
    }
  }
}
