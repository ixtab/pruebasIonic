import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  texto : string;
  texto_recibido : string;
  estado : string;

  vez : boolean;


  constructor(public navCtrl: NavController, public storage: Storage) {

    this.comprobar();
  }
  guardar(){

    this.storage.set('texto', this.texto).then(enviado => {this.estado = "enviado";});
    
  }

  consultar(){
    this.texto = "";
    this.estado = "";
    this.storage.get('texto').then ( leido => { this.texto_recibido = leido;});
  }

  comprobar(){

  }

}