webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_direction_map_direction__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__estimate_estimate__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ion_digit_keyboard__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(51);
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














var HomePage = (function () {
    function HomePage(navCtrl, app, navParams, afAuth, nativeStorage, toast, restProvider, http, authprovider, statusBar, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.nativeStorage = nativeStorage;
        this.toast = toast;
        this.restProvider = restProvider;
        this.http = http;
        this.authprovider = authprovider;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.textSearch = '';
        this.switch = "map";
        this.search = false;
        this.userReady = false;
        this.navCtrl = navCtrl;
        this.presentLoading();
        this.restProvider.getProvince()
            .then(function (prov) {
            _this.items_prov = prov;
            _this.loading.dismiss();
        });
        this.statusBar.hide();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.typesearch = "1";
        this.showMap();
    };
    HomePage.prototype.select = function (item) {
        var _this = this;
        this.dataSend = { "province": item.PROVINCE_ID };
        this.log_hr = item.PROVINCE_ID;
        this.presentLoading();
        this.authprovider.postData(this.dataSend, 'getAmphur').then(function (result) {
            _this.amphur = result;
            _this.loading.dismiss();
        }, function (err) {
            // Error log
        });
        this.province_id = this.log_hr;
        return this.province_id;
    };
    HomePage.prototype.selectAmphur = function (amphur) {
        this.log_amphur = amphur.AMPHUR_CODE;
        this.amphur_code = this.log_amphur;
        return this.amphur_code;
    };
    HomePage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
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
        var location = new google.maps.LatLng(0, 0);
        var options = {
            center: { lat: 13.75633, lng: 100.50177 },
            zoom: 10,
            disableDefaultUI: true,
            streetViewControl: false,
            mapTypeId: 'roadmap' //roadmap , satellite , hybrid , terrain
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.marker = new google.maps.Marker({ position: location,
            //icon: 'assets/imgs/pinx.png',
            animation: google.maps.Animation.DROP,
            map: this.map });
    };
    HomePage.prototype.showMapSatellite = function (_data) {
        var location = new google.maps.LatLng(0, 0);
        var options = {
            center: { lat: 13.75633, lng: 100.50177 },
            zoom: 10,
            disableDefaultUI: true,
            streetViewControl: false,
            mapTypeId: 'satellite' //roadmap , satellite , hybrid , terrain
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        var polylinePlanCoordinates = [];
        var polyline_data = _data;
        for (var i = 0; i < polyline_data.length; i++) {
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
        this.marker = new google.maps.Marker({ position: location,
            //icon: 'assets/imgs/pinx.png',
            animation: google.maps.Animation.DROP,
            map: this.map });
    };
    HomePage.prototype.toggleBounce = function () {
        if (this.marker.getAnimation() !== null) {
            this.marker.setAnimation(null);
        }
        else {
            this.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    };
    HomePage.prototype.changePosition = function (_data) {
        var _this = this;
        this.marker.setPosition(new google.maps.LatLng(_data.lat, _data.lng));
        this.map.setCenter(new google.maps.LatLng(_data.lat, _data.lng));
        this.map.setZoom(22);
        this.textSearch = _data.deed_number;
        var infoWindow = new google.maps.InfoWindow({ content: '<div id="iw-container">' +
                '<div class="iw-title"><center>Smart Property Assess</center></div>' +
                '<div class="iw-content">' +
                '<p>ราคาประเมินกรมที่ดิน : <font color="blue">' + _data.cost_appraisal.toLocaleString() + ' บาท</font></p>' +
                '<p>ขนาดที่ดิน : <font color="blue">' + _data.size + ' ตารางวา </font></p>' +
                '<p>พิกัดที่ดิน : <font color="blue">' + _data.lat.toFixed(6) + ',' + _data.lng + ' </font></p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
                '<div class="row" style="background-color:orange;">' +
                '<button id = "myid" style="background-color:green;color:white;width:140px;height:30px;font-size:16px;">ประเมินราคา</button>' +
                '<button id = "closeid" style="background-color:orange;color:white;width:140px;height:30px;font-size:16px;bider-radius: 0px 0px 10px 0px;">ปิด</button>' +
                '</div>' +
                '</div>',
            maxWidth: 350 });
        google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
            document.getElementById('closeid').addEventListener('click', function () {
                infoWindow.close(_this.map, _this.marker);
            });
            document.getElementById('myid').addEventListener('click', function () {
                _this.nativeStorage.setItem('std', {
                    lattitude: _data.lat.toFixed(6),
                    longitude: _data.lng.toFixed(6),
                    appraisal: _data.cost_appraisal,
                    size: _data.size,
                    province_id: _data.province_id,
                    amphur_code: _data.amphur_code,
                    deed_number: _data.deed_number,
                }).then(function () {
                    var tes = parseFloat(_data.lat).toFixed(6);
                    var loading = _this.loadingCtrl.create({
                        content: 'กำลังประเมินราคา'
                    });
                    loading.present();
                    setTimeout(function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__map_direction_map_direction__["a" /* MapDirectionPage */]);
                    }, 1000);
                    setTimeout(function () {
                        loading.dismiss();
                    }, 1000);
                }, function (error) {
                    console.log(error);
                });
            });
        });
        infoWindow.open(this.map, this.marker);
        this.marker.addListener('click', this.toggleBounce(), function () {
            //infoWindow.open(this.map, this.marker);
        });
        google.maps.event.addListener(infoWindow, 'domready', function () {
            var iwOuter = __WEBPACK_IMPORTED_MODULE_9_jquery__('.gm-style-iw');
            var iwBackground = iwOuter.prev();
            iwBackground.children(':nth-child(2)').css({ 'display': 'none' });
            iwBackground.children(':nth-child(4)').css({ 'display': 'none' });
            iwBackground.children(':nth-child(1)').attr('style', function (i, s) { return s; });
            iwBackground.children(':nth-child(3)').attr('style', function (i, s) { return s; });
            iwBackground.children(':nth-child(3)').find('div').children().css({ display: 'none' });
            var iwCloseBtn = iwOuter.next();
            iwCloseBtn.css({ display: 'none' });
            if (__WEBPACK_IMPORTED_MODULE_9_jquery__('.iw-content').height() < 140) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__('.iw-bottom-gradient').css({ display: 'none' });
            }
            iwCloseBtn.mouseout(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__(this).css({ opacity: '1' });
            });
        });
    };
    HomePage.prototype.polyLine = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.getPolyline = { "province": _this.province_id,
                    "amphur": _this.amphur_code,
                    "deed_number": _this.textSearch };
                _this.authprovider.postData(_this.getPolyline, 'getPolyline').then(function (result) {
                    _this.polylineData = result;
                    _this.showMapSatellite(_this.polylineData);
                }, function (err) {
                    // Error log
                });
            }, 100);
        });
    };
    HomePage.prototype.btnSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.textSearch != "" && this.textSearch != undefined)) return [3 /*break*/, 2];
                        this.presentLoading();
                        return [4 /*yield*/, this.restProvider.getMarker(this.textSearch, this.province_id, this.amphur_code)
                                .then(function (data) {
                                _this.place = data;
                                if (_this.searchStringInArray(_this.place) == '-1') {
                                    alert('ไม่พบสถานที่ในฐานข้อมูล');
                                    _this.loading.dismiss();
                                }
                                else {
                                    _this.getPolyline = { "province": _this.province_id,
                                        "amphur": _this.amphur_code,
                                        "deed_number": _this.textSearch };
                                    _this.authprovider.postData(_this.getPolyline, 'getPolyline').then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.polylineData = result;
                                                    this.showMapSatellite(this.polylineData);
                                                    return [4 /*yield*/, this.changePosition(this.searchStringInArray(this.place))];
                                                case 1:
                                                    _a.sent();
                                                    this.loading.dismiss();
                                                    this.search = false;
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }, function (err) {
                                        // Error log
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        alert('กรุณากรอกข้อมูล');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.searchStringInArray = function (strArray) {
        for (var i = 0; i < strArray.length; i++) {
            if (strArray[i].deed_number) {
                return strArray[i];
            }
        }
        return -1;
    };
    HomePage.prototype.nextProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__user_user__["a" /* UserPage */]);
    };
    HomePage.prototype.openEs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__estimate_estimate__["a" /* EstimatePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__components_ion_digit_keyboard__["a" /* IonDigitKeyboardCmp */]),
        __metadata("design:type", Object)
    ], HomePage.prototype, "keyboard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapRef", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/home/home.html"*/'<ion-header hidden>\n  <ion-navbar color="secondary">\n    \n    <ion-title>\n      Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'toggleSearch()\'>\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)=\'choosePosition()\'>\n        <ion-icon name="ios-locate-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  <div class="switch">\n    <button ion-button icon-only color="light" (click)=\'toggleSearch()\'><ion-icon name="search"></ion-icon></button>\n    <button ion-button color="light" class="grad" (click)="(switch = \'map\'); resizeMap()" [class.active]="(switch == \'map\')" icon-only><ion-icon name="map"></ion-icon></button>\n    <button ion-button color="light" menuToggle icon-only><ion-icon name="list"></ion-icon></button>\n  </div>\n\n  <div class="currentitem" *ngIf="currentregional">\n    <button ion-item no-lines (click)="viewPlace(currentregional.title)">\n      <h2>{{ currentregional.title }}</h2>\n      <ion-note item-right icon-only><ion-icon name="ios-arrow-forward"></ion-icon></ion-note>\n    </button>\n  </div>\n<ion-content fullscreen>\n  \n\n    <div [hidden]="!(switch == \'list\')">\n      <div header-background-image padding style="background-image: url(\n        assets/imgs/bg.png);">\n        <img src="assets/imgs/logo-reales-bg.png"/>\n        <h2 ion-text color="light" header-title>Smart Property Assess</h2>\n        <p>Welcome to our Application for Real Estate Appraisal</p>\n      </div>\n      \n      <ion-list>\n        <ion-item>\n            <button menuClose ion-item item-title main-menu no-lines border (click)="nextProfile()">\n                <ion-icon icon-small item-left name="md-contact" style="color:aquamarine"></ion-icon>\n                Profile\n            </button>\n        </ion-item>\n        <ion-item>\n            <button menuClose ion-item item-title main-menu no-lines border (click)="openPage(p)">\n                <ion-icon icon-small item-left name="md-basket" style="color:aquamarine"></ion-icon>\n                Market Place\n            </button>\n        </ion-item>\n        <ion-item>\n          <button menuClose ion-item item-title main-menu no-lines border (click)="openEs()">\n              <ion-icon icon-small item-left name="md-exit" style="color:aquamarine"></ion-icon>\n              Appraisal\n          </button>\n      </ion-item>\n        <ion-item>\n            <button menuClose ion-item item-title main-menu no-lines border (click)="openPage(p)">\n                <ion-icon icon-small item-left name="md-information-circle" style="color:aquamarine"></ion-icon>\n                About Us\n            </button>\n        </ion-item>\n      </ion-list>\n    </div>\n    \n    <div class="map" [class.hidemap]="!((switch == \'map\') || error)">\n      <div style="padding-top:40px;">\n          <div #searchbar id="floating-panel" [hidden]="!search">\n            <img src="assets/imgs/logo-real.png" style="width: 150px;height:140px;" alt="">\n              <ion-row padding>\n                  <ion-list no-lines>\n                      <!--<ion-item [class.active]="focus === \'textSearch\'" (touchend)="setFocus(\'textSearch\')">\n                          <ion-label><ion-icon name="ios-map-outline"></ion-icon></ion-label>\n                          <ion-input type="number" disabled [ngModel]="textSearch" placeholder="ระบุเลขโฉนด" clearInput></ion-input>\n                      </ion-item>-->\n                      <ion-item>        \n                          <ion-label> <ion-icon name="ios-map-outline"></ion-icon></ion-label>\n                          <ion-input clearInput type="number" placeholder="ระบุเลขโฉนด" [(ngModel)]="textSearch"></ion-input>\n                      </ion-item>\n                      <br>\n                      <ion-item>\n                        <ion-label stacked>จังหวัด</ion-label>\n                        <ion-select interface="action-sheet" id="province" placeholder="กรุณาระบุจังหวัด">\n                          <ion-option *ngFor="let item of items_prov" (ionSelect)="select(item)" [value]="item">{{ item.PROVINCE_NAME }}</ion-option>\n                        </ion-select>\n                      </ion-item>\n                      \n                      <ion-item>\n                        <ion-label stacked>เขต/อำเภอ</ion-label>\n                        <ion-select [(ngModel)]="provincec" interface="action-sheet" id="amphur" placeholder="กรุณาระบุเขต/อำเภอ">\n                          <ion-option *ngFor="let amphur of amphur" (ionSelect)="selectAmphur(amphur)" [value]="amphur" >{{ amphur.AMPHUR_NAME }}</ion-option>\n                        </ion-select>\n                      </ion-item>\n                  </ion-list>\n                  \n                  \n                  \n                  <button ion-button block (click)="btnSearch()" #searchbar [hidden]="!search">ค้นหา</button>\n                  \n              </ion-row>\n              <ion-row padding>\n              </ion-row>  \n          </div>\n      </div>\n      \n            \n      <div id="map" #map></div>\n    </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/home/home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = (function () {
    function LoginPage(navCtrl, fb, nativeStorage, navParams, afAuth, authprovider, alertCtrl, loadingCtrl, toastCtrl, facebook, statusBar, googlePlus) {
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
        this.statusBar = statusBar;
        this.googlePlus = googlePlus;
        this.fireauth = __WEBPACK_IMPORTED_MODULE_8_firebase__["auth"]();
        this.FB_APP_ID = 122621955076543;
        this.user = {};
        this.userData = { "username": "", "password": "" };
        this.statusBar.hide();
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
    }
    LoginPage.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.loginSql = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.authprovider.postData(this.userData, 'login').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.userData) {
                console.log(_this.responseData);
                loader.dismiss();
                localStorage.setItem('userData', JSON.stringify(_this.responseData));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                loader.dismiss();
                alert("Username or Password Invalid");
            }
        }, function (err) {
            // Error log
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/login/login.html"*/'<ion-content class="background">\n  \n  <h1 style="margin-top:80px;">SMART PROPERTY ASSESS</h1>\n  <ion-card>\n  \n    <ion-card-header>\n      \n      <a (click)="skip()" float-Right>Skip This</a>\n    </ion-card-header>\n\n    <ion-card-content >\n      <!-- Add card content here! -->\n      <ion-list no-lines>\n        <ion-item>\n        <ion-label floating>\n          Email or Username\n        </ion-label>\n          <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n            Password\n        </ion-label>\n          <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n      </ion-item>\n        <ion-item>\n          <p>Forgot password?<a href="#" (click)="ForgotPassword()">Get Here</a></p>\n        </ion-item>\n        <ion-row style="margin-left:12%;margin-right:12%">\n        <button ion-button block round full class="btn" style="height:50px;" (click)="loginSql()">LOGIN</button>\n        </ion-row>\n      </ion-list>\n      <!--<b>OR</b>\n        <button ion-button color="primary" ion-left block (click)="doFbLogin()">\n          <ion-icon name="logo-facebook"></ion-icon>\n          <div>Login With Facebook</div>\n        </button>-->\n        <!--\n        <button ion-button color="danger" ion-left block (click)="googlelogin()">\n          <ion-icon name="logo-googleplus"></ion-icon>\n          <div>Login With Google</div>\n        </button> -->\n        <hr width="80%">\n        <a (click)="register()" style="font-size:20px" >Create an Account</a>\n    </ion-card-content>\n  \n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sell_sell__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(106);
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
    function EstimatePage(navCtrl, navParams, nativeStorage, restProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.dataReady = false;
        this.load_success = 0;
        this.lon1 = 100.772072;
        this.lon2 = 100.77227210000001;
        this.lat2 = 13.7217572;
        this.lat1 = 13.7201804;
        this.retrieveData();
        this.data = JSON.parse(localStorage.getItem('dataMap'));
    }
    EstimatePage.prototype.retrieveData = function () {
        var _this = this;
        this.nativeStorage.getItem('data_service').then(function (data) {
            _this.data_service = {
                lat: data.lat,
                lon: data.lon,
                id: data.id,
                well: data.well,
                road: data.road,
                shape: data.shape,
                width: data.width,
                size: data.size,
                appraisal: data.appraisal,
                distance: data.distance,
                type_size: data.type_size,
                province_id: data.province_id,
                amphur_code: data.amphur_code
            };
            _this.id = _this.data_service.id; //ระยะทางจาการวัด
            _this.well = _this.data_service.well;
            _this.road = _this.data_service.road;
            _this.shape = _this.data_service.shape;
            _this.width = _this.data_service.width;
            _this.size = _this.data_service.size;
            _this.appraisal = _this.data_service.appraisal;
            _this.appraisal_parse = _this.appraisal.toLocaleString();
            _this.distance = _this.data_service.distance;
            _this.type_size = _this.data_service.type_size;
            _this.lat = _this.data_service.lat;
            _this.lon = _this.data_service.lon;
            _this.province_id = _this.data_service.province_id;
            _this.amphur_code = _this.data_service.amphur_code;
            _this.dataReady = true;
            /*console.log(this.type_size);
            console.log(this.lat);
            console.log(this.lon);
            console.log(this.road);
            console.log(this.shape);
            console.log(this.width);*/
            _this.getInfo(_this.lat, _this.lon, _this.province_id, _this.amphur_code, _this.well, _this.road, _this.shape, _this.width, _this.type_size, _this.id, _this.appraisal, _this.size);
        }, function (error) {
            console.log(error);
        });
    };
    EstimatePage.prototype.getInfo = function (lat, lon, province_id, amphur_code, well, road, shape, width, type_size, id, appraisal, size) {
        var _this = this;
        this.presentLoading();
        this.restProvider.getTotal(lat, lon, province_id, amphur_code, well, road, shape, width, type_size, id, appraisal, size)
            .then(function (data) {
            var results = data;
            _this.result = results.toLocaleString();
            console.log(_this.result);
            var dataResults = { "results": results };
            var dataResultsJson = JSON.stringify(dataResults);
            localStorage.setItem('dataResults', dataResultsJson);
            console.log(dataResultsJson);
            _this.loading.dismiss();
            _this.load_success = 1;
        }, function (error) {
            console.log("พัง");
        });
    };
    EstimatePage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: "dots",
            content: 'กำลังประมวลผลข้อมูล'
        });
        this.loading.present();
    };
    EstimatePage.prototype.toSell = function () {
        var _this = this;
        this.presentLoading();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sell_sell__["a" /* SellPage */]);
        setTimeout(function () {
            _this.loading.dismiss();
        }, 2000);
    };
    EstimatePage.prototype.toHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    EstimatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estimate',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/estimate/estimate.html"*/'\n<ion-header header-ios hidden>\n    <ion-navbar transparent>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="primary"></ion-icon>\n      </button>\n      <ion-title text-left><h5 style="font-size:15px;">ประเมินราคาอสังหาริมทรัพย์</h5></ion-title>\n    </ion-navbar>\n  </ion-header>\n    <ion-content padding *ngIf=\'dataReady\'>\n        <div *ngIf=\'load_success == 1\'>\n            <h2 style="text-align:center;margin-top:15%">ผลการประเมินราคาอสังหาริมทรัพย์</h2>\n        <ion-col col-12 map-content transparent >\n            <ion-item-group>\n                \n                <ion-item border>\n                    <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                    <h5 no-paddnig style="color:lightgray">ราคาประเมินกรมที่ดิน</h5>\n                    <span>{{ appraisal_parse }} บาท/ตาราวา</span>\n                </ion-item>\n                <ion-item border>\n                  <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                  <h5 no-paddnig style="color:lightgray">ระยะห่างจากที่ดินถึงถนนหลัก</h5>\n                  <span>{{ distance }} กิโลเมตร</span>\n              </ion-item>\n                <ion-item border>\n                    <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                    <h5 no-paddnig style="color:lightgray">ขนาดที่ดิน</h5>\n                    <span>{{ size }} ตารางวา</span>\n                </ion-item>\n                <ion-item border>\n                    <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                    <h5 no-paddnig style="color:lightgray">ราคาประเมินราคาขาย(ตลาด)</h5>\n                    <span style="color:blue">{{ result }} บาท</span>\n                </ion-item>\n                <ion-row style="text-align:center">\n                    <ion-col col-12 style="padding-left:15%;padding-right:15%">\n                        <button ion-button round full color="light" (click)="toSell()" style="color:white;font-size:24px;height:50px;" class="grad">ลงขาย</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item-group>\n            <a (click)="toHome()" >กลับสู่หน้าหลัก</a>\n        </ion-col>\n            \n        </div>\n    </ion-content>\n    '/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/estimate/estimate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
    ], EstimatePage);
    return EstimatePage;
}());

