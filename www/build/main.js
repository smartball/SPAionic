webpackJsonp([2],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(49);
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
    function LoginPage(navCtrl, fb, nativeStorage, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.FB_APP_ID = 160319811228422;
        this.user = {};
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
    }
    LoginPage.prototype.doFbLogin = function () {
        var _this = this;
        var permissions = new Array();
        //the permissions your facebook app needs from the user
        permissions = ["public_profile"];
        this.fb.login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            //Getting name and gender properties
            _this.fb.api("/me?fields=name,gender", params)
                .then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                //now we have the users info, let's save it in the NativeStorage
                _this.nativeStorage.setItem('user', {
                    name: user.name,
                    gender: user.gender,
                    picture: user.picture
                })
                    .then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */]);
                }, function (error) {
                    console.log(error);
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                    if (result) {
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/login/login.html"*/'<ion-content class="background">\n    <h1>SMART PROPERT ASSESS</h1>\n    <ion-card>\n    \n      <ion-card-header>\n        \n        <a (click)="skip()" float-Right>Skip This</a><br>Login\n      </ion-card-header>\n  \n      <ion-card-content>\n        <!-- Add card content here! -->\n        <ion-list no-lines>\n          <ion-item>\n          <ion-label floating>\n            Email Address\n          </ion-label>\n            <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>\n              Password\n          </ion-label>\n            <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n          <ion-item>\n            <p>Forgot password?<a href="">Get Here</a></p>\n          </ion-item>\n          <button ion-button color="primary" block outline (click)="login(user)">LOGIN</button>\n        </ion-list>\n        <b>OR</b>\n          <button ion-button color="primary" ion-left block (click)="doFbLogin()">\n            <ion-icon name="logo-facebook"></ion-icon>\n            <div>Login With Facebook</div>\n          </button>\n          <button ion-button color="danger" ion-left block (click)="loginwithgg()">\n            <ion-icon name="logo-googleplus"></ion-icon>\n            <div>Login With Google</div>\n          </button>\n          <hr width="80%">\n          <b><a (click)="register()" >Create an Account</a></b>\n      </ion-card-content>\n    \n    </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(106);
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
    function UserPage(navCtrl, fb, nativeStorage) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.nativeStorage = nativeStorage;
        this.userReady = false;
    }
    UserPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('user')
            .then(function (data) {
            _this.user = {
                name: data.name,
                gender: data.gender,
                picture: data.picture
            };
            _this.userReady = true;
        }, function (error) {
            console.log(error);
        });
    };
    UserPage.prototype.doFbLogout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (response) {
            //user logged out so we will remove him from the NativeStorage
            _this.nativeStorage.remove('user');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function (error) {
            console.log(error);
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/user/user.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-toolbar>\n      <ion-title>\n        User Details\n      </ion-title>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n  \n  \n  <ion-content *ngIf=\'userReady\'>\n    <ion-card>\n      <img [src]="user.picture"/>\n      <ion-card-content>\n        <ion-card-title>\n          Welcome {{user.name}}!\n          </ion-card-title>\n        <p>\n          Your gender is: {{user.gender}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="doFbLogout()">Logout</button>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/user/user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_direction_map_direction__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
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
    function HomePage(navCtrl, app, navParams, afAuth, toast, modal) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.modal = modal;
        this.addressElement = null;
        this.listSearch = '';
        this.search = false;
        this.switch = "map";
        this.regionals = [];
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onLoadUser = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_direction_map_direction__["a" /* MapDirectionPage */], { userName: name });
    };
    HomePage.prototype.generateTopics = function () {
        this.topics = [
            'USA',
            '40.714224,-73.961452',
            '13.720170,100.772072',
            '12.61134,102.1038545999999',
            '15.1851971,100.1251250000000',
            'Procedure to remove back button text',
            'How to reposition ionic tabs on top position.',
            'Override Hardware back button in cordova based application - Ionic',
            'Drupal 8: Enabling Facets for Restful web services',
            'Drupal 8: Get current user session',
            'Drupal 8: Programatically create Add another field - Example',
        ];
    };
    HomePage.prototype.getTopics = function (ev) {
        this.generateTopics();
        var serVal = ev.target.value;
        if (serVal && serVal.trim() != '') {
            this.topics = this.topics.filter(function (topic) {
                return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.openModal = function () {
        var myModal = this.modal.create('ModalPage');
        myModal.present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
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
    HomePage.prototype.showMap = function () {
        //Location
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            disableDoubleClickZoom: false,
            disableDefaultUI: true,
            zoomControl: true,
            scaleControl: true,
            center: { lat: 13.75633, lng: 100.50177 }
        });
        var geocoder = new google.maps.Geocoder();
        document.getElementById('submit').addEventListener("click", function () {
            _this.geocodeAddress(geocoder, _this.map);
        });
    };
    HomePage.prototype.geocodeAddress = function (geocoder, resultsMap) {
        var _this = this;
        var getposition_lat;
        var getposition_lng;
        var address = document.getElementById('address').value;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    icon: 'assets/imgs/pin-home.png',
                    position: results[0].geometry.location
                });
                marker.setMap(_this.map);
                getposition_lat = marker.getPosition().lat();
                getposition_lng = marker.getPosition().lng();
                var infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">Test</h1></div>';
                var infoWindow = new google.maps.InfoWindow({
                    content: infoWindowContent + results[0].formatted_address + '<button id = "myid" style="background-color:red;color:white;width:100%;height:30px;font-size:16px;">ประเมินราคา</button>'
                });
                var sendLatLng = getposition_lat + ',' + getposition_lng;
                google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
                    document.getElementById('myid').addEventListener('click', function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_direction_map_direction__["a" /* MapDirectionPage */], { userName: sendLatLng });
                    });
                });
                infoWindow.open(_this.map, marker);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
        // save 
    };
    HomePage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data.email && data.uid) {
                _this.toast.create({
                    message: 'Welcome to Smart Property Assess' + data.email,
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: 'fail',
                    duration: 3000
                }).present();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "searchbar", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/home/home.html"*/'<ion-header hidden>\n  <ion-navbar color="secondary">\n  	\n    <ion-title>\n      Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'toggleSearch()\'>\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)=\'choosePosition()\'>\n        <ion-icon name="ios-locate-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n	<div class="switch">\n	  <button ion-button icon-only color="light" (click)=\'toggleSearch()\'><ion-icon name="search"></ion-icon></button>\n	  <button ion-button color="light" (click)="(switch = \'map\'); resizeMap()" [class.active]="(switch == \'map\')" icon-only><ion-icon name="map"></ion-icon></button>\n	  <button ion-button color="light" icon-only menuToggle><ion-icon name="list"></ion-icon></button>\n	</div>\n\n	<div class="currentitem" *ngIf="currentregional">\n	  <button ion-item no-lines (click)="viewPlace(currentregional.title)">\n	    <h2>{{ currentregional.title }}</h2>\n	    <ion-note item-right icon-only><ion-icon name="ios-arrow-forward"></ion-icon></ion-note>\n	  </button>\n	</div>\n<ion-content>\n\n	\n    <ion-row>\n    \n    \n    <input id="address" type="text" value="{{ topic }}" placeholder="Infomation" *ngFor="let topic of topics" style="display: none;">\n    </ion-row>\n    \n    <ion-row #searchbar id="floating-panel" [hidden]="!search" style="padding-top:15px">\n        <ion-col col-8 style="padding-top:9px">\n          <ion-searchbar  #searchbar (ionInput)="getTopics($event)" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)" [hidden]="!search"></ion-searchbar>\n      </ion-col>\n      <ion-col col-4>\n          <button id="submit" ion-button  value="Geocode" >Search</button>\n      </ion-col>\n    </ion-row>\n    \n      \n\n	 \n  <div #map id="map"></div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
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
    function MapDirectionPage(navCtrl, navParams, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
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
            zoom: 13,
            center: { lat: 40.771, lng: -73.974 }
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        directionsDisplay.setMap(this.map);
        // Instantiate an info window to hold step text.
        var stepDisplay = new google.maps.InfoWindow;
        // Display the route between the initial start and end selections.
        this.calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, this.map);
    };
    MapDirectionPage.prototype.calculateAndDisplayRoute = function (directionsDisplay, directionsService, markerArray, stepDisplay, map) {
        // First, remove any existing markers from the map.
        for (var i = 0; i < markerArray.length; i++) {
            markerArray[i].setMap(null);
        }
        // Retrieve the start and end locations and create a DirectionsRequest using
        // WALKING directions.
        directionsService.route({
            origin: 'Bangkok',
            destination: this.name,
            travelMode: 'DRIVING'
        }, function (response, status) {
            // Route the directions and pass the response to a function to create
            // markers for each step.
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                //showSteps(response, markerArray, stepDisplay, map);
                //>>>>
                var myRoute = response.routes[0].legs[0];
                for (var i = 0; i < myRoute.steps.length; i++) {
                    var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
                    marker.setMap(map);
                    marker.setPosition(myRoute.steps[i].start_location);
                    //attachInstructionText(stepDisplay, marker, myRoute.steps[i].instructions, map);
                    //>>>
                    google.maps.event.addListener(marker, 'click', function () {
                        // Open an info window when the marker is clicked on, containing the text
                        // of the step.
                        var getposition_lat = marker.getPosition().lat();
                        var getposition_lng = marker.getPosition().lng();
                        alert(JSON.stringify(myRoute));
                        stepDisplay.setContent(myRoute.steps[0].instructions + "<br>" + getposition_lat + "<br>" + getposition_lng + "<br>");
                        stepDisplay.open(map, marker);
                    });
                    //>>>
                }
                //>>>
            }
            else {
                alert('ไม่สามารถระบุแผนที่ได้');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapDirectionPage.prototype, "mapRef", void 0);
    MapDirectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-direction',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/map-direction/map-direction.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="primary"></ion-icon>\n      </button>\n      <ion-toolbar>\n        <ion-title>\n          MapDirection\n        </ion-title>\n      </ion-toolbar>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n	<ion-card id="floating-panel">\n        <ion-card-content>\n          <p>{{ name }} </p>\n            <div #directionsPanel></div>\n        </ion-card-content>\n    </ion-card>\n  \n    <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/map-direction/map-direction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MapDirectionPage);
    return MapDirectionPage;
}());

