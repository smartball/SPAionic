import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, Platform } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';
import { MapDirectionPage } from '../map-direction/map-direction';
import { RestProvider } from '../../providers/rest/rest';
import { AuthProvider } from '../../providers/auth/auth';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { CurrencyPipe } from '@angular/common';
import { CallNumber } from '@ionic-native/call-number';
declare var google: any;
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
  @ViewChild('map') mapRef: ElementRef;
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
  map: any;
  marker: any;
  coordinate = [];
  getLat:any;
  getLng:any;
  itemType:any;
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
    this.restProvider.getType()
      .then(type => {
        this.itemType = type;
        // console.log(JSON.stringify(this.itemType));
      });
    const getId = this.navParams.get('id')
    this.getLat = this.navParams.get('lat')
    this.getLng = this.navParams.get('lng')
    const dataToSend = { "id": getId }
    const dataTocoordinate = { "lat": this.getLat, "lng": this.getLng, "type": 'ซุปเปอร์มาร์เก็ต' }

    this.presentLoading()
    this.authprovider.postData(dataToSend, 'getProduct').then((result) => {
      this.product = result;
      if (this.product) {
        console.log(this.product.PROVINCE_NAME)
        const ph = this.product.PHONE;
        this.phone = ph.slice(0, 3) + "-" + ph.slice(3, 6) + "-" + ph.slice(6);
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
      }
      else {
        alert("");
      }
    }, (err) => {
      // Error log
    });
    this.authprovider.postData(dataTocoordinate, 'nearBy').then((result) => {
      this.near = result;
      this.showMap(this.near,dataTocoordinate);
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

      }
      else {

        alert("");
      }
    }, (err) => {
      // Error log
    });

  }
  select(item) {
    this.presentLoading();
    console.log(item.TYPE, this.getLat);
    let coordinate = { "lat": this.getLat, "lng": this.getLng, "type": item.TYPE }
    this.setMap(coordinate)
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({

    });
    this.loading.present();
  }
  ionViewDidLoad() {
    

  }
  showMap(data,posistionLand) {
    var infowindow = new google.maps.InfoWindow();
    const location = new google.maps.LatLng(posistionLand.lat, posistionLand.lng);
    const options = {
      center: location,
      zoom: 13.7,
      mapTypeControl: false,
      panControl: false,
      scaleControl: false,
      streetViewControl: false,
      // draggable: false,
      mapTypeId: 'roadmap'//roadmap , satellite , hybrid , terrain
    };
    
    var marker, i;
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    for (i = 0; i < data.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(data[i].LAT, data[i].LNG),
        map: this.map
      });
      
      google.maps.event.addListener(marker, 'click', ((marker, i) =>{
        return ()=> {
          infowindow.setContent(data[i].NAME);
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    }
    
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.05,
      map: this.map,
      center: location,
      radius: 2000
    });
  }
  setMap(data) {
    console.log(JSON.stringify(data));
    this.authprovider.postData(data, 'nearBy').then((result) => {
      this.near = result;
      console.log(JSON.stringify(this.near))
      this.loading.dismiss()
      var infowindow = new google.maps.InfoWindow();
      const location = new google.maps.LatLng(data.lat, data.lng);
      const options = {
        center: location,
        zoom: 13.3,
        mapTypeControl: false,
        panControl: false,
        scaleControl: false,
        streetViewControl: false,
        // draggable: false,
        mapTypeId: 'roadmap'//roadmap , satellite , hybrid , terrain
      };

      var marker, i;
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      for (i = 0; i < this.near.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.near[i].LAT, this.near[i].LNG),
          map: this.map
        });

        google.maps.event.addListener(marker, 'click', ((marker, i) => {
          return () => {
            infowindow.setContent(this.near[i].NAME);
            infowindow.open(this.map, marker);
          }
        })(marker, i));
      }

      var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.05,
        map: this.map,
        center: location,
        radius: 2000
      });
      this.success = 1
      // this.showMap(this.near, dataTocoordinate);
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

      }
      else {

        alert("");
      }
    }, (err) => {
      // Error log
    });

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
