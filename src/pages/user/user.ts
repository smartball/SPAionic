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

  user: any;
  userReady: boolean = false;

  constructor(
    public navCtrl: NavController,
    public fb: Facebook,
    public loadingCtrl: LoadingController,
    public nativeStorage: NativeStorage,
    public afAuth: AngularFireAuth,
    public googlePlus: GooglePlus
  ) {}

  ionViewCanEnter(){
    this.nativeStorage.getItem('user')
    .then((data) => {
      this.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture,
        email: data.email
      };
      this.userReady = true;
    }, (error) => {
      console.log(error);
    });
  }

  doFbLogout(){
    
    this.fb.logout()
    .then((response) => {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('user');
      this.navCtrl.push(LoginPage);
    }, (error) => {
      console.log(error);
    });
  }

  doGoogleLogout(){
    let nav = this.navCtrl;
    this.googlePlus.logout()
    .then((response) => {
      this.nativeStorage.remove('user');
      nav.push(LoginPage);
    },(error) => {
      console.log(error);
    })
  }

  logout(){
    var loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    const result = this.afAuth.auth.signOut();
    this.nativeStorage.remove('user');
    if(result){
      loader.dismiss();
      setTimeout(() => {
        this.navCtrl.setRoot(LoginPage);
        },1000);
    }
  }
}
