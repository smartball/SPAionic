import { Component, ViewChild } from '@angular/core';
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
  data: any;
  responseData: any;
  dataSend: any;
  product_img: any;
  product: any;
  destination: any;
  start: string;
  price_app: any;
  price: any;
  dpm: any;
  phone: any;
  nearBy: any;
  load: any;
  loading: any;
  success = 0;
  near: any;
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

    const getId = this.navParams.get('id')
    const getLat = this.navParams.get('lat')
    const getLng = this.navParams.get('lng')
    const dataToSend = { "id": getId }
    const dataTocoordinate = { "lat": getLat, "lng": getLng }
    
    this.presentLoading()
    this.authprovider.postData(dataToSend, 'getProduct').then((result) => {
      this.product = result;
      if (this.product) {
        console.log(this.product.PROVINCE_NAME)
        const ph = this.product.PHONE;
        this.phone = ph.slice(0, 3) + "-" + ph.slice(3, 6) + "-" + ph.slice(6);
        // console.log(JSON.stringify(this.product));
      }
      else {
        alert("");
      }
    }, (err) => {
      // Error log
    });
    this.authprovider.postData(dataToSend, 'getImg').then((result) => {
      this.product_img = result;
      if (this.product_img) {
        this.loading.dismiss()
        this.success = 1
        // console.log(JSON.stringify(this.product_img));
      }
      else {
        alert("");
      }
    }, (err) => {
      // Error log
    });
    this.authprovider.postData(dataTocoordinate, 'nearBy').then((result) => {
      this.near = result;
      if (this.near) {
        const countNearBy = this.near.length
        if (countNearBy === undefined) {
          this.load = 1;
          this.nearBy = this.near
        }

        else if (countNearBy > 2) {
          this.load = 2;
          this.nearBy = this.near
        }
        else {
          this.load = 2;
          this.nearBy = this.near
        }
        
        // this.nearSend = JSON.stringify(this.responseData);
        // console.log(JSON.stringify(this.near));
        // localStorage.setItem('near', this.nearSend);
        // this.navCtrl.push(AppraisalPage);
      }
      else {

        alert("");
      }
    }, (err) => {
      // Error log
    });

    // this.product = JSON.parse(localStorage.getItem('itemData'));
    // this.product_img = JSON.parse(localStorage.getItem('imgData'));
    // var near = JSON.parse(localStorage.getItem('near'));
    // this.start = "";
    // var count = Object.keys(this.near).length;

    // console.log(count);
    // if(count == 2){
    //   this.load = 1;
    //   this.nearBy = JSON.parse(localStorage.getItem('near'));
    //   console.log('sdad');
    // }

    // else if(count > 2){
    //   this.load = 2;
    //   this.nearBy = JSON.parse(localStorage.getItem('near'));
    // }
    // else{
    //   this.load = 2;
    //   this.nearBy = JSON.parse(localStorage.getItem('near'));
    // }

    // var ph = this.product.PHONE;
    // this.phone = ph.slice(0,3)+"-"+ph.slice(3,6)+"-"+ph.slice(6);
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({

    });
    this.loading.present();
  }
  event(product) {
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
  call() {
    console.log("hi");
    this.callNumber.callNumber(this.product.PHONE, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
