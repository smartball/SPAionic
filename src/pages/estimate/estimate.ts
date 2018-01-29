import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
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
 
  a:any;
  c:any;
  dk:any;
  km:any;
  dlon:any;
  dlat:any;
  dlon1:any;
  dlon2:any;
  std:any;
  gstd:any;
  dataReady: boolean = false;
  public lon1:any = 100.772072;
  public lon2:any = 100.77227210000001;
  public lat2:any = 13.7217572;
  public lat1:any = 13.7201804;
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage) {
  }
  
  
  ionViewDidLoad(){
    
    this.nativeStorage.getItem('std').then((data)=>{
      this.std ={
        appraisal: data.appraisal,
        lattitude: data.lattitude,
        longitude: data.longitude,
        name: data.name
      };
      
      this.dataReady = true;
    },(error) => {
      console.log(error);
    })
    var rk = 6373;
    var dlon1 = this.std.longitude * Math.PI/180;
    var dlon2 = (this.lon2 * Math.PI)/180;
    var dlat1 = this.std.lattitude * Math.PI/180;
    var dlat2 = (this.lat2 * Math.PI)/180;
    this.dlon =  dlon2 - dlon1;
    this.dlat = dlat2 - dlat1;

    this.a = Math.pow(Math.sin(this.dlat/2),2) + Math.cos(this.lat1) * Math.cos(this.lat2) * Math.pow(Math.sin(this.dlon/2),2);
    this.c = 2 * Math.atan2(Math.sqrt(this.a),Math.sqrt(1-this.a));
    this.dk = this.c *  rk;
    this.km = Math.max( this.dk * 1000/1000).toFixed(3);
    var pot = this.std.lattitude+','+this.std.longitude;
    
    
  }

  calculate(){
    this.nativeStorage.getItem('std').then((data)=>{
      this.std ={
        appraisal: data.appraisal,
        lattitude: data.lattitude,
        longitude: data.longitude,
        name: data.name
      };
      
      this.dataReady = true;
      
    },(error) => {
      console.log(error);
    })
    var rk = 6373;
    var dlon1 = this.std.longitude * Math.PI/180;
    var dlon2 = (this.lon2 * Math.PI)/180;
    var dlat1 = this.std.lattitude * Math.PI/180;
    var dlat2 = (this.lat2 * Math.PI)/180;
    this.dlon =  dlon2 - dlon1;
    this.dlat = dlat2 - dlat1;

    this.a = Math.pow(Math.sin(this.dlat/2),2) + Math.cos(this.lat1) * Math.cos(this.lat2) * Math.pow(Math.sin(this.dlon/2),2);
    this.c = 2 * Math.atan2(Math.sqrt(this.a),Math.sqrt(1-this.a));
    this.dk = this.c *  rk;
    this.km = Math.max( this.dk * 1000/1000).toFixed(3);
    

    
    
    
  }

 
}
