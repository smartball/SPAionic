import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { SplashScreen} from "@ionic-native/splash-screen";
import { StatusBar} from "@ionic-native/status-bar";
import { BrowserModule } from '@angular/platform-browser';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { MapDirectionPage } from '../pages/map-direction/map-direction'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UserPage,
    HomePage,
    MapDirectionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    UserPage,
    HomePage,
    MapDirectionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    NativeStorage
  ]
})
export class AppModule {}
