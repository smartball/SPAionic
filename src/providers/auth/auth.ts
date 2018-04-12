
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import * as firebase from 'firebase';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let url = 'http://localhost/pHP-Slim-Restful-master/api/';
let apiUrl = 'https://smartball.000webhostapp.com/PHP_DataUpload/api/';
@Injectable()
export class AuthProvider {
  public data:any;
  public fireAuth: any;
  public userProfile: any;
  constructor(public afAuth: AngularFireAuth,
              public http : Http) {
    this.userProfile = firebase.database().ref('users');
  }
  signupUserService(account: {}){
    return this.afAuth.auth.createUserWithEmailAndPassword(account['email'],account['password']).then((newUser)=>{
      this.afAuth.auth.signInWithEmailAndPassword(account['email'],account['password']).then((authenticatedUser)=>{
        this.userProfile.child(authenticatedUser.uid).set(
          account
        );
      });
    });
  }
  forgotPasswordUser(email:any){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
}
