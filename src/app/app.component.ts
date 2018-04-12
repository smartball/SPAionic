import { Component, ViewChild } from '@angular/core';
import { Platform,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';
import { EstimatePage } from '../pages/estimate/estimate';
import { SellPage } from '../pages/sell/sell';

import { AngularFireAuth } from 'angularfire2/auth';
import { state } from '@angular/core/src/animation/dsl';
import { AppraisalPage } from '../pages/appraisal/appraisal';
import { IonDigitKeyboardCmp } from '../components/ion-digit-keyboard';
import { MapDirectionPage } from '../pages/map-direction/map-direction';
import { from } from 'rxjs/observable/from';
import { RegisterPage } from '../pages/register/register';
import { ListPage } from '../pages/list/list';

declare var google: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public userDetails: any;
  map: any;
  rootPage:any = LoginPage;
  authenticated: boolean;
  pages: Array<{title: string, component: any,icon: any}>;
  constructor(
    platform: Platform,
    public nativeStorage: NativeStorage,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public afAuth: AngularFireAuth) {
      this.authenticated = false;
      this.pages = [
        { title: 'Home', component: HomePage, icon:'ios-home' },
        { title: 'Profile', component: UserPage, icon:'md-contact' },
        { title: 'Market Place', component: ListPage, icon:'md-basket' },
        { title: 'About Us', component: UserPage, icon:'md-information-circle' },
        { title: 'Es', component: SellPage, icon:'md-information-circle' }
      ];
      
      if(localStorage.getItem('userData')){
        const data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
      //console.log(this.userDetails.name);
        platform.ready().then(() => {
          
            if(this.userDetails.username){
              this.rootPage = HomePage;
            }else{
              this.rootPage = LoginPage;
            }
      
            this.statusBar.styleDefault();
          });
        }else{
          this.rootPage = LoginPage;
        }
        }
        openPage(page) {
          // Reset the content nav to have just this page
          // we wouldn't want the back button to show in this scenario
          this.nav.setRoot(page.component).then(()=>{
            this.nativeStorage.remove('std');
          }) ;
        }
      }
