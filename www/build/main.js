webpackJsonp([4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_direction_map_direction__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__estimate_estimate__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, app, navParams, afAuth, nativeStorage, toast, modalCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.nativeStorage = nativeStorage;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.switch = "map";
        this.search = false;
        this.userReady = false;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.typesearch = "1";
        this.place = [{
                ord: '1001',
                title: 'สวนอาหาร บุญนิยม',
                name: 'บุญนิยม',
                appraisal: '20000',
                measure: '3103',
                address: 'บุญนิยม',
                type: 'ร้านอาหาร',
                lat: '15.228885',
                lng: '104.864746'
            },
            {
                ord: '1002',
                title: 'จำปลา',
                name: 'บุญนิยม',
                appraisal: '10000',
                measure: '99',
                address: 'บุญนิยม',
                type: 'ร้านอาหาร',
                lat: '15.228671',
                lng: '104.853226'
            },
            {
                ord: '1003',
                title: 'หมูยอดาวทอง',
                name: 'คุณกันยา',
                appraisal: '30000',
                measure: '60',
                nearroad: '',
                well: '',
                height_road: '',
                type: 'ร้านอาหาร',
                lat: '14.1655573774964',
                lng: '100.7000488394'
            },
            {
                ord: '1004',
                title: 'หมูยอดาวทอง',
                name: 'คุณกันยา',
                appraisal: '1650',
                measure: '11132',
                address: 'หมูยอดาวทอง 173/2-3 ถ.ศรีณรงค์ ต.ในเมือง อ.เมือง จ.อุบลราชธานี 34000 บริหารงานโดย คุณกันยา ดาวทองวรกิจ โทร 045-262344 จำหน่าย หมูยอ ใส้กรอก แหนมซี่โครง แหนมใบมะยม และของฝาก',
                type: 'ร้านอาหาร',
                lat: '13.720170',
                lng: '100.772072'
            }];
        this.showMap();
    };
    HomePage.prototype.toggleSearch = function () {
        if (this.search) {
            this.search = false;
        }
        else {
            this.search = true;
        }
    };
    HomePage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    HomePage.prototype.showMap = function () {
        var location = new google.maps.LatLng(51.507351, -0.127758);
        var options = {
            center: { lat: 13.75633, lng: 100.50177 },
            zoom: 10,
            disableDefaultUI: true,
            streetViewControl: false,
            mapTypeId: 'roadmap' //roadmap , satellite , hybrid , terrain
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.marker = new google.maps.Marker({ position: location, icon: 'assets/imgs/pinx.png', map: this.map });
    };
    HomePage.prototype.changePosition = function (_data) {
        var _this = this;
        this.marker.setPosition(new google.maps.LatLng(_data.lat, _data.lng));
        this.map.setCenter(new google.maps.LatLng(_data.lat, _data.lng));
        this.textSearch = _data.ord;
        var infoWindow = new google.maps.InfoWindow({ content: '<div id="iw-container">' +
                '<div class="iw-title"><center>Smart Property Assess</center></div>' +
                '<div class="iw-content">' +
                '<div class="iw-subTitle">History</div>' +
                '<img src="assets/imgs/logo-real.png" alt="Porcelain Factory of Vista Alegre" height="83" width="83">' +
                '<p>ราคาประเมินกรมที่ดิน : <br><font color="blue">' + _data.appraisal + ' บาท</font></p>' +
                '<p>พิกัดที่ดิน : <br><font color="blue">' + _data.lat + ',' + _data.lng + ' บาท</font></p>' +
                '<div class="iw-subTitle">Contacts</div>' +
                '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>' +
                '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
                '<div class="row" style="background-color:orange;">' +
                '<button id = "myid" style="background-color:green;color:white;width:140px;height:30px;font-size:16px;">ประเมินราคา</button>' +
                '<button id = "closeid" style="background-color:orange;color:white;width:140px;height:30px;font-size:16px;border-radius: 0px 0px 10px 0px;">ปิด</button>' +
                '</div>' +
                '</div>',
            maxWidth: 350 });
        var sendLatLng = _data.lat + ',' + _data.lng;
        google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
            document.getElementById('closeid').addEventListener('click', function () {
                infoWindow.close(_this.map, _this.marker);
            });
            document.getElementById('myid').addEventListener('click', function () {
                _this.nativeStorage.setItem('std', {
                    lattitude: _data.lat,
                    longitude: _data.lng,
                    appraisal: _data.appraisal,
                    name: _data.name,
                    measure: _data.measure,
                    nearroad: _data.nearroad,
                    well: _data.well,
                    height_road: _data.height_road
                }).then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__map_direction_map_direction__["a" /* MapDirectionPage */]);
                }, function (error) {
                    console.log(error);
                });
            });
        });
        infoWindow.open(this.map, this.marker);
        this.marker.addListener('click', function () {
            infoWindow.open(this.map, this.marker);
        });
        google.maps.event.addListener(infoWindow, 'domready', function () {
            // Reference to the DIV that wraps the bottom of infowindow
            var iwOuter = __WEBPACK_IMPORTED_MODULE_8_jquery__('.gm-style-iw');
            /* Since this div is in a position prior to .gm-div style-iw.
             * We use jQuery and create a iwBackground variable,
             * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
            */
            var iwBackground = iwOuter.prev();
            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({ 'display': 'none' });
            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({ 'display': 'none' });
            // Moves the infowindow 115px to the right.
            // Moves the shadow of the arrow 76px to the left margin.
            iwBackground.children(':nth-child(1)').attr('style', function (i, s) { return s; });
            // Moves the arrow 76px to the left margin.
            iwBackground.children(':nth-child(3)').attr('style', function (i, s) { return s; });
            // Changes the desired tail shadow color.
            iwBackground.children(':nth-child(3)').find('div').children().css({ display: 'none' });
            // Reference to the div that groups the close button elements.
            var iwCloseBtn = iwOuter.next();
            iwCloseBtn.css({ display: 'none' });
            // Apply the desired effect to the close button
            // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
            if (__WEBPACK_IMPORTED_MODULE_8_jquery__('.iw-content').height() < 140) {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('.iw-bottom-gradient').css({ display: 'none' });
            }
            // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
            iwCloseBtn.mouseout(function () {
                __WEBPACK_IMPORTED_MODULE_8_jquery__(this).css({ opacity: '1' });
            });
        });
    };
    HomePage.prototype.viewList = function () {
        var ListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], { place: this.place });
        ListModal.present();
    };
    HomePage.prototype.goSearch = function () {
        if (this.textSearch != "" && this.textSearch != undefined) {
            if (this.searchStringInArray(this.textSearch, this.place) == '-1') {
                alert('ไม่พบสถานที่ในฐานข้อมูล');
            }
            else {
                this.changePosition(this.searchStringInArray(this.textSearch, this.place));
                this.search = false;
            }
        }
        else {
            alert('กรุณากรอกข้อมูล');
        }
    };
    HomePage.prototype.searchStringInArray = function (str, strArray) {
        for (var i = 0; i < strArray.length; i++) {
            if (strArray[i].ord.match(str) == strArray[i].ord) {
                return strArray[i];
            }
        }
        return -1;
    };
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data.email && data.uid) {
                _this.toast.create({
                    message: 'Welcome to Smart Property Assess: ' + data.email,
                    duration: 3000
                }).present();
            }
            else {
            }
        });
        this.nativeStorage.getItem('user')
            .then(function (data) {
            _this.user = {
                name: data.name,
                gender: data.gender,
                picture: data.picture,
                email: data.email
            };
            if (data.email && data.uid) {
                _this.toast.create({
                    message: 'Welcome to Smart Property Assess: ' + data.name,
                    duration: 3000
                }).present();
            }
            _this.userReady = true;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.nextProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__user_user__["a" /* UserPage */]);
    };
    HomePage.prototype.openEs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__estimate_estimate__["a" /* EstimatePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapRef", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/home/home.html"*/'<ion-header hidden>\n    <ion-navbar color="secondary">\n      \n      <ion-title>\n        Map\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)=\'toggleSearch()\'>\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)=\'choosePosition()\'>\n          <ion-icon name="ios-locate-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n    <div class="switch">\n      <button ion-button icon-only color="light" (click)=\'toggleSearch()\'><ion-icon name="search"></ion-icon></button>\n      <button ion-button color="light" (click)="(switch = \'map\'); resizeMap()" [class.active]="(switch == \'map\')" icon-only><ion-icon name="map"></ion-icon></button>\n      <button ion-button color="light" (click)="(switch = \'list\'); " [class.active]="(switch == \'list\')" icon-only><ion-icon name="list"></ion-icon></button>\n    </div>\n  \n    <div class="currentitem" *ngIf="currentregional">\n      <button ion-item no-lines (click)="viewPlace(currentregional.title)">\n        <h2>{{ currentregional.title }}</h2>\n        <ion-note item-right icon-only><ion-icon name="ios-arrow-forward"></ion-icon></ion-note>\n      </button>\n    </div>\n  <ion-content>\n    \n  \n      <div [hidden]="!(switch == \'list\')">\n        <div header-background-image padding style="background-image: url(\n          assets/imgs/bg.png);">\n          <img src="assets/imgs/logo-reales-bg.png"/>\n          <h2 ion-text color="light" header-title>Smart Property Assess</h2>\n          <p>Welcome to our Application for Real Estate Appraisal</p>\n        </div>\n        \n        <ion-list>\n          <ion-item>\n              <button menuClose ion-item item-title main-menu no-lines border (click)="nextProfile()">\n                  <ion-icon icon-small item-left name="md-contact" style="color:aquamarine"></ion-icon>\n                  Profile\n              </button>\n          </ion-item>\n          <ion-item>\n              <button menuClose ion-item item-title main-menu no-lines border (click)="openPage(p)">\n                  <ion-icon icon-small item-left name="md-basket" style="color:aquamarine"></ion-icon>\n                  Market Place\n              </button>\n          </ion-item>\n          <ion-item>\n            <button menuClose ion-item item-title main-menu no-lines border (click)="openEs()">\n                <ion-icon icon-small item-left name="md-exit" style="color:aquamarine"></ion-icon>\n                Appraisal\n            </button>\n        </ion-item>\n          <ion-item>\n              <button menuClose ion-item item-title main-menu no-lines border (click)="openPage(p)">\n                  <ion-icon icon-small item-left name="md-information-circle" style="color:aquamarine"></ion-icon>\n                  About Us\n              </button>\n          </ion-item>\n        </ion-list>\n      </div>\n      \n      <div class="map" [class.hidemap]="!((switch == \'map\') || error)">\n        <div style="padding-top:40px;">\n            <div #searchbar id="floating-panel" [hidden]="!search">\n              <img src="assets/imgs/logo-real.png" alt="">\n                <ion-row padding>\n                    <ion-list no-lines>\n                        <ion-item>        \n                            <ion-label> <ion-icon name="ios-map-outline"></ion-icon></ion-label>\n                            <ion-input clearInput type="text" placeholder="ระบุเลขโฉนด" [(ngModel)]="textSearch"></ion-input>\n                    </ion-item>\n                      </ion-list>\n                      <button ion-button block (click)="goSearch()" #searchbar [hidden]="!search">ค้นหาทันที</button>\n                      \n                </ion-row>\n                <ion-row padding>\n                </ion-row>  \n            </div>\n        </div>\n        \n              \n        <div id="map" #map></div>\n      </div>\n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPage = (function () {
    function UserPage(navCtrl, fb, loadingCtrl, nativeStorage, afAuth, googlePlus) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.afAuth = afAuth;
        this.googlePlus = googlePlus;
        this.userReady = false;
    }
    UserPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('user')
            .then(function (data) {
            _this.user = {
                name: data.name,
                gender: data.gender,
                picture: data.picture,
                email: data.email
            };
            _this.userReady = true;
        }, function (error) {
            console.log(error);
        });
    };
    UserPage.prototype.doFbLogout = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var result = this.afAuth.auth.signOut();
        this.fb.logout()
            .then(function (response) {
            //user logged out so we will remove him from the NativeStorage
            _this.nativeStorage.remove('user');
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }, 1000);
            loader.dismiss();
        }, function (error) {
            console.log(error);
        });
    };
    UserPage.prototype.doGoogleLogout = function () {
        var _this = this;
        var nav = this.navCtrl;
        var result = this.afAuth.auth.signOut();
        this.googlePlus.logout()
            .then(function (response) {
            _this.nativeStorage.remove('user');
            nav.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }, function (error) {
            console.log(error);
        });
    };
    UserPage.prototype.logout = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var result = this.afAuth.auth.signOut();
        this.nativeStorage.remove('user');
        if (result) {
            loader.dismiss();
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }, 1000);
        }
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/user/user.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-toolbar>\n      User Details\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n  \n  \n  <ion-content parallax *ngIf=\'userReady\'>\n    <div class="bg">\n\n    </div>\n    <div class="main-cnt">\n      <img [src]="user.picture" class="dp">\n    </div>\n    <ion-card >\n      <ion-card-content>\n        <ion-card-title>\n          Welcome {{user.name}}!\n          </ion-card-title>\n        <p>\n          {{user.email}}\n        </p>\n      </ion-card-content>\n      <ion-row>\n        <ion-col>\n          <button ion-button block (click)="doFbLogout()">Logout</button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n   \n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/user/user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
        this.userProfile = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('users');
    }
    AuthProvider.prototype.signupUserService = function (account) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(account['email'], account['password']).then(function (newUser) {
            _this.afAuth.auth.signInWithEmailAndPassword(account['email'], account['password']).then(function (authenticatedUser) {
                _this.userProfile.child(authenticatedUser.uid).set(account);
            });
        });
    };
    AuthProvider.prototype.forgotPasswordUser = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, afAuth, authprovider, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.authprovider = authprovider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {};
    }
    RegisterPage.prototype.doSignup = function () {
        var _this = this;
        var account = {
            first_name: this.first_name,
            last_name: this.last_name || '',
            email: this.email,
            phone: this.phone || '',
            password: this.password,
            city: this.city || '',
            address: this.address || '',
            isJobSeeker: this.isJobSeeker || ''
        };
        try {
            var that = this;
            var loader = this.loadingCtrl.create({
                content: "Please wait...",
            });
            var result_1 = this.authprovider.signupUserService(account).then(function (authData) { return __awaiter(_this, void 0, void 0, function () {
                var alert_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!result_1) return [3 /*break*/, 2];
                            alert_1 = this.alertCtrl.create({
                                message: 'สมัครสมาชิก สำเร็จ',
                                buttons: ['OK']
                            });
                            return [4 /*yield*/, alert_1.present()];
                        case 1:
                            _a.sent();
                            loader.present();
                            _a.label = 2;
                        case 2:
                            loader.dismiss();
                            setTimeout(function () {
                                that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }, 5000);
                            return [2 /*return*/];
                    }
                });
            }); }, function (error) {
                // Unable to log in
                var toast = _this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                that.password = ""; //empty the password field
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Register</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row padding-horizontal align-items-start>\n          \n          <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n              <!---Logo\n              <img src="assets/imgs/logo-reales.png" style="width:150px;margin-top:20px;"/> -->\n              \n              <!--Form Title-->\n              <h1 ion-text style="color:lightgray;font-size:35px;" title>Register your new Account</h1>\n              \n              \n              <!---Input field email-->\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>EMAIL</ion-label>\n                  <ion-input required placeholder="Your e-mail address(eg. you@example.com)"  type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email" name="email"></ion-input>\n              </ion-item>\n              <!---Input field password-->\n              <ion-item no-padding>\n                <ion-label color="dark" stacked>PASSWORD</ion-label>\n                <ion-input required placeholder="Enter your password" type="password" [(ngModel)]="password" name="password"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>FIRST NAME</ion-label>\n                  <ion-input required placeholder="Your Firstname" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="first_name" name="first_name"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>LAST NAME</ion-label>\n                  <ion-input required placeholder="Your Lastname" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="last_name" name="last_name"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>PHONE</ion-label>\n                  <ion-input required placeholder="Enter your number(eg. 0802222222)" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="phone" name="phone"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label color="dark" stacked>ADDRESS</ion-label>\n                <ion-input required placeholder="Enter your Address" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="address" name="address"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label color="dark" stacked>CITY</ion-label>\n                <ion-input required placeholder="Enter your City" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city" name="city"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label style="font-size:10px;">Agree to receive for news and information?</ion-label>\n                <ion-toggle [(ngModel)]="isJobSeeker" name="isJobSeeker"></ion-toggle>\n              </ion-item>\n              <!---Register button-->\n              <button ion-button margin-top float-right clear button-clear text-capitalize round (click)="doSignup()">Register</button>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapDirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapDirectionPage = (function () {
    function MapDirectionPage(navCtrl, navParams, plt, nativeStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.nativeStorage = nativeStorage;
        this.dataReady = false;
        this.lon1 = 100.772072;
        this.lon2 = 100.77227210000001;
        this.lat2 = 13.7217572;
        this.lat1 = 13.7201804;
        this.plt.ready().then(function () {
            _this.start = 'penn station, new york, ny'; //{lat:xxxx,lng:xxxxxx}
            _this.end = 'grand central station, new york, ny';
            _this.showMap();
        });
    }
    MapDirectionPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('userName');
    };
    MapDirectionPage.prototype.ionViewWillEnter = function () {
        this.showMap();
    };
    MapDirectionPage.prototype.showMap = function () {
        var markerArray = [];
        //declear>>>
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        //declear<<<
        var options = {
            disableDefaultUI: true,
            zoom: 13,
            center: { lat: 40.771, lng: -73.974 }
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        directionsDisplay.setMap(this.map);
        var stepDisplay = new google.maps.InfoWindow;
        this.calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, this.map);
    };
    MapDirectionPage.prototype.calculateAndDisplayRoute = function (directionsDisplay, directionsService, markerArray, stepDisplay, map) {
        var _this = this;
        for (var i = 0; i < markerArray.length; i++) {
            markerArray[i].setMap(null);
        }
        this.nativeStorage.getItem('std').then(function (data) {
            _this.std = {
                appraisal: data.appraisal,
                lattitude: data.lattitude,
                longitude: data.longitude,
                name: data.name
            };
            _this.dataReady = true;
        }, function (error) {
            console.log(error);
        });
        var pot = this.std.lattitude + ',' + this.std.longitude;
        directionsService.route({
            origin: pot,
            destination: 'Bangkok',
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                document.getElementById('warnings-panel').innerHTML =
                    '<b>' + response.routes[0].warnings + '</b>';
                directionsDisplay.setDirections(response);
                var myRoute = response.routes[0].legs[0];
                _this.showSteps(response, markerArray, stepDisplay, map);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    MapDirectionPage.prototype.showSteps = function (directionResult, markerArray, stepDisplay, map) {
        var myRoute = directionResult.routes[0].legs[0];
        var j = [];
        var k = 0;
        var l = 0;
        for (var i = 0; i < myRoute.steps.length; i++) {
            var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
            marker.setMap(map);
            var positiontext = myRoute.steps[i].instructions; // เก็บคำอธิบายการเดินทางแต่ละ step
            var mainroad = positiontext.search("เข้าสู่"); //find step key word "เข้าสู่"
            if (mainroad != -1 && i == 0) {
                l = i;
                l = ++l;
                j[k] = l;
                k++;
            }
            else if (mainroad != -1 && i != 0) {
                j[k] = i;
                k++;
            }
        }
        marker.setPosition(myRoute.steps[j[0]].start_location);
        var getposition_lat = marker.getPosition().lat();
        var getposition_lng = marker.getPosition().lng();
        this.attachInstructionText(stepDisplay, marker, myRoute.steps[j[0]].instructions, getposition_lat, getposition_lng, map);
    };
    MapDirectionPage.prototype.attachInstructionText = function (stepDisplay, marker, text, getposition_lat, getposition_lng, map) {
        var _this = this;
        this.nativeStorage.getItem('std').then(function (data) {
            _this.std = {
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
            var dis = _this.km;
            var train = 1; // รถไฟ
            var mall = 1; // ห้าง
            var tem = 1; // วัด
            var hos = 1; // โรงพยาบาล
            var uni = 1; // มหาลัย
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
            var n_square = 0; // ด้านไม่เท่า
            var a_square = 0; // รูปร่างอื่นๆ
            var area_narrow = 0; //หน้าแคบ
            var area_width = 1; //หน้ากว้าง
            var measure_l = 1; // ขนาดทื่ดินใหญ่
            var measure_s = 0; // ขนาดที่ดินเล็ก
            //#region ทำเลที่ตั้ง
            if (dis < 0.5) {
                _this.ax1 = 10;
            }
            if (dis > 0.5) {
                _this.ax1 = 0;
            }
            if (we == 1) {
                _this.ax2 = 10;
            }
            if (we != 1) {
                _this.ax2 = 0;
            }
            if (hr == 1) {
                _this.ax3 = 10;
            }
            if (hr != 1) {
                _this.ax3 = 0;
            }
            if (_this.ax1 == 10 || _this.ax2 == 10 || _this.ax3 == 10) {
                _this.test = (_this.ax1 + _this.ax2 + _this.ax3 + 40) / 100;
            }
            else {
                _this.test = 40 / 100;
            }
            //#endregion
            //#region สภาพแวดล้อม
            if (train == 1) {
                _this.bx1 = 10;
            }
            if (train != 1) {
                _this.bx1 = 0;
            }
            if (mall == 1) {
                _this.bx2 = 10;
            }
            if (mall != 1) {
                _this.bx2 = 0;
            }
            if (tem == 1) {
                _this.bx3 = 0;
            }
            if (tem != 1) {
                _this.bx3 = 0;
            }
            if (hos == 1) {
                _this.bx4 = 10;
            }
            if (hos != 1) {
                _this.bx4 = 0;
            }
            if (uni == 1) {
                _this.bx5 = 10;
            }
            if (uni != 1) {
                _this.bx5 = 0;
            }
            if (ex == 1) {
                _this.bx6 = 10;
            }
            if (ex != 1) {
                _this.bx6 = 0;
            }
            if (nikom == 1) {
                _this.bx7 = 10;
            }
            if (nikom != 1) {
                _this.bx7 = 0;
            }
            if (_this.bx1 == 10 || _this.bx2 == 10 || _this.bx3 == 10 || _this.bx4 == 10 || _this.bx5 == 10 || _this.bx6 == 10 || _this.bx7 == 10) {
                _this.btest = (_this.bx1 + _this.bx2 + _this.bx3 + _this.bx4 + _this.bx5 + _this.bx6 + _this.bx7) / 100;
            }
            //#endregion
            //#region คมนาคม
            if (con == 1) {
                _this.cx1 = 30;
            }
            if (con != 1) {
                _this.cx1 = 0;
            }
            if (lad == 1) {
                _this.cx1 = 20;
            }
            if (lad != 1) {
                _this.cx1 = 0;
            }
            if (width_road == 1) {
                _this.cx2 = 20;
            }
            if (width_road != 1) {
                _this.cx2 = 0;
            }
            if (narrow_road == 1) {
                _this.cx2 = 10;
            }
            if (narrow_road != 1) {
                _this.cx2 = 0;
            }
            //#endregion
            //#region สาธารณูปโภค
            if (papa == 1) {
                var dx1 = 10;
            }
            if (fire == 1) {
                var dx2 = 10;
            }
            if (tel == 1) {
                var dx3 = 10;
            }
            //#endregion
            //รูปร่างที่ดิน
            var ex1;
            var ex2;
            var ex3;
            if (square == 1) {
                ex1 = 20;
            }
            if (n_square == 1) {
                ex1 = 10;
            }
            if (a_square == 1) {
                ex1 = 5;
            }
            if (area_narrow == 1) {
                ex2 = 10;
            }
            if (area_width == 1) {
                ex2 = 20;
            }
            if (measure_l == 1) {
                ex3 = 20;
            }
            if (measure_s == 1) {
                ex3 = 20;
            }
            _this.atest = _this.test;
            _this.bxtest = _this.btest;
            _this.ctest = (_this.cx1 + _this.cx2 + 30) / 100;
            _this.dtest = (dx1 + dx2 + dx3 + 30) / 100;
            _this.etest = (ex1 + ex2 + ex3 + 40) / 100;
            var esti = _this.std.appraisal * 1; // รับราคาประเมิน
            _this.Sum_estimate = (esti * _this.atest) + (esti * _this.bxtest) + (esti * _this.ctest) + (esti * _this.dtest) + (esti * _this.etest);
            _this.Sum = _this.std.measure * _this.Sum_estimate;
            _this.appraisal_scale = esti.toLocaleString();
            _this.estimate_scale = _this.Sum_estimate.toLocaleString();
            var mes = _this.std.measure * 1;
            _this.measure_scale = mes.toLocaleString();
            _this.Sum_scale = _this.Sum.toLocaleString();
            _this.xtest = _this.test; // ค่าทำเล
            _this.dataReady = true;
        }, function (error) {
            console.log(error);
        });
        var rk = 6373;
        var dlon1 = this.std.longitude * Math.PI / 180;
        var dlon2 = (getposition_lng * Math.PI) / 180;
        var dlat1 = this.std.lattitude * Math.PI / 180;
        var dlat2 = (getposition_lat * Math.PI) / 180;
        this.dlon = dlon2 - dlon1;
        this.dlat = dlat2 - dlat1;
        this.a = Math.pow(Math.sin(this.dlat / 2), 2) + Math.cos(this.std.lattitude) * Math.cos(getposition_lat) * Math.pow(Math.sin(this.dlon / 2), 2);
        this.c = 2 * Math.atan2(Math.sqrt(this.a), Math.sqrt(1 - this.a));
        this.dk = this.c * rk;
        this.km = Math.max(this.dk * 1000 / 1000).toFixed(3);
        google.maps.event.addListener(marker, 'click', function () {
            stepDisplay.setContent(text + getposition_lat + ',' + getposition_lng);
            stepDisplay.open(map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapDirectionPage.prototype, "mapRef", void 0);
    MapDirectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-direction',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/map-direction/map-direction.html"*/'<ion-header header-ios>\n    <ion-navbar transparent>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="primary"></ion-icon>\n      </button>\n      <ion-title text-left><h5 style="font-size:15px;">ประเมินราคาอสังหาริมทรัพย์</h5></ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding >\n    <div #map id="map"></div>\n    <div id="warnings-panel"></div>\n    <ion-col col-12 map-content transparent *ngIf=\'dataReady\'>\n        <ion-item-group>\n            <ion-item border>\n                <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:rgb(72, 181, 233)" item-start></ion-icon>\n                <h5 no-paddnig style="color:rgb(104, 104, 104)">ราคาประเมินกรมที่ดิน</h5>\n                <span>{{ appraisal_scale }} บาท/ตารางวา</span>\n            </ion-item>\n            <ion-item border>\n                <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:rgb(72, 181, 233)" item-start></ion-icon>\n                <h5 no-paddnig style="color:rgb(104, 104, 104)">ราคาประเมินราคาขายต่อตารางวา</h5>\n                <span>{{ estimate_scale }} บาท/ตารางวา</span>\n            </ion-item>\n            <ion-item border>\n              <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:rgb(72, 181, 233)" item-start></ion-icon>\n              <h5 no-paddnig style="color:rgb(104, 104, 104)">ระยะห่างจากที่ดินถึงถนนหลัก</h5>\n              <span>{{ km }} กิโลเมตร</span>\n          </ion-item>\n            <ion-item border>\n                <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:rgb(72, 181, 233)" item-start></ion-icon>\n                <h5 no-paddnig style="color:rgb(104, 104, 104)">ขนาดที่ดิน</h5>\n                <span>{{ measure_scale }} ตารางวา</span>\n            </ion-item>\n            <ion-item border>\n                <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:rgb(72, 181, 233)" item-start></ion-icon>\n                <h5 no-paddnig style="color:rgb(104, 104, 104)">ราคาประเมินราคาขาย(ตลาด)</h5>\n                <span> {{ Sum_scale }} บาท</span>\n            </ion-item>\n            <button ion-button float-right margin-top round outline color="color:rgb(72, 181, 233);" style="color:rgb(72, 181, 233);width:120px;height:50px;font-size:24px;">ลงขาย</button>\n        </ion-item-group>\n    </ion-col>\n</ion-content>\n'/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/map-direction/map-direction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MapDirectionPage);
    return MapDirectionPage;
}());

//# sourceMappingURL=map-direction.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/estimate/estimate.module": [
		470,
		3
	],
	"../pages/list/list.module": [
		471,
		2
	],
	"../pages/map-direction/map-direction.module": [
		473,
		1
	],
	"../pages/register/register.module": [
		472,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(316);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_direction_map_direction__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_estimate_estimate__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_plus__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_firebase_config__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_parallax_parallax__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_list_list__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_direction_map_direction__["a" /* MapDirectionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__directives_parallax_parallax__["a" /* ParallaxDirective */],
                __WEBPACK_IMPORTED_MODULE_14__pages_estimate_estimate__["a" /* EstimatePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/estimate/estimate.module#EstimatePageModule', name: 'EstimatePage', segment: 'estimate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-direction/map-direction.module#MapDirectionPageModule', name: 'MapDirectionPage', segment: 'map-direction', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_direction_map_direction__["a" /* MapDirectionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_estimate_estimate__["a" /* EstimatePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_plus__["a" /* GooglePlus */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_estimate_estimate__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, nativeStorage, splashScreen, statusBar, afAuth) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.authenticated = false;
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], icon: 'ios-home' },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */], icon: 'md-contact' },
            { title: 'Market Place', component: __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */], icon: 'md-basket' },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */], icon: 'md-information-circle' },
            { title: 'Es', component: __WEBPACK_IMPORTED_MODULE_8__pages_estimate_estimate__["a" /* EstimatePage */], icon: 'md-information-circle' }
        ];
        platform.ready().then(function () {
            // Here we will check if the user is already logged in
            _this.afAuth.authState.subscribe(function (state) {
                if (state.email && state.uid) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
            // because we don't want to ask users to log in each time they open the app
            var env = _this;
            _this.nativeStorage.getItem('user')
                .then(function (data) {
                // user is previously logged and we have his data
                // we will let him access the app
                google.maps.event.trigger(_this.map, 'resize');
                env.splashScreen.hide();
            }, function (error) {
                //we don't have the user data so we will ask him to log in
                env.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
                env.splashScreen.hide();
            });
            _this.statusBar.styleDefault();
        });
    }
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component).then(function () {
            _this.nativeStorage.remove('std');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <div header-background-image padding style="background-image: url(\n          assets/imgs/bg.png);">\n          <img src="assets/imgs/logo-reales-bg.png"/>\n          <h2 ion-text color="light" header-title>Smart Property Assess</h2>\n          <p>Welcome to our Application for Real Estate Appraisal</p>\n      </div>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n          <ion-item>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                <ion-icon icon-small item-left name="{{p.icon}}" style="color:aquamarine"></ion-icon>\n              {{p.title}}\n            </button>\n          </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/superball/SPAionic-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAaAaPHyw8bP3f-r82-ZPZwPSzLqv_mP2s",
    authDomain: "hasauth-b69e3.firebaseapp.com",
    databaseURL: "https://hasauth-b69e3.firebaseio.com",
    projectId: "hasauth-b69e3",
    storageBucket: "hasauth-b69e3.appspot.com",
    messagingSenderId: "291100550318"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxDirective = (function () {
    function ParallaxDirective(el, re) {
        this.el = el;
        this.re = re;
        console.log('Hello ParallaxDirective Directive');
    }
    ParallaxDirective.prototype.ngOnInit = function () {
        var cnt = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = cnt.getElementsByClassName('bg')[0];
        this.main_cnt = cnt.getElementsByClassName('main-cnt')[0];
        this.re.setElementStyle(this.header, 'webTransformOrigin', 'center bottom');
        this.re.setElementStyle(this.header, 'background-size', 'cover');
        this.re.setElementStyle(this.main_cnt, 'position', 'absolute');
    };
    ParallaxDirective.prototype.onCntscroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.update(ev);
        });
    };
    ParallaxDirective.prototype.update = function (ev) {
        if (ev.scrollTop > 0) {
            this.ta = ev.scrollTop / 2;
            this.ta = 1;
        }
        this.re.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.ta + 'px,0)scale(1,1)');
    };
    ParallaxDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[parallax]',
            host: {
                '(ionScroll)': 'onCntscroll($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ParallaxDirective);
    return ParallaxDirective;
}());

