import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController, AlertController } from 'ionic-angular';

import { User } from '../../models/user';


import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public email : string;
  public phone : any;
  public password : any;
  public first_name : any;
  public last_name : any;
  public city : any;
  public address : any;
  public isJobSeeker : boolean;
  user = {} as User;
  public userProfile: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              public authprovider: AuthProvider, 
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {
  }

  
    doSignup(){
        var   account = {
          first_name: this.first_name,
          last_name: this.last_name || '',
          email: this.email,
          phone: this.phone || '',
          password: this.password,
          city: this.city || '',
          address: this.address || '',
          isJobSeeker : this.isJobSeeker || ''
        };
        try{
          var that = this;
          var loader = this.loadingCtrl.create({
            content: "Please wait...",
          });
        const result = this.authprovider.signupUserService(account).then(async authData => {
          //successful
          if(result){
            let alert = this.alertCtrl.create({
              message: 'สมัครสมาชิก สำเร็จ',
              buttons: ['OK']
            })
            await alert.present();
            loader.present();
          }
          loader.dismiss();
          setTimeout(() => {
          that.navCtrl.setRoot(LoginPage);
          },5000);
        }, error => {
         // Unable to log in
          let toast = this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          that.password = ""//empty the password field
        });
        }catch(e){
          console.error(e);
        }
      }

}
