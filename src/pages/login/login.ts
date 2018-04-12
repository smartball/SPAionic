import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

import { User } from '../../models/user';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { SellPage } from '../sell/sell';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  fireauth = firebase.auth();
  FB_APP_ID: number = 122621955076543;
  user = {} as User;
  public email: string;
  public password: string;
  responseData : any;
  userData = {"username": "","password": ""};
  constructor(
    public navCtrl: NavController,
    public fb: Facebook,
    public nativeStorage: NativeStorage,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public authprovider: AuthProvider,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,  
    public facebook: Facebook,
    private statusBar: StatusBar,
    public googlePlus: GooglePlus
    ) {
    this.statusBar.hide();
    this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  skip(){
    this.navCtrl.setRoot(HomePage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }


  loginSql(){
    var loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.authprovider.postData(this.userData,'login').then((result) => {
     this.responseData = result;
     if(this.responseData.userData){
     console.log(this.responseData);
     loader.dismiss();
     localStorage.setItem('userData', JSON.stringify(this.responseData));
     this.navCtrl.push(HomePage);
     }
     else{ 
       loader.dismiss();
       alert("Username or Password Invalid"); 
      }
   }, (err) => {
     // Error log
   });

 }
}
