import {UserPage} from '../user/user';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NavController, NavParams,ToastController ,LoadingController} from 'ionic-angular';
import { App, ModalController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { RestProvider } from '../../providers/rest/rest';

import { MapDirectionPage } from '../map-direction/map-direction';
import { AngularFireAuth } from 'angularfire2/auth';
import { EstimatePage } from '../estimate/estimate';
import { ListPage } from '../../pages/list/list';

import * as $ from 'jquery';
import * as jQuery from 'jquery';
import { AppraisalPage } from '../appraisal/appraisal';
import { Select } from 'ionic-angular/components/select/select';
import { IonDigitKeyboardCmp, IonDigitKeyboardOptions } from '../../components/ion-digit-keyboard';
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
  loading:any
  
  public log_hr;
  public itemChecked_prov;
  public log_amphur;
  constructor(
    public navCtrl: NavController,
    public app: App, 
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public nativeStorage: NativeStorage,
    public toast: ToastController,
    private modalCtrl: ModalController,
    public restProvider: RestProvider,
    public http: HttpClient,
    public loadingCtrl: LoadingController) {
    this.navCtrl = navCtrl;
    this.presentLoading();
    this.restProvider.getProvince()
    .then(prov =>{
      this.items_prov = prov;
      this.loading.dismiss();
    });
    
    
  }
  

    ionViewDidLoad(){
    this.typesearch = "1";
  	this.showMap();
  }
  select(item){
    
    this.log_hr = item.province_id;
    this.presentLoading();
    //this.restProvider.addUser(this.log_hr);
    //this.restProvider.getAmphur(this.log_hr);
    this.restProvider.getAmphur(this.log_hr)
    .then(amp =>{
      this.amphur = amp;
      this.loading.dismiss();
    });
    this.province_id = this.log_hr
    return this.province_id;
  }
  selectAmphur(amphur){
    this.log_amphur = amphur.amphur_code;
    
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
  	const location = new google.maps.LatLng(51.507351,-0.127758);
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
    this.map.setZoom(18);
    
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
          
          var sendLatLng = _data.lat+','+_data.lng;
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
                amphur_code: _data.amphur_code
              }).then(()=>{
                var tes = parseFloat(_data.lat).toFixed(6);
                console.log(tes);
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
      // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({display: 'none'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();
    iwCloseBtn.css({display: 'none'});
    // Apply the desired effect to the close button

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
    });
  }
  btnSearch(){
    
    if(this.textSearch != "" && this.textSearch != undefined)
    {
      this.presentLoading();
      this.restProvider.getMarker(this.textSearch,this.province_id, this.amphur_code)
      .then(data => {
        this.place = data;
        this.loading.dismiss();
        if(this.searchStringInArray(this.place) == '-1'){
          alert('ไม่พบสถานที่ในฐานข้อมูล');
        }else{
          this.changePosition(this.searchStringInArray(this.place));
          this.search = false;
        }
      });
    }else{
      alert('กรุณากรอกข้อมูล');
    }
    
  }
  
  searchStringInArray(strArray){ 
    
    for(var i=0; i<strArray.length; i++){
      if(strArray[i].id){
        return strArray[i];
      }
    }
    return -1;
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data =>{
      if(data.email && data.uid){
      this.toast.create({
        message: 'Welcome to Smart Property Assess: '+ data.email,
        duration: 1000
      }).present();
    }else{
      
    }
    });
    this.nativeStorage.getItem('user')
    .then((data) => {
      this.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture,
        email: data.email
      };
      if(data.email && data.uid){
        this.toast.create({
          message: 'Welcome to Smart Property Assess: '+ data.name,
          duration: 3000
        }).present();
      }
      this.userReady = true;
    }, (error) => {
      console.log(error);
    });
  }
  
  nextProfile(){
    this.navCtrl.setRoot(UserPage);
  }

  openEs(){
    this.navCtrl.setRoot(EstimatePage);
  }

}