//# sourceMappingURL=parallax.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var LoginPage = (function () {
    function LoginPage(navCtrl, fb, nativeStorage, navParams, afAuth, authprovider, alertCtrl, loadingCtrl, toastCtrl, facebook, googlePlus) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.authprovider = authprovider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.fireauth = __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]();
        this.FB_APP_ID = 122621955076543;
        this.user = {};
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
    }
    LoginPage.prototype.doFbLogin = function () {
        var _this = this;
        var permissions = new Array();
        //the permissions your facebook app needs from the user
        permissions = ["public_profile", "email"];
        this.fb.login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"].FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            });
            //Getting name and gender properties
            _this.fb.api("/me?fields=name,gender", params)
                .then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                //now we have the users info, let's save it in the NativeStorage
                _this.nativeStorage.setItem('user', {
                    email: user.email,
                    name: user.name,
                    gender: user.gender,
                    picture: user.picture
                })
                    .then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }, function (error) {
                    console.log(error);
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader, alert_1, result;
            return __generator(this, function (_a) {
                loader = this.loadingCtrl.create({
                    content: "Please wait..."
                });
                loader.present();
                if (user.email == null && user.password == null) {
                    alert_1 = this.alertCtrl.create({
                        message: 'Please fill email and password',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    loader.dismiss();
                }
                result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(function (authData) {
                    loader.dismiss();
                    _this.nativeStorage.setItem('user', {
                        email: user.email
                    }).then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }, function (error) {
                        console.log(error);
                    });
                }, function (error) {
                    loader.dismiss();
                    // Unable to log in
                    var alert = _this.alertCtrl.create({
                        message: error,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.user.password = ""; //empty the password field
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.ForgotPassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Enter Your Email',
            message: "A new password will be sent to you",
            inputs: [
                {
                    name: 'recoverEmail',
                    placeholder: 'you@email.com'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel Clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log("A title sentence to it " + data.recoverEmail);
                        //
                        var loading = _this.loadingCtrl.create({
                            dismissOnPageChange: true,
                            content: 'Reseting Your Password..'
                        });
                        _this.authprovider.forgotPasswordUser(data.recoverEmail).then(function () {
                            loading.dismiss().then(function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Check your Email',
                                    subTitle: 'Password reset successful',
                                    buttons: ['OK']
                                });
                                alert.present();
                            });
                        }, function (error) {
                            var alert = _this.alertCtrl.create({
                                title: 'Error reseting password',
                                subTitle: error.message,
                                buttons: ['OK']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.googlelogin = function () {
        var _this = this;
        this.googlePlus.login({
            'webClientId': '291100550318-svo1bs2lov8loea9djc2ca1c6kt2ac2g.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]().signInWithCredential(__WEBPACK_IMPORTED_MODULE_8_firebase__["auth"].GoogleAuthProvider.credential(res.idToken))
                .then(function (user) {
                _this.nativeStorage.setItem('user', {
                    name: user.displayName,
                    email: user.email,
                    gender: user.gender,
                    picture: user.picture
                }).then(function (succ) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                });
            }).catch(function (non) {
                alert("Failed");
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/login/login.html"*/'<ion-content class="background">\n    <h1 style="margin-top:80px;">SMART PROPERT ASSESS</h1>\n    <ion-card>\n    \n      <ion-card-header>\n        \n        <a (click)="skip()" float-Right>Skip This</a><br>Login\n      </ion-card-header>\n  \n      <ion-card-content>\n        <!-- Add card content here! -->\n        <ion-list no-lines>\n          <ion-item>\n          <ion-label floating>\n            Email Address\n          </ion-label>\n            <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>\n              Password\n          </ion-label>\n            <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n          <ion-item>\n            <p>Forgot password?<a href="#" (click)="ForgotPassword()">Get Here</a></p>\n          </ion-item>\n          <button ion-button color="danger" ion-left block (click)="login(user)">LOGIN</button>\n        </ion-list>\n        <b>OR</b>\n          <button ion-button color="primary" ion-left block (click)="doFbLogin()">\n            <ion-icon name="logo-facebook"></ion-icon>\n            <div>Login With Facebook</div>\n          </button>\n          <!--\n          <button ion-button color="danger" ion-left block (click)="googlelogin()">\n            <ion-icon name="logo-googleplus"></ion-icon>\n            <div>Login With Google</div>\n          </button> -->\n          <hr width="80%">\n          <b><a (click)="register()" >Create an Account</a></b>\n      </ion-card-content>\n    \n    </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EstimatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstimatePage = (function () {
    function EstimatePage(navCtrl, navParams, nativeStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.dataReady = false;
        this.lon1 = 100.772072;
        this.lon2 = 100.77227210000001;
        this.lat2 = 13.7217572;
        this.lat1 = 13.7201804;
    }
    EstimatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nativeStorage.getItem('std').then(function (data) {
            _this.std = {
                appraisal: data.appraisal,
                lattitude: data.lattitude,
                longitude: data.longitude,
                name: data.name
            };
            _this.dataReady = true;
        }, function (error) {
            console.log(error);
        });
        var rk = 6373;
        var dlon1 = this.std.longitude * Math.PI / 180;
        var dlon2 = (this.lon2 * Math.PI) / 180;
        var dlat1 = this.std.lattitude * Math.PI / 180;
        var dlat2 = (this.lat2 * Math.PI) / 180;
        this.dlon = dlon2 - dlon1;
        this.dlat = dlat2 - dlat1;
        this.a = Math.pow(Math.sin(this.dlat / 2), 2) + Math.cos(this.lat1) * Math.cos(this.lat2) * Math.pow(Math.sin(this.dlon / 2), 2);
        this.c = 2 * Math.atan2(Math.sqrt(this.a), Math.sqrt(1 - this.a));
        this.dk = this.c * rk;
        this.km = Math.max(this.dk * 1000 / 1000).toFixed(3);
        var pot = this.std.lattitude + ',' + this.std.longitude;
    };
    EstimatePage.prototype.calculate = function () {
        var _this = this;
        this.nativeStorage.getItem('std').then(function (data) {
            _this.std = {
                appraisal: data.appraisal,
                lattitude: data.lattitude,
                longitude: data.longitude,
                name: data.name
            };
            _this.dataReady = true;
        }, function (error) {
            console.log(error);
        });
        var rk = 6373;
        var dlon1 = this.std.longitude * Math.PI / 180;
        var dlon2 = (this.lon2 * Math.PI) / 180;
        var dlat1 = this.std.lattitude * Math.PI / 180;
        var dlat2 = (this.lat2 * Math.PI) / 180;
        this.dlon = dlon2 - dlon1;
        this.dlat = dlat2 - dlat1;
        this.a = Math.pow(Math.sin(this.dlat / 2), 2) + Math.cos(this.lat1) * Math.cos(this.lat2) * Math.pow(Math.sin(this.dlon / 2), 2);
        this.c = 2 * Math.atan2(Math.sqrt(this.a), Math.sqrt(1 - this.a));
        this.dk = this.c * rk;
        this.km = Math.max(this.dk * 1000 / 1000).toFixed(3);
    };
    EstimatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estimate',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/estimate/estimate.html"*/'<!--\n  Generated template for the EstimatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-title text-left><h5 style="font-size:15px;">ประเมินราคาอสังหาริมทรัพย์</h5></ion-title>\n  </ion-navbar>\n</ion-header>\n  <ion-content padding *ngIf=\'dataReady\'>\n      <p> {{ std.lattitude }} {{ std.longitude }} </p>\n      <p>{{ std.name }} </p>\n      <p>{{ std.appraisal }}</p>\n      <ion-col col-12 map-content transparent >\n          <ion-item-group >\n              <!--Info Location-->\n              <ion-item border>\n                  <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                  <h5 no-paddnig style="color:lightgray">ราคาประเมินกรมที่ดิน</h5>\n                  <span>{{ std.appraisal }} บาท/ตาราวา</span>\n              </ion-item>\n              <ion-item border>\n                <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                <h5 no-paddnig style="color:lightgray">ระยะห่างจากที่ดินถึงถนนหลัก</h5>\n                <span>{{ km }} กิโลเมตร</span>\n            </ion-item>\n              <ion-item border>\n                  <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                  <h5 no-paddnig style="color:lightgray">ขนาดที่ดิน</h5>\n                  <span>99 ตารางวา</span>\n              </ion-item>\n              <ion-item border>\n                  <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                  <h5 no-paddnig style="color:lightgray">ราคาประเมินราคาขาย(ตลาด)</h5>\n                  <span>8,900,000 บาท</span>\n              </ion-item>\n              <button ion-button float-right margin-top round outline color="light" style="color:aquamarine;width:120px;height:50px;font-size:24px;">ลงขาย</button>\n          </ion-item-group>\n      </ion-col>\n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/estimate/estimate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], EstimatePage);
    return EstimatePage;
}());

//# sourceMappingURL=estimate.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map