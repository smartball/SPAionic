import { Component, ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>;
  constructor(
    platform: Platform,
    public nativeStorage: NativeStorage,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar) {
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Profile', component: UserPage }
      ];
        platform.ready().then(() => {
            // Here we will check if the user is already logged in
            // because we don't want to ask users to log in each time they open the app
            let env = this;
            this.nativeStorage.getItem('user')
            .then( function (data) {
              // user is previously logged and we have his data
              // we will let him access the app
              env.nav.push(UserPage);
              env.splashScreen.hide();
            }, function (error) {
              //we don't have the user data so we will ask him to log in
              env.nav.push(LoginPage);
              env.splashScreen.hide();
            });
      
            this.statusBar.styleDefault();
          });
        }
        openPage(page) {
          // Reset the content nav to have just this page
          // we wouldn't want the back button to show in this scenario
          this.nav.setRoot(page.component);
        }
      }
