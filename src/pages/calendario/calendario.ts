import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';


@Component({
  selector: 'calendario-list',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams,
         public NgCalendarModule: NgCalendarModule) {
    
  }
  
}
