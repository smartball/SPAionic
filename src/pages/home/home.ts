import {UserPage} from '../user/user';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NavController, NavParams,ToastController ,LoadingController} from 'ionic-angular';
import { App } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { RestProvider } from '../../providers/rest/rest';

import { MapDirectionPage } from '../map-direction/map-direction';
import { AngularFireAuth } from 'angularfire2/auth';
import { EstimatePage } from '../estimate/estimate';

import * as $ from 'jquery';
import { IonDigitKeyboardCmp } from '../../components/ion-digit-keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../../providers/auth/auth';
declare var google:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()

export class HomePage {
  @ViewChild(IonDigitKeyboardCmp) keyboard;
  
  
  @ViewChild('map') mapRef : ElementRef;
  province_id:any;
  amphur_code:any;
	map:any;
  marker:any;
  typesearch:any;
  place:any;
  textSearch:string = '';
  switch: string = "map";
  search: boolean = false;
  userReady: boolean = false;
  user: any;
  data: any;
  std:any;
  items_prov: any;
  amphur: any;
  selectOptions: any;
  loading:any;
  dataSend: any;
  getPolyline: any;
  polylineData: any;
  public log_hr;
  public itemChecked_prov;
  public log_amphur;
  public userDetails: any;
  constructor(
    public navCtrl: NavController,
    public app: App, 
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public nativeStorage: NativeStorage,
    public toast: ToastController,
    public restProvider: RestProvider,
    public http: HttpClient,
    public authprovider: AuthProvider,
    private statusBar: StatusBar,
    public loadingCtrl: LoadingController) {
    this.navCtrl = navCtrl;
    this.presentLoading();
    this.restProvider.getProvince()
    .then(prov =>{
      this.items_prov = prov;
      this.loading.dismiss();
    });
    this.statusBar.hide();
  }
    ionViewDidLoad(){
    this.typesearch = "1";
  	this.showMap();
  }
  select(item){
    this.dataSend = {"province": item.PROVINCE_ID}
    this.log_hr = item.PROVINCE_ID;
    this.presentLoading();
    this.authprovider.postData(this.dataSend,'getAmphur').then((result) => {
      this.amphur = result;
      this.loading.dismiss();
    }, (err) => {
      // Error log
    });
    this.province_id = this.log_hr
    return this.province_id;
  }
  selectAmphur(amphur){
    this.log_amphur = amphur.AMPHUR_CODE;
    this.amphur_code = this.log_amphur;
    return this.amphur_code;
  }
  
  presentLoading() {
           this.loading = this.loadingCtrl.create({
               content: 'Please wait...'
           });
           this.loading.present();
       }

