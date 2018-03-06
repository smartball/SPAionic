import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
/**
 * Generated class for the EstimatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estimate',
  templateUrl: 'estimate.html',
})
export class EstimatePage {
 
  id:any;
  well:any;
  road:any;
  shape:any;
  width:any;
  size:any;
  dlat:any;
  dlon1:any;
  dlon2:any;
  data_service:any;
  loading:any;
  dataReady: boolean = false;
  result:any;
  public lon1:any = 100.772072;
  public lon2:any = 100.77227210000001;
  public lat2:any = 13.7217572;
  public lat1:any = 13.7201804;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public nativeStorage: NativeStorage,
              public restProvider: RestProvider,
              public loadingCtrl: LoadingController) {
              this.retrieveData()
  }
  
  retrieveData(){
    this.nativeStorage.getItem('data_service').then((data)=>{
      this.data_service ={
        id: data.id,
        well: data.well,
        road: data.road,
        shape: data.shape,
        width: data.width,
        size: data.size
      };
      this.id     = this.data_service.id;
      this.well   = this.data_service.well;
      this.road   = this.data_service.road;
      this.shape  = this.data_service.shape;
      this.width  = this.data_service.width;
      this.size   = this.data_service.size;
      this.dataReady = true;
      console.log(this.size);
      /*console.log(this.id);
      console.log(this.well);
      console.log(this.road);
      console.log(this.shape);
      console.log(this.width);*/
      this.getInfo(this.id);
    },(error) => {
      console.log(error);
    })
  }
  getInfo(id){
    /*this.presentLoading();
    this.restProvider.getTotal()
    .then(data =>{
      this.result = data;
      console.log(this.result);
      this.loading.dismiss();
    })*/
    console.log(id);
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    this.loading.present();
}
  

 
}
