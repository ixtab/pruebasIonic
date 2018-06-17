import { ListPage } from './../pages/list/list';
import { HomePage } from './../pages/home/home';
import { CalendarioPage } from './../pages/calendario/calendario';
import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  

  rootPage: any;
  pag_inicio : number = 0 ;

  pages: Array<{title: string, component: any}>;

  ngOnInit() {
    this.seleccionarInicio();
 }

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage :Storage) {
    
    
    this.initializeApp();
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Calendario', component: CalendarioPage}
    ];

  }

  seleccionarInicio(){
    this.storage.get('inicio').then ( inicio => { 
      
      this.pag_inicio = inicio;
      console.log( "Inicial: " + this.pag_inicio);

      if (this.pag_inicio == 0){
          console.log( "Núm pág Ini: "+ this.pag_inicio);
          this.nav.setRoot (HomePage);
          this.storage.set('inicio', 1)
      }
      else if (this.pag_inicio == 1){
        console.log( "Núm pág Ini: " + this.pag_inicio);
        this.nav.setRoot (ListPage);
        this.storage.set('inicio', 2)
      }
      else{
        console.log( "Núm pág Ini: " + this.pag_inicio);
        this.nav.setRoot (CalendarioPage);
        this.storage.set('inicio', 0)
      }

    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
 }
}