  toggleSearch() {
    if (this.search) {
      this.search = false;
    } else {
      this.search = true;
    }
  }
  resizeMap() {
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 200);
  }
  
  showMap(){
  	const location = new google.maps.LatLng(0,0);
  	const options = {
  		center: {lat: 13.75633, lng: 100.50177},
      zoom:10,
      disableDefaultUI: true,
  		streetViewControl:false,
  		mapTypeId:'roadmap'//roadmap , satellite , hybrid , terrain
  	};
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.marker = new google.maps.Marker({position:location,
                                          //icon: 'assets/imgs/pinx.png',
                                          animation: google.maps.Animation.DROP,
                                          map:this.map});
    
  }
  showMapSatellite(_data){
  	const location = new google.maps.LatLng(0,0);
  	const options = {
  		center: {lat: 13.75633, lng: 100.50177},
      zoom:10,
      disableDefaultUI: true,
  		streetViewControl:false,
  		mapTypeId: 'satellite'//roadmap , satellite , hybrid , terrain
  	};
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    var polylinePlanCoordinates  = [];
    var polyline_data = _data;
    

    for (var i=0;i< polyline_data.length;i++ ){
      //console.log(JSON.stringify(polyline_data[i].LAT));
      polylinePlanCoordinates.push(new google.maps.LatLng(polyline_data[i].LAT, polyline_data[i].LNG));
    }

    var flightPath = new google.maps.Polyline({
      path: polylinePlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(this.map);
    this.marker = new google.maps.Marker({position:location,
                                          //icon: 'assets/imgs/pinx.png',
                                          animation: google.maps.Animation.DROP,
                                          map:this.map});
    
  }
  toggleBounce() {
    if (this.marker.getAnimation() !== null) {
      this.marker.setAnimation(null);
    } else {
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  changePosition(_data){
    
    this.marker.setPosition( new google.maps.LatLng( _data.lat,_data.lng ) );
    this.map.setCenter(new google.maps.LatLng( _data.lat,_data.lng ));
    this.map.setZoom(22);
    
    this.textSearch = _data.deed_number;
    
    var infoWindow = new google.maps.InfoWindow({content: '<div id="iw-container">' +
    '<div class="iw-title"><center>Smart Property Assess</center></div>' +
    '<div class="iw-content">' +
      
      
      '<p>ราคาประเมินกรมที่ดิน : <font color="blue">'+_data.cost_appraisal.toLocaleString()+' บาท</font></p>' +
      '<p>ขนาดที่ดิน : <font color="blue">'+_data.size +' ตารางวา </font></p>' +
      '<p>พิกัดที่ดิน : <font color="blue">'+_data.lat.toFixed(6)+','+_data.lng+' </font></p>' +
      
    '</div>' +
    '<div class="iw-bottom-gradient"></div>' +
    '<div class="row" style="background-color:orange;">'+
    '<button id = "myid" style="background-color:green;color:white;width:140px;height:30px;font-size:16px;">ประเมินราคา</button>'+
    '<button id = "closeid" style="background-color:orange;color:white;width:140px;height:30px;font-size:16px;bider-radius: 0px 0px 10px 0px;">ปิด</button>'+
    '</div>'+
    '</div>',
          maxWidth: 350});
          google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
            document.getElementById('closeid').addEventListener('click', () => {
              infoWindow.close(this.map, this.marker);
            });
            document.getElementById('myid').addEventListener('click', () => {
              this.nativeStorage.setItem('std',{
                lattitude: _data.lat.toFixed(6),
                longitude: _data.lng.toFixed(6),
                appraisal: _data.cost_appraisal,
                size: _data.size,
                province_id: _data.province_id,
                amphur_code: _data.amphur_code,
                deed_number: _data.deed_number,
              }).then(()=>{
                
                var tes = parseFloat(_data.lat).toFixed(6);
                let loading = this.loadingCtrl.create({
                  
                  content: 'กำลังประเมินราคา'
                });
              
                loading.present();
                
                setTimeout(() => {
                  this.navCtrl.push(MapDirectionPage)
                }, 1000);
              
                setTimeout(() => {
                  loading.dismiss();
                }, 1000);
              },(error) =>{
                console.log(error);
              })
           });
          });    
    infoWindow.open(this.map, this.marker);
    this.marker.addListener('click', this.toggleBounce(), () => {
      //infoWindow.open(this.map, this.marker);
    });
    google.maps.event.addListener(infoWindow, 'domready', () => {
    var iwOuter = $('.gm-style-iw');
    var iwBackground = iwOuter.prev();
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s});
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s});
    iwBackground.children(':nth-child(3)').find('div').children().css({display: 'none'});
    var iwCloseBtn = iwOuter.next();
    iwCloseBtn.css({display: 'none'});
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
    });
  }

  polyLine(){
    return new Promise(resolve => {
      setTimeout(() => {
        this.getPolyline = {"province":this.province_id,
                            "amphur":this.amphur_code,
                            "deed_number":this.textSearch};
        this.authprovider.postData(this.getPolyline,'getPolyline').then((result) => {
        this.polylineData = result;
        this.showMapSatellite(this.polylineData);
        }, (err) => {
        // Error log
        });
      }, 100);
    });
  }
  async btnSearch(){
    
    if(this.textSearch != "" && this.textSearch != undefined)
    {
      this.presentLoading();
      await this.restProvider.getMarker(this.textSearch,this.province_id, this.amphur_code)
      .then(data => {
        this.place = data;
        
        if(this.searchStringInArray(this.place) == '-1'){
          alert('ไม่พบสถานที่ในฐานข้อมูล');
          this.loading.dismiss();
        }else{
          this.getPolyline = {"province":this.province_id,
                              "amphur":this.amphur_code,
                              "deed_number":this.textSearch};
          this.authprovider.postData(this.getPolyline,'getPolyline').then(async (result) => {
          this.polylineData = result;
          this.showMapSatellite(this.polylineData);
          await this.changePosition(this.searchStringInArray(this.place));
          this.loading.dismiss();
          this.search = false;
          }, (err) => {
          // Error log
          });
          
        }
      });
    }else{
      alert('กรุณากรอกข้อมูล');
    }
    
  }
  
  searchStringInArray(strArray){ 
    
    for(var i=0; i<strArray.length; i++){
      if(strArray[i].deed_number){
        return strArray[i];
      }
    }
    return -1;
  }

  
  nextProfile(){
    this.navCtrl.setRoot(UserPage);
  }

  openEs(){
    this.navCtrl.setRoot(EstimatePage);
  }

}
