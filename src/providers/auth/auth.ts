
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
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
  constructor(
              public afAuth: AngularFireAuth) {
    
  }

  loginUserService(email:string,password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  forgotPasswordUser(email:any){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
}