//# sourceMappingURL=estimate.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appraisal_appraisal__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(39);
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
    function ListPage(navCtrl, navParams, authprovider, currencyPipe, restProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authprovider = authprovider;
        this.currencyPipe = currencyPipe;
        this.restProvider = restProvider;
        this.restProvider.getProduct()
            .then(function (prod) {
            _this.product = prod;
            //console.log(this.product);
            _this.data(prod);
        });
        // const data = JSON.parse(localStorage.getItem('userData'));
        // this.userDetails = data.userData;
    }
    ListPage.prototype.event = function (product) {
        this.coordinate = { "lat": product.LAT, "lng": product.LNG };
        this.dataSend = { "id": product.ITEM_ID };
        // console.log(JSON.stringify(this.coordinate));
        console.log(product.ITEM_ID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appraisal_appraisal__["a" /* AppraisalPage */], { id: product.ITEM_ID, lat: product.LAT, lng: product.LNG });
        //console.log(product.ID);
        //console.log(JSON.stringify(this.dataSend));
        // this.authprovider.postData(this.dataSend,'getProduct').then((result) => {
        //   this.responseData = result;
        //   if(this.responseData){
        //     this.productSend = JSON.stringify(this.responseData);
        //     //console.log(this.productSend);
        //     localStorage.setItem('itemData', this.productSend);
        //     //this.navCtrl.push(AppraisalPage);
        //   }
        //   else{ 
        //     alert(""); 
        //    }
        // }, (err) => {
        //   // Error log
        // });
        // this.authprovider.postData(this.dataSend,'getImg').then((result) => {
        //   this.responseData = result;
        //   if(this.responseData){
        //     this.imgSend = JSON.stringify(this.responseData);
        //     //console.log(this.imgSend);
        //     localStorage.setItem('imgData', this.imgSend);
        //     //this.navCtrl.push(AppraisalPage);
        //   }
        //   else{ 
        //     alert(""); 
        //    }
        // }, (err) => {
        //   // Error log
        // });
        // this.authprovider.postData(this.coordinate,'nearBy').then((result) => {
        //   this.responseData = result;
        //   if(this.responseData){
        //     this.nearSend = JSON.stringify(this.responseData);
        //     //console.log(this.nearSend);
        //     localStorage.setItem('near', this.nearSend);
        //     this.navCtrl.push(AppraisalPage);
        //   }
        //   else{ 
        //     alert(""); 
        //    }
        // }, (err) => {
        //   // Error log
        // });
    };
    ListPage.prototype.data = function (_data) {
        for (var i = 0; i < _data.length; i++) {
            this.price = this.currencyPipe.transform(_data[i].SELL_PRICE, 'THB ', true, '1.0-2');
            console.log(this.price);
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu" color="primary"></ion-icon>\n      </button>\n      <ion-title>\n          <ion-icon name="md-basket"></ion-icon>\n        Market Place\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-card *ngFor="let product of product" (click)="event(product)">\n      \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="https://smartball.000webhostapp.com/uploads/images_user/{{product.USER_IMG}}">\n          </ion-avatar>\n          <h2>{{ product.name }}</h2>\n          <p></p>\n        </ion-item>\n      \n        <img src="https://smartball.000webhostapp.com/uploads/images_product/{{product.NAME_IMG}}" style="height:300px" >\n        \n        <ion-card-content>\n          \n          <ion-item>\n              <ion-icon name="md-text" style="color:cornflowerblue" item-left large ></ion-icon>\n              \n              <h2 style="color:cornflowerblue">{{ product.NAME }}</h2>\n        </ion-item>\n          <ion-item>\n          <ion-icon name="md-cash" style="color:orangered" item-start large></ion-icon>\n          \n          <h2 style="color:orangered">{{product.SELL_PRICE | number: \'1.0-0\'}} บาท</h2>\n        </ion-item>\n        </ion-card-content>\n      \n        \n      </ion-card>\n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/list/list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* CurrencyPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(56);
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
        this.success = 0;
        this.imgs = 'assets/imgs/bg.png';
        if (localStorage.getItem('userData')) {
            this.success = 1;
            var data = JSON.parse(localStorage.getItem('userData'));
            this.userDetails = data.userData;
            console.log(this.userDetails.NAME_IMG);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
    }
    UserPage.prototype.logout = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: "dots",
            content: "Please wait..."
        });
        loader.present();
        localStorage.clear();
        setTimeout(function () {
            loader.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }, 2000);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/user/user.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n    \n    \n    <ion-content *ngIf=\'success == 1\'>\n      \n        \n      \n        <img src="https://smartball.000webhostapp.com/uploads/images_user/{{userDetails.NAME_IMG}}" class="dp">\n      \n      <ion-card *ngIf=\'success == 1\' class="card">\n        <ion-card-content no-margin>\n          <ion-card-title>\n             {{userDetails.name}}\n            </ion-card-title>\n          <p>\n              Email: {{userDetails.email}}\n          </p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <button ion-button block (click)="logout()">Logout</button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n     \n    </ion-content>\n    '/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/user/user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_list__ = __webpack_require__(121);
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
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellPage = (function () {
    function SellPage(navCtrl, transfer, file, nativeStorage, alert, imagePicker, sanitizer, authprovider, currencyPipe, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.file = file;
        this.nativeStorage = nativeStorage;
        this.alert = alert;
        this.imagePicker = imagePicker;
        this.sanitizer = sanitizer;
        this.authprovider = authprovider;
        this.currencyPipe = currencyPipe;
        this.loadingCtrl = loadingCtrl;
        this.myphoto = [];
        this.imageChosen = 0;
        this.a = 0;
        this.xxx = [];
        this.dataReady = false;
        this.test = 30;
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        console.log(this.userDetails);
        this.dataMaps = JSON.parse(localStorage.getItem('dataMap'));
        //console.log(this.data.lon);
        this.dataResult = JSON.parse(localStorage.getItem('dataResults'));
        this.result = this.dataResult.results.toLocaleString();
    }
    SellPage.prototype.up = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: "dots",
            content: 'กำลังอัพโหลดข้อมูล'
        });
        this.presentLoading();
        this.sellData = { "name": this.name,
            "area_size": this.dataMaps.area_size,
            "area_appraisal": this.dataResult.results,
            "dpm_appraisal": this.dataMaps.dpm_appraisal,
            "distance": this.dataMaps.distance,
            "sell_price": this.sell_price,
            "phone": this.phone,
            "province": this.dataMaps.province,
            "amphur": this.dataMaps.amphur,
            "deed_number": this.dataMaps.deed_number,
            "road": this.dataMaps.road,
            "width": this.dataMaps.width,
            "shape": this.dataMaps.shape,
            "description": this.description,
            "user_id": this.userDetails.user_id };
        if (this.name == null || this.sell_price == null || this.phone == null || this.description == null) {
            alert("กรุณากรอกข้อมูลให้ครบ");
            //loader.dismiss();
        }
        else {
            this.authprovider.postData(this.sellData, 'sellUpload').then(function (result) {
                _this.responseData = result;
                _this.uploadImage();
                //alert("สำเร็จ");
                /*setTimeout(() => {
                  loader.dismiss();
                }, 6000);*/
            }, function (err) {
                // Error log
            });
        }
        console.log(this.phone);
        console.log(this.name);
        console.log(this.description);
    };
    SellPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: "dots",
            content: 'กำลังอัพโหลดข้อมูล'
        });
        this.loading.present();
    };
    SellPage.prototype.takePhoto = function () {
        var _this = this;
        /*const options: CameraOptions = {
          quality: 70,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
    
        this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          //this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
          // Handle error
        });*/
        var options = {
            maximumImagesCount: 5,
            width: 500,
            height: 500,
            quality: 50,
        };
        this.imagePicker.getPictures(options).then(function (imgUrl) {
            for (var i = 0; i < imgUrl.length; i++) {
                //this.myphoto = imgUrl;
                //this.myphoto = imgUrl[i].replace('file://', '');
                _this.myphoto.push(imgUrl[i].replace('file://', ''));
            }
            //this.myphoto = imgUrl;
            console.log(_this.myphoto);
            _this.imageChosen = 1;
        });
    };
    SellPage.prototype.startUpload = function () {
        console.log("in start uploads");
        this.uploadImage();
    };
    SellPage.prototype.loader = function () {
    };
    SellPage.prototype.uploadImage = function () {
        //Show loading
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: "dots",
            content: 'กำลังอัพโหลดข้อมูล'
        });
        //create file transfer object
        var fileTransfer = this.transfer.create();
        //random int
        var random = Math.floor(Math.random() * 100);
        //option transfer
        var options = {
            fileKey: 'photo',
            fileName: "myImage_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        console.log("in this section");
        var xx = [1, 2, 3, 4, 5];
        fileTransfer.upload(this.myphoto[0], 'https://smartball.000webhostapp.com/uploads/upload_product.php', options)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        for (var i = 0; i < this.myphoto.length;) {
            (function (i) {
                setTimeout(function () {
                    fileTransfer.upload(_this.myphoto[i], 'https://smartball.000webhostapp.com/uploads/upload.php', options)
                        .then(function (data) {
                        console.log(data);
                        //alert("Success");
                        //loader.dismiss();
                    }, function (err) {
                        console.log(err);
                        //alert("Error");
                        //loader.dismiss();
                    });
                }, 800 * i);
            })(i++);
        }
        setTimeout(function () {
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__list_list__["a" /* ListPage */]);
        }, 7000);
    };
    SellPage.prototype.deletePhoto = function (index) {
        var _this = this;
        var confirm = this.alert.create({
            title: index,
            message: 'คุณต้องการลบรูปภาพนี้ใช้ไหม?',
            buttons: [
                {
                    text: 'ไม่ใช่',
                    handler: function () {
                        console.log('cancel');
                    }
                },
                {
                    text: 'ตกลง',
                    handler: function () {
                        _this.myphoto.splice(index, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    SellPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/sell/sell.html"*/'<!--\n  Generated template for the SellPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar transparent>\n  <button ion-button menuToggle>\n    <ion-icon name="menu" color="primary"></ion-icon>\n  </button>\n  <ion-title>ลงขาย</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      \n      <ion-row>\n          <ion-col col-12>\n              <ion-label color="primary" style="font-size: 16px;" stacked>ตั้งชื่อประกาศขาย</ion-label>\n              <ion-input required placeholder="ex.ขายบ้านถูกราคา 1 ล้านบาท"  type="text"  [(ngModel)]="name"></ion-input>\n          </ion-col>\n      </ion-row>\n     \n      <ion-row>\n        <ion-col col-6>\n            <ion-label color="primary" style="font-size: 16px;" stacked>ขนาดที่ดิน</ion-label>\n            <ion-input required type="text" [value]="dataMaps.area_size" style="color:blue" disabled></ion-input>\n        </ion-col>\n        <ion-col col-6>\n            <ion-label color="primary" style="font-size: 16px;" stacked>ราคาประเมิน</ion-label>\n            <ion-input required type="text" [value]="result" style="color:blue" disabled></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n            <ion-label color="primary" style="font-size: 16px;" stacked>ราคาขาย</ion-label>\n            <ion-input required placeholder="999,999"  type="number"  [(ngModel)]="sell_price"></ion-input>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n            <ion-label color="primary" style="font-size: 16px;" stacked>เบอร์โทร</ion-label>\n            <ion-input required placeholder="0895555555"  type="tel" [(ngModel)]="phone"></ion-input>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>      \n            <ion-label color="primary" style="font-size: 16px;" stacked>รายละเอียด</ion-label>\n            <textarea name="" id="" style="width:100%" placeholder="ใส่รายละเอียดของอสังหาริมทรัพย์เพิ่มเติม" rows="10" [(ngModel)]="description"></textarea>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n              <div *ngIf="imageChosen == 1 " >\n                <ion-label color="primary" style="font-size: 16px;" stacked>รูปภาพอสังหาริมทรัพย์</ion-label>\n                <ion-grid style="border: gray solid 2px;border-radius:5px;" >\n                    <ion-row>\n                      <ion-col width-50 *ngFor="let myphoto of myphoto" col-4>\n                          <ion-card class="block">\n                            \n                              <ion-icon name="ios-trash" class="deleteIcon" (click)="deletePhoto(index)"></ion-icon>\n                              <img [src]="myphoto" (click)="getImage()" class="img-st" alt="">\n                                \n                          </ion-card>\n                      </ion-col>\n                    </ion-row>\n                    <div class="border-st"> \n                        <ion-icon name="ios-reverse-camera-outline" class="plus" (click)="takePhoto()"></ion-icon>\n                    </div>\n                </ion-grid>  \n            </div>   \n            <div class="uploadWrap" *ngIf="imageChosen == 0" >\n                <ion-label color="primary" style="font-size: 16px;" stacked>รูปภาพอสังหาริมทรัพย์</ion-label>\n                <ion-icon (click)="takePhoto()" name="md-images" class="img-grad" style="color:#b9b8b8;"></ion-icon>\n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12>\n          <button ion-button round (click)="up()" full class="grad1">Upload</button>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/sell/sell.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["c" /* CurrencyPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], SellPage);
    return SellPage;
}());

//# sourceMappingURL=sell.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppraisalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(578);
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
 * Generated class for the AppraisalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppraisalPage = (function () {
    function AppraisalPage(navCtrl, navParams, view, modalCtrl, nativeStorage, authprovider, platform, launchNavigator, loadingCtrl, currencyPipe, callNumber, restProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modalCtrl = modalCtrl;
        this.nativeStorage = nativeStorage;
        this.authprovider = authprovider;
        this.platform = platform;
        this.launchNavigator = launchNavigator;
        this.loadingCtrl = loadingCtrl;
        this.currencyPipe = currencyPipe;
        this.callNumber = callNumber;
        this.restProvider = restProvider;
        this.success = 0;
        var getId = this.navParams.get('id');
        var getLat = this.navParams.get('lat');
        var getLng = this.navParams.get('lng');
        var dataToSend = { "id": getId };
        var dataTocoordinate = { "lat": getLat, "lng": getLng };
        this.presentLoading();
        this.authprovider.postData(dataToSend, 'getProduct').then(function (result) {
            _this.product = result;
            if (_this.product) {
                console.log(_this.product.PROVINCE_NAME);
                var ph = _this.product.PHONE;
                _this.phone = ph.slice(0, 3) + "-" + ph.slice(3, 6) + "-" + ph.slice(6);
                // console.log(JSON.stringify(this.product));
            }
            else {
                alert("");
            }
        }, function (err) {
            // Error log
        });
        this.authprovider.postData(dataToSend, 'getImg').then(function (result) {
            _this.product_img = result;
            if (_this.product_img) {
                _this.loading.dismiss();
                _this.success = 1;
                // console.log(JSON.stringify(this.product_img));
            }
            else {
                alert("");
            }
        }, function (err) {
            // Error log
        });
        this.authprovider.postData(dataTocoordinate, 'nearBy').then(function (result) {
            _this.near = result;
            if (_this.near) {
                var countNearBy = _this.near.length;
                if (countNearBy === undefined) {
                    _this.load = 1;
                    _this.nearBy = _this.near;
                }
                else if (countNearBy > 2) {
                    _this.load = 2;
                    _this.nearBy = _this.near;
                }
                else {
                    _this.load = 2;
                    _this.nearBy = _this.near;
                }
                // this.nearSend = JSON.stringify(this.responseData);
                // console.log(JSON.stringify(this.near));
                // localStorage.setItem('near', this.nearSend);
                // this.navCtrl.push(AppraisalPage);
            }
            else {
                alert("");
            }
        }, function (err) {
            // Error log
        });
        // this.product = JSON.parse(localStorage.getItem('itemData'));
        // this.product_img = JSON.parse(localStorage.getItem('imgData'));
        // var near = JSON.parse(localStorage.getItem('near'));
        // this.start = "";
        // var count = Object.keys(this.near).length;
        // console.log(count);
        // if(count == 2){
        //   this.load = 1;
        //   this.nearBy = JSON.parse(localStorage.getItem('near'));
        //   console.log('sdad');
        // }
        // else if(count > 2){
        //   this.load = 2;
        //   this.nearBy = JSON.parse(localStorage.getItem('near'));
        // }
        // else{
        //   this.load = 2;
        //   this.nearBy = JSON.parse(localStorage.getItem('near'));
        // }
        // var ph = this.product.PHONE;
        // this.phone = ph.slice(0,3)+"-"+ph.slice(3,6)+"-"+ph.slice(6);
    }
    AppraisalPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
    };
    AppraisalPage.prototype.event = function (product) {
        this.destination = product.LAT + ',' + product.LNG;
        console.log(this.destination);
        var options = {
            start: this.start,
        };
        this.launchNavigator.navigate(this.destination, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    AppraisalPage.prototype.call = function () {
        console.log("hi");
        this.callNumber.callNumber(this.product.PHONE, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    AppraisalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appraisal',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/appraisal/appraisal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-icon name="md-basket"></ion-icon>\n      Market Place\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n  <div *ngIf="success == 1">\n    <ion-card>\n      <div class="block">\n        <ion-slides class="image-slider" loop="true" effect="coverflow" autoplay="10000" pager="true" zoom="true">\n          <ion-slide *ngFor="let img of product_img">\n            <img src="https://smartball.000webhostapp.com/uploads/images/{{img.NAME_IMG}}" class="thumb-img" imageViewer>\n          </ion-slide>\n        </ion-slides>\n        <ion-fab right top class="Icon">\n          <button ion-fab (click)="event(product)">\n            <ion-icon name="pin"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n      <ion-item>\n\n        <button ion-button icon-left clear item-end>\n          <ion-icon name="md-pin"></ion-icon>\n          {{ product.PROVINCE_NAME }}, \n          {{ product.AMPHUR_NAME }}\n        </button>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-cash" style="color:orangered" item-start large></ion-icon>\n        <label stacked>ราคาประกาศขาย</label>\n        <h2 style="color:orangered">{{product.SELL_PRICE | number: \'1.0-0\'}} บาท</h2>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-pricetags" style="color:orange" item-left large></ion-icon>\n        <label stacked>ราคาประเมิน</label>\n        <h2 style="color:orange">{{product.AREA_APPRAISAL | number: \'1.0-0\'}} บาท</h2>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-pricetag" style="color:cornflowerblue" item-left large></ion-icon>\n        <label stacked>ราคาประเมินกรมที่ดิน</label>\n        <h2 style="color:cornflowerblue">{{product.DPM_APPRAISAL | number: \'1.0-0\'}} บาท</h2>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-map" style="color:cornflowerblue" item-left large></ion-icon>\n        <label stacked>ขนาดที่ดิน</label>\n        <h2 style="color:cornflowerblue">{{ product.SIZE }} ตารางวา</h2>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="navigate" style="color:cornflowerblue" item-left large></ion-icon>\n        <label stacked>ระยะห่างที่ดินถึงถนนหลัก</label>\n        <h2 style="color:cornflowerblue">{{ product.DISTANCE }} กิโลเมตร</h2>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-phone-portrait-outline" style="color:cornflowerblue" item-left large></ion-icon>\n        <label stacked>เบอร์โทรติดต่อ</label>\n        <h2 style="color:cornflowerblue" (click)="call()">{{ phone }}</h2>\n\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-text" style="color:cornflowerblue" item-left large></ion-icon>\n        <label stacked>รายละเอียดเพิ่มเติม</label>\n        <h2 style="color:cornflowerblue">{{ product.DESCRIPTION }}</h2>\n      </ion-item>\n      <ion-row style="text-align:center">\n            <ion-item>\n                    <ion-icon name="ios-compass" style="color:cornflowerblue" item-left large ></ion-icon>\n                    <label stacked>สถานที่ใกล้เคียงกับที่ดิน</label>\n                    <p>ภายในระยะ 2 กิโลเมตร</p>\n              </ion-item>\n      <ion-grid *ngIf=\'load == 2\'>\n            <ion-row *ngFor="let nearBy of nearBy">\n              \n              <ion-col col-6 style="border: lightgray solid 1px;">\n                    <h2>{{nearBy.NAME}}</h2>\n              </ion-col>\n              <ion-col col-6 style="border: lightgray solid 1px;">\n                    <h2>{{nearBy.distance | number: \'1.3-3\'}} กิโลเมตร</h2>\n                </ion-col>\n            </ion-row>\n            \n        </ion-grid>   \n        <ion-grid *ngIf=\'load == 1\'>\n          <ion-row style="border: lightgray solid 1px;">\n            \n            <ion-col col-6 >\n                  <h2>{{nearBy.NAME}}</h2>\n            </ion-col>\n            <ion-col col-6 >\n                  <h2>{{nearBy.distance}} ในระยะ 2 กิโลเมตร</h2>\n              </ion-col>\n          </ion-row>\n          \n      </ion-grid>   \n      </ion-row>  \n\n\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/appraisal/appraisal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* CurrencyPipe */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], AppraisalPage);
    return AppraisalPage;
}());

//# sourceMappingURL=appraisal.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(579);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, afAuth, authprovider, loadingCtrl, alertCtrl, camera, transfer, file, actionSheet, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.authprovider = authprovider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.actionSheet = actionSheet;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.imageChosen = 0;
        this.userData = { "username": "", "password": "", "name": "", "email": "" };
    }
    RegisterPage.prototype.signup = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: "dots",
            content: 'กำลังสมัครสมาชิก'
        });
        loader.present();
        this.authprovider.postData(this.userData, 'signup').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.userData) {
                //console.log(this.responseData);
                //localStorage.setItem('userData', JSON.stringify(this.responseData));
                loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            else {
                alert("User already exists");
            }
        }, function (err) {
            // Error log
        });
        this.upload();
    };
    RegisterPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.chooseImage = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            title: 'Choose Picture Source',
            buttons: [
                {
                    text: 'Gallery',
                    icon: 'albums',
                    handler: function () {
                        _this.actionHandler(1);
                    }
                }, {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.actionHandler(2);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RegisterPage.prototype.actionHandler = function (selection) {
        var _this = this;
        var options;
        if (selection == 1) {
            options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: this.camera.EncodingType.JPEG,
                saveToPhotoAlbum: false,
                targetWidth: 600,
                targetHeight: 850,
            };
        }
        else {
            options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: this.camera.EncodingType.JPEG,
                saveToPhotoAlbum: true,
                targetWidth: 600,
                targetHeight: 850,
            };
        }
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imageChosen = 1;
            _this.imagePath = base64Image;
        });
    };
    RegisterPage.prototype.upload = function () {
        //create file transfer object
        var fileTransfer = this.transfer.create();
        //random int
        var random = Math.floor(Math.random() * 100);
        //option transfer
        var options = {
            fileKey: 'photo',
            fileName: "myImage_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {}
        };
        //file transfer action
        console.log("in this section");
        fileTransfer.upload(this.imagePath, 'https://smartball.000webhostapp.com/uploads/user_upload.php', options)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n  \n    <ion-navbar>\n      <ion-title>Register</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row padding-horizontal align-items-start>\n          \n          <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n              \n              \n              <h1 ion-text style="color:lightgray;font-size:35px;" title>Register your new Account</h1>\n              <div class="uploadWrap" *ngIf="imageChosen == 0" >\n                  <ion-icon (click)="chooseImage()" name="ios-camera" class="camera" ></ion-icon>\n                  <ion-icon (click)="chooseImage()" class="user" name="ios-contact" style="color:#b9b8b8;"></ion-icon>\n              </div>\n              <div class="imgWrap" *ngIf="imageChosen == 1" >\n                  <ion-icon (click)="chooseImage()" name="ios-camera-outline" class="camera"></ion-icon>\n                  <img [src]="imagePath" class="img-user" (click)="chooseImage()" alt="">\n              </div>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>EMAIL</ion-label>\n                  <ion-input required placeholder="Your e-mail address" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="userData.email"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>USERNAME</ion-label>\n                  <ion-input required placeholder="Your Lastname" type="text" required [(ngModel)]="userData.username"></ion-input>\n              </ion-item>\n              \n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>FULL NAME</ion-label>\n                  <ion-input required placeholder="Your Firstname & Lastname" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="userData.name"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>PASSWORD</ion-label>\n                  <ion-input required placeholder="Enter your password" type="password" [(ngModel)]="userData.password"></ion-input>\n                </ion-item>\n              \n              \n              <button ion-button full round (click)="signup()" class="img-grad">Register</button>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  </ion-content>\n  <!--<ion-content padding class="appBackground">\n    <ion-card>\n      <ion-card-header>\n        Registration\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label stacked>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="userData.name"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label stacked>Username</ion-label>\n            <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n          </ion-item>\n  \n          <button ion-button full color="success" (click)="signup()">Sign up</button>\n          <a href="#" (click)="login()">Login Page</a>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>-->\n  '/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/register/register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estimate_estimate__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(51);
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
    function MapDirectionPage(navCtrl, navParams, plt, authprovider, nativeStorage, loadingCtrl, restProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.authprovider = authprovider;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.dataReady = false;
        this.currentTab = 0;
        this.n = 0;
        this.load_success = 0;
        this.plt.ready().then(function () {
            _this.showMap();
        });
    }
    MapDirectionPage.prototype.logForm = function (form) {
    };
    MapDirectionPage.prototype.ionViewDidLoad = function () {
        this.showTab(this.currentTab);
    };
    MapDirectionPage.prototype.showTab = function (n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
            document.getElementById("succ").style.display = "none";
        }
        else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("succ").style.display = "inline";
            document.getElementById("nextBtn").style.display = "none";
        }
        else {
            document.getElementById("nextBtn").style.display = "inline";
            document.getElementById("succ").style.display = "none";
        }
        //... and run a function that will display the correct step indicator:
        this.fixStepIndicator(n);
    };
    MapDirectionPage.prototype.nextPrev = function (n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !this.validateForm())
            return false;
        // Hide the current tab:
        x[this.currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        this.currentTab = this.currentTab + n;
        // if you have reached the end of the form...
        if (this.currentTab >= x.length) {
            // ... the form gets submitted:
            return false;
        }
        // Otherwise, display the correct tab:
        this.showTab(this.currentTab);
    };
    MapDirectionPage.prototype.validateForm = function () {
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
    };
    MapDirectionPage.prototype.fixStepIndicator = function (n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class on the current step:
        x[n].className += " active";
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
                size: data.size,
                province_id: data.province_id,
                amphur_code: data.amphur_code,
                deed_number: data.deed_number
            };
            _this.deed_number = _this.std.deed_number;
            _this.appraisal = _this.std.appraisal;
            _this.size = _this.std.size;
            _this.amphur_code = _this.std.amphur_code;
            _this.province_id = _this.std.province_id;
            _this.pot = _this.std.lattitude + ',' + _this.std.longitude;
            _this.lat = _this.std.lattitude;
            _this.lon = _this.std.longitude;
            _this.dataReady = true;
        }, function (error) {
            console.log("error");
        });
        console.log(this.lat);
        directionsService.route({
            origin: this.pot,
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
            }
        });
        if (this.size > 100) {
            this.type_size = 10;
            return this.type_size;
        }
        else {
            this.type_size = 9;
            return this.type_size;
        }
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
        this.getposition_lat = marker.getPosition().lat();
        this.getposition_lng = marker.getPosition().lng();
        this.calDistance(this.getposition_lat, this.getposition_lng);
        this.attachInstructionText(stepDisplay, marker, myRoute.steps[j[0]].instructions, this.getposition_lat, this.getposition_lng, map);
    };
    MapDirectionPage.prototype.attachInstructionText = function (stepDisplay, marker, text, getposition_lat, getposition_lng, map) {
        google.maps.event.addListener(marker, 'click', function () {
            stepDisplay.setContent(text + getposition_lat + ',' + getposition_lng);
            stepDisplay.open(map, marker);
        });
    };
    MapDirectionPage.prototype.calDistance = function (position_lat, position_lng) {
        this.pos_lat = position_lat;
        this.pos_lng = position_lng;
        console.log(this.pos_lat, "x1");
        console.log(this.pos_lng, "x2");
        var rk = 6373;
        var dlon1 = this.lon * Math.PI / 180;
        var dlon2 = (this.pos_lng * Math.PI) / 180;
        var dlat1 = this.lat * Math.PI / 180;
        var dlat2 = (this.pos_lat * Math.PI) / 180;
        var dlon = dlon2 - dlon1;
        var dlat = dlat2 - dlat1;
        this.a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(this.lat) * Math.cos(this.pos_lat) * Math.pow(Math.sin(dlon / 2), 2);
        this.c = 2 * Math.atan2(Math.sqrt(this.a), Math.sqrt(1 - this.a));
        this.dk = this.c * rk;
        this.km = Math.max(this.dk * 1000 / 1000).toFixed(3);
        this.result_distance = this.km;
        console.log(this.result_distance, "re");
        if (this.result_distance < 0.5) {
            this.id_13 = 13;
            return this.id_13;
        }
        else {
            this.id_13 = 14;
            return this.id_13;
        }
    };
    MapDirectionPage.prototype.clickservice = function () {
        var _this = this;
        this.nativeStorage.setItem('data_service', {
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
            amphur_code: this.amphur_code,
            deed_number: this.deed_number
        }).then(function () {
            _this.dataMap = {
                "deed_number": _this.deed_number,
                "lat": _this.lat,
                "lon": _this.lon,
                "area_size": _this.size,
                "dpm_appraisal": _this.appraisal,
                "province": _this.province_id,
                "amphur": _this.amphur_code,
                "shape": _this.shape,
                "road": _this.road,
                "width": _this.width,
                "distance": _this.result_distance
            };
            _this.dataMapJson = JSON.stringify(_this.dataMap);
            console.log(_this.dataMapJson);
            localStorage.setItem('dataMap', _this.dataMapJson);
            //console.log(this.type_size);
            /*console.log(this.well);
            console.log(this.road);
            console.log(this.shape);
            console.log(this.width);
            console.log(this.size);*/
            var loading = _this.loadingCtrl.create({
                content: 'กำลังประเมินราคา'
            });
            loading.present();
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__estimate_estimate__["a" /* EstimatePage */]);
            }, 1000);
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
        }, function (error) {
            console.log('พัง');
        });
    };
    MapDirectionPage.prototype.ionViewWillEnter = function () {
        //console.log(this.result_distance,"result");
        //console.log(this.lat,"d1");
        //console.log(this.pos_lat,"d2");
        var _this = this;
        this.showMap();
        this.presentLoading();
        this.dataSend = { "province": this.province_id, "amphur": this.amphur_code };
        this.authprovider.postData(this.dataSend, 'checkWell').then(function (result) {
            _this.data_well = result;
        }, function (err) {
            // Error log
        });
        this.authprovider.postData(this.dataSend, 'checkRoad').then(function (result) {
            _this.data_road = result;
        }, function (err) {
            // Error log
        });
        this.authprovider.postData(this.dataSend, 'checkShape').then(function (result) {
            _this.data_shape = result;
        }, function (err) {
            // Error log
        });
        this.authprovider.postData(this.dataSend, 'checkWidth').then(function (result) {
            _this.data_width = result;
            _this.load_success = 1;
            _this.loading.dismiss();
        }, function (err) {
            // Error log
        });
        /*this.restProvider.getWell(this.province_id,this.amphur_code)
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
          this.load_success = 1;
          console.log(this.data_width);
        });*/
    };
    MapDirectionPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MapDirectionPage.prototype.select = function (item) {
        this.well = item.ID;
        return this.well;
    };
    MapDirectionPage.prototype.select_hr = function (item_hr) {
        this.road = item_hr.ID;
        console.log(this.road);
        return this.road;
    };
    MapDirectionPage.prototype.select_sp = function (item_sp) {
        this.shape = item_sp.ID;
        return this.shape;
    };
    MapDirectionPage.prototype.select_wd = function (item_wd) {
        this.width = item_wd.ID;
        return this.width;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapDirectionPage.prototype, "mapRef", void 0);
    MapDirectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-direction',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/pages/map-direction/map-direction.html"*/'<ion-header header-ios>\n    <ion-navbar transparent>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="primary"></ion-icon>\n      </button>\n      <ion-title text-left><h5 style="font-size:15px;">ประเมินราคาอสังหาริมทรัพย์</h5></ion-title>\n    </ion-navbar>\n  </ion-header>\n<!--<ion-content padding >\n    <div #map id="map"></div>\n    <div id="warnings-panel"></div>\n    \n        \n<div *ngIf="load_success == 1 ">\n        <div style="text-align:center;">\n                <span class="step" id="step1"></span>\n                <span class="step" id="step2"></span>\n                <span class="step" id="step3"></span>\n                <span class="step" id="step4"></span>\n        </div>\n        <h1 id="h1">กรอกข้อมูลเพิ่มเติม:</h1>\n        <div class="tab">\n            <p>sadasd</p>\n        </div>\n        <ion-list radio-group name="radio" [(ngModel)]="itemChecked_well"> \n            <ion-item *ngFor="let item of data_well" >\n                <ion-label>{{item.factor_name}}</ion-label>\n                <ion-radio (ionSelect)="select(item)"  [value]="item"></ion-radio>\n            </ion-item>\n        </ion-list>\n    \n    \n        <ion-list radio-group name="radio" [(ngModel)]="itemChecked_height_road"> \n            <ion-item *ngFor="let item_hr of data_road" >\n                <ion-label>{{item_hr.factor_name}}</ion-label>\n                <ion-radio (ionSelect)="select_hr(item_hr)" [value]="item_hr"></ion-radio>\n            </ion-item>\n        </ion-list>\n    \n    \n        <ion-list radio-group name="radio" [(ngModel)]="itemChecked_shape"> \n            <ion-item *ngFor="let item_sp of data_shape" >\n                <ion-label>{{item_sp.factor_name}}</ion-label>\n                <ion-radio (ionSelect)="select_sp(item_sp)" [value]="item_sp"></ion-radio>\n            </ion-item>\n        </ion-list>\n    \n    \n        <ion-list radio-group name="radio" [(ngModel)]="itemChecked_width"> \n            <ion-item *ngFor="let item_wd of data_width" >\n                <ion-label>{{item_wd.factor_name}}</ion-label>\n                <ion-radio (ionSelect)="select_wd(item_wd)" [value]="item_wd"></ion-radio>\n            </ion-item>\n        </ion-list>\n        \n        <div style="float:left;">\n                <button ion-button round  id="prevBtn" class="grad-prev" (click)="nextPrev(-1)">\n                        <ion-icon name="md-arrow-round-back" style="font-size:30px;"></ion-icon>    \n                </button>\n            </div>\n            <div style="float:right;">\n                <button ion-button round class="grad" id="nextBtn" (click)="nextPrev(1)">\n                    <ion-icon name="md-arrow-round-forward" style="font-size:30px;"></ion-icon>    \n                </button>\n                <button ion-button round (click)="clickservice()" class="grad" id="succ"> ประเมินราคา </button>\n            </div>\n</div>\n</ion-content>-->\n<ion-content padding>\n        <div #map id="map"></div>\n        <div id="warnings-panel"></div>\n        <form (ngSubmit)="logForm(form)">\n        \n        <div style="text-align:center;">\n            <span class="step" id="step1">1</span>\n            <span class="step" id="step2">2</span>\n            <span class="step" id="step1">3</span>\n            <span class="step" id="step2">4</span>\n        </div>\n        <div *ngIf="load_success == 1 ">\n        <h1 id="h1">กรอกข้อมูลเพิ่มเติม</h1>\n        </div>\n        <div class="tab">\n                \n                <div *ngIf="load_success == 1 ">\n                <h2>1. ที่ดินของคุณมีลักษณะเป็นบ่อน้ำหรือไม่ ?</h2>\n                <ion-list radio-group name="radio" [(ngModel)]="itemChecked_well"> \n                        <ion-item *ngFor="let item of data_well" >\n                            <ion-label>{{item.FACTOR_NAME}}</ion-label>\n                            <ion-radio (ionSelect)="select(item)"  [value]="item"></ion-radio>\n                        </ion-item>\n                </ion-list>\n                </div>\n        </div>\n        <div class="tab">\n                <h2>2. ที่ดินของคุณมีลักษณะที่สูงกว่าถนนหรือไม่ ?</h2>\n                <ion-list radio-group name="radio" [(ngModel)]="itemChecked_height_road"> \n                        <ion-item *ngFor="let item_hr of data_road" >\n                            <ion-label>{{item_hr.FACTOR_NAME}}</ion-label>\n                            <ion-radio (ionSelect)="select_hr(item_hr)" [value]="item_hr"></ion-radio>\n                        </ion-item>\n                </ion-list>\n        </div>\n        <div class="tab">\n                <h2>3. ที่ดินของคุณมีลักษณะของรูปแปลงที่ดินเป็นอย่างไร ?</h2>\n                <ion-list radio-group name="radio" [(ngModel)]="itemChecked_shape"> \n                        <ion-item *ngFor="let item_sp of data_shape" >\n                            <ion-label>{{item_sp.FACTOR_NAME}}</ion-label>\n                            <ion-radio (ionSelect)="select_sp(item_sp)" [value]="item_sp"></ion-radio>\n                        </ion-item>\n                </ion-list>\n        </div>\n        <div class="tab">\n                <h2 style="text-align:center">4. ขนาดของที่ดินมีหน้ากว้างหรือหน้าแคบ ?</h2>\n                <ion-row>\n                    \n                    <ion-col style="text-align:right"  col-2>\n                        <p>Notice:</p>\n                    </ion-col>\n                    <ion-col style="text-align:left" col-8>\n                        <p>ด้านของที่ดินในส่วนที่ ติดถนนมีความยาวมากกว่า 50 เมตร คือ <b style="color:blue">หน้ากว้าง</b></p>\n                        <p>ด้านของที่ดินในส่วนที่ ติดถนนมีความยาวน้อยกว่า 50 เมตร คือ <b style="color:blue">หน้าแคบ</b></p>        \n                    </ion-col>\n                </ion-row>\n                <ion-list radio-group name="radio" [(ngModel)]="itemChecked_width"> \n                        <ion-item *ngFor="let item_wd of data_width" >\n                            <ion-label>{{item_wd.FACTOR_NAME}}</ion-label>\n                            <ion-radio (ionSelect)="select_wd(item_wd)" [value]="item_wd"></ion-radio>\n                        </ion-item>\n                </ion-list>\n        </div>\n        <div style="float:left;">\n                <button ion-button round  id="prevBtn" class="grad-prev" (click)="nextPrev(-1)">\n                        <ion-icon name="md-arrow-round-back" style="font-size:30px;"></ion-icon>    \n                </button>\n            </div>\n            <div style="float:right;">\n                <button ion-button round class="grad" *ngIf="load_success == 1 " id="nextBtn" (click)="nextPrev(1)">\n                    <ion-icon name="md-arrow-round-forward" style="font-size:30px;"></ion-icon>    \n                </button>\n                <button ion-button round (click)="clickservice()" class="grad" id="succ"> ประเมินราคา </button>\n            </div>\n            <a href="" id="nextBtn" style="display:none"></a>\n    </form> \n        \n    </ion-content>'/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/pages/map-direction/map-direction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */]])
    ], MapDirectionPage);
    return MapDirectionPage;
}());

