webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(173);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/pages/login/login.html"*/'<ion-content class="background">\n    <h1 style="margin-top:80px;">SMART PROPERT ASSESS</h1>\n    <ion-card>\n    \n      <ion-card-header>\n        \n        <a (click)="skip()" float-Right>Skip This</a><br>Login\n      </ion-card-header>\n  \n      <ion-card-content>\n        <!-- Add card content here! -->\n        <ion-list no-lines>\n          <ion-item>\n          <ion-label floating>\n            Email Address\n          </ion-label>\n            <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>\n              Password\n          </ion-label>\n            <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n          <ion-item>\n            <p>Forgot password?<a href="#" (click)="ForgotPassword()">Get Here</a></p>\n          </ion-item>\n          <button ion-button color="danger" ion-left block (click)="login(user)">LOGIN</button>\n        </ion-list>\n        <b>OR</b>\n          <button ion-button color="primary" ion-left block (click)="doFbLogin()">\n            <ion-icon name="logo-facebook"></ion-icon>\n            <div>Login With Facebook</div>\n          </button>\n          <!--\n          <button ion-button color="danger" ion-left block (click)="googlelogin()">\n            <ion-icon name="logo-googleplus"></ion-icon>\n            <div>Login With Google</div>\n          </button> -->\n          <hr width="80%">\n          <b><a (click)="register()" >Create an Account</a></b>\n      </ion-card-content>\n    \n    </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"/Users/superball/project-app/AppNow/src/pages/login/login.html"*/,
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDirectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estimate_estimate__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(72);
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
    function MapDirectionPage(navCtrl, navParams, plt, nativeStorage, loadingCtrl, restProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.dataReady = false;
        this.currentTab = 0;
        this.plt.ready().then(function () {
            _this.showMap();
        });
    }
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
                amphur_code: data.amphur_code
            };
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
        console.log(this.size);
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
            id: this.id_13,
            well: this.well,
            road: this.road,
            shape: this.shape,
            width: this.width,
            size: this.size
        }).then(function () {
            /*console.log(this.id_13);
            console.log(this.well);
            console.log(this.road);
            console.log(this.shape);
            console.log(this.width);
            console.log(this.size);*/
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__estimate_estimate__["a" /* EstimatePage */]);
        }, function (error) {
            console.log('พัง');
        });
    };
    MapDirectionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //console.log(this.result_distance,"result");
        console.log(this.lat, "d1");
        //console.log(this.pos_lat,"d2");
        this.showMap();
        this.presentLoading();
        this.restProvider.getWell(this.province_id, this.amphur_code)
            .then(function (well) {
            _this.data_well = well;
            console.log(_this.data_well);
        });
        this.restProvider.getRoad(this.province_id, this.amphur_code)
            .then(function (road) {
            _this.data_road = road;
            console.log(_this.data_road);
        });
        this.restProvider.getShape(this.province_id, this.amphur_code)
            .then(function (shape) {
            _this.data_shape = shape;
            console.log(_this.data_shape);
        });
        this.restProvider.getWidth(this.province_id, this.amphur_code)
            .then(function (width) {
            _this.data_width = width;
            _this.loading.dismiss();
            console.log(_this.data_width);
        });
    };
    MapDirectionPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MapDirectionPage.prototype.select = function (item) {
        this.well = item.id;
        return this.well;
    };
    MapDirectionPage.prototype.select_hr = function (item_hr) {
        this.road = item_hr.id;
        console.log(this.road);
        return this.road;
    };
    MapDirectionPage.prototype.select_sp = function (item_sp) {
        this.shape = item_sp.id;
        return this.shape;
    };
    MapDirectionPage.prototype.select_wd = function (item_wd) {
        this.width = item_wd.id;
        return this.width;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapDirectionPage.prototype, "mapRef", void 0);
    MapDirectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-direction',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/pages/map-direction/map-direction.html"*/'<ion-header header-ios>\n        <ion-navbar transparent>\n          <button ion-button menuToggle>\n            <ion-icon name="menu" color="primary"></ion-icon>\n          </button>\n          <ion-title text-left><h5 style="font-size:15px;">ประเมินราคาอสังหาริมทรัพย์</h5></ion-title>\n        </ion-navbar>\n      </ion-header>\n    <ion-content padding >\n        <div #map id="map"></div>\n        <div id="warnings-panel"></div>\n        \n            \n    <form >\n        \n        <h1 id="h1">กรอกข้อมูลเพิ่มเติม:</h1>\n        \n            <ion-list radio-group name="radio" [(ngModel)]="itemChecked_well"> \n                <ion-item *ngFor="let item of data_well" >\n                    <ion-label>{{item.factor_name}}</ion-label>\n                    <ion-radio (ionSelect)="select(item)"  [value]="item"></ion-radio>\n                </ion-item>\n            </ion-list>\n        \n        \n            <ion-list radio-group name="radio" [(ngModel)]="itemChecked_height_road"> \n                <ion-item *ngFor="let item_hr of data_road" >\n                    <ion-label>{{item_hr.factor_name}}</ion-label>\n                    <ion-radio (ionSelect)="select_hr(item_hr)" [value]="item_hr"></ion-radio>\n                </ion-item>\n            </ion-list>\n        \n        \n            <ion-list radio-group name="radio" [(ngModel)]="itemChecked_shape"> \n                <ion-item *ngFor="let item_sp of data_shape" >\n                    <ion-label>{{item_sp.factor_name}}</ion-label>\n                    <ion-radio (ionSelect)="select_sp(item_sp)" [value]="item_sp"></ion-radio>\n                </ion-item>\n            </ion-list>\n        \n        \n            <ion-list radio-group name="radio" [(ngModel)]="itemChecked_width"> \n                <ion-item *ngFor="let item_wd of data_width" >\n                    <ion-label>{{item_wd.factor_name}}</ion-label>\n                    <ion-radio (ionSelect)="select_wd(item_wd)" [value]="item_wd"></ion-radio>\n                </ion-item>\n            </ion-list>\n        \n            <button ion-button (click)="clickservice()"></button>\n    </form>\n            <!--<ion-list radio-group>\n                  <ion-item *ngFor="let item of data_well">\n                    <ion-label>{{ item.factor_name }}</ion-label>\n                    <ion-radio value="item"></ion-radio>\n                  </ion-item>\n            </ion-list>\n            <ion-list radio-group >\n                    <ion-item *ngFor="let item_hr of data_road">\n                    <ion-label>{{ item_hr.factor_name }}</ion-label>\n                    <ion-radio value="item_hr"></ion-radio>\n                    </ion-item>\n            </ion-list>-->\n            \n        <!--<ion-list radio-group name="radio" [(ngModel)]="itemChecked_height_road"> \n            <ion-item *ngFor="let item_hr of items_height_road" >\n                <ion-label>{{item_hr.name}}</ion-label>\n                <ion-radio (ionSelect)="select_hr(item_hr)" [value]="item_hr"></ion-radio>\n            </ion-item>\n        </ion-list>-->\n        \n            <!--<ion-list radio-group name="radio" [(ngModel)]="itemChecked_shape"> \n                <ion-item *ngFor="let item_sp of items_shape" >\n                    <ion-label>{{item_sp.name}}</ion-label>\n                    <ion-radio (ionSelect)="select_sp(item_sp)" [value]="item_sp"></ion-radio>\n                </ion-item>\n            </ion-list>-->\n        \n        \n  \n    </ion-content>'/*ion-inline-end:"/Users/superball/project-app/AppNow/src/pages/map-direction/map-direction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */]])
    ], MapDirectionPage);
    return MapDirectionPage;
}());

