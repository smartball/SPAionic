import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AppraisalPage } from '../appraisal/appraisal';
import { AuthProvider } from '../../providers/auth/auth';
import { CurrencyPipe } from '@angular/common';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [CurrencyPipe]
})
export class ListPage {
  product: any;
  dataSend:any;
  responseData:any;
  productSend:any;
  imgSend:any;
  price:any;
  coordinate: any;
  nearSend: any;
  userDetails
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authprovider: AuthProvider,
              private currencyPipe: CurrencyPipe,
              public restProvider: RestProvider,) {
    this.restProvider.getProduct()
    .then(prod =>{
      this.product = prod;
      
      //console.log(this.product);
      this.data(prod);
    });
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
   
  }
  event(product){
    this.coordinate = {"lat": product.LAT,"lng": product.LNG};
    this.dataSend = {"id": product.ID};
    console.log(JSON.stringify(this.coordinate));
    //this.navCtrl.push(AppraisalPage,{id:product.ID});
    //console.log(product.ID);
    //console.log(JSON.stringify(this.dataSend));
    this.authprovider.postData(this.dataSend,'getProduct').then((result) => {
      this.responseData = result;
      if(this.responseData){
        
        this.productSend = JSON.stringify(this.responseData);
        //console.log(this.productSend);
        localStorage.setItem('itemData', this.productSend);
        //this.navCtrl.push(AppraisalPage);
      }
      else{ 
        
        alert(""); 
       }
    }, (err) => {
      // Error log
    });
    this.authprovider.postData(this.dataSend,'getImg').then((result) => {
      this.responseData = result;
      if(this.responseData){
        
        this.imgSend = JSON.stringify(this.responseData);
        //console.log(this.imgSend);
        localStorage.setItem('imgData', this.imgSend);
        //this.navCtrl.push(AppraisalPage);
      }
      else{ 
        
        alert(""); 
       }
    }, (err) => {
      // Error log
    });
    this.authprovider.postData(this.coordinate,'nearBy').then((result) => {
      this.responseData = result;
      if(this.responseData){
        
        this.nearSend = JSON.stringify(this.responseData);
        //console.log(this.nearSend);
        localStorage.setItem('near', this.nearSend);
        this.navCtrl.push(AppraisalPage);
      }
      else{ 
        
        alert(""); 
       }
    }, (err) => {
      // Error log
    });
 
  }
  
  data(_data){
    
    for(var i=0;i< _data.length ;i++){
      
      this.price = this.currencyPipe.transform(_data[i].SELL_PRICE, 'THB ', true, '1.0-2');
      console.log(this.price);
    }
  }
}
