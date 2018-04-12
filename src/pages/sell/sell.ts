import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { empty } from 'rxjs/observable/empty';
import { ImagePicker } from '@ionic-native/image-picker';
import { DomSanitizer } from '@angular/platform-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { AuthProvider } from '../../providers/auth/auth';
import { CurrencyPipe } from '@angular/common';
import { ListPage } from '../list/list';
/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
  providers: [CurrencyPipe]
})
export class SellPage {
  private myphoto: any = [];
  imageChosen:any = 0;
  base64Image:any;
  a: number = 0;
  xxx:any = [];
  test:any;
  id:any;
  well:any;
  road:any;
  shape:any;
  width:any;
  size:any;
  type_size:any;
  appraisal:any;
  appraisal_parse:any;
  distance:any;
  lat:any;
  lon:any;
  province_id:any;
  amphur_code:any;
  dlat:any;
  dlon1:any;
  dlon2:any;
  data_service:any;
  loading:any;
  dataReady: boolean = false;
  result:any;
  responseData : any;
  name:any;
  sell_price: any;
  phone:any;
  description:any;
  public userDetails: any;
  public dataMaps: any;
  public dataResult: any;
  sellData: any; 
  
  constructor(public navCtrl: NavController,
              private transfer: FileTransfer, 
              private file: File,
              public nativeStorage: NativeStorage, 
              private alert: AlertController,
              private imagePicker: ImagePicker,
              private sanitizer:DomSanitizer,
              public authprovider: AuthProvider,
              private currencyPipe: CurrencyPipe,
              private loadingCtrl: LoadingController) {
                this.test = 30;
                const data = JSON.parse(localStorage.getItem('userData'));
                this.userDetails = data.userData; 
                console.log(this.userDetails);
                this.dataMaps = JSON.parse(localStorage.getItem('dataMap'));
                
                //console.log(this.data.lon);
                this.dataResult = JSON.parse(localStorage.getItem('dataResults'));
                this.result = this.dataResult.results.toLocaleString();
                
  }
  

  up(){
    let loader = this.loadingCtrl.create({
      spinner: "dots",
      content: 'กำลังอัพโหลดข้อมูล'
    });
    this.presentLoading();
    this.sellData = {"name": this.name,
                    "area_size": this.dataMaps.area_size, 
                    "area_appraisal": this.dataResult.results,
                    "dpm_appraisal":this.dataMaps.dpm_appraisal,
                    "distance":this.dataMaps.distance,
                    "sell_price": this.sell_price,
                    "phone":this.phone,
                    "province":this.dataMaps.province,
                    "amphur":this.dataMaps.amphur,
                    "deed_number":this.dataMaps.deed_number,
                    "road":this.dataMaps.road,
                    "width":this.dataMaps.width,
                    "shape":this.dataMaps.shape,
                    "description":this.description,
                    "user_id":this.userDetails.user_id};
    if(this.name == null || this.sell_price == null || this.phone == null || this.description == null){
      alert("กรุณากรอกข้อมูลให้ครบ");
      //loader.dismiss();
    }else{
      this.authprovider.postData(this.sellData,'sellUpload').then((result) => {
        this.responseData = result;
        this.uploadImage();
        //alert("สำเร็จ");
        /*setTimeout(() => {
          loader.dismiss();
        }, 6000);*/
      }, (err) => {
        // Error log
      });
    }              
    console.log(this.phone);
    console.log(this.name);
    console.log(this.description);
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
          spinner: "dots",
          content: 'กำลังอัพโหลดข้อมูล'
    });
    this.loading.present();
  }
  takePhoto() {
    /*const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });*/
    var options = {
      maximumImagesCount: 5,
      width: 500,
      height: 500,
      quality: 50,
      
    };
    this.imagePicker.getPictures(options).then((imgUrl) => {
      for (var i = 0; i < imgUrl.length; i++) {
      //this.myphoto = imgUrl;
      //this.myphoto = imgUrl[i].replace('file://', '');
      this.myphoto.push(imgUrl[i].replace('file://', ''));
    }
    //this.myphoto = imgUrl;
     
      console.log(this.myphoto);
      
      this.imageChosen = 1;
      
    })
  }

  startUpload() {
    console.log("in start uploads")
    this.uploadImage();
  }
  loader(){
    
  }
  uploadImage() {
    //Show loading
    
    let loader = this.loadingCtrl.create({
      spinner: "dots",
      content: 'กำลังอัพโหลดข้อมูล'
    });
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
    let xx = [1,2,3,4,5];
    fileTransfer.upload(this.myphoto[0], 'https://smartball.000webhostapp.com/uploads/upload_product.php', options)
    .then((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
    for(var i = 0; i < xx.length;){
      ((i)=>{
        setTimeout(()=>{
          fileTransfer.upload(this.myphoto[i], 'https://smartball.000webhostapp.com/uploads/upload.php', options)
          .then((data) => {
            console.log(data);
            //alert("Success");
            //loader.dismiss();
          }, (err) => {
            console.log(err);
            //alert("Error");
            //loader.dismiss();
          });
        },800 * i)
      })(i++);
      
    }
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.setRoot(ListPage);
    }, 7000);
    
  }
  deletePhoto(index){
    let confirm = this.alert.create({
      title: index,
      message: 'คุณต้องการลบรูปภาพนี้ใช้ไหม?',
      buttons: [
        { 
         text: 'ไม่ใช่',
         handler: () => {
           console.log('cancel')
         }
        },
        {
          text: 'ตกลง',
          handler: () =>{
            this.myphoto.splice(index,1);
          }
        }
      ]
    });
    confirm.present();
    
  }

}
