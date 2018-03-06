import { Component, ViewChild } from '@angular/core';
import { Platform,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';
import { EstimatePage } from '../pages/estimate/estimate';

import { AngularFireAuth } from 'angularfire2/auth';
import { state } from '@angular/core/src/animation/dsl';
import { AppraisalPage } from '../pages/appraisal/appraisal';
import { IonDigitKeyboardCmp } from '../components/ion-digit-keyboard';
import { MapDirectionPage } from '../pages/map-direction/map-direction';
declare var google: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
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
        { title: 'Market Place', component: UserPage, icon:'md-basket' },
        { title: 'About Us', component: UserPage, icon:'md-information-circle' },
        { title: 'Es', component: EstimatePage, icon:'md-information-circle' }
      ];
        platform.ready().then(() => {
            // Here we will check if the user is already logged in
            this.afAuth.authState.subscribe(state =>{
              if(state.email && state.uid){
                this.rootPage = HomePage;
              }else{
                this.rootPage = LoginPage;
              }
            })
            // because we don't want to ask users to log in each time they open the app
            let env = this;
            this.nativeStorage.getItem('user')
            .then((data)=> {
              // user is previously logged and we have his data
              // we will let him access the app
              google.maps.event.trigger(this.map, 'resize');
              
              env.splashScreen.hide();
            },(error)=> {
              //we don't have the user data so we will ask him to log in
              env.nav.setRoot(LoginPage);
              env.splashScreen.hide();
            });
      
            this.statusBar.styleDefault();
          });
        }
        openPage(page) {
          // Reset the content nav to have just this page
          // we wouldn't want the back button to show in this scenario
          this.nav.setRoot(page.component).then(()=>{
            this.nativeStorage.remove('std');
          }) ;
        }
      }
