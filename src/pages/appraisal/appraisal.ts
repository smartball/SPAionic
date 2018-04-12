import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, Platform } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { MapDirectionPage } from '../map-direction/map-direction';
import { RestProvider } from '../../providers/rest/rest';
import { AuthProvider } from '../../providers/auth/auth';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { CurrencyPipe } from '@angular/common';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the AppraisalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appraisal',
  templateUrl: 'appraisal.html',
  providers: [LaunchNavigator, CurrencyPipe, CallNumber]
})
export class AppraisalPage {
  data:any;
  responseData : any;
  dataSend: any;
  product_img:any;
  product:any;
  destination:any;
  start:string;
  price_app : any;
  price: any;
  dpm:any;
  phone: any;
  nearBy: any;
  load: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public view: ViewController,
              public modalCtrl: ModalController,
              public nativeStorage: NativeStorage,
              public authprovider: AuthProvider,
              public platform: Platform,
              private launchNavigator: LaunchNavigator,
              public loadingCtrl: LoadingController,
              private currencyPipe: CurrencyPipe,
              private callNumber: CallNumber,
              public restProvider: RestProvider) {
        this.product = JSON.parse(localStorage.getItem('itemData'));
        this.product_img = JSON.parse(localStorage.getItem('imgData'));
        var near = JSON.parse(localStorage.getItem('near'));
        this.start = "";
        var count = Object.keys(near).length;
       
        console.log(count);
        if(count == 2){
          this.load = 1;
          this.nearBy = JSON.parse(localStorage.getItem('near'));
          console.log('sdad');
        }
        
        else if(count > 2){
          this.load = 2;
          this.nearBy = JSON.parse(localStorage.getItem('near'));
        }
        else{
          this.load = 2;
          this.nearBy = JSON.parse(localStorage.getItem('near'));
        }

        var ph = this.product.PHONE;
        this.phone = ph.slice(0,3)+"-"+ph.slice(3,6)+"-"+ph.slice(6);
  }
  event(product){
    this.destination = product.LAT + ',' + product.LNG;
    console.log(this.destination);
    let options: LaunchNavigatorOptions = {
      start: this.start,
      //app: LaunchNavigator.APP.GOOGLE_MAPS
    };
    
    this.launchNavigator.navigate(this.destination, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
  call(){
    console.log("hi");
    this.callNumber.callNumber(this.product.PHONE, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}