//# sourceMappingURL=map-direction.js.map

/***/ }),

/***/ 228:
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
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appraisal/appraisal.module": [
		876,
		5
	],
	"../pages/estimate/estimate.module": [
		875,
		4
	],
	"../pages/list/list.module": [
		877,
		3
	],
	"../pages/map-direction/map-direction.module": [
		878,
		2
	],
	"../pages/register/register.module": [
		879,
		1
	],
	"../pages/sell/sell.module": [
		880,
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
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ion_digit_keyboard_cmp_ion_digit_keyboard_cmp__ = __webpack_require__(582);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ion_digit_keyboard_cmp_ion_digit_keyboard_cmp__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(464);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_map_direction_map_direction__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_user__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_estimate_estimate__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_appraisal_appraisal__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sell_sell__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_firebase_config__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_parallax_parallax__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_list_list__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_rest_rest__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_ion_digit_keyboard_ion_digit_keyboard_module__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_image_picker__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ionic_img_viewer__ = __webpack_require__(868);
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
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_direction_map_direction__["a" /* MapDirectionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_23__directives_parallax_parallax__["a" /* ParallaxDirective */],
                __WEBPACK_IMPORTED_MODULE_15__pages_estimate_estimate__["a" /* EstimatePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_appraisal_appraisal__["a" /* AppraisalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sell_sell__["a" /* SellPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_26__components_ion_digit_keyboard_ion_digit_keyboard_module__["a" /* IonDigitKeyboard */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/estimate/estimate.module#EstimatePageModule', name: 'EstimatePage', segment: 'estimate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appraisal/appraisal.module#AppraisalPageModule', name: 'AppraisalPage', segment: 'appraisal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-direction/map-direction.module#MapDirectionPageModule', name: 'MapDirectionPage', segment: 'map-direction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell/sell.module#SellPageModule', name: 'SellPage', segment: 'sell', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_30_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_direction_map_direction__["a" /* MapDirectionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_estimate_estimate__["a" /* EstimatePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_appraisal_appraisal__["a" /* AppraisalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sell_sell__["a" /* SellPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_image_picker__["a" /* ImagePicker */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
var url = 'http://localhost/pHP-Slim-Restful-master/api/';
var apiUrl = 'https://smartball.000webhostapp.com/PHP_DataUpload/api/';
var AuthProvider = (function () {
    function AuthProvider(afAuth, http) {
        this.afAuth = afAuth;
        this.http = http;
        this.userProfile = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('users');
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
    AuthProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(326);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonDigitKeyboardCmp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IonDigitKeyboardCmp = (function () {
    function IonDigitKeyboardCmp(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.leftActionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.rightActionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.numberClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        //@Output() onShow: EventEmitter<any> = new EventEmitter();
        //@Output() onHide: EventEmitter<any> = new EventEmitter();
        this.zoom = 1;
        this.themes = ['light', 'dark', 'ionic', 'opaque-black', 'opaque-white', 'dusk', 'nepal', 'alihossein', 'messenger'];
        this.animations = ['slide', 'pop']; // @TODO
        // Observables
        this.clickSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.showSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.hideSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this._align = 'center';
        this._animation = 'default'; // @TODO
        this._theme = 'ionic';
        this._leftActionOptions = { visibility: 'hidden' };
        this._rightActionOptions = { visibility: 'hidden' };
        this.visible = true;
        this.roundButtons = false;
        this.showLetters = true;
        this.swipeToHide = true;
        this.resize = undefined; // @TODO: Implement content resizing
    }
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "onClick", {
        get: function () { return this.clickSub; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "onShow", {
        get: function () { return this.showSub; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "onHide", {
        get: function () { return this.hideSub; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "align", {
        get: function () { return this._align; },
        set: function (v) {
            ['left', 'center', 'right'].indexOf(v) > -1 ? this._align = v : this.log('Invalid [align] value "' + v + '".', 'error');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "animation", {
        get: function () { return this._animation; },
        set: function (v) {
            this.animations.indexOf(v) > -1 ? this._animation = v : this.log('Invalid [animation] value "' + v + '".', 'error');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "theme", {
        get: function () { return this._theme; },
        set: function (v) {
            this.themes.indexOf(v) > -1 ? this._theme = v : this.log('Invalid [theme] value "' + v + '".', 'error');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "width", {
        get: function () { return this._width; },
        set: function (v) {
            var isPercent = String(v).indexOf('%') > -1 ? true : false;
            this._width = parseInt(v) + (isPercent ? '%' : 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "leftActionOptions", {
        set: function (v) {
            if (typeof v == 'object') {
                this._leftActionOptions.visibility = 'visible';
                for (var opt in v) {
                    if (opt == 'hidden') {
                        this._leftActionOptions.visibility = (v[opt] ? 'hidden' : 'visible');
                    }
                    else {
                        this._leftActionOptions[opt] = v[opt];
                    }
                }
            }
            if (typeof v == 'boolean') {
                this._leftActionOptions.visibility = (v ? 'visible' : 'hidden');
                if (v === true)
                    this.log('Left action button is set to "true", an empty button is displayed.');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "leftAction", {
        get: function () { return this._leftActionOptions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "rightActionOptions", {
        set: function (v) {
            if (typeof v == 'object') {
                this._rightActionOptions.visibility = 'visible';
                for (var opt in v) {
                    if (opt == 'hidden') {
                        this._rightActionOptions.visibility = (v[opt] ? 'hidden' : 'visible');
                    }
                    else {
                        this._rightActionOptions[opt] = v[opt];
                    }
                }
            }
            if (typeof v == 'boolean') {
                this._rightActionOptions.visibility = (v ? 'visible' : 'hidden');
                if (v === true)
                    this.log('Right action button is set to "true", an empty button is displayed.');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "rightAction", {
        get: function () { return this._rightActionOptions; },
        enumerable: true,
        configurable: true
    });
    IonDigitKeyboardCmp.prototype.ngOnInit = function () {
        this.adjustZoomLevel();
        this.initSwipeGesture();
    };
    IonDigitKeyboardCmp.prototype.ngOnDestroy = function () {
        // @TODO unsubscribe and use clear() method
    };
    /**
     * Called when any keyboard button is clicked
     *
     * @param {any} event
     * @param {*} key
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.btnClick = function (event, key) {
        // Prevent click on keyboard swip
        if (this.swipeToHide && this._isSwiping)
            return;
        this.buttonClick.emit(key);
        this.onClick.next(key);
        if (key == 'left')
            this.leftActionClick.emit();
        if (key == 'right')
            this.rightActionClick.emit();
        if (typeof key == 'number')
            this.numberClick.emit(key);
    };
    /**
     * Called on window resize.
     *
     */
    IonDigitKeyboardCmp.prototype.onWindowResize = function (event) {
        // @TODO resize content
        // .parentElement.parentElement.querySelector(this.resize);
        //     height: calc(100% - 287px);
        this.adjustZoomLevel();
    };
    /**
     * Call this method to show the keyboard.
     *
     * @public
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.show = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        if (!this.visible) {
            this.visible = true;
            setTimeout(function () { callback(); _this.onShow.next(); }, this.getTransitionDuration(this.el.nativeElement));
        }
    };
    /**
     * Call this method to hide the keyboard.
     *
     * @public
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.hide = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        if (this.visible) {
            this.visible = false;
            setTimeout(function () { callback(); _this.onHide.next(); }, this.getTransitionDuration(this.el.nativeElement));
        }
    };
    /**
     * Call this to destroy the current keyboard element.
     * You can pass a callback to be called right after.
     * Does not destroy the component it-self (yet).
     *
     * @public
     * @param {Function} callback
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.destroy = function (callback) {
        if (callback === void 0) { callback = function (success) { }; }
        this.el.nativeElement.remove();
        callback(true);
    };
    /**
     * Adjust the keyboard zoom level.
     * Helps maintain proper visual.
     *
     * @private
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.adjustZoomLevel = function () {
        var referenceHeight = 568; // iPhone 5
        var currentHeight = window.screen.height;
        this.zoom = currentHeight / referenceHeight;
    };
    /**
     * Init the swipe top to bottom gesture.
     *
     * @private
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.initSwipeGesture = function () {
        var _this = this;
        this._swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el.nativeElement, {
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]
            ]
        });
        this._swipeGesture.listen();
        this._swipeGesture.on('swipedown', function (e) { return _this.onSwipe(e); });
    };
    /**
     * Called when the user swipe the keyboard down.
     *
     * @param {Gesture} event
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.onSwipe = function (event) {
        var _this = this;
        if (this.swipeToHide) {
            this._isSwiping = true;
            this.hide();
            setTimeout(function () { return _this._isSwiping = false; }, event['deltaTime'] || 250);
        }
    };
    /**
     * Log utility
     *
     * @private
     * @param {string} message
     * @param {string} [type='log | warning | error']
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.log = function (message, type) {
        if (type === void 0) { type = 'log'; }
        if (console) {
            var c = '#3690CB';
            if (type === 'error')
                c = '#e74c3c';
            if (type === 'warning')
                c = '#f39c12';
            console.log('%c◼︎ IonDigitKeyboard%c: ' + message, 'font-weight: bold; color: ' + c + ';', '');
        }
    };
    /**
     * Return the transition duration of an HTMLElement if exists.
     *
     * @private
     * @param {HTMLElement} el
     * @returns {Number}
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.getTransitionDuration = function (el) {
        var ms = window.getComputedStyle(el, null).getPropertyValue("transition-duration").split(',')[0];
        var multiplier = ms.indexOf('s') > -1 ? 1000 : 1;
        return parseFloat(ms) * multiplier;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], IonDigitKeyboardCmp.prototype, "buttonClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], IonDigitKeyboardCmp.prototype, "leftActionClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], IonDigitKeyboardCmp.prototype, "rightActionClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], IonDigitKeyboardCmp.prototype, "numberClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IonDigitKeyboardCmp.prototype, "align", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IonDigitKeyboardCmp.prototype, "animation", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IonDigitKeyboardCmp.prototype, "theme", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IonDigitKeyboardCmp.prototype, "width", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IonDigitKeyboardCmp.prototype, "leftActionOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IonDigitKeyboardCmp.prototype, "rightActionOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.visible'), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IonDigitKeyboardCmp.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IonDigitKeyboardCmp.prototype, "roundButtons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IonDigitKeyboardCmp.prototype, "showLetters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IonDigitKeyboardCmp.prototype, "swipeToHide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], IonDigitKeyboardCmp.prototype, "resize", void 0);
    IonDigitKeyboardCmp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-digit-keyboard',template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/components/ion-digit-keyboard/components/ion-digit-keyboard-cmp/ion-digit-keyboard-cmp.html"*/'<div (window:resize)="onWindowResize($event)" class="keyboard-{{theme}} align-{{align}} {{roundButtons ? \'round-buttons\' : \'\'}} {{showLetters == false ? \'no-letters\' : \'\'}}" [style.width]="width">\n	<ng-content select="ion-toolbar"></ng-content>\n    <div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 1)">\n				<div class="digit-keyboard-key-number">1\n					<div class="digit-keyboard-key-letters"></div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 2)">\n				<div class="digit-keyboard-key-number">2\n					<div class="digit-keyboard-key-letters">ABC</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 3)">\n				<div class="digit-keyboard-key-number">3\n					<div class="digit-keyboard-key-letters">DEF</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 4)">\n				<div class="digit-keyboard-key-number">4\n					<div class="digit-keyboard-key-letters">GHI</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 5)">\n				<div class="digit-keyboard-key-number">5\n					<div class="digit-keyboard-key-letters">JKL</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 6)">\n				<div class="digit-keyboard-key-number">6\n					<div class="digit-keyboard-key-letters">MNO</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 7)">\n				<div class="digit-keyboard-key-number">7\n					<div class="digit-keyboard-key-letters">PQRS</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 8)">\n				<div class="digit-keyboard-key-number">8\n					<div class="digit-keyboard-key-letters">TUV</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 9)">\n				<div class="digit-keyboard-key-number">9\n					<div class="digit-keyboard-key-letters">WXYZ</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper" [style.visibility]="leftAction.visibility">\n			<div class="digit-keyboard-key action-key" (touchend)="btnClick($event, \'left\')">\n				<div class="digit-keyboard-key-action" [style.font-size]="leftAction.fontSize">\n                    <ion-icon *ngIf="leftAction.iconName" [name]="leftAction.iconName"></ion-icon>\n                    <div *ngIf="!leftAction.iconName && leftAction.text">{{leftAction.text}}</div>\n                </div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 0)">\n				<div class="digit-keyboard-key-number" style="margin-top: -0.30em;">0</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper" [style.visibility]="rightAction.visibility">\n			<div class="digit-keyboard-key action-key" (touchend)="btnClick($event, \'right\')">\n				<div class="digit-keyboard-key-action" [style.font-size]="rightAction.fontSize">\n                    <ion-icon *ngIf="rightAction.iconName" [name]="rightAction.iconName"></ion-icon>\n                    <div *ngIf="!rightAction.iconName && rightAction.text">{{rightAction.text}}</div>\n                </div>\n			</div>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/components/ion-digit-keyboard/components/ion-digit-keyboard-cmp/ion-digit-keyboard-cmp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], IonDigitKeyboardCmp);
    return IonDigitKeyboardCmp;
}());

!function () { var t = document.createElement("script"); t.type = "text/javascript", t.innerText = "var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-91756356-1']); _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();"; var e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(t, e); }();
//# sourceMappingURL=ion-digit-keyboard-cmp.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { homeProvider } from '../../pages/home/home'

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http, nativeStorage) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.apiUrl = 'http://services-spa.azurewebsites.net/api/values';
        this.UrlProvince = 'https://smartball.000webhostapp.com/uploads/get_province.php';
        this.UrlAmphur = 'http://services-spa.azurewebsites.net/api/province';
        this.UrlMarker = 'http://services-spa.azurewebsites.net/api/marker';
        this.UrlWell = 'http://services-spa.azurewebsites.net/api/well';
        this.UrlRoad = 'http://services-spa.azurewebsites.net/api/road';
        this.UrlShape = 'http://services-spa.azurewebsites.net/api/shape';
        this.UrlWidth = 'http://services-spa.azurewebsites.net/api/width';
        this.UrlTotal = 'http://services-spa.azurewebsites.net/api/search';
        this.UrlProduct = 'https://smartball.000webhostapp.com/uploads/get_product.php';
    }
    RestProvider.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getMarker = function (deed_number, province_id, amphur_code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.deed_number = deed_number;
            _this.province_id = province_id;
            _this.amphur_code = amphur_code;
            _this.http.get(_this.UrlMarker + '/' + _this.deed_number + ',' + _this.province_id + ',' + _this.amphur_code).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getProvince = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.UrlProvince).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getAmphur = function (log_hr) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.id = log_hr;
            _this.http.get(_this.UrlAmphur + '/' + _this.id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getWell = function (province_id, amphur_code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.province_id = province_id;
            _this.amphur_code = amphur_code;
            _this.http.get(_this.UrlWell + '/' + _this.province_id + ',' + _this.amphur_code).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getRoad = function (province_id, amphur_code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.province_id = province_id;
            _this.amphur_code = amphur_code;
            _this.http.get(_this.UrlRoad + '/' + _this.province_id + ',' + _this.amphur_code).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getShape = function (province_id, amphur_code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.province_id = province_id;
            _this.amphur_code = amphur_code;
            _this.http.get(_this.UrlShape + '/' + _this.province_id + ',' + _this.amphur_code).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getWidth = function (province_id, amphur_code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.province_id = province_id;
            _this.amphur_code = amphur_code;
            _this.http.get(_this.UrlWidth + '/' + _this.province_id + ',' + _this.amphur_code).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getTotal = function (lat, lon, province_id, amphur_code, well, road, shape, width, type_size, id, appraisal, size) {
        var _this = this;
        var url = this.UrlTotal + '/' + lat + ',' + lon + ',' + province_id + ',' + amphur_code + ',' + well + ',' + road + ',' + shape + ',' + width + ',' + type_size + ',' + id + ',' + appraisal + ',' + size;
        console.log(url);
        return new Promise(function (resolve) {
            _this.http.get(url).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getProduct = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.UrlProduct).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_appraisal_appraisal__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(121);
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
            { title: 'Market Place', component: __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */], icon: 'md-basket' },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */], icon: 'md-information-circle' },
        ];
        if (localStorage.getItem('userData')) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.userDetails = data.userData;
            //console.log(this.userDetails.name);
            platform.ready().then(function () {
                if (_this.userDetails.username) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_appraisal_appraisal__["a" /* AppraisalPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
                _this.statusBar.styleDefault();
            });
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/superball/Documents/GitHub/SPAionic/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <div header-background-image padding style="background-image: url(\n          assets/imgs/bg.png);">\n          <img src="assets/imgs/logo-reales-bg.png"/>\n          <h2 ion-text color="light" header-title>Smart Property Assess</h2>\n          <p>Welcome to our Application for Real Estate Appraisal</p>\n      </div>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n          <ion-item>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                <ion-icon icon-small item-left name="{{p.icon}}" style="color:aquamarine"></ion-icon>\n              {{p.title}}\n            </button>\n          </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/superball/Documents/GitHub/SPAionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 865:
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

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonDigitKeyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(326);
/**
 * @name IonDigitKeyboard
 * @description A digital keyboard for Ionic 2.
 * @author Skol (Vincent Letellier)
 * @see {@link https://github.com/skol-pro/ion-digit-keyboard-v2 Ionic 2 Digit Keyboard}
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @TODO Create toolbar service ?




var IonDigitKeyboard = (function () {
    function IonDigitKeyboard() {
    }
    IonDigitKeyboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components__["a" /* IonDigitKeyboardCmp */]
            ],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_3__components__["a" /* IonDigitKeyboardCmp */]]
        })
    ], IonDigitKeyboard);
    return IonDigitKeyboard;
}());

//# sourceMappingURL=ion-digit-keyboard.module.js.map

/***/ })

},[459]);
//# sourceMappingURL=main.js.map