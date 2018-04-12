import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { Facebook } from '@ionic-native/facebook';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage} from '../pages/home/home';
import { MapDirectionPage }  from '../pages/map-direction/map-direction';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { RegisterPage } from '../pages/register/register';
import { EstimatePage } from '../pages/estimate/estimate';
import { AppraisalPage } from '../pages/appraisal/appraisal';
import { SellPage } from '../pages/sell/sell';

import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { ParallaxDirective } from '../directives/parallax/parallax';
import { ListPage } from '../pages/list/list';
import { RestProvider } from '../providers/rest/rest';
import { IonDigitKeyboard } from '../components/ion-digit-keyboard/ion-digit-keyboard.module';

import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapDirectionPage,
    LoginPage,
    UserPage,
    RegisterPage,
    ParallaxDirective,
    EstimatePage,
    ListPage,
    AppraisalPage,
    SellPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonDigitKeyboard,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapDirectionPage,
    LoginPage,
    UserPage,
    RegisterPage,
    EstimatePage,
    ListPage,
    AppraisalPage,
    SellPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Facebook,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    RestProvider,
    FileTransfer, 
    File,
    ImagePicker
    
  ]
})
export class AppModule {}
