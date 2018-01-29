import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, Platform} from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { EstimatePage } from '../estimate/estimate';
import { NativeStorage } from '@ionic-native/native-storage';

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
  measure_scale: any;
  estimate_scale: any;
  appraisal_scale: any;
  Sum_scale: any;
  Sum: any;
  atest: any;
  Sum_estimate: any;
  dtest: any;
  ctest: any;
  cx4: any;
  cx3: any;
  cx2: any;
  cx1: any;
  bxtest: any;
  btest: any;
  bx7: any;
  bx6: any;
  bx5: any;
  bx4: any;
  bx3: any;
  bx2: any;
  bx1: any;
  ax4: any;
  ax3: any;
  ax2: any;
  ax1: any;

    @ViewChild('map') mapRef : ElementRef;
    a:any;
    c:any;
    dk:any;
    km:any;
    dlon:any;
    dlat:any;
    dlon1:any;
    dlon2:any;
    name: DoubleRange;
    start:string;
    end:string;
    map:any;
    std:any;
    test:any;
    xtest:any;
    etest:any;
    dataReady: boolean = false;
    public lon1:any = 100.772072;
    public lon2:any = 100.77227210000001;
    public lat2:any = 13.7217572;
    public lat1:any = 13.7201804;
  constructor(public navCtrl: NavController, public navParams: NavParams , public plt : Platform, public nativeStorage: NativeStorage) {
    this.plt.ready().then(() =>{
       this.start = 'penn station, new york, ny'; //{lat:xxxx,lng:xxxxxx}
       this.end = 'grand central station, new york, ny';
      this.showMap();
    });
  }
  ngOnInit(){
    this.name = this.navParams.get('userName');
  }

  ionViewWillEnter(){
  	this.showMap();
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
          name: data.name
        };
        
        this.dataReady = true;
      },(error) => {
        console.log(error);
      })
      
      var pot = this.std.lattitude+','+this.std.longitude;
    directionsService.route({
      origin: pot,
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
        window.alert('Directions request failed due to ' + status);
      }
    });
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
    var getposition_lat = marker.getPosition().lat();
    var getposition_lng = marker.getPosition().lng();
    this.attachInstructionText(
      stepDisplay, marker, myRoute.steps[j[0]].instructions, getposition_lat, getposition_lng, map);
  }

  attachInstructionText(stepDisplay, marker, text, getposition_lat, getposition_lng, map) {
    this.nativeStorage.getItem('std').then((data)=>{
      this.std ={
        appraisal: data.appraisal,
        lattitude: data.lattitude,
        longitude: data.longitude,
        name: data.name,
        measure: data.measure,
        nearroad: data.nearroad,
        well: data.well,
        height_road: data.height_road
      };
     
      
      var we = 0; // เป็นบ่อ
      var hr = 1; // สูงจากถนน
      var dis = this.km;
      var train = 1; // รถไฟ
      var mall = 1; // ห้าง
      var tem = 1; // วัด
      var hos = 1; // โรงพยาบาล
      var uni = 1;  // มหาลัย
      var ex = 1; // ทางด่วน
      var nikom = 1; // นิคม
      var con = 0; // ถนนคอนกรีต
      var lad = 1; // ถนนลาดยาง
      var width_road = 1; // ถนนกว้าง
      var narrow_road = 0; // ถนนแคบ
      //ไม่มีถนน ยังไม่ได้เขียน
      var papa = 1; // ประปา
      var fire = 1; // ไฟฟ้า
      var tel = 1; // โทรศัพท์
      var square = 1; // สี่เหลี่ยม
      var n_square = 0;// ด้านไม่เท่า
      var a_square = 0;// รูปร่างอื่นๆ
      var area_narrow = 0; //หน้าแคบ
      var area_width = 1; //หน้ากว้าง
      var measure_l = 1; // ขนาดทื่ดินใหญ่
      var measure_s = 0; // ขนาดที่ดินเล็ก

      //#region ทำเลที่ตั้ง
      if(dis < 0.5){
        this.ax1 = 10;
      }
      if(dis > 0.5){
        this.ax1 = 0;
      }
      if(we == 1){
        this.ax2 = 10;
      }
      if(we != 1){
        this.ax2 = 0;
      }
      if(hr == 1){
        this.ax3 = 10;
      }
      if(hr != 1){
        this.ax3 = 0;
      }
      if(this.ax1 == 10 || this.ax2 == 10 || this.ax3 == 10){
        this.test = (this.ax1+this.ax2+this.ax3+40)/100;
      }
      else{
        this.test = 40/100;
      }
      //#endregion
      //#region สภาพแวดล้อม
      if(train == 1){
        this.bx1 = 10;
      }
      if(train != 1){
        this.bx1 = 0;
      }
      if(mall == 1){
        this.bx2 = 10;
      }
      if(mall != 1){
        this.bx2 = 0;
      }
      if(tem == 1){
        this.bx3 = 0;
      }
      if(tem != 1){
        this.bx3 = 0;
      }
      if(hos == 1){
        this.bx4 = 10;
      }
      if(hos != 1){
        this.bx4 = 0;
      }
      if(uni == 1){
        this.bx5 = 10;
      }
      if(uni != 1){
        this.bx5 = 0;
      }
      if(ex == 1){
        this.bx6 = 10;
      }
      if(ex != 1){
        this.bx6 = 0;
      }
      if(nikom == 1){
        this.bx7 = 10;
      }
      if(nikom != 1){
        this.bx7 = 0;
      }
      if(this.bx1 == 10 || this.bx2 == 10 || this.bx3 == 10 || this.bx4 == 10 || this.bx5 == 10 || this.bx6 == 10 || this.bx7 == 10){
        this.btest = (this.bx1+this.bx2+this.bx3+this.bx4+this.bx5+this.bx6+this.bx7)/100;
      }
      //#endregion
      //#region คมนาคม
      if(con == 1){
        this.cx1 = 30;
      }
      if(con != 1){
        this.cx1 = 0;
      }
      if(lad == 1){
        this.cx1 = 20;
      }
      if(lad != 1){
        this.cx1 = 0;
      }
      if(width_road == 1){
        this.cx2 = 20;
      }
      if(width_road != 1){
        this.cx2 = 0;
      }
      if(narrow_road == 1){
        this.cx2 = 10;
      }
      if(narrow_road != 1){
        this.cx2 = 0
      }
      //#endregion
      //#region สาธารณูปโภค
      if(papa == 1){
        var dx1 = 10
      }
      if(fire == 1){
        var dx2 = 10
      }
      if(tel == 1){
        var dx3 = 10
      }
      //#endregion
      //รูปร่างที่ดิน
      var ex1:any;
      var ex2:any;
      var ex3:any;
      
      if(square == 1){
        ex1 = 20;
      }
      if(n_square == 1){
        ex1 = 10;
      }
      if(a_square == 1){
        ex1 = 5;
      }
      if(area_narrow == 1){
        ex2 = 10;
      }
      if(area_width == 1){
        ex2 = 20;
      }
      if(measure_l == 1){
        ex3 = 20;
      }
      if(measure_s == 1){
        ex3 = 20; 
      }
      this.atest = this.test
      this.bxtest = this.btest;
      this.ctest = (this.cx1+this.cx2+30)/100;
      this.dtest = (dx1+dx2+dx3+30)/100;
      this.etest = (ex1+ex2+ex3+40)/100;
      var esti = this.std.appraisal*1; // รับราคาประเมิน
      this.Sum_estimate = (esti*this.atest)+(esti*this.bxtest)+(esti*this.ctest)+(esti*this.dtest)+(esti*this.etest);
      this.Sum = this.std.measure*this.Sum_estimate;
      this.appraisal_scale = esti.toLocaleString();
      this.estimate_scale = this.Sum_estimate.toLocaleString();
      var mes = this.std.measure*1;
      this.measure_scale = mes.toLocaleString();
      this.Sum_scale =this.Sum.toLocaleString();
      this.xtest = this.test; // ค่าทำเล
      this.dataReady = true;
    },(error) => {
      console.log(error);
    })
    
    var rk = 6373;
    var dlon1 = this.std.longitude * Math.PI/180;
    var dlon2 = (getposition_lng * Math.PI)/180;
    var dlat1 = this.std.lattitude * Math.PI/180;
    var dlat2 = (getposition_lat * Math.PI)/180;
    this.dlon =  dlon2 - dlon1;
    this.dlat = dlat2 - dlat1;

    this.a = Math.pow(Math.sin(this.dlat/2),2) + Math.cos(this.std.lattitude) * Math.cos(getposition_lat) * Math.pow(Math.sin(this.dlon/2),2);
    this.c = 2 * Math.atan2(Math.sqrt(this.a),Math.sqrt(1-this.a));
    this.dk = this.c *  rk;
    this.km = Math.max( this.dk * 1000/1000).toFixed(3);
    
    google.maps.event.addListener(marker, 'click', () => {
      stepDisplay.setContent(text+getposition_lat+','+getposition_lng);
      stepDisplay.open(map, marker);
    });
  }
      
}
