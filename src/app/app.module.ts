import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapDirectionPage }  from '../pages/map-direction/map-direction';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { RegisterPage } from '../pages/register/register';

import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapDirectionPage,
    LoginPage,
    UserPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapDirectionPage,
    LoginPage,
    UserPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Facebook,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AuthProvider
  ]
})
export class AppModule {}
