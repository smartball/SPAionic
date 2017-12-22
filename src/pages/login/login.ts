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

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  FB_APP_ID: number = 160319811228422;
  user = {} as User;
  public email: string;
  public password: string;
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
      var loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loader.present();
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(authData =>{
        loader.dismiss();  
        if(result){
          this.navCtrl.setRoot(HomePage);
        }
      }, error => {
        loader.dismiss();
      // Unable to log in
        let alert = this.alertCtrl.create({
          message: error,
          buttons: ['OK']
        })
        alert.present();
        this.user.password = ""//empty the password field
      });
      
    
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  
  ForgotPassword(){
    let prompt = this.alertCtrl.create({
      title: 'Enter Your Email',
      message: "A new password will be sent to you",
      inputs:[
        {
          name: 'recoverEmail',
          placeholder: 'you@email.com'
        },
      ],
      buttons:[
        {
          text:'Cancel',
          handler: data =>{
            console.log('Cancel Clicked');
          }
        },
        {
          text:'Submit',
          handler: data=>{
            console.log("A title sentence to it "+ data.recoverEmail);
            //
            let loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
                content: 'Reseting Your Password..'
            });
            this.authprovider.forgotPasswordUser(data.recoverEmail).then(() =>{
                loading.dismiss().then(() =>{
                  let alert = this.alertCtrl.create({
                      title: 'Check your Email',
                      subTitle: 'Password reset successful',
                      buttons: ['OK']
                });
                alert.present();
                })
              }, error =>{
                let alert = this.alertCtrl.create({
                    title: 'Error reseting password',
                    subTitle: error.message,
                    buttons: ['OK']
                });
                alert.present();
            });
          }
        }
      ]
    });
    prompt.present();
  }
}
