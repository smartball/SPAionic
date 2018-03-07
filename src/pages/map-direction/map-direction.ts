import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, Platform} from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { EstimatePage } from '../estimate/estimate';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { RestProvider } from '../../providers/rest/rest';
declare var google;
/**
 * Generated class for the MapDirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-direction',
  templateUrl: 'map-direction.html',
})
export class MapDirectionPage {
  pot: any;
  
    @ViewChild('map') mapRef : ElementRef;
    size:any;
    appraisal:any;
    lat:any;
    lon:any;
    a:any;
    c:any;
    dk:any;
    km:any;
    id_13:any;
    type_size:any;
    result_distance:any;
    getposition_lat:any;
    getposition_lng:any;
    pos_lat:any;
    pos_lng:any;
    data_well:any;
    data_road:any;
    data_shape:any;
    data_width:any;
    well:any;
    road:any;
    shape:any;
    width:any;
    items_well:any;
    items_shape:any;
    std:any;
    name: DoubleRange;
    amphur_code:any;
    province_id: any;
    map:any;
    dataReady: boolean = false;
    currentTab = 0;
    loading:any;
    public itemChecked_well;
    public itemChecked_height_road;
    public itemChecked_shape;
    public itemChecked_width;
    public lattitude:string;
    public longitude:string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams , 
              public plt : Platform, 
              public nativeStorage: NativeStorage,
              public loadingCtrl: LoadingController,
              public restProvider: RestProvider) {
    this.plt.ready().then(() =>{
       
      this.showMap();
    });
   
  }
 

  

  showMap(){
    var markerArray = [];
    //declear>>>
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    //declear<<<
    const options = {
       disableDefaultUI: true,
       zoom: 13,
       center: {lat: 40.771, lng: -73.974}
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    directionsDisplay.setMap(this.map);
    var stepDisplay = new google.maps.InfoWindow;
    this.calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, this.map);
  }
  calculateAndDisplayRoute(directionsDisplay, directionsService,
    markerArray, stepDisplay, map) {
      for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(null);
      }
      this.nativeStorage.getItem('std').then((data)=>{
        this.std ={
          appraisal: data.appraisal,
          lattitude: data.lattitude,
          longitude: data.longitude,
          size: data.size,
          province_id: data.province_id,
          amphur_code: data.amphur_code
        };
        this.appraisal = this.std.appraisal;
        this.size = this.std.size;
        this.amphur_code = this.std.amphur_code;
        this.province_id = this.std.province_id;
        this.pot = this.std.lattitude + ',' + this.std.longitude;
        this.lat = this.std.lattitude;
        this.lon = this.std.longitude;
        this.dataReady = true;
      },(error) => {
        console.log("error");
      })
      
      console.log(this.lat);
      
    directionsService.route({
      origin: this.pot,
      destination: 'Bangkok',
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        document.getElementById('warnings-panel').innerHTML =
        '<b>' + response.routes[0].warnings + '</b>';
        directionsDisplay.setDirections(response);
        var myRoute = response.routes[0].legs[0];
        this.showSteps(response, markerArray, stepDisplay, map);
        
      } else {
       
      }
    });
    if(this.size > 100)
    {
      this.type_size = 10
      return this.type_size;
    }
    else{
      this.type_size = 9
      return this.type_size;
    }
  }
  showSteps(directionResult, markerArray, stepDisplay, map) {
    var myRoute = directionResult.routes[0].legs[0];
    var j = [];
    var k = 0 ; 
    var l = 0;
    for (var i = 0; i < myRoute.steps.length; i++) {
      var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
      marker.setMap(map);
      var positiontext = myRoute.steps[i].instructions; // เก็บคำอธิบายการเดินทางแต่ละ step
      var mainroad = positiontext.search("เข้าสู่"); //find step key word "เข้าสู่"
      if (mainroad != -1 && i == 0)
      {
       l = i;
       l = ++l;
       j[k] = l;
       k++;
     
      }
    else if (mainroad != -1 && i != 0)
      {
       j[k] = i;
       k++;
      }
      
    }
    marker.setPosition(myRoute.steps[j[0]].start_location);
    this.getposition_lat = marker.getPosition().lat();
    this.getposition_lng = marker.getPosition().lng();
    
    this.calDistance(this.getposition_lat,this.getposition_lng)
    this.attachInstructionText(
      stepDisplay, marker, myRoute.steps[j[0]].instructions, this.getposition_lat, this.getposition_lng, map);
  }

  attachInstructionText(stepDisplay, marker, text, getposition_lat, getposition_lng, map) {
    
    google.maps.event.addListener(marker, 'click', () => {
      stepDisplay.setContent(text+getposition_lat+','+getposition_lng);
      stepDisplay.open(map, marker);
    });
  }
   calDistance(position_lat,position_lng){
    this.pos_lat = position_lat;
    this.pos_lng = position_lng;
    console.log(this.pos_lat,"x1");
    console.log(this.pos_lng,"x2");
    var rk = 6373;
    var dlon1 = this.lon * Math.PI/180;
    var dlon2 = (this.pos_lng * Math.PI)/180;
    var dlat1 = this.lat * Math.PI/180;
    var dlat2 = (this.pos_lat * Math.PI)/180;
    var dlon =  dlon2 - dlon1;
    var dlat = dlat2 - dlat1;
    this.a = Math.pow(Math.sin(dlat/2),2) + Math.cos(this.lat) * Math.cos(this.pos_lat) * Math.pow(Math.sin(dlon/2),2);
    this.c = 2 * Math.atan2(Math.sqrt(this.a),Math.sqrt(1-this.a));
    this.dk = this.c *  rk;
    this.km = Math.max(this.dk * 1000/1000).toFixed(3);
    this.result_distance = this.km;
    console.log(this.result_distance,"re");
    if(this.result_distance < 0.5)
    {
      this.id_13 = 13
      return this.id_13;
    }
    else
    {
      this.id_13 = 14;
      return this.id_13;
    }
    
   }
   clickservice(){
     this.nativeStorage.setItem('data_service',{
       lat: this.lat,
       lon: this.lon,
       id: this.id_13,
       well: this.well,
       road: this.road,
       shape: this.shape,
       width: this.width,
       size: this.size,
       appraisal: this.appraisal,
       distance: this.result_distance,
       type_size: this.type_size,
       province_id: this.province_id,
       amphur_code: this.amphur_code
     }).then(()=>{
       //console.log(this.type_size);
       /*console.log(this.well);
       console.log(this.road);
       console.log(this.shape);
       console.log(this.width);
       console.log(this.size);*/
       let loading = this.loadingCtrl.create({
        
        content: 'กำลังประเมินราคา'
      });
    
      loading.present();
      
      setTimeout(() => {
        this.navCtrl.setRoot(EstimatePage);
      }, 1000);
    
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
       
     },(error)=>{
       console.log('พัง')
     })
   }
   ionViewWillEnter(){
    
    //console.log(this.result_distance,"result");
    console.log(this.lat,"d1");
    //console.log(this.pos_lat,"d2");
    
    this.showMap();
    this.presentLoading();
    this.restProvider.getWell(this.province_id,this.amphur_code)
    .then(well =>{
      this.data_well = well;
      
      console.log(this.data_well);
    });
    this.restProvider.getRoad(this.province_id,this.amphur_code)
    .then(road =>{
      this.data_road = road;
      
      console.log(this.data_road);
    });
    this.restProvider.getShape(this.province_id,this.amphur_code)
    .then(shape =>{
      this.data_shape = shape;
      
      console.log(this.data_shape);
    });
    this.restProvider.getWidth(this.province_id,this.amphur_code)
    .then(width =>{
      this.data_width = width;
      this.loading.dismiss();
      console.log(this.data_width);
    });
    
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    this.loading.present();
}
  select(item) {
    this.well = item.id;
    return this.well;
  }
  select_hr(item_hr){
  this.road = item_hr.id;
  console.log(this.road);
  return this.road;
  }
  select_sp(item_sp) {
    this.shape = item_sp.id;
    return this.shape;
  }
  select_wd(item_wd) {
    this.width = item_wd.id;
    return this.width;
  }
  
}