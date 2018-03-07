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
        lat: data.lat,
        lon: data.lon,
        id: data.id,
        well: data.well,
        road: data.road,
        shape: data.shape,
        width: data.width,
        size: data.size,
        appraisal: data.appraisal,
        distance: data.distance,
        type_size: data.type_size,
        province_id: data.province_id,
        amphur_code: data.amphur_code
      };
      this.id     = this.data_service.id;
      this.well   = this.data_service.well;
      this.road   = this.data_service.road;
      this.shape  = this.data_service.shape;
      this.width  = this.data_service.width;
      this.size   = this.data_service.size;
      this.appraisal = this.data_service.appraisal;
      this.appraisal_parse = this.appraisal.toLocaleString();
      this.distance = this.data_service.distance;
      this.type_size = this.data_service.type_size;
      this.lat = this.data_service.lat;
      this.lon = this.data_service.lon;
      this.province_id = this.data_service.province_id;
      this.amphur_code = this.data_service.amphur_code;
      this.dataReady = true;
      /*console.log(this.type_size);
      console.log(this.lat);
      console.log(this.lon);
      console.log(this.road);
      console.log(this.shape);
      console.log(this.width);*/
      this.getInfo(this.lat, this.lon, this.province_id, this.amphur_code, this.well, this.road, this.shape, this.width, this.type_size, this.id, this.appraisal, this.size);
    },(error) => {
      console.log(error);
    })
  }
  getInfo(lat, lon, province_id, amphur_code, well, road, shape, width, type_size, id, appraisal, size){
    this.presentLoading();
    this.restProvider.getTotal(lat, lon, province_id, amphur_code, well, road, shape, width, type_size, id, appraisal, size)
    .then(data =>{
      var results = data;
      this.result = results.toLocaleString();
      console.log(this.result);
      this.loading.dismiss();
    },error =>{
      console.log("พัง");
    })
    
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    this.loading.present();
}
  

 
}