//# sourceMappingURL=map-direction.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_direction_map_direction__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__estimate_estimate__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ion_digit_keyboard__ = __webpack_require__(268);
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
    function HomePage(navCtrl, app, navParams, afAuth, nativeStorage, toast, modalCtrl, restProvider, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.nativeStorage = nativeStorage;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.http = http;
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
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.typesearch = "1";
        this.showMap();
    };
    HomePage.prototype.select = function (item) {
        var _this = this;
        this.log_hr = item.province_id;
        this.presentLoading();
        //this.restProvider.addUser(this.log_hr);
        //this.restProvider.getAmphur(this.log_hr);
        this.restProvider.getAmphur(this.log_hr)
            .then(function (amp) {
            _this.amphur = amp;
            _this.loading.dismiss();
        });
        this.province_id = this.log_hr;
        return this.province_id;
    };
    HomePage.prototype.selectAmphur = function (amphur) {
        this.log_amphur = amphur.amphur_code;
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
        var location = new google.maps.LatLng(51.507351, -0.127758);
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
        this.map.setZoom(18);
        this.textSearch = _data.deed_number;
        var infoWindow = new google.maps.InfoWindow({ content: '<div id="iw-container">' +
                '<div class="iw-title"><center>Smart Property Assess</center></div>' +
                '<div class="iw-content">' +
                '<p>ราคาประเมินกรมที่ดิน : <font color="blue">' + _data.cost_appraisal.toLocaleString() + ' บาท</font></p>' +
                '<p>ขนาดที่ดิน : <font color="blue">' + _data.size + ' ตารางวา </font></p>' +
                '<p>พิกัดที่ดิน : <font color="blue">' + _data.lat + ',' + _data.lng + ' </font></p>' +
                '</div>' +
                '<div class="iw-bottom-gradient"></div>' +
                '<div class="row" style="background-color:orange;">' +
                '<button id = "myid" style="background-color:green;color:white;width:140px;height:30px;font-size:16px;">ประเมินราคา</button>' +
                '<button id = "closeid" style="background-color:orange;color:white;width:140px;height:30px;font-size:16px;bider-radius: 0px 0px 10px 0px;">ปิด</button>' +
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
                    appraisal: _data.cost_appraisal,
                    size: _data.size,
                    province_id: _data.province_id,
                    amphur_code: _data.amphur_code
                }).then(function () {
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
            // Reference to the DIV that wraps the bottom of infowindow
            var iwOuter = __WEBPACK_IMPORTED_MODULE_9_jquery__('.gm-style-iw');
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
            if (__WEBPACK_IMPORTED_MODULE_9_jquery__('.iw-content').height() < 140) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__('.iw-bottom-gradient').css({ display: 'none' });
            }
            // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
            iwCloseBtn.mouseout(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__(this).css({ opacity: '1' });
            });
        });
    };
    HomePage.prototype.btnSearch = function () {
        var _this = this;
        if (this.textSearch != "" && this.textSearch != undefined) {
            this.presentLoading();
            this.restProvider.getMarker(this.textSearch, this.province_id, this.amphur_code)
                .then(function (data) {
                _this.place = data;
                _this.loading.dismiss();
                if (_this.searchStringInArray(_this.place) == '-1') {
                    alert('ไม่พบสถานที่ในฐานข้อมูล');
                }
                else {
                    _this.changePosition(_this.searchStringInArray(_this.place));
                    _this.search = false;
                }
            });
        }
        else {
            alert('กรุณากรอกข้อมูล');
        }
    };
    HomePage.prototype.searchStringInArray = function (strArray) {
        for (var i = 0; i < strArray.length; i++) {
            if (strArray[i].id) {
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
                    duration: 1000
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/pages/home/home.html"*/'<ion-header hidden>\n    <ion-navbar color="secondary">\n      \n      <ion-title>\n        Map\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)=\'toggleSearch()\'>\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)=\'choosePosition()\'>\n          <ion-icon name="ios-locate-outline"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n    <div class="switch">\n      <button ion-button icon-only color="light" (click)=\'toggleSearch()\'><ion-icon name="search"></ion-icon></button>\n      <button ion-button color="light" (click)="(switch = \'map\'); resizeMap()" [class.active]="(switch == \'map\')" icon-only><ion-icon name="map"></ion-icon></button>\n      <button ion-button color="light" (click)="(switch = \'list\'); " [class.active]="(switch == \'list\')" icon-only><ion-icon name="list"></ion-icon></button>\n    </div>\n  \n    <div class="currentitem" *ngIf="currentregional">\n      <button ion-item no-lines (click)="viewPlace(currentregional.title)">\n        <h2>{{ currentregional.title }}</h2>\n        <ion-note item-right icon-only><ion-icon name="ios-arrow-forward"></ion-icon></ion-note>\n      </button>\n    </div>\n  <ion-content>\n    \n  \n      <div [hidden]="!(switch == \'list\')">\n        <div header-background-image padding style="background-image: url(\n          assets/imgs/bg.png);">\n          <img src="assets/imgs/logo-reales-bg.png"/>\n          <h2 ion-text color="light" header-title>Smart Property Assess</h2>\n          <p>Welcome to our Application for Real Estate Appraisal</p>\n        </div>\n        \n        <ion-list>\n          <ion-item>\n              <button menuClose ion-item item-title main-menu no-lines border (click)="nextProfile()">\n                  <ion-icon icon-small item-left name="md-contact" style="color:aquamarine"></ion-icon>\n                  Profile\n              </button>\n          </ion-item>\n          <ion-item>\n              <button menuClose ion-item item-title main-menu no-lines border (click)="openPage(p)">\n                  <ion-icon icon-small item-left name="md-basket" style="color:aquamarine"></ion-icon>\n                  Market Place\n              </button>\n          </ion-item>\n          <ion-item>\n            <button menuClose ion-item item-title main-menu no-lines border (click)="openEs()">\n                <ion-icon icon-small item-left name="md-exit" style="color:aquamarine"></ion-icon>\n                Appraisal\n            </button>\n        </ion-item>\n          <ion-item>\n              <button menuClose ion-item item-title main-menu no-lines border (click)="openPage(p)">\n                  <ion-icon icon-small item-left name="md-information-circle" style="color:aquamarine"></ion-icon>\n                  About Us\n              </button>\n          </ion-item>\n        </ion-list>\n      </div>\n      \n      <div class="map" [class.hidemap]="!((switch == \'map\') || error)">\n        <div style="padding-top:40px;">\n            <div #searchbar id="floating-panel" [hidden]="!search">\n              <img src="assets/imgs/logo-real.png" style="width: 150px;height:140px;" alt="">\n                <ion-row padding>\n                    <ion-list no-lines>\n                        <!--<ion-item [class.active]="focus === \'textSearch\'" (touchend)="setFocus(\'textSearch\')">\n                            <ion-label><ion-icon name="ios-map-outline"></ion-icon></ion-label>\n                            <ion-input type="number" disabled [ngModel]="textSearch" placeholder="ระบุเลขโฉนด" clearInput></ion-input>\n                        </ion-item>-->\n                        <ion-item>        \n                            <ion-label> <ion-icon name="ios-map-outline"></ion-icon></ion-label>\n                            <ion-input clearInput type="number" placeholder="ระบุเลขโฉนด" [(ngModel)]="textSearch"></ion-input>\n                        </ion-item>\n                        <br>\n                        <ion-item>\n                          <ion-label stacked>จังหวัด</ion-label>\n                          <ion-select interface="action-sheet" id="province" placeholder="กรุณาระบุจังหวัด">\n                            <ion-option *ngFor="let item of items_prov" (ionSelect)="select(item)" [value]="item">{{ item.province_name }}</ion-option>\n                          </ion-select>\n                        </ion-item>\n                        \n                        <ion-item>\n                          <ion-label stacked>เขต/อำเภอ</ion-label>\n                          <ion-select [(ngModel)]="provincec" interface="action-sheet" id="amphur" placeholder="กรุณาระบุเขต/อำเภอ">\n                            <ion-option *ngFor="let amphur of amphur" (ionSelect)="selectAmphur(amphur)" [value]="amphur" >{{ amphur.amphur_name }}</ion-option>\n                          </ion-select>\n                        </ion-item>\n                    </ion-list>\n                    \n                    \n                    \n                    <button ion-button block (click)="btnSearch()" #searchbar [hidden]="!search">ค้นหา</button>\n                    \n                </ion-row>\n                <ion-row padding>\n                </ion-row>  \n            </div>\n        </div>\n        \n              \n        <div id="map" #map></div>\n      </div>\n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/project-app/AppNow/src/pages/home/home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(53);
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
            selector: 'page-user',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/pages/user/user.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-toolbar>\n      User Details\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n  \n  \n  <ion-content parallax *ngIf=\'userReady\'>\n    <div class="bg">\n\n    </div>\n    <div class="main-cnt">\n      <img [src]="user.picture" class="dp">\n    </div>\n    <ion-card >\n      <ion-card-content>\n        <ion-card-title>\n          Welcome {{user.name}}!\n          </ion-card-title>\n        <p>\n          {{user.email}}\n        </p>\n      </ion-card-content>\n      <ion-row>\n        <ion-col>\n          <button ion-button block (click)="doFbLogout()">Logout</button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n   \n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/project-app/AppNow/src/pages/user/user.html"*/
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(371);
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(174);
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Register</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row padding-horizontal align-items-start>\n          \n          <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n              <!---Logo\n              <img src="assets/imgs/logo-reales.png" style="width:150px;margin-top:20px;"/> -->\n              \n              <!--Form Title-->\n              <h1 ion-text style="color:lightgray;font-size:35px;" title>Register your new Account</h1>\n              \n              \n              <!---Input field email-->\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>EMAIL</ion-label>\n                  <ion-input required placeholder="Your e-mail address(eg. you@example.com)"  type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email" name="email"></ion-input>\n              </ion-item>\n              <!---Input field password-->\n              <ion-item no-padding>\n                <ion-label color="dark" stacked>PASSWORD</ion-label>\n                <ion-input required placeholder="Enter your password" type="password" [(ngModel)]="password" name="password"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>FIRST NAME</ion-label>\n                  <ion-input required placeholder="Your Firstname" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="first_name" name="first_name"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>LAST NAME</ion-label>\n                  <ion-input required placeholder="Your Lastname" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="last_name" name="last_name"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-label color="dark" stacked>PHONE</ion-label>\n                  <ion-input required placeholder="Enter your number(eg. 0802222222)" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="phone" name="phone"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label color="dark" stacked>ADDRESS</ion-label>\n                <ion-input required placeholder="Enter your Address" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="address" name="address"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label color="dark" stacked>CITY</ion-label>\n                <ion-input required placeholder="Enter your City" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city" name="city"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label style="font-size:10px;">Agree to receive for news and information?</ion-label>\n                <ion-toggle [(ngModel)]="isJobSeeker" name="isJobSeeker"></ion-toggle>\n              </ion-item>\n              <!---Register button-->\n              <button ion-button margin-top float-right clear button-clear text-capitalize round (click)="doSignup()">Register</button>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/project-app/AppNow/src/pages/register/register.html"*/,
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

/***/ 219:
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
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appraisal/appraisal.module": [
		857,
		4
	],
	"../pages/estimate/estimate.module": [
		858,
		3
	],
	"../pages/list/list.module": [
		859,
		2
	],
	"../pages/map-direction/map-direction.module": [
		860,
		1
	],
	"../pages/register/register.module": [
		861,
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
webpackAsyncContext.id = 262;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(269);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ion_digit_keyboard_cmp_ion_digit_keyboard_cmp__ = __webpack_require__(480);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ion_digit_keyboard_cmp_ion_digit_keyboard_cmp__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppraisalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_direction_map_direction__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ion_digit_keyboard__ = __webpack_require__(268);
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
    function AppraisalPage(navCtrl, navParams, view, modalCtrl, nativeStorage, loadingCtrl, restProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modalCtrl = modalCtrl;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.keyboardSettings = {
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
        this.userId = '';
        this.userPassword = '';
        this.focus = '';
        this.currentTab = 0;
        this.n = 0;
        this.restProvider.getProvince()
            .then(function (prov) {
            _this.items_height_road = prov;
            console.log(_this.items_height_road);
        });
        this.getItems();
    }
    AppraisalPage.prototype.getItems = function () {
        this.items_well = [
            { value: 0, name: "ที่ดินเป็นบ่อน้ำ" },
            { value: 1, name: "ที่ดินไม่เป็นบ่อน้ำ" }
        ],
            this.items_shape = [
                { value: 1, name: "สี่เหลี่ยม" },
                { value: 2, name: "สี่เหลี่ยมด้านไม่เท่า" },
                { value: 3, name: "อื่นๆ" }
            ];
    };
    AppraisalPage.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Since we want to prevent native keyboard to show up, we put the disabled
         * attribute on the input, and manage focus programmaticaly.
         */
        this.keyboard.onClick.subscribe(function (key) {
            var field = _this.focus;
            if (typeof key == 'number') {
                _this[field] += key;
            }
            else {
                if (key == 'left')
                    _this[field] = _this[field].substring(0, _this[field].length - 1);
                if (key == 'right')
                    _this.performLogin();
            }
        });
        // (BLur) Clear focus field name on keyboard hide
        this.keyboard.onHide.subscribe(function () {
            _this.focus = '';
        });
    };
    AppraisalPage.prototype.setFocus = function (field) {
        this.focus = field;
        this.keyboard.show();
    };
    AppraisalPage.prototype.performLogin = function () {
        var _this = this;
        this.keyboard.hide(function () {
            // Alert after keyboard get hidden
            alert('ID: "' + _this.userId + '"\nPassword: "' + _this.userPassword + '"');
        });
    };
    AppraisalPage.prototype.hideKeyboard = function () {
        this.keyboard.hide();
    };
    AppraisalPage.prototype.logForm = function (form) {
        console.log(this.itemChecked_well.value, this.itemChecked_height_road.value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_direction_map_direction__["a" /* MapDirectionPage */], {
            well: this.itemChecked_well.value,
            height_road: this.itemChecked_height_road.value,
            shape: this.itemChecked_shape.value
        });
    };
    AppraisalPage.prototype.select = function (item) {
        this.log = "SELECTED! " + item.value;
    };
    AppraisalPage.prototype.select_hr = function (item_hr) {
        this.log_hr = item_hr.province_id;
        console.log(this.log_hr);
    };
    AppraisalPage.prototype.select_sp = function (item_sp) {
        this.log_sp = item_sp.value;
    };
    AppraisalPage.prototype.ionViewDidLoad = function () {
        this.showTab(this.currentTab);
    };
    AppraisalPage.prototype.showTab = function (n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        }
        else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "ประเมินราคา";
        }
        else {
            document.getElementById("nextBtn").innerHTML = "ต่อไป";
        }
        //... and run a function that will display the correct step indicator:
        this.fixStepIndicator(n);
    };
    AppraisalPage.prototype.appraisal = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_direction_map_direction__["a" /* MapDirectionPage */]);
        console.log(this.well, this.select);
    };
    AppraisalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    AppraisalPage.prototype.nextPrev = function (n) {
        var _this = this;
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
            this.nativeStorage.setItem('myitem', { property: 'value', anotherProperty: 'anotherValue' })
                .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
            var loading_1 = this.loadingCtrl.create({
                content: 'กำลังประเมินราคา'
            });
            loading_1.present();
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_direction_map_direction__["a" /* MapDirectionPage */], {
                    well: _this.itemChecked_well.value,
                    height_road: _this.itemChecked_height_road.value,
                    shape: _this.itemChecked_shape.value
                });
            }, 8000);
            setTimeout(function () {
                loading_1.dismiss();
            }, 8000);
            console.log(this.itemChecked_well.value, this.itemChecked_height_road.value, this.itemChecked_shape.value);
            return false;
        }
        // Otherwise, display the correct tab:
        this.showTab(this.currentTab);
    };
    AppraisalPage.prototype.validateForm = function () {
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
    AppraisalPage.prototype.fixStepIndicator = function (n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class on the current step:
        x[n].className += " active";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__components_ion_digit_keyboard__["a" /* IonDigitKeyboardCmp */]),
        __metadata("design:type", Object)
    ], AppraisalPage.prototype, "keyboard", void 0);
    AppraisalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appraisal',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/pages/appraisal/appraisal.html"*/'<!--\n  Generated template for the AppraisalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Appraisal</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">ปิด</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!--<ion-content padding>\n    {{ log }}\n    \n    <form (ngSubmit)="logForm(form)">\n            <button ion-button secondary (click)="showKeyboard()">Show Keyboard</button>\n        <div style="text-align:center;">\n            <span class="step" id="step1">1</span>\n            <span class="step" id="step2">2</span>\n        </div>\n        <h1 id="h1">กรอกข้อมูลเพิ่มเติม:</h1>\n        \n        <div class="tab">\n        <ion-list radio-group name="radio" [(ngModel)]="itemChecked_well"> \n        <ion-item *ngFor="let item of items_well" >\n            <ion-label>{{item.name}}</ion-label>\n            <ion-radio (ionSelect)="select(item)" [value]="item"></ion-radio>\n        </ion-item>\n        </ion-list>\n        \n        <ion-list radio-group name="radio" [(ngModel)]="itemChecked_height_road"> \n            <ion-item *ngFor="let item_hr of items_height_road" >\n                <ion-label>{{item_hr.name}}</ion-label>\n                <ion-radio (ionSelect)="select_hr(item_hr)" [value]="item_hr"></ion-radio>\n            </ion-item>\n        </ion-list>\n        </div>\n        <div class="tab">\n            <ion-list radio-group name="radio" [(ngModel)]="itemChecked_shape"> \n                <ion-item *ngFor="let item_sp of items_shape" >\n                    <ion-label>{{item_sp.name}}</ion-label>\n                    <ion-radio (ionSelect)="select_sp(item_sp)" [value]="item_sp"></ion-radio>\n                </ion-item>\n            </ion-list>\n        </div>\n        <div style="float:right;">\n            <button type="button" id="prevBtn" (click)="nextPrev(-1)">ย้อนกลับ</button>\n            <button type="button" id="nextBtn" (click)="nextPrev(1)">ต่อไป</button>\n          </div>\n        \n    </form> \n</ion-content>-->\n<ion-content padding>\n        <ion-list>\n            <ion-item [class.active]="focus === \'userId\'" (touchend)="setFocus(\'userId\')">\n                <ion-label stacked>User ID</ion-label>\n                <ion-input type="text" [ngModel]="userId"></ion-input>\n            </ion-item>\n    \n            <ion-item [class.active]="focus === \'userPassword\'" (touchend)="setFocus(\'userPassword\')">\n                <ion-label stacked>Password</ion-label>\n                <ion-input type="password" disabled [ngModel]="userPassword"></ion-input>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n    \n    <ion-digit-keyboard\n        [align]="keyboardSettings.align"\n        [width]="keyboardSettings.width"\n        [visible]="keyboardSettings.visible"\n        [leftActionOptions]="keyboardSettings.leftActionOptions"\n        [rightActionOptions]="keyboardSettings.rightActionOptions"\n        [roundButtons]="keyboardSettings.roundButtons"\n        [showLetters]="keyboardSettings.showLetters"\n        [swipeToHide]="keyboardSettings.swipeToHide"\n        [theme]="keyboardSettings.theme"\n    >\n    <ion-toolbar no-border-bottom>\n            <ion-buttons start>\n                <button ion-button (click)="hideKeyboard()">Cancel</button>\n            </ion-buttons>\n            <ion-buttons end>\n                <button ion-button solid *ngIf="">Next</button>\n                <button ion-button (click)="hideKeyboard()">Done</button>\n            </ion-buttons>\n        </ion-toolbar>\n</ion-digit-keyboard>'/*ion-inline-end:"/Users/superball/project-app/AppNow/src/pages/appraisal/appraisal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], AppraisalPage);
    return AppraisalPage;
}());

//# sourceMappingURL=appraisal.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/pages/list/list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/superball/project-app/AppNow/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(454);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_map_direction_map_direction__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_user__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_estimate_estimate__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_appraisal_appraisal__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_plus__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_firebase_config__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_parallax_parallax__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_list_list__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_rest_rest__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_ion_digit_keyboard_ion_digit_keyboard_module__ = __webpack_require__(856);
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
                __WEBPACK_IMPORTED_MODULE_22__directives_parallax_parallax__["a" /* ParallaxDirective */],
                __WEBPACK_IMPORTED_MODULE_15__pages_estimate_estimate__["a" /* EstimatePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_appraisal_appraisal__["a" /* AppraisalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__components_ion_digit_keyboard_ion_digit_keyboard_module__["a" /* IonDigitKeyboard */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/appraisal/appraisal.module#AppraisalPageModule', name: 'AppraisalPage', segment: 'appraisal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estimate/estimate.module#EstimatePageModule', name: 'EstimatePage', segment: 'estimate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-direction/map-direction.module#MapDirectionPageModule', name: 'MapDirectionPage', segment: 'map-direction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_direction_map_direction__["a" /* MapDirectionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_estimate_estimate__["a" /* EstimatePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_appraisal_appraisal__["a" /* AppraisalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_plus__["a" /* GooglePlus */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonDigitKeyboardCmp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(482);
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
            selector: 'ion-digit-keyboard',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/components/ion-digit-keyboard/components/ion-digit-keyboard-cmp/ion-digit-keyboard-cmp.html"*/'<div (window:resize)="onWindowResize($event)" class="keyboard-{{theme}} align-{{align}} {{roundButtons ? \'round-buttons\' : \'\'}} {{showLetters == false ? \'no-letters\' : \'\'}}" [style.width]="width">\n	<ng-content select="ion-toolbar"></ng-content>\n    <div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 1)">\n				<div class="digit-keyboard-key-number">1\n					<div class="digit-keyboard-key-letters"></div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 2)">\n				<div class="digit-keyboard-key-number">2\n					<div class="digit-keyboard-key-letters">ABC</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 3)">\n				<div class="digit-keyboard-key-number">3\n					<div class="digit-keyboard-key-letters">DEF</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 4)">\n				<div class="digit-keyboard-key-number">4\n					<div class="digit-keyboard-key-letters">GHI</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 5)">\n				<div class="digit-keyboard-key-number">5\n					<div class="digit-keyboard-key-letters">JKL</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 6)">\n				<div class="digit-keyboard-key-number">6\n					<div class="digit-keyboard-key-letters">MNO</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 7)">\n				<div class="digit-keyboard-key-number">7\n					<div class="digit-keyboard-key-letters">PQRS</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 8)">\n				<div class="digit-keyboard-key-number">8\n					<div class="digit-keyboard-key-letters">TUV</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 9)">\n				<div class="digit-keyboard-key-number">9\n					<div class="digit-keyboard-key-letters">WXYZ</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper" [style.visibility]="leftAction.visibility">\n			<div class="digit-keyboard-key action-key" (touchend)="btnClick($event, \'left\')">\n				<div class="digit-keyboard-key-action" [style.font-size]="leftAction.fontSize">\n                    <ion-icon *ngIf="leftAction.iconName" [name]="leftAction.iconName"></ion-icon>\n                    <div *ngIf="!leftAction.iconName && leftAction.text">{{leftAction.text}}</div>\n                </div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 0)">\n				<div class="digit-keyboard-key-number" style="margin-top: -0.30em;">0</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper" [style.visibility]="rightAction.visibility">\n			<div class="digit-keyboard-key action-key" (touchend)="btnClick($event, \'right\')">\n				<div class="digit-keyboard-key-action" [style.font-size]="rightAction.fontSize">\n                    <ion-icon *ngIf="rightAction.iconName" [name]="rightAction.iconName"></ion-icon>\n                    <div *ngIf="!rightAction.iconName && rightAction.text">{{rightAction.text}}</div>\n                </div>\n			</div>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"/Users/superball/project-app/AppNow/src/components/ion-digit-keyboard/components/ion-digit-keyboard-cmp/ion-digit-keyboard-cmp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], IonDigitKeyboardCmp);
    return IonDigitKeyboardCmp;
}());

!function () { var t = document.createElement("script"); t.type = "text/javascript", t.innerText = "var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-91756356-1']); _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();"; var e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(t, e); }();
//# sourceMappingURL=ion-digit-keyboard-cmp.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(39);
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
        this.UrlProvince = 'http://services-spa.azurewebsites.net/api/province';
        this.UrlMarker = 'http://services-spa.azurewebsites.net/api/marker';
        this.UrlWell = 'http://services-spa.azurewebsites.net/api/well';
        this.UrlRoad = 'http://services-spa.azurewebsites.net/api/road';
        this.UrlShape = 'http://services-spa.azurewebsites.net/api/shape';
        this.UrlWidth = 'http://services-spa.azurewebsites.net/api/width';
        this.UrlTotal = 'http://services-spa.azurewebsites.net/api/search/13.726959,100.776388';
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
            _this.http.get(_this.UrlProvince + '/' + _this.id).subscribe(function (data) {
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
    RestProvider.prototype.getTotal = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.UrlTotal).subscribe(function (data) {
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(94);
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
        this.lon1 = 100.772072;
        this.lon2 = 100.77227210000001;
        this.lat2 = 13.7217572;
        this.lat1 = 13.7201804;
        this.retrieveData();
    }
    EstimatePage.prototype.retrieveData = function () {
        var _this = this;
        this.nativeStorage.getItem('data_service').then(function (data) {
            _this.data_service = {
                id: data.id,
                well: data.well,
                road: data.road,
                shape: data.shape,
                width: data.width,
                size: data.size
            };
            _this.id = _this.data_service.id;
            _this.well = _this.data_service.well;
            _this.road = _this.data_service.road;
            _this.shape = _this.data_service.shape;
            _this.width = _this.data_service.width;
            _this.size = _this.data_service.size;
            _this.dataReady = true;
            console.log(_this.size);
            /*console.log(this.id);
            console.log(this.well);
            console.log(this.road);
            console.log(this.shape);
            console.log(this.width);*/
            _this.getInfo(_this.id);
        }, function (error) {
            console.log(error);
        });
    };
    EstimatePage.prototype.getInfo = function (id) {
        /*this.presentLoading();
        this.restProvider.getTotal()
        .then(data =>{
          this.result = data;
          console.log(this.result);
          this.loading.dismiss();
        })*/
        console.log(id);
    };
    EstimatePage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    EstimatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estimate',template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/pages/estimate/estimate.html"*/'<!--\n  Generated template for the EstimatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="primary"></ion-icon>\n    </button>\n    <ion-title text-left><h5 style="font-size:15px;">ประเมินราคาอสังหาริมทรัพย์</h5></ion-title>\n  </ion-navbar>\n</ion-header>\n  <ion-content padding *ngIf=\'dataReady\'>\n      <!--<p> {{ std.lattitude }} {{ std.longitude }} </p>\n      <p>{{ std.name }} </p>\n      <p>{{ std.appraisal }}</p>-->\n      <ion-col col-12 map-content transparent >\n          <ion-item-group >\n              \n              <ion-item border>\n                  <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                  <h5 no-paddnig style="color:lightgray">ราคาประเมินกรมที่ดิน</h5>\n                  <span>{{ result }} บาท/ตาราวา</span>\n              </ion-item>\n              <!--<ion-item border>\n                <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                <h5 no-paddnig style="color:lightgray">ระยะห่างจากที่ดินถึงถนนหลัก</h5>\n                <span>{{ km }} กิโลเมตร</span>\n            </ion-item>\n              <ion-item border>\n                  <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                  <h5 no-paddnig style="color:lightgray">ขนาดที่ดิน</h5>\n                  <span>99 ตารางวา</span>\n              </ion-item>\n              <ion-item border>\n                  <ion-icon icon-medium name="md-checkmark-circle-outline" style="color:aquamarine" item-start></ion-icon>\n                  <h5 no-paddnig style="color:lightgray">ราคาประเมินราคาขาย(ตลาด)</h5>\n                  <span>8,900,000 บาท</span>\n              </ion-item>-->\n              <button ion-button float-right margin-top round outline color="light" style="color:aquamarine;width:120px;height:50px;font-size:24px;">ลงขาย</button>\n          </ion-item-group>\n      </ion-col>\n  </ion-content>\n  '/*ion-inline-end:"/Users/superball/project-app/AppNow/src/pages/estimate/estimate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
    ], EstimatePage);
    return EstimatePage;
}());

//# sourceMappingURL=estimate.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_estimate_estimate__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(53);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/superball/project-app/AppNow/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <div header-background-image padding style="background-image: url(\n          assets/imgs/bg.png);">\n          <img src="assets/imgs/logo-reales-bg.png"/>\n          <h2 ion-text color="light" header-title>Smart Property Assess</h2>\n          <p>Welcome to our Application for Real Estate Appraisal</p>\n      </div>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n          <ion-item>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                <ion-icon icon-small item-left name="{{p.icon}}" style="color:aquamarine"></ion-icon>\n              {{p.title}}\n            </button>\n          </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/superball/project-app/AppNow/src/app/app.html"*/
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

/***/ 854:
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

/***/ 855:
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

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonDigitKeyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(269);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]
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

},[449]);
//# sourceMappingURL=main.js.map