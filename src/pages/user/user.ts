import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoginPage } from '../login/login';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {
  imgs:any;
  user: any;
  userReady: boolean = false;
  public userDetails: any;
  success = 0;
  constructor(
    public navCtrl: NavController,
    public fb: Facebook,
    public loadingCtrl: LoadingController,
    public nativeStorage: NativeStorage,
    public afAuth: AngularFireAuth,
    public googlePlus: GooglePlus
  ) {
    this.imgs = 'assets/imgs/bg.png';
    if(localStorage.getItem('userData')){
      this.success = 1;
      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = data.userData;
      console.log(this.userDetails.NAME_IMG);
      }else{
        this.navCtrl.setRoot(LoginPage);
      }
    
  }

  logout(){
    var loader = this.loadingCtrl.create({
      spinner: "dots",
      content: "Please wait..."
    });
    loader.present();
    localStorage.clear();
    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.setRoot(LoginPage);
    }, 2000);
  }
}
