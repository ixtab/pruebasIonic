import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'fotocam',
  templateUrl: 'fotocam.html', 
  styles: [`img {
    border-radius: 50%;
}`],
  providers: [Camera, ScreenOrientation, LocalNotifications]
})
export class FotoCam {


  private ruta_foto;
  private mensaje;

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera, private screenOrientation: ScreenOrientation, private localNotifications: LocalNotifications, private storage: Storage) {
    //this.ruta_foto = '../../assets/imgs/mafasion.jpeg';
    this.ruta_foto = 'assets/imgs/mafasion.jpeg';
    

    // set a key/value
  
    this.storage.get('logueado').then( 
      lado => {
      if (!lado){
        console.log("ok es null");
        this.mensaje = "primeravez";
        this.storage.set('logueado', true);
      } else {
        console.log("ok NO es null");
        this.mensaje = "siguientesveces";
      }}, 
      error =>console.log(" error al leer"));

  // Or to get a key/value pair
  this.storage.get('foto').then( 
    ok => {console.log("hay foto " + ok); 
    if (ok==null) {
      console.log("ok es null");
    } else {
      console.log("ok NO es null");
      this.ruta_foto = ok;
    }}, 
    error =>console.log(" error NO hay foto"));
  }
  
  hazFoto ()
  {
    console.log ("toco hacer una foto");

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log("base64Image " + base64Image);
      this.ruta_foto = base64Image;
      this.storage.set('foto', base64Image);
      console.log("foto guardada");
     }, (err) => {
      console.log ("hubo un error al echar la foto");
     });

     this.screenOrientation.onChange().subscribe(
      () => {
          console.log("Orientation Changed");
          this.lanzaNotificacion ();
      }
   );  
  }
  lanzaNotificacion ()
  {
    this.localNotifications.schedule({
      title: 'Cambio la ortientación',
      text: 'Ahora es' + this.screenOrientation.type,
      actions: 'yes-no'
  });
  }
}
