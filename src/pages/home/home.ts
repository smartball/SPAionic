import {UserPage} from '../user/user';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams,ToastController} from 'ionic-angular';
import { App, ModalController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { MapDirectionPage } from '../map-direction/map-direction';
import { AngularFireAuth } from 'angularfire2/auth';
import { EstimatePage } from '../estimate/estimate';
import { ListPage } from '../../pages/list/list';

import * as $ from 'jquery';

declare var google:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('map') mapRef : ElementRef;
	map:any;
  marker:any;
  typesearch:any;
  place:any;
  textSearch:string;
  switch: string = "map";
  search: boolean = false;
  userReady: boolean = false;
  user: any;
  std:any;
  constructor(
    public navCtrl: NavController,
    public app: App, 
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public nativeStorage: NativeStorage,
    public toast: ToastController,
    private modalCtrl: ModalController) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad(){
    this.typesearch = "1";
    this.place = [{
      ord:'1001',
      title:'สวนอาหาร บุญนิยม',
      name:'บุญนิยม',
      appraisal:'20000',
      measure:'3103',
      address:'บุญนิยม',
      type:'ร้านอาหาร',
      lat:'15.228885',
      lng:'104.864746'
    },
    {
      ord:'1002',
      title:'จำปลา',
      name:'บุญนิยม',
      appraisal:'10000',
      measure:'99',
      address:'บุญนิยม',
      type:'ร้านอาหาร',
      lat:'15.228671',
      lng:'104.853226'
    },
    {
      ord:'1003',
      title:'หมูยอดาวทอง',
      name:'คุณกันยา',
      appraisal:'30000',
      measure:'60',
      nearroad: '',
      well: '',
      height_road: '',
      
      type:'ร้านอาหาร',
      lat:'14.1655573774964',
      lng:'100.7000488394'
    },
    {
      ord:'1004',
      title:'หมูยอดาวทอง',
      name:'คุณกันยา',
      appraisal:'1650',
      measure:'11132',
      address:'หมูยอดาวทอง 173/2-3 ถ.ศรีณรงค์ ต.ในเมือง อ.เมือง จ.อุบลราชธานี 34000 บริหารงานโดย คุณกันยา ดาวทองวรกิจ โทร 045-262344 จำหน่าย หมูยอ ใส้กรอก แหนมซี่โครง แหนมใบมะยม และของฝาก',
      type:'ร้านอาหาร',
      lat:'13.720170',
      lng:'100.772072'
    }];
  	this.showMap();
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
    this.marker = new google.maps.Marker({position:location,icon: 'assets/imgs/pinx.png',map:this.map});
    
  }

  changePosition(_data){
    
    this.marker.setPosition( new google.maps.LatLng( _data.lat,_data.lng ) );
    this.map.setCenter(new google.maps.LatLng( _data.lat,_data.lng ));
    
    this.textSearch = _data.ord;
    var infoWindow = new google.maps.InfoWindow({content: '<div id="iw-container">' +
    '<div class="iw-title"><center>Smart Property Assess</center></div>' +
    '<div class="iw-content">' +
      '<div class="iw-subTitle">History</div>' +
      '<img src="assets/imgs/logo-real.png" alt="Porcelain Factory of Vista Alegre" height="83" width="83">' +
      '<p>ราคาประเมินกรมที่ดิน : <br><font color="blue">'+_data.appraisal+' บาท</font></p>' +
      '<p>พิกัดที่ดิน : <br><font color="blue">'+_data.lat+','+_data.lng+' บาท</font></p>' +
      '<div class="iw-subTitle">Contacts</div>' +
      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
    '</div>' +
    '<div class="iw-bottom-gradient"></div>' +
    '<div class="row" style="background-color:orange;">'+
    '<button id = "myid" style="background-color:green;color:white;width:140px;height:30px;font-size:16px;">ประเมินราคา</button>'+
    '<button id = "closeid" style="background-color:orange;color:white;width:140px;height:30px;font-size:16px;border-radius: 0px 0px 10px 0px;">ปิด</button>'+
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
                lattitude: _data.lat,
                longitude: _data.lng,
                appraisal: _data.appraisal,
                name: _data.name,
                measure: _data.measure,
                nearroad: _data.nearroad,
                well: _data.well,
                height_road: _data.height_road
              }).then(()=>{
                this.navCtrl.setRoot(MapDirectionPage);
              },(error) =>{
                console.log(error);
              })
           });
          });      
    infoWindow.open(this.map, this.marker);
    this.marker.addListener('click', function() {
      infoWindow.open(this.map, this.marker);
    });
    google.maps.event.addListener(infoWindow, 'domready', function() {
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

  viewList(){
    let ListModal = this.modalCtrl.create(ListPage, { place: this.place });
     ListModal.present();
  }

  goSearch(){
    if(this.textSearch != "" && this.textSearch != undefined){
      if(this.searchStringInArray(this.textSearch,this.place) == '-1'){
        alert('ไม่พบสถานที่ในฐานข้อมูล');
      }else{
        this.changePosition(this.searchStringInArray(this.textSearch,this.place));
        this.search = false;
        
      }
    }else{
      alert('กรุณากรอกข้อมูล');
    }
  }
  searchStringInArray(str, strArray){ 
    
    for(var i=0; i<strArray.length; i++){
      if(strArray[i].ord.match(str) == strArray[i].ord){
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
        duration: 3000
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
