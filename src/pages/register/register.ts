import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController, AlertController,ActionSheetController } from 'ionic-angular';

import { User } from '../../models/user';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { Camera } from '@ionic-native/camera';

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
  providers: [Camera]
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
  responseData : any;
  imageChosen:any = 0;
  imagePath: any;
  userData = {"username": "","password": "", "name": "","email": ""};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              public authprovider: AuthProvider, 
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private camera: Camera,
              private transfer: FileTransfer, 
              private file: File,
              public actionSheet: ActionSheetController,
              public toastCtrl: ToastController) {
  }
      signup(){
        let loader = this.loadingCtrl.create({
          spinner: "dots",
          content: 'กำลังสมัครสมาชิก'
        });
        loader.present();
        this.authprovider.postData(this.userData,'signup').then((result) => {
         this.responseData = result;
         
         if(this.responseData.userData){
         //console.log(this.responseData);
         //localStorage.setItem('userData', JSON.stringify(this.responseData));
         loader.dismiss();
         this.navCtrl.push(LoginPage);
         }
         else{ alert("User already exists"); }
       }, (err) => {
         // Error log
       });
       this.upload();
   
     }
   
     login(){
       //Login page link
       this.navCtrl.push(LoginPage);
     }

     chooseImage() {
      let actionSheet = this.actionSheet.create({
        title: 'Choose Picture Source',
        buttons: [
          {
            text: 'Gallery',
            icon: 'albums',
            handler: () => {
              this.actionHandler(1);
            }
          }, {
            text: 'Camera',
            icon: 'camera',
            handler: () => {
              this.actionHandler(2);
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
  
      actionSheet.present();
    }
    actionHandler(selection: any) {
      var options: any;
      if (selection == 1) {
        options = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: true,
          encodingType: this.camera.EncodingType.JPEG,
          saveToPhotoAlbum: false,
          targetWidth: 600,
          targetHeight: 850,
        };
      } else {
        options = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: this.camera.EncodingType.JPEG,
          saveToPhotoAlbum: true,
          targetWidth: 600,
          targetHeight: 850,
        };
      }
      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.imageChosen = 1;
        
        this.imagePath = base64Image;
      });
    }
    upload(){
      
      //create file transfer object
      const fileTransfer: FileTransferObject = this.transfer.create();
  
      //random int
      var random = Math.floor(Math.random() * 100);
  
      //option transfer
      let options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: "myImage_" + random + ".jpg",
        chunkedMode: false,
        httpMethod: 'post',
        mimeType: "image/jpeg",
        headers: {}
      }
      
      //file transfer action
      console.log("in this section");
      
      fileTransfer.upload(this.imagePath, 'https://smartball.000webhostapp.com/uploads/user_upload.php', options)
      .then((data) => {
        console.log(data);
        
      }, (err) => {
        console.log(err);
      });
    }

}
