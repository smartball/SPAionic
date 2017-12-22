import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  FB_APP_ID: number = 160319811228422;
  user = {} as User;
  constructor(
    public navCtrl: NavController,
    public fb: Facebook,
    public nativeStorage: NativeStorage,
    public navParams: NavParams,
    public afAuth: AngularFireAuth
    ) {
    this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  doFbLogin(){
    let permissions = new Array<string>();
    

    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];

    this.fb.login(permissions)
    .then((response) => {
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      this.fb.api("/me?fields=name,gender", params)
      .then((user) => {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        this.nativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(() => {
          this.navCtrl.setRoot(UserPage);
        },(error) => {
          console.log(error);
        })
      })
    }, (error) => {
      console.log(error);
    });
  }

  skip(){
    this.navCtrl.setRoot(HomePage);
  }

  async login(user: User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
    }catch(e){
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }
}
