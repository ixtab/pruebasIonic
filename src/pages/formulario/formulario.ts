import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './../../app/login.service';
import { Login } from './../../app/login.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  
  selector: 'formulario',
  templateUrl: 'formulario.html',
  providers: [LoginService]
})

export class FormularioPage {

  login:Login;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginservice: LoginService) {
    this.login = new Login();
  }

  acceder (datos:Login, valido:boolean){
    if (valido){
      console.log("Datos Validos");
      let respuesta: Observable<Object> = this.loginservice.postLogin(datos);
      respuesta.subscribe (ok => 
        {
          console.log ("Ha vuelto");
          let vresp : HttpResponse<Object> = <HttpResponse<Object>>ok;
          console.log ("cuerpo: " + vresp.body); //En un post lo que se poner es el status por si funciona o no.
          console.log (ok);
          console.log ("status" + vresp.status);
          console.log ("statusText" + vresp.statusText);
        },
        ko =>
        {
          console.log ("ERROR DEL SERVIDOR" + ko);

        },
        () => { // si status distinto a 200;
          console.log ("Completado");
        }

      );

      
    }
    else{
      console.log("Los datos No son validos");


    }
    console.log("Datos rx: " + datos.nombre + ", " + datos.pwd + ", " + datos.pwd2);
  }
}