//# sourceMappingURL=map-direction.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
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
    function RegisterPage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.user = {};
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
                    console.log(result);
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row padding-horizontal align-items-start>\n        \n        <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n            <!---Logo\n            <img src="assets/imgs/logo-reales.png" style="width:150px;margin-top:20px;"/> -->\n            \n            <!--Form Title-->\n            <h1 ion-text style="color:lightgray;font-size:35px;" title>Register your new Account</h1>\n            \n            \n            <!---Input field email-->\n            <ion-item no-padding>\n                <ion-label color="dark" stacked>EMAIL</ion-label>\n                <ion-input required placeholder="Your e-mail address"  type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="user.email"></ion-input>\n            </ion-item>\n            <!---Input field password-->\n            <ion-item no-padding>\n              <ion-label color="dark" stacked>PASSWORD</ion-label>\n              <ion-input required placeholder="Enter your password" type="password" [(ngModel)]="user.password"></ion-input>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-label color="dark" stacked>NAME</ion-label>\n                <ion-input required placeholder="Your name" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-label color="dark" stacked>SURNAME</ion-label>\n                <ion-input required placeholder="Your surname" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-label color="dark" stacked>PHONE</ion-label>\n                <ion-input required placeholder="Enter your number" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n            </ion-item>\n            <!---Register button-->\n            <button ion-button margin-top float-right clear button-clear text-capitalize (click)="register(user)">Register</button>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/superball/SPAionic-master/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/map-direction/map-direction.module": [
		332,
		1
	],
	"../pages/register/register.module": [
		333,
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_direction_map_direction__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_user_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_firebase_config__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(49);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_direction_map_direction__["a" /* MapDirectionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/map-direction/map-direction.module#MapDirectionPageModule', name: 'MapDirectionPage', segment: 'map-direction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_direction_map_direction__["a" /* MapDirectionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(108);
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
    function MyApp(platform, nativeStorage, splashScreen, statusBar) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */] }
        ];
        platform.ready().then(function () {
            // Here we will check if the user is already logged in
            // because we don't want to ask users to log in each time they open the app
            var env = _this;
            _this.nativeStorage.getItem('user')
                .then(function (data) {
                // user is previously logged and we have his data
                // we will let him access the app
                env.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */]);
                env.splashScreen.hide();
            }, function (error) {
                //we don't have the user data so we will ask him to log in
                env.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
                env.splashScreen.hide();
            });
            _this.statusBar.styleDefault();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/superball/SPAionic-master/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n        \n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/superball/SPAionic-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 331:
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

/***/ })

},[215]);
//# sourceMappingURL=main.js.map