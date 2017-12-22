
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import * as firebase from 'firebase';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public data:any;
  public fireAuth: any;
  public userProfile: any;
  constructor(public afAuth: AngularFireAuth) {
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
}
