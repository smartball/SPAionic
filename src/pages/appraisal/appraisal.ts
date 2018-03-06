import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';
import { MapDirectionPage } from '../map-direction/map-direction';
import { RestProvider } from '../../providers/rest/rest';
import { IonDigitKeyboardCmp, IonDigitKeyboardOptions } from '../../components/ion-digit-keyboard';
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
})
export class AppraisalPage {
  @ViewChild(IonDigitKeyboardCmp) keyboard;
  
      public keyboardSettings: IonDigitKeyboardOptions = {
          align: 'center',
          //width: '85%',
          visible: false,
          leftActionOptions: {
              iconName: 'ios-backspace-outline',
              fontSize: '1.4em'
          },
          rightActionOptions: {
              //iconName: 'ios-checkmark-circle-outline',
              text: 'Done',
              fontSize: '1.3em'
          },
          roundButtons: false,
          showLetters: true,
          swipeToHide: true,
          // Available themes: IonDigitKeyboard.themes
          theme: 'ionic'
      };
      userId: string = '';
      userPassword: string = '';
      focus: string = '';
  currentTab = 0;
  well:any;
  height_road: any;
  radio: any;
  items_well: any;
  items_height_road: any;
  items_shape:any;
  shape: any;
  items: any;
  province : any;
  public itemChecked_well;
  public itemChecked_height_road;
  public itemChecked_shape;
  public log;
  public log_hr;
  public log_sp;
  n = 0;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public view: ViewController,
              public modalCtrl: ModalController,
              public nativeStorage: NativeStorage,
              public loadingCtrl: LoadingController,
              public restProvider: RestProvider) {
                this.restProvider.getProvince()
                .then(prov =>{
                  this.items_height_road = prov;
                  console.log(this.items_height_road);
                });
    this.getItems()
  }
  getItems(){
    this.items_well = [
      { value: 0 , name: "ที่ดินเป็นบ่อน้ำ" },
      { value: 1, name: "ที่ดินไม่เป็นบ่อน้ำ" }
    ],
    
    this.items_shape = [
      { value: 1, name: "สี่เหลี่ยม" },
      { value: 2, name: "สี่เหลี่ยมด้านไม่เท่า" },
      { value: 3, name: "อื่นๆ" }
    ]
}
ngOnInit(): void {
  /**
   * Since we want to prevent native keyboard to show up, we put the disabled
   * attribute on the input, and manage focus programmaticaly.
   */
  this.keyboard.onClick.subscribe((key: any) => {
      let field = this.focus;
      if (typeof key == 'number') {
          this[field] += key;
      } else {
          if (key == 'left') this[field] = this[field].substring(0, this[field].length - 1);
          if (key == 'right') this.performLogin();
      }
  });

  // (BLur) Clear focus field name on keyboard hide
  this.keyboard.onHide.subscribe(() => {
      this.focus = '';
  });
}

setFocus(field: string) {
  this.focus = field;
  this.keyboard.show();
}

private performLogin() {
  this.keyboard.hide(() => {
      // Alert after keyboard get hidden
      alert('ID: "' + this.userId + '"\nPassword: "' + this.userPassword + '"')
  });
}
public hideKeyboard() {
  this.keyboard.hide();
}
logForm(form){
    console.log(this.itemChecked_well.value,this.itemChecked_height_road.value);
    this.navCtrl.setRoot(MapDirectionPage,
      {
        well:this.itemChecked_well.value,
        height_road:this.itemChecked_height_road.value,
        shape:this.itemChecked_shape.value
      })
}

select(item) {
    this.log = "SELECTED! " + item.value;
}
select_hr(item_hr){
    this.log_hr = item_hr.province_id;
    console.log(this.log_hr);
}
select_sp(item_sp){
    this.log_sp = item_sp.value;
}

  
  ionViewDidLoad() {
    
    this.showTab(this.currentTab);
  }
  showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>;
    x[n].style.display = "block";
    
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
      
    } else {
      
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "ประเมินราคา";
    } else {
      document.getElementById("nextBtn").innerHTML = "ต่อไป";
    }
    //... and run a function that will display the correct step indicator:
    this.fixStepIndicator(n)
  }
   appraisal(){
     this.navCtrl.setRoot(MapDirectionPage);
    console.log(this.well,this.select);
     
   }
   closeModal(){
    this.view.dismiss();
   }
  nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>;
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !this.validateForm()) return false;
    // Hide the current tab:
    x[this.currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    this.currentTab = this.currentTab + n;
    // if you have reached the end of the form...
    if (this.currentTab >= x.length) {
      // ... the form gets submitted:
      
      this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
      
        let loading = this.loadingCtrl.create({
          
          content: 'กำลังประเมินราคา'
        });
      
        loading.present();
      
        setTimeout(() => {
          this.navCtrl.setRoot(MapDirectionPage,
            {
              well:this.itemChecked_well.value,
              height_road:this.itemChecked_height_road.value,
              shape:this.itemChecked_shape.value
            })
        }, 8000);
      
        setTimeout(() => {
          loading.dismiss();
        }, 8000);
        console.log(
          this.itemChecked_well.value,
          this.itemChecked_height_road.value,
          this.itemChecked_shape.value)
      return false;
    }
    // Otherwise, display the correct tab:
    this.showTab(this.currentTab);
  }
  validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[this.currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[this.currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
  fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }
}
