import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {}

  loginUser(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string){
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
      .then( newUser => {
          firebase
            .database()
            .ref('/userProfile')
            .child(newUser.uid)
                .set({ email: email });
    });
  }
  resetPassword(email: string){
    return firebase.auth().sendPasswordResetEmail(email);
  }
  logoutUser(){
    return firebase.auth().signOut();
  }
}
