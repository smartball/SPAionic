import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RestProvider } from '../../providers/rest/rest';
declare var google: any;
/**
 * Generated class for the NearByPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-near-by',
  templateUrl: 'near-by.html',
})
export class NearByPage {
  @ViewChild('map') mapRef: ElementRef;
  near: any;
  nearBy: any;
  load: any;
  map: any;
  loading: any;
  success: any;
  itemType: any;
  getLat: any;
  getLng: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    public authprovider: AuthProvider, ) {
    this.presentLoading();
    this.restProvider.getType()
      .then(type => {
        this.itemType = type;
        // console.log(JSON.stringify(this.itemType));
      });
    this.getLat = this.navParams.get('lat')
    this.getLng = this.navParams.get('lng')
    const dataTocoordinate = { "lat": this.getLat, "lng": this.getLng, "type": 'ซุปเปอร์มาร์เก็ต' }
    this.authprovider.postData(dataTocoordinate, 'nearBy').then((result) => {
      this.near = result;
      this.loading.dismiss()
      this.success = 1
      this.showMap(this.near, dataTocoordinate);
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
  showMap(data, posistionLand) {
    var infowindow = new google.maps.InfoWindow();
    const location = new google.maps.LatLng(posistionLand.lat, posistionLand.lng);
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
    for (i = 0; i < data.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(data[i].LAT, data[i].LNG),
        map: this.map
      });

      google.maps.event.addListener(marker, 'click', ((marker, i) => {
        return () => {
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
    // var infowindow = new google.maps.InfoWindow();
    // const location = new google.maps.LatLng(posistionLand.lat, posistionLand.lng);
    // const options = {
    //   center: location,
    //   zoom: 13.3,
    //   mapTypeControl: false,
    //   panControl: false,
    //   scaleControl: false,
    //   streetViewControl: false,
    //   // draggable: false,
    //   mapTypeId: 'roadmap'//roadmap , satellite , hybrid , terrain
    // };

    // var marker, i;
    // this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    // for (i = 0; i < data.length; i++) {
    //   marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(data[i].LAT, data[i].LNG),
    //     map: this.map
    //   });

    //   google.maps.event.addListener(marker, 'click', ((marker, i) => {
    //     return () => {
    //       infowindow.setContent(data[i].NAME);
    //       infowindow.open(this.map, marker);
    //     }
    //   })(marker, i));
    // }

    // var cityCircle = new google.maps.Circle({
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: '#FF0000',
    //   fillOpacity: 0.05,
    //   map: this.map,
    //   center: location,
    //   radius: 2000
    // });
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({

    });
    this.loading.present();
  }
}
