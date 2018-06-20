

import { EqualValidator } from './validatorpwd.directive';
import { Directive } from '@angular/core';
import { Login } from './login.model';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CalendarioPage } from '../pages/calendario/calendario';
import { FormularioPage } from '../pages/formulario/formulario';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Validator, AbstractControl, NG_VALIDATORS, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { MapawebPage } from '../pages/mapaweb/mapaweb';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CalendarioPage, 
    FormularioPage,
    EqualValidator,   
    MapawebPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule, 
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CalendarioPage,
    FormularioPage,
    MapawebPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Login,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
